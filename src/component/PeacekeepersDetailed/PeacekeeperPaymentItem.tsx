import React, { SyntheticEvent } from "react";
import { getRandomImage } from "../../Helpers/loadRandomImages";
import "../../styles/peacekeepersDetailedSingleItem.scss";
import { CardActionIcon } from "./CardActionIcon";
import { PKDSingleCardState } from "./PeacekeepersDetailedSmartView";

export const PeacekeeperPaymentItemDumpView: React.FC<PKDSingleCardState> = (props: PKDSingleCardState) => {
    let inputProperties: any = {
        type: "text",
        maxLength: 3,
        placeholder: "0",
        value: props.singleOrder.auxPayedValue,
        className: "input financeInputField is-static has-text-grey-light has-text-centered"
    }

    if (!true) {
        inputProperties = {
            ...inputProperties,
            readOnly: {}
        }
    }

    return (
        <div className="column is-narrow">
            <div className={(props.singleOrder.receivedChange ? "CustomBoxGreen " : "CustomBoxRed ") + "level"}>
                <div className="level-left level-item">
                    <img className="customFoodPaymentImage" src={getRandomImage("foods")} alt={"imageForFood" + props.singleOrder.food.id_food} />
                </div>
                <div className="level-right level-item">
                    <div className="UserOrderDetails">
                        <div className="control">
                            <div className="level cardActionsLevel">
                                <div className="level-item level-left is-pulled-left">
                                    <p className="has-text-grey is-size-7"> Food name </p>
                                </div>
                                <div className={props.didUserPlaceOrder ? "level-item level-right is-pulled-right" : "is-hidden"} onClick = {() => props.changeCardStatus(props, props.singleOrder.user_order_id-1)}>
                                    <CardActionIcon {...props.iconStatus} />
                                </div>
                            </div>
                            <textarea className="textarea has-fixed-size has-text-grey-light singleOrderFoodName userOrderDetailsText" readOnly rows={2} value={props.singleOrder.food.food_name} />
                        </div>

                        <div className="orderedByContainer">
                            <p className="has-text-grey is-size-7"> Ordered by </p>
                            <p className="has-text-grey-light userOrderDetailsText">{props.singleOrder.user.username}</p>
                        </div>

                        <table className="table is-narrow userOrderPaymentDetails userOrderDetailsText is-fullwidth">
                            <tbody>
                                <tr className="has-text-grey">
                                    <td className="userOrderPaymentDetailsTD littleExtraPaddingRight has-text-centered">Cost</td>
                                    <td className="userOrderPaymentDetailsTD has-text-centered">Payed</td>
                                    <td className="userOrderPaymentDetailsTD has-text-centered">Change</td>
                                </tr>
                                <tr className="has-text-grey-light">
                                    <td className="userOrderPaymentDetailsTD littleExtraPaddingRight has-text-centered">{props.singleOrder.food.price + " lei"}</td>
                                    <td className="userOrderPaymentDetailsTD has-text-centered">
                                        <input {...inputProperties} onFocus={(ev : SyntheticEvent) => props.onFieldFocused(props, props.singleOrder.user_order_id-1, ev)} onBlur={(ev : SyntheticEvent) => props.onFieldLostFocus(props, props.singleOrder.user_order_id-1)} onChange={(event : SyntheticEvent) => props.onChangeAuxPayedAmount(props, props.singleOrder.user_order_id-1, event)}/>
                                    </td>
                                    <td className="userOrderPaymentDetailsTD has-text-centered">
                                        {props.singleOrder.change + (props.singleOrder.change === 1 ? " leu" : " lei")}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}