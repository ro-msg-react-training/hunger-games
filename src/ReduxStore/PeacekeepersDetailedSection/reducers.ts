import * as PKDTypes from "./types";
import {
  IOrders,
  emptyUser,
  emptyOrder,
  IUserOrders
} from "../../model/entites";
import { cloneDeep } from "lodash";

export const initialState: PKDTypes.PeacekeepersDetailedState = {
  mainOrdersList: [emptyOrder],
  currentUser: emptyUser,
  currentOrder: emptyOrder,
  hasUserPlacedTheOrder: false
};

export function peacekeepersDetailedReducer(
  state: PKDTypes.PeacekeepersDetailedState = initialState,
  action: PKDTypes.PeacekeepersDetailedActionTypes
): PKDTypes.PeacekeepersDetailedState {
  switch (action.type) {
    case PKDTypes.LOAD_ORDERS_TO_DETAILED_VIEW: {
      return {
        ...state,
        mainOrdersList: { ...loadOrdersListData(action.orderListData) }
      };
    }

    case PKDTypes.LOAD_ORDER: {
      return {
        ...state,
        currentUser: action.currentLoggedInUser,
        currentOrder: {
          ...retrieveOrder(state.mainOrdersList, action.order_id)
        },
        hasUserPlacedTheOrder: checkOrderUserValidity(
          state.mainOrdersList,
          action.currentLoggedInUser.id,
          action.order_id
        )
      };
    }

    case PKDTypes.CHANGE_PAYED_AMOUNT: {
      return {
        ...state,
        currentOrder: {
          ...changeAmountPayed(
            state.mainOrdersList,
            action.orderId,
            action.cardId,
            action.payed
          )
        }
      };
    }

    case PKDTypes.CHANGE_CARD_STATUS: {
      return {
        ...state,
        currentOrder: {
          ...changeCardStatus(
            state.mainOrdersList,
            action.orderId,
            action.cardId
          )
        }
      };
    }

    case PKDTypes.PAYMENT_FIELD_IS_FOCUSED: {
      return {
        ...state,
        currentOrder: {
          ...paymentFieldIsFocused(
            state.mainOrdersList,
            action.orderId,
            action.cardId
          )
        }
      };
    }

    case PKDTypes.PAYMENT_FIELD_LOST_FOCUS: {
      return {
        ...state,
        currentOrder: {
          ...paymentFieldLostFocus(
            state.mainOrdersList,
            action.orderId,
            action.cardId
          )
        }
      };
    }

    default: {
      return state;
    }
  }
}

function retrieveOrder(mainOrdersList: IOrders[], orderId: number): IOrders {
  let ordersArray: IOrders[] = mainOrdersList;
  let currentOrder: IOrders = cloneDeep(ordersArray[orderId - 1]);

  currentOrder.peopleLeftToPay = calculateNumberOfPeopleLeftToPay(
    currentOrder.userOrders
  );
  currentOrder.peopleLeftToReceiveChange = calculateNumberOfPeopleLeftToReceiveChange(
    currentOrder.userOrders
  );
  currentOrder.haveAllChangesBeenAcquitted = checkForRemainingChanges(
    currentOrder
  );
  currentOrder.userOrders = ordersArray[orderId - 1].userOrders;

  return currentOrder;
}

function checkOrderUserValidity(
  mainOrdersList: IOrders[],
  loggedInUserId: number,
  orderUserId: number
): boolean {
  let validity: boolean = false;

  validity =
    loggedInUserId ===
    retrieveOrder(mainOrdersList, orderUserId).placed_order_user.id
      ? true
      : false;
  return validity;
}

function changeCardStatus(
  mainOrdersList: IOrders[],
  orderId: number,
  cardID: number
): IOrders {
  let currentOrder: IOrders = retrieveOrder(mainOrdersList, orderId);
  let currentCard: IUserOrders = currentOrder.userOrders[cardID];

  // If user clicks on button and the status is still in progress(users hasn't yet received the change)
  if (currentCard.receivedChange) {
    currentCard.receivedChange = false;
    currentCard.payed = 0;
    currentCard.auxPayedValue = currentCard.payed + " lei";
    currentCard.change = 0;
  } else {
    currentCard.receivedChange = true;
    currentCard.payed = currentCard.food.food_price;
    currentCard.auxPayedValue = currentCard.payed + " lei";
    currentCard.change = 0;
  }

  // Updating stats
  currentOrder.peopleLeftToPay = calculateNumberOfPeopleLeftToPay(
    currentOrder.userOrders
  );
  currentOrder.peopleLeftToReceiveChange = calculateNumberOfPeopleLeftToReceiveChange(
    currentOrder.userOrders
  );
  currentOrder.haveAllChangesBeenAcquitted = checkForRemainingChanges(
    currentOrder
  );

  return currentOrder;
}

function paymentFieldIsFocused(
  mainOrdersList: IOrders[],
  orderId: number,
  cardID: number
): IOrders {
  let currentOrder: IOrders = retrieveOrder(mainOrdersList, orderId);
  let currentCard: IUserOrders = currentOrder.userOrders[cardID];

  currentCard.auxPayedValue = currentCard.auxPayedValue.split(" ")[0];

  return currentOrder;
}

function changeAmountPayed(
  mainOrdersList: IOrders[],
  orderId: number,
  cardID: number,
  amountPayed: string
): IOrders {
  let currentOrder: IOrders = retrieveOrder(mainOrdersList, orderId);
  let currentCard: IUserOrders = currentOrder.userOrders[cardID];

  currentCard.auxPayedValue = amountPayed;

  return currentOrder;
}

function paymentFieldLostFocus(
  mainOrdersList: IOrders[],
  orderId: number,
  cardID: number
): IOrders {
  let currentOrder: IOrders = retrieveOrder(mainOrdersList, orderId);
  let currentCard: IUserOrders = currentOrder.userOrders[cardID];
  let auxValue: string = currentCard.auxPayedValue;

  // If the entered value is a number, than we can proceed with saving it
  if (!isNaN(+auxValue)) {
    currentCard.payed = Math.abs(+auxValue);
    currentCard.auxPayedValue =
      currentCard.payed + (currentCard.payed === 1 ? " leu" : " lei");

    // if we actually need to have a change at all
    if (currentCard.payed !== currentCard.food.food_price) {
      if (currentCard.payed <= currentCard.food.food_price) {
        currentCard.change = 0;
      } else {
        currentCard.change = Math.abs(
          currentCard.payed - currentCard.food.food_price
        );
      }

      currentCard.receivedChange = false;
    } else {
      // if user payed the whole food price, then update the card status as well
      currentCard.receivedChange = true;
    }
  } else {
    // otherwise we revert back to the initial value
    currentCard.auxPayedValue =
      currentCard.payed + (currentCard.payed === 1 ? " leu" : " lei");
  }

  // Update stats
  currentOrder.peopleLeftToPay = calculateNumberOfPeopleLeftToPay(
    currentOrder.userOrders
  );
  currentOrder.peopleLeftToReceiveChange = calculateNumberOfPeopleLeftToReceiveChange(
    currentOrder.userOrders
  );
  currentOrder.haveAllChangesBeenAcquitted = checkForRemainingChanges(
    currentOrder
  );

  return currentOrder;
}

function calculateNumberOfPeopleLeftToPay(
  userOrdersArray: IUserOrders[]
): number {
  let result: number = 0;

  userOrdersArray.forEach((order: IUserOrders) => {
    if (order.payed < order.food.food_price) {
      result += 1;
    }
  });

  return result;
}

function calculateNumberOfPeopleLeftToReceiveChange(
  userOrdersArray: IUserOrders[]
): number {
  let result: number = 0;

  userOrdersArray.forEach((order: IUserOrders) => {
    if (order.payed > order.food.food_price) {
      result += 1;
    }
  });

  return result;
}

// Are there remaining changes/payments to be made?
function checkForRemainingChanges(currentOrder: IOrders): boolean {
  let response: boolean = false;

  if (
    currentOrder.peopleLeftToPay === 0 &&
    currentOrder.peopleLeftToReceiveChange === 0
  ) {
    response = true;
  }

  return response;
}

function loadOrdersListData(orderListData: IOrders[]): IOrders[] {
  let localReducerOrdersList: IOrders[] = orderListData;

  return { ...localReducerOrdersList };
}
