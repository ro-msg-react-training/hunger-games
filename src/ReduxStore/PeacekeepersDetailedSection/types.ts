import { IOrders, IUser } from "../../model/entites";

export interface PeacekeepersDetailedState {
    currentUser : IUser;
    currentOrder : IOrders;
    hasUserPlacedTheOrder : boolean;
}

export const LOAD_ORDER = "LOAD_ORDER";
export const CHANGE_PAYED_AMOUNT = "CHANGE_PAYED_AMOUNT";
export const CHANGE_CARD_STATUS = "CHANGE_CARD_STATUS";
export const PAYMENT_FIELD_IS_FOCUSED = "PAYMENT_FIELD_IS_FOCUSED";
export const PAYMENT_FIELD_LOST_FOCUS = "PAYMENT_FIELD_LOST_FOCUS";

export interface PKDLoadUserOrdersAction {
    type : typeof LOAD_ORDER,
    order_id : number,
    currentLoggedInUser : IUser
}

export interface PKDChangePayedAmountAction {
    type : typeof CHANGE_PAYED_AMOUNT,
    orderId : number,
    cardId : number,
    payed : string
}

export interface PKDChangeCardStatusAction {
    type : typeof CHANGE_CARD_STATUS,
    orderId : number,
    cardId : number
}

export interface PKDPaymentFieldIsFocusedAction {
    type : typeof PAYMENT_FIELD_IS_FOCUSED,
    orderId : number,
    cardId : number
}

export interface PKDPaymentFieldLostFocusAction {
    type : typeof PAYMENT_FIELD_LOST_FOCUS,
    orderId : number,
    cardId : number
}

export type PeacekeepersDetailedActionTypes = PKDLoadUserOrdersAction | PKDChangePayedAmountAction | PKDChangeCardStatusAction | PKDPaymentFieldIsFocusedAction | PKDPaymentFieldLostFocusAction;