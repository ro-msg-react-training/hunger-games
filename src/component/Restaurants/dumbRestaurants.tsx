import React from "react";
import { Link } from "react-router-dom";
import { IRestaurant } from "../../model/entites";
import restaurantList from "../../MockupData/restaurants.json";
import "../../styles/restaurants.scss";
import { getRandomImage } from "../../Helpers/loadRandomImages";

export interface IDumbRestaurant {
  restaurantsList: IRestaurant[];
}
export const RestaurantsListView = (props: IDumbRestaurant) => {
  let restaurantsImageAndOrderNumber = (free: boolean, restId: IRestaurant) => {
    let restaurant;
    if (free === false) {
      restaurant = (
        <Link to={`/districts/${restId.id}`}>
          <div>
            <div className="tag is-warning  has-text-weight-bold" id="tagOrders">
              1
          </div>
            <img id="restarantImg" src={getRandomImage("restaurants")} alt="Restaurant" />
          </div>
        </Link>
      );
    } else {
      restaurant = (
        <Link to={`/districts/${restId.id}`}>
          <div>
            <div className="tag is-white has-text-weight-bold  " id="tagOrders">
              1
          </div>
            <img id="restarantImg" src={getRandomImage("restaurants")} alt="Restaurant" />
          </div>
        </Link>
      );
    }
    return restaurant;
  };
  let restaurantWithOrWithoutOrders = (restaurant: IRestaurant, nrOfOrders: number) => {
    let restaurantStyle;
    if (nrOfOrders !== 0) {
      restaurantStyle = (
        <div className="content-with-orders">
          <div className="restaurant">
            <figure>{restaurantsImageAndOrderNumber(false, restaurant)}</figure>
            <div className="details-restaurant">
              <div className="columns ">
                <div className="column">
                  <div className="general-info">
                    <div className="subtitle is-5" id="restaurant-name">
                      {restaurant.restaurant_name}{" "}
                    </div>
                    <div className="subtitle is-7" id="adress">
                      {"Adress: " + restaurant.adress}
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="time-info">
                    <i className="fa fa-clock-o" id="clock"></i>
                    <p id="time" className="subtitle is-7">
                      {restaurant.opening_hour + " - " + restaurant.closing_hour}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      restaurantStyle = (
        <div className="content-without-orders ">
          <div className="restaurant">
            <figure>{restaurantsImageAndOrderNumber(true, restaurant)}</figure>
            <div className="details-restaurant">
              <div className="columns ">
                <div className="column">
                  <div className="general-info">
                    <div className="subtitle is-5" id="restaurant-name">
                      {restaurant.restaurant_name}{" "}
                    </div>
                    <div className="subtitle is-7" id="adress">
                      {"Adress: " + restaurant.adress}
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="time-info">
                    <i className="fa fa-clock-o" id="clock"></i>
                    <p id="time" className="subtitle is-7">
                      {restaurant.opening_hour + " - " + restaurant.closing_hour}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return restaurantStyle;

  }
  let products = [...restaurantList].map((restaurant, key) => (
    <div>
      {restaurantWithOrWithoutOrders(restaurant, 0)}
    </div>
  ));
  return (
    <React.Fragment>
      <section className="hero is-dark is-fullheight is-fullwidth is-bold">
        <div id="content" >
          <div className="restaurants_list">{products}</div>
        </div>
      </section>
    </React.Fragment>
  );
};
