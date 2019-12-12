import React from "react";
import { IUserOrders } from "../../model/entites";
import { getRandomImage } from "../../Helpers/loadRandomImages";
import "../../styles/peacekeepersDetailedSingleItem.scss";

export interface MyPaymentItem {
    singleOrder: IUserOrders;
    isFullyPaidFor: boolean;
}

export const PeacekeeperPaymentItemDumpView: React.FC<MyPaymentItem> = (props: MyPaymentItem) => {
    return (
        <div className="column is-narrow">
            <div className={(props.isFullyPaidFor ? "CustomBoxGreen " : "CustomBoxRed ") + "level"}>
                <div className="level-left level-item">
                    <img className="customFoodPaymentImage" src={getRandomImage("foods")} alt={"imageForFood" + props.singleOrder.food.id_food} />
                </div>
                <div className="level-right level-item">
                    <div className="UserOrderDetails">
                        <div className="control">
                            <p className="has-text-grey is-size-7"> Food name </p>
                            <textarea className="textarea has-fixed-size has-text-grey-light singleOrderFoodName userOrderDetailsText" readOnly rows={2} value={props.singleOrder.food.food_name + props.singleOrder.food.food_name + props.singleOrder.food.food_name} />
                        </div>

                        <div className = "orderedByContainer">
                            <p className="has-text-grey is-size-7"> Ordered by </p>
                            <p className="has-text-grey-light userOrderDetailsText">{props.singleOrder.user.username}</p>
                        </div>

                        <table className="table is-narrow userOrderPaymentDetails userOrderDetailsText is-fullwidth">
                            <tr className="has-text-grey">
                                <td className="userOderPaymentDetailsTD has-text-centered">Cost</td>
                                <td className="userOderPaymentDetailsTD has-text-centered">Payed</td>
                                <td className="userOderPaymentDetailsTD has-text-centered">Change</td>
                            </tr>
                            <tr className="has-text-grey-light">
                                <td className="userOderPaymentDetailsTD has-text-centered">{props.singleOrder.food.price + " lei"}</td>
                                <td className="userOderPaymentDetailsTD has-text-centered">0</td>
                                <td className="userOderPaymentDetailsTD has-text-centered">0</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}