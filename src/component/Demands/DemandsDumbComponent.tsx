import React from "react";
import {
  IRestaurant,
  IDemands,
  FoodDemands,
  UserDemands
} from "../../model/entites";
import restaurantList from "../../MockupData/restaurants.json";
import "../../styles/demands.scss";
import { DemandsComponentState } from "./DemandsSmartComponent";

export const DemandsView = (props: DemandsComponentState) => {
  let displayOrders = (crtItemOrder: IDemands) => {
    return (
      <div className="ordersGrid ">
        <div className="box ">
          <div className="columns">
            <div className="column cancel is-narrow">
              <div className="cancelButton">
                <a className="button is-rounded">
                  <span
                    className="icon"
                    onClick={() => {
                      props.onDeleteOrderItemEventHandler(
                        crtItemOrder,
                        props.crtActiveUser
                      );
                      props.decreaseNumberOfOrderitemsForRestaurant(
                        crtItemOrder.restaurant
                      );
                    }}
                  >
                    <i className="fa fa-times"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="column">
              <div className="order">{crtItemOrder.food.food_name}</div>
            </div>
          </div>
        </div>
        <div className="box userData">
          <div className="columns">
            <div className="column is-narrow username">
              <p className="subtitle is-5">
                {crtItemOrder.user.username + " "}
              </p>
            </div>
            <div className="column is-narrow price">
              <p className="subtitle is-5">
                {crtItemOrder.food.food_price + "$"}
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
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
    for (i = 0; i < props.orders.length; i++) {
      if (props.orders[i].restaurant.name == rest.restaurant_name) {
        crtRestaurantID = props.orders[i].restaurant.id;
        arrayOrders = [];
        for (j = 0; j < props.orders.length; j++) {
          if (props.orders[j].restaurant.id == crtRestaurantID) {
            crtOrder = props.orders[j].food;
            crtUser = props.orders[j].user;
            arrayOrders.push(displayOrders(props.orders[j]));
          }
        }
      }
    }
    return arrayOrders;
  };
  let getTotalSum = (rest: IRestaurant) => {
    let totalSum=0;

  }

  let ordersView = [...restaurantList].map((restaurant, key) => {
    let sum:number=0;
    for (let i = 0; i < props.orders.length; i++) {
      if (props.orders[i].restaurant.name === restaurant.restaurant_name) {
        sum+=props.orders[i].food.food_price;
        console.log(sum);
        return (
          <div>
            <div className="orderDisplayItem ">
              <section className=" box status checks" id="sts">
                <div className="statusOrder ">{"Order "}
                <span
                  className="icon"
                  onClick={() => {
                    props.onSendOrderEvent(props,restaurant.id)
                  }} 
                  >
                  <i className="fa fa-check fa-lg  "></i>
                  </span>
                  </div>
              </section>
              <div className="content ">
                <div className="box demands">
                  {restaurant.restaurant_name + "  "}
                
                </div>
                <div className="columns">
                  <div className="order-info-quantity">
                    {props.contorForRestaurants.find(order=>order.restaurant_name===restaurant.restaurant_name)?.orders_count + "  " }
                    <i className="fa fa-clone"></i>
                  </div>

                  <div className="order-info-price">
                    {props.contorForRestaurants.find(order=>order.restaurant_name===restaurant.restaurant_name)?.toPay + "  "}
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
      <div className="hero is-dark custom-scroll-bar is-fullheight is-fullwidth is-bold">
        <div id="content">
          <div className="restaurants_list has-text-centered is-centered ">
            {ordersView}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
