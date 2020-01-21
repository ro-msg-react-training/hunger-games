import Restaurants from '../../MockupData/restaurants.json';
import React, { ReactNode } from 'react';
import { RestaurantDishesDumpView } from './RestaurantDishesDumpView';
import { GlobalState } from '../../ReduxStore/index.js';
import { Dispatch } from 'redux';
import { compose, setDisplayName } from 'recompose';
import { connect } from 'react-redux';
import { IRestaurant, IUser, IFood } from '../../model/entites.js';
import { loadFoodsList } from '../../ReduxStore/RestaurantDishesSection/actions';
import { SingleDish } from './SingleDish';
import { ChangeNumberOfOrdersEventHandler } from '../../ReduxStore/RestaurantListSection/actions';

export interface RestaurantDishesState {
    match: any;
    loggedInUser: IUser;
    currentRestaurant: IRestaurant;
    loadCurrentRestaurantFoods: (props: RestaurantDishesState) => void;
    generateDishesList: (props: RestaurantDishesState, dishesForCurrentRestaurant: IFood[]) => ReactNode;
    addFoodToDemandsOnClick: (props: SingleDishState, selectedFood: IFood) => void;
    incrementOrdersForRestaurant:(restaurant:IRestaurant)=>void;
}

export interface SingleDishState {
    currentFood: IFood;
    addFoodToDemandsOnClick: (props: SingleDishState, selectedFood: IFood) => void;
    isOutsideOfWorkingHours: boolean;
    incrementOrdersForRestaurant:(restaurant:IRestaurant)=>void;
    currentRestaurant: IRestaurant;
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
    isOutsideOfWorkingHours: state.restDishesReducer.isOutsideOfWorkingHours
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
                addFoodToDemandsOnClick: {} as any,
                isOutsideOfWorkingHours: isCurrentTimeInWorkingHours(props.currentRestaurant.opening_hour, props.currentRestaurant.closing_hour),
                incrementOrdersForRestaurant: props.incrementOrdersForRestaurant.bind({} as any),
                currentRestaurant : props.currentRestaurant
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

    addFoodToDemandsOnClick: (props: SingleDishState, selectedFood: IFood) => {
        //
    },

    incrementOrdersForRestaurant:(restaurant:IRestaurant)=>{
        dispatch(ChangeNumberOfOrdersEventHandler(restaurant));
    }
});

const RestaurantDishesViewInitializer = compose<RestaurantDishesState, {}>(
    setDisplayName("Restaurant Dishes smart component"),
    connect(mapStateToProps, mapDispatchToProps)
)(RestaurantDishesSmartView);

export default RestaurantDishesViewInitializer;