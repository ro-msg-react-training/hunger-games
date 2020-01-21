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
    match : any;
    loggedInUser : IUser;
    currentRestaurant : IRestaurant;
    loadCurrentRestaurantFoods: (props : RestaurantDishesState) => void;
    generateDishesList : (props : RestaurantDishesState,dishesForCurrentRestaurant: IFood[]) => ReactNode;
    addFoodToDemandsOnClick: (props : SingleDishState, selectedFood : IFood) => void;
    incrementOrdersForRestaurant:(restaurant:IRestaurant)=>void;
}

export interface SingleDishState {
    currentFood : IFood;
    currentRestaurant:IRestaurant;
    addFoodToDemandsOnClick: (props : SingleDishState, selectedFood : IFood) => void;
    incrementOrdersForRestaurant:(restaurant:IRestaurant)=>void;
}

class RestaurantDishesSmartView extends React.Component<RestaurantDishesState> {
    componentDidMount() {
        this.props.loadCurrentRestaurantFoods(this.props);
    }

    render() {
        return (
            <RestaurantDishesDumpView {...this.props}/>
        );
    }
}

const getCurrentRestaurant = (props : RestaurantDishesState, resArray: IRestaurant[]): IRestaurant => {
    for (let i: number = 0; i < resArray.length; i++) {
        if (resArray[i].id.toString() === props.match.params.id) {
            return resArray[i];
        }
    }
    return {} as any;
};

const mapStateToProps = (state : GlobalState) => ({
    loggedInUser : state.restDishesReducer.currentUser,
    currentRestaurant : state.restDishesReducer.currentRestaurant,
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
    loadCurrentRestaurantFoods : (props : RestaurantDishesState) => {
        let restaurantsArray: IRestaurant[] = Object(Restaurants);     
        let correspondingRestaurant: IRestaurant = getCurrentRestaurant(props, restaurantsArray);

        dispatch(loadFoodsList(correspondingRestaurant, props.loggedInUser));
    },

    generateDishesList : (props : RestaurantDishesState,dishesForCurrentRestaurant: IFood[]) : ReactNode => {
        if (dishesForCurrentRestaurant.length === 0) {
            return (
                <div>Nothing to show...</div>
            );
        } else {
            let foodCards : JSX.Element[] = [];
            let singleDishProps : SingleDishState = {
                currentRestaurant:props.currentRestaurant,
                currentFood : {} as any,
                addFoodToDemandsOnClick : {} as any,
                incrementOrdersForRestaurant:props.incrementOrdersForRestaurant.bind({} as any) ,
            }

            dishesForCurrentRestaurant.map(
                (food: IFood) =>
                    {
                        const {addFoodToDemandsOnClick} = props;
                        singleDishProps.currentFood = food;
                        singleDishProps.addFoodToDemandsOnClick = addFoodToDemandsOnClick;

                        foodCards.push(<SingleDish {...singleDishProps} key={"Restaurant " + food.id_restaurant + ", food "  + food.id_food}/>);
                        return true;
                    }
            );
            
            return (
                foodCards
            );
        }
    },

    addFoodToDemandsOnClick : (props : SingleDishState, selectedFood : IFood) => {
        console.log("Food " + selectedFood.id_food + " added to demands!");
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