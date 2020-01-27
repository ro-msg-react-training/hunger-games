import * as PKDTypes from "./types";
import { IUser, IOrders } from "../../model/entites";

export function loadOrder(
  order_id: number,
  loggedInUser: IUser
): PKDTypes.PeacekeepersDetailedActionTypes {
  return {
    type: PKDTypes.LOAD_ORDER,
    order_id: order_id,
    currentLoggedInUser: loggedInUser
  };
}

export function changePayedAmount(
  orderId: number,
  cardId: number,
  amountPayed: string
): PKDTypes.PeacekeepersDetailedActionTypes {
  return {
    type: PKDTypes.CHANGE_PAYED_AMOUNT,
    orderId: orderId,
    cardId: cardId,
    payed: amountPayed
  };
}

export function changeCardStatus(
  orderId: number,
  cardId: number
): PKDTypes.PeacekeepersDetailedActionTypes {
  return {
    type: PKDTypes.CHANGE_CARD_STATUS,
    orderId: orderId,
    cardId: cardId
  };
}

export function paymentFieldIsFocused(
  orderId: number,
  cardId: number
): PKDTypes.PeacekeepersDetailedActionTypes {
  return {
    type: PKDTypes.PAYMENT_FIELD_IS_FOCUSED,
    orderId: orderId,
    cardId: cardId
  };
}

export function paymentFieldLostFocus(
  orderId: number,
  cardId: number
): PKDTypes.PeacekeepersDetailedActionTypes {
  return {
    type: PKDTypes.PAYMENT_FIELD_LOST_FOCUS,
    orderId: orderId,
    cardId: cardId
  };
}

export function loadOrdersToDetaildView(
  orderListData: IOrders[]
): PKDTypes.PeacekeepersDetailedActionTypes {
  return {
    type: PKDTypes.LOAD_ORDERS_TO_DETAILED_VIEW,
    orderListData: orderListData
  };
}
