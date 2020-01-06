import React from "react";
import { RestaurantDishesState } from "./RestaurantDishesSmartView";
import '../../styles/resDishesList.scss';

export const RestaurantDishesDumpView: React.FC<RestaurantDishesState> = (props: RestaurantDishesState) => {
return (
    <section className="hero is-dark is-bold is-fullheight is-family-sans-serif">
        <div className="hero-head">
            <div className="container is-fluid has-text-centered has-text-weight-semibold is-size-4 restaurantHeader">
                {props.currentRestaurant.restaurant_name}
            </div>
        </div>
        <div className="hero-body">
            <div className="container">
                <div className="subtitle">
                    {props.generateDishesList(props, props.currentRestaurant.food_list)}
                </div>
            </div>
        </div>
    </section>
);
}