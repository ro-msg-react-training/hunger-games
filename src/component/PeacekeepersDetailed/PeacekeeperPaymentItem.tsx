import React from "react";
import { IUserOrders } from "../../model/entites";
import { getRandomImage } from "../../Helpers/loadRandomImages";
import "../../styles/peacekeepersDetailedSingleItem.scss";
import { CardActionIcon, ThisElemetInterface } from "./CardActionIcon";

export interface MyPaymentItem {
    singleOrder: IUserOrders;
    isFullyPaidFor: boolean;
}

export const PeacekeeperPaymentItemDumpView: React.FC<MyPaymentItem> = (props: MyPaymentItem) => {
    let inputProperties: any = {
        type: "text",
        maxLength: 7,
        placeholder: "0",
        defaultValue: "31 lei",
        className: "input financeInputField is-static has-text-grey-light has-text-centered"
    }

    if (!true) {
        inputProperties = {
            ...inputProperties,
            readOnly: {}
        }
    }

    let cardActionIconProps : ThisElemetInterface = {
        user1 : false,
        user2 : false
    }

    return (
        <div className="column is-narrow">
            <div className={(props.isFullyPaidFor ? "CustomBoxGreen " : "CustomBoxRed ") + "level"}>
                <div className="level-left level-item">
                    <img className="customFoodPaymentImage" src={getRandomImage("foods")} alt={"imageForFood" + props.singleOrder.food.id_food} />
                </div>
                <div className="level-right level-item">
                    <div className="UserOrderDetails">
                        <div className="control">
                            <div className="level cardActionsLevel">
                                <div className = "level-item level-left is-pulled-left">
                                    <p className="has-text-grey is-size-7"> Food name </p>
                                </div>
                                <div className = "level-item level-right is-pulled-right">
                                    <CardActionIcon {...cardActionIconProps}/>
                                </div>
                            </div>
                            <textarea className="textarea has-fixed-size has-text-grey-light singleOrderFoodName userOrderDetailsText" readOnly rows={2} value={props.singleOrder.food.food_name + props.singleOrder.food.food_name + props.singleOrder.food.food_name} />
                        </div>

                        <div className="orderedByContainer">
                            <p className="has-text-grey is-size-7"> Ordered by </p>
                            <p className="has-text-grey-light userOrderDetailsText">{props.singleOrder.user.username}</p>
                        </div>

                        <table className="table is-narrow userOrderPaymentDetails userOrderDetailsText is-fullwidth">
                            <tr className="has-text-grey">
                                <td className="userOrderPaymentDetailsTD littleExtraPaddingRight has-text-centered">Cost</td>
                                <td className="userOrderPaymentDetailsTD has-text-centered">Payed</td>
                                <td className="userOrderPaymentDetailsTD has-text-centered">Change</td>
                            </tr>
                            <tr className="has-text-grey-light">
                                <td className="userOrderPaymentDetailsTD littleExtraPaddingRight has-text-centered">{props.singleOrder.food.price + " lei"}</td>
                                <td className="userOrderPaymentDetailsTD has-text-centered">
                                    <input {...inputProperties} />
                                </td>
                                <td className="userOrderPaymentDetailsTD has-text-centered">
                                    <input {...inputProperties} />
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}