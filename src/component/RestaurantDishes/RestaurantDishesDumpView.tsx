import React from "react";
import { RestaurantDishesState } from "./RestaurantDishesSmartView";
import Restaurants from '../../MockupData/restaurants.json';
import { IRestaurant, IFood } from "../../model/entites";
import '../../styles/resDishesList.scss';
import { SingleDish } from "./SingleDish";

export const RestaurantDishesDumpView: React.FC<RestaurantDishesState> = (props: RestaurantDishesState) => {
    let getCurrentRestaurant = (resArray: IRestaurant[]): IRestaurant => {
        for (let i: number = 0; i < resArray.length; i++) {
            if (resArray[i].id.toString() === props.match.params.id) {
                return resArray[i];
            }
        }
        return {} as any;
    };

    const generateDishesList = (dishesForCurrentRestaurant: IFood[]) => {
        if (dishesForCurrentRestaurant.length === 0) {
            return (
                <div>Nothing to show...</div>
            );
        } else {
            let foodCards : JSX.Element[] = [];
            foodCards = dishesForCurrentRestaurant.map(
                (food: IFood) =>
                <div className = "foodContainer">
                    <SingleDish {...food}/>
                </div>
            );
            
            return (
                foodCards
            );
        }
    }

let restaurantsArray: IRestaurant[] = Object(Restaurants);
let correspondingRestaurant: IRestaurant = getCurrentRestaurant(restaurantsArray);

return (
    <div className="hero is-dark custom-scroll-bar is-bold is-family-sans-serif">
        <div className="hero-head">
            <div className="container is-fluid has-text-centered has-text-weight-semibold is-size-4 restaurantHeader">
                {correspondingRestaurant.restaurant_name}
            </div>
            <div className="container">
                <div className="subtitle">
                    {generateDishesList(correspondingRestaurant.food_list)}
                </div>
            </div>
        </div>
        <div className="hero-body"></div>
        <div className="hero-foot"></div>
    </div>
);
}