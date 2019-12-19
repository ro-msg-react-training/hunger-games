import React from "react";

import {
  IRestaurant,
  IFood,
  IOrders,
  IUserOrders,
  IDemands,
  FoodDemands,
  UserDemands
} from "../../model/entites";
import restaurantList from "../../MockupData/restaurants.json";
import "../../styles/demands.scss";
import orders from "../../MockupData/demands.json";

export interface IDumbDemands {
  restaurantsList: IRestaurant[];
  orders: IDemands[];
}
export const DemandsView = (props: IDumbDemands) => {
  let displayOrders = (food: FoodDemands, user: UserDemands) => {
    console.log(food.food_name);
    return (
      <div className="ordersGrid ">
        <div className="box ">
          <div className="columns">
            <div className="column cancel is-narrow">
              <div className="cancelButton">
                <a className="button is-rounded">
                  <span className="icon">
                    <i className="fa fa-times"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="column">
              <div className="order">{food.food_name}</div>
            </div>
          </div>
        </div>
        <div className="box userData">
          <div className="columns">
            <div className="column is-narrow username">
              <p className="subtitle is-5">{user.username + " "}</p>
            </div>
            <div className="column is-narrow price">
              <p className="subtitle is-5">{food.food_price + "$"}</p>
            </div>
          </div>
        </div>
        <br/>
        <br/>
      </div>
    );
  };
  let ordersForEachRestaurant = (rest: IRestaurant) => {
    let i,
      j: number = 0;
    let crtOrder: FoodDemands;
    let crtUser: UserDemands;
    let crtRestaurantID: number;
    let arrayOrders: JSX.Element[] = [];
    for (i = 0; i < orders.length; i++) {
      if (orders[i].restaurant[0].restaurant_name == rest.restaurant_name) {
        crtRestaurantID = orders[i].restaurant[0].restaurant_id;
        arrayOrders = [];
        for (j = 0; j < orders.length; j++) {
          if (orders[j].restaurant[0].restaurant_id == crtRestaurantID) {
            crtOrder = orders[j].food;
            crtUser = orders[j].user;
            arrayOrders.push(displayOrders(crtOrder, crtUser));
          }
        }
      }
    }
    return arrayOrders;
  };

  let ordersView = [...restaurantList].map((restaurant, key) => {
    for (let i = 0; i < orders.length; i++) {
      if (
        orders[i].restaurant[0].restaurant_name === restaurant.restaurant_name
      ) {
        return (
          <div>
            <div className="orderDisplayItem ">
              <section className="box status" id="sts">
                <div className="statusOrder">{"not placed"}</div>
              </section>
              <div className="content">
                <div className="box demands">
                  {restaurant.restaurant_name + "  "}
                  <i className="fa fa-check check fa-lg  "></i>
                </div>
                <div className="columns">
                  <div className="order-info-quantity">
                    {200 + "  "}
                    <i className="fa fa-clone"></i>
                  </div>

                  <div className="order-info-price">
                    {230 + "  "}
                    <i className="fa fa-dollar"></i>
                  </div>
                </div>
                {ordersForEachRestaurant(restaurant)}
                <br></br>
              </div>
            </div>
          </div>
        );
      }
    }
  });

  return (
    <React.Fragment>
      <section className="hero is-dark is-fullheight is-fullwidth is-bold">
        <div id="content">
          <div className="restaurants_list has-text-centered is-centered ">
            {ordersView}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
