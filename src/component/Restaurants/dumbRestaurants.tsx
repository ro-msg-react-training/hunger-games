import React from "react";
import { Link } from "react-router-dom";
import { IRestaurant } from "../../model/entites";
import restaurantList from "../../MockupData/restaurants.json";
import "../../styles/restaurants.scss";
import food2 from "../../resources/food2.jpg";
import food3 from "../../resources/food3.jpg";
import food4 from "../../resources/food4.jpg";
import "font-awesome/css/font-awesome.min.css";

export interface IDumbRestaurant {
  restaurantsList: IRestaurant[];
}
export const RestaurantsListView = (props: IDumbRestaurant) => {
  let getRandomImage = () => {
    let randomNumber = Math.floor(Math.random() * (3-1) + 1);
    let image;
    switch (randomNumber) {
      case 1: {
        image = food2;
        break;
      }
      case 2: {
        image = food3;
        break;
      }
      case 3: {
        image = food4;
        break;
      }
      default: {
        image = food2;
        break;
      }
    }
    return image;
  };
  let restaurantsImageAndOrderNumber = (free: boolean) => {
    let restaurant;
    if (free === false) {
      restaurant = (
        <div>
          <div className="tag is-warning  has-text-weight-bold" id="tagOrders">
            1
          </div>
          <img id="restarantImg" src={getRandomImage()} alt="Restaurant" />
        </div>
      );
    } else {
      restaurant = (
        <div>
          <div className="tag is-white has-text-weight-bold  " id="tagOrders">
            1
          </div>
          <img id="restarantImg" src={getRandomImage()} alt="Restaurant" />
        </div>
      );
    }
    return restaurant;
  };
  let restaurantWithOrWithoutOrders=(restaurant:IRestaurant,nrOfOrders:number)=>{
    let restaurantStyle;
    if(nrOfOrders!=0){
        restaurantStyle=(
          <div className="content-with-orders">
          <div className="restaurant">
            <figure>{restaurantsImageAndOrderNumber(false)}</figure>
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
    }else{
      restaurantStyle=(
        <div className="content-without-orders ">
        <div className="restaurant">
          <figure>{restaurantsImageAndOrderNumber(true)}</figure>
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
    <Link to={`/districts/${restaurant.id}`}>
        {restaurantWithOrWithoutOrders(restaurant,0)}
    </Link>
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
