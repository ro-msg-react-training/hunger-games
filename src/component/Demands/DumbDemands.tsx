import React from "react";
import { IRestaurant, IFood } from "../../model/entites";
import restaurantList from "../../MockupData/restaurants.json";
import "../../styles/demands.scss";

export interface IDumbDemands {
  restaurantsList: IRestaurant[];
  orders: IFood[];
}
export const DemandsView = (props: IDumbDemands) => {
  let ordersForEachRestaurant = (rest: IRestaurant) => (
    <div className="ordersGrid ">
      <div>
        <div className="box">
            <div className="cancelButton">
            <a className="button is-rounded">
            <span className="icon">
              <i className="fa fa-times" ></i>
            </span>
          </a>
            </div>
          
          {rest.id}
        </div>
        <div></div>
      </div>
    </div>
  );

  let ordersView = [...restaurantList].map((restaurant, key) => (
    <div className="orderDisplayItem">
      <div>
        <div className="box">
          <p>{restaurant.restaurant_name}</p>
        </div>
        {ordersForEachRestaurant(restaurant)}
      </div>
    </div>
  ));
  return (
    <React.Fragment>
      <section className="hero is-dark is-fullheight is-fullwidth is-bold">
        <div id="content">
          <div className="restaurants_list">{ordersView}</div>
        </div>
      </section>
    </React.Fragment>
  );
};
