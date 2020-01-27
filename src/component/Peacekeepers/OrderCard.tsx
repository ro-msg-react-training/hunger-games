import React, { SyntheticEvent } from "react";
import { IOrders } from "../../model/entites";
import { Link } from "react-router-dom";
import "../../styles/OrderCard.scss";
import { getRandomImage } from "../../Helpers/loadRandomImages";

export const OrderCard: React.FC<IOrders> = (props: IOrders) => {
    let customLinkProperties: any = {
        to: "/peacekeepers/" + props.order_id
    }

    if (!props.orderIsActive) {
        customLinkProperties = {
            ...customLinkProperties,
            onClick: (event: SyntheticEvent) => event.preventDefault()
        }
    }

    return (
        <div className="column is-narrow is-static">
            <Link {...customLinkProperties}>
                <div className={props.orderIsActive ? "box OrderBoxActive" : "box OrderBoxInactive"}>
                    <img className="orderCardImageActive" src={getRandomImage("restaurants")} alt={"imageForOrder" + props.order_id} />
                    
                    <div className={props.orderIsActive ? "is-hidden" : "inactiveOrderText"}>
                        <div className = "orderDeliveredText">Order delivered</div>
                    </div>
                    
                    <div className="orderCardText">
                        <div className="level">
                            <div id="restaurantTitle" className="level-item has-text-centered has-text-grey-lighter has-text-weight-medium">
                                {props.restaurant.name}
                            </div>
                        </div>

                        <div className="level has-text-grey-light has-text-weight-light has-text-left">
                            <div className="level-left level-item">
                                Order {props.order_id}
                            </div>
                            <div id="placedByText" className="level-right level-item has-text-right">
                                Placed by {props.placed_order_user.username}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div >
    );
}