import React from "react";
import { IOrders } from "../../model/entites";
import { Link } from "react-router-dom";
import "../../styles/OrderCard.scss";
import { getRandomImage } from "../../Helpers/loadRandomImages";

export const OrderCard: React.FC<IOrders> = (props: IOrders) => {
    return (
        <div className="column is-narrow">
            <Link to={"/districts/" + props.restaurant.id}>
                <div className="box OrderBox">
                    <img id="orderCardImage" src={getRandomImage("restaurants")} />
                    <div className="orderCardText">
                        <div className="level">
                            <div id="restaurantTitle" className="level-item has-text-centered has-text-white-ter has-text-weight-medium">
                                {props.restaurant.restaurant_name}
                            </div>
                        </div>

                        <div className="level has-text-grey-lighter has-text-weight-light has-text-left">
                            <div className="level-left level-item">
                                Order {props.order_id}
                            </div>
                            <div id = "placedByText" className="level-right level-item has-text-right">
                                Placed by {props.placed_order_user.username}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div >
    );
}