import React from "react";
import { IRestaurant, IDemands } from "../../model/entites";
import restaurantList from "../../MockupData/restaurants.json";
import "../../styles/demands.scss";
import { DemandsComponentState } from "./DemandsSmartComponent";

export const DemandsView = (props: DemandsComponentState) => {
  let displayOrders = (crtItemOrder: IDemands) => {
    return (
      <div
        className="ordersGrid "
        key={
          crtItemOrder.user.user_id +
          " " +
          crtItemOrder.restaurant.id +
          " " +
          crtItemOrder.food.food_id
        }
      >
        <div className="box ">
          <div className="columns">
            <div className="column cancel is-narrow">
              <div className="cancelButton">
                <div className="button is-rounded">
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
                </div>
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
    let crtRestaurantID: number;
    let arrayOrders: JSX.Element[] = [];

    for (i = 0; i < props.orders.length; i++) {
      if (props.orders[i].restaurant.name === rest.restaurant_name) {
        crtRestaurantID = props.orders[i].restaurant.id;
        arrayOrders = [];
        for (j = 0; j < props.orders.length; j++) {
          if (props.orders[j].restaurant.id === crtRestaurantID) {
            arrayOrders.push(displayOrders(props.orders[j]));
          }
        }
      }
    }
    return arrayOrders;
  };

  let ordersView = [...restaurantList].map((restaurant, key) => {
    for (let i = 0; i < props.orders.length; i++) {
      if (props.orders[i].restaurant.name === restaurant.restaurant_name) {
        return (
          <div key={key}>
            <div className="orderDisplayItem ">
              <section className=" box status checks" id="sts">
                <div
                  className="statusOrder "
                  onClick={() => {
                    props.onSendOrderEvent(props, restaurant.id);
                  }}
                >
                  {"Order "}

                  <span className="icon">
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
                    {props.contorForRestaurants.find(
                      order =>
                        order.restaurant_name === restaurant.restaurant_name
                    )?.orders_count + "  "}
                    <i className="fa fa-clone"></i>
                  </div>

                  <div className="order-info-price">
                    {props.contorForRestaurants.find(
                      order =>
                        order.restaurant_name === restaurant.restaurant_name
                    )?.toPay + "  "}
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

    return true;
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
