import * as PKDTypes from "./types";

export function changePayedAmount(userOrderId : number, amountPayed : number) : PKDTypes.PeacekeepersDetailedActionTypes {
    return {
        type : PKDTypes.CHANGE_PAYED_AMOUNT,
        user_order_id : userOrderId,
        payed : amountPayed
    };
}