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
            <div className = "column is-narrow">
                <div className = { (props.isFullyPaidFor ? "CustomBoxGreen " : "CustomBoxRed ") + " level"}>
                    <div className="level-left level-item">
                        <img className="customFoodPaymentImage" src={getRandomImage("foods")} alt={"imageForFood" + props.singleOrder.food.id_food} />
                    </div>
                    <div className="level-right level-item">
                        {/* {props.singleOrder.food.food_name}
                        {props.singleOrder.food.price} lei
                        {props.singleOrder.user.username} */}
                    </div>
                </div>
            </div>
        );
}