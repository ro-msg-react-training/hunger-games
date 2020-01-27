import React from "react";
import { RestaurantDishesState } from "./RestaurantDishesSmartView";
import "../../styles/resDishesList.scss";

export const RestaurantDishesDumpView: React.FC<RestaurantDishesState> = (
  props: RestaurantDishesState
) => {
  return (
    <div className="hero is-dark custom-scroll-bar is-bold is-family-sans-serif">
      <div className="hero-head">
        <div className="container is-fluid has-text-centered has-text-weight-semibold is-size-4 restaurantHeader">
          {props.currentRestaurant.restaurant_name}
        </div>
        <div className="container">
          <div className="subtitle">
            {props.generateDishesList(props, props.currentRestaurant.food_list)}
          </div>
        </div>
      </div>
      <div className="hero-body"></div>
      <div className="hero-foot"></div>
    </div>
  );
};
