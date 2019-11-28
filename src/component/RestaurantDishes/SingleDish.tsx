import React from "react";
import { IFood } from "../../model/entitys";
import '../../styles/singleDish.scss';
import { getRandomImage } from "../../Helpers/loadRandomImages";

export const SingleDish: React.FC<IFood> = (props: IFood) => {
    return (
        <div className="media has-text-centered">
            <div className="media-left">
                <div className="image">
                    <img className = "dishImage" src={getRandomImage("foods")} />
                </div>
            </div>
            <div className="media-content hideScrollBar">
                <div className="content">
                    <p>
                        <div className="has-text-weight-medium has-text-white-ter is-size-5">{props.food_name}</div>
                        <br />
                        <div className="has-text-weight-light is-size-5 has-text-grey-light">
                            <p className="is-italic is-size-6">Ingredients</p>
                            {props.ingredients}
                        </div>
                    </p>
                </div>
            </div>
            <div className="media-right customHasCenteredContent">
                <div className="priceColorClass has-text-weight-medium">
                    {props.price} lei
                </div>
                
                <div className="button is-rounded" id="addDishButton">
                    <span className="icon">
                        <i className="fa fa-plus" />
                    </span>
                </div>
            </div>
        </div>
    );
}