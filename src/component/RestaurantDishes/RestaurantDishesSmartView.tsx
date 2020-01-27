import Restaurants from '../../MockupData/restaurants.json';
import React, { ReactNode } from 'react';
import { RestaurantDishesDumpView } from './RestaurantDishesDumpView';
import { GlobalState } from '../../ReduxStore/index.js';
import { Dispatch } from 'redux';
import { compose, setDisplayName } from 'recompose';
import { connect } from 'react-redux';
import { IRestaurant, IUser, IFood, IDemands } from '../../model/entites.js';
import { loadFoodsList } from '../../ReduxStore/RestaurantDishesSection/actions';
import { SingleDish } from './SingleDish';
import { increadseNumberOfOrdersEventHandler } from '../../ReduxStore/RestaurantListSection/actions';
import { newOrderItemEvent } from '../../ReduxStore/DemandsSection/action';
import { showNotification } from '../../ReduxStore/NotificationSection/actions';

export interface RestaurantDishesState {
    match: any;
    loggedInUser: IUser;
    crtActiveUser:IUser;
    currentRestaurant: IRestaurant;
    demands:IDemands[];
    loadCurrentRestaurantFoods: (props: RestaurantDishesState) => void;
    generateDishesList: (props: RestaurantDishesState, dishesForCurrentRestaurant: IFood[]) => ReactNode;
    addFoodToDemandsOnClick: (props: SingleDishState, selectedFood: IFood) => void;
    incrementOrdersForRestaurant:(restaurant:IRestaurant)=>void;
}

export interface SingleDishState {
    currentFood: IFood;
    crtActiveUser:IUser;
    currentUser:IUser;
    addFoodToDemandsOnClick: (props: SingleDishState, selectedFood: IFood) => void;
    isOutsideOfWorkingHours: boolean;
    incrementOrdersForRestaurant:(restaurant:IRestaurant, selectedFood:IFood)=>void;
    currentRestaurant: IRestaurant;
    demand:IDemands[];
}

class RestaurantDishesSmartView extends React.Component<RestaurantDishesState> {
    componentDidMount() {
        this.props.loadCurrentRestaurantFoods(this.props);
    }

    render() {
        return (
            <RestaurantDishesDumpView {...this.props} />
        );
    }
}

const getCurrentRestaurant = (props: RestaurantDishesState, resArray: IRestaurant[]): IRestaurant => {
    for (let i: number = 0; i < resArray.length; i++) {
        if (resArray[i].id.toString() === props.match.params.id) {
            return resArray[i];
        }
    }
    return {} as any;
};

const getOpeningHour = (openingHours: string): Date => {
    let openingHourString: string[] = [];
    let openingHoursStringSplit: string[] = [];
    let openingHourTime: Date = new Date();

    // Separating the hour and minutes from the part of day. After that, getting the values for hour and minutes.
    openingHours.split(" ").map((time: string) => openingHourString.push(time));
    openingHourString[0].split(":").map((time: string) => openingHoursStringSplit.push(time));

    // Setting the corresponding hour and minute for the Date object. Checking for PM status
    if (openingHourString[1] === "PM") {
        // if the hour is past 12
        if (+openingHoursStringSplit[0] !== 12) {
            // then add 12 the to value
            openingHourTime.setHours(+openingHoursStringSplit[0] + 12);
        } else {
            openingHourTime.setHours(+openingHoursStringSplit[0]);
        }
    } else {
        openingHourTime.setHours(+openingHoursStringSplit[0]);
    }

    openingHourTime.setMinutes(+openingHoursStringSplit[1]);

    return openingHourTime;
};

const getClosingHour = (closingHours: string): Date => {
    let closingHourString: string[] = [];
    let closinggHoursStringSplit: string[] = [];
    let closingHourTime: Date = new Date();

    // Separating the hour and minutes from the part of day. After that, getting the values for hour and minutes.
    closingHours.split(" ").map((time: string) => closingHourString.push(time));
    closingHourString[0].split(":").map((time: string) => closinggHoursStringSplit.push(time));

    // Setting the corresponding hour and minute for the Date object. Checking for PM status
    if (closingHourString[1] === "PM") {
        // if the hour is past 12
        if (+closinggHoursStringSplit[0] !== 12) {
            // then add 12 the to value
            closingHourTime.setHours(+closinggHoursStringSplit[0] + 12);
        } else {
            closingHourTime.setHours(+closinggHoursStringSplit[0]);
        }
    } else {
        closingHourTime.setHours(+closinggHoursStringSplit[0]);
    }

    closingHourTime.setMinutes(+closinggHoursStringSplit[1]);

    return closingHourTime;
};

const isCurrentTimeInWorkingHours = (openingHours : string, closingHours : string) : boolean => {
    let response : boolean = false;
    const currentTime : Date = new Date();
    const openingTime : Date = getOpeningHour(openingHours);
    const closingTime : Date = getClosingHour(closingHours);

    if(currentTime >= openingTime && currentTime <= closingTime) {
        response = true;
    }

    return response;
};

const mapStateToProps = (state: GlobalState) => ({
    loggedInUser: state.restDishesReducer.currentUser,
    currentRestaurant: state.restDishesReducer.currentRestaurant,
    isOutsideOfWorkingHours: state.restDishesReducer.isOutsideOfWorkingHours,
    demands:state.demandsReducer.listOfOrders,
    crtActiveUser:state.loginReducerGlobal.userData
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    loadCurrentRestaurantFoods: (props: RestaurantDishesState) => {
        let restaurantsArray: IRestaurant[] = Object(Restaurants);
        let correspondingRestaurant: IRestaurant = getCurrentRestaurant(props, restaurantsArray);

        dispatch(loadFoodsList(correspondingRestaurant, props.loggedInUser, false));
    },

    generateDishesList: (props: RestaurantDishesState, dishesForCurrentRestaurant: IFood[]): ReactNode => {
        // If there are no dishes for this restaurant, display message
        if (dishesForCurrentRestaurant.length === 0) {
            return (
                <div>Nothing to show...</div>
            );
        } else {    // else display each dish
            let foodCards: JSX.Element[] = [];
            let singleDishProps: SingleDishState = {
                currentFood: {} as any,
                crtActiveUser:props.crtActiveUser,
                currentUser:props.loggedInUser,
                addFoodToDemandsOnClick: {} as any,
                isOutsideOfWorkingHours: isCurrentTimeInWorkingHours(props.currentRestaurant.opening_hour, props.currentRestaurant.closing_hour),
                incrementOrdersForRestaurant: props.incrementOrdersForRestaurant.bind({} as any),
                currentRestaurant : props.currentRestaurant,
                demand:props.demands,
            }

            dishesForCurrentRestaurant.map(
                (food: IFood) => {
                    const { addFoodToDemandsOnClick } = props;
                    singleDishProps.currentFood = food;
                    singleDishProps.addFoodToDemandsOnClick = addFoodToDemandsOnClick;

                    foodCards.push(<SingleDish {...singleDishProps} key={"Restaurant " + food.id_restaurant + ", food " + food.id_food} />);
                    return true;
                }
            );

            return (
                foodCards
            );
        }
    },

    addFoodToDemandsOnClick: (props: SingleDishState) => {
        dispatch(newOrderItemEvent(props.currentRestaurant,props.currentFood,props.crtActiveUser));
        dispatch(showNotification("Food successfully added to order", "success"));
    },

    incrementOrdersForRestaurant:(restaurant:IRestaurant,selectedFood:IFood)=>{
        dispatch(increadseNumberOfOrdersEventHandler(restaurant,selectedFood));
    }
});

const RestaurantDishesViewInitializer = compose<RestaurantDishesState, {}>(
    setDisplayName("Restaurant Dishes smart component"),
    connect(mapStateToProps, mapDispatchToProps)
)(RestaurantDishesSmartView);

export default RestaurantDishesViewInitializer;