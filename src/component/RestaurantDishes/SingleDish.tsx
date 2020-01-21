import React from "react";
import '../../styles/singleDish.scss';
import { getRandomImage } from "../../Helpers/loadRandomImages";
import { SingleDishState } from "./RestaurantDishesSmartView";

export const SingleDish: React.FC<SingleDishState> = (props: SingleDishState) => {
    return (
        <div className="foodContainer">
            <div className="media has-text-centered">
                <div className="media-left">
                    <div className="image">
                        <img className="dishImage" src={getRandomImage("foods")} alt={"imageForFood" + props.currentFood.id_food} />
                    </div>
                </div>
                <div className="media-content hideScrollBar">
                    <div className="content">
                        <div className="has-text-weight-medium has-text-white-ter is-size-5">{props.currentFood.food_name}</div>
                        <br />
                        <div className="has-text-weight-light is-size-5 has-text-grey-light">
                            <p className="is-italic is-size-6">Ingredients</p>
                            {props.currentFood.ingredients}
                        </div>
                    </div>
                </div>
                <div className="media-right customHasCenteredContent">
                    <div className="priceColorClass has-text-weight-medium">
                        {props.currentFood.price} lei
                    </div>
                    <div className={!props.isOutsideOfWorkingHours ? "is-hidden" : "button is-rounded addDishButtonActive"} onClick = {() => {
                        props.incrementOrdersForRestaurant(props.currentRestaurant); 
                        props.addFoodToDemandsOnClick(props, props.currentFood)}
                    }>
                        <span className="icon">
                            <i className="fa fa-plus" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}