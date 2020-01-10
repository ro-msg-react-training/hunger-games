import * as PKDTypes from "./types";
import { IOrders, emptyUser, emptyOrder, IUserOrders } from "../../model/entites";
import Orders from '../../MockupData/orders.json';

export const initialState: PKDTypes.PeacekeepersDetailedState = {
    currentUser: emptyUser,
    currentOrder: emptyOrder,
    hasUserPlacedTheOrder: false
};

export function peacekeepersDetailedReducer(state: PKDTypes.PeacekeepersDetailedState = initialState, action: PKDTypes.PeacekeepersDetailedActionTypes): PKDTypes.PeacekeepersDetailedState {
    switch (action.type) {
        case PKDTypes.LOAD_ORDER: {
            return {
                currentUser: action.currentLoggedInUser,
                currentOrder: retrieveOrder(action.order_id),
                hasUserPlacedTheOrder: checkOrderUserValidity(action.currentLoggedInUser.id, action.order_id)
            }
        }

        case PKDTypes.CHANGE_PAYED_AMOUNT: {
            return {
                ...state,
                currentOrder: { ...changeAmountPayed(action.orderId, action.cardId, action.payed) }
            }
        }

        case PKDTypes.CHANGE_CARD_STATUS: {
            return {
                ...state,
                currentOrder: { ...changeCardStatus(action.orderId, action.cardId) }
            }
        }

        case PKDTypes.PAYMENT_FIELD_IS_FOCUSED: {
            return {
                ...state,
                currentOrder: { ...paymentFieldIsFocused(action.orderId, action.cardId) }
            }
        }

        case PKDTypes.PAYMENT_FIELD_LOST_FOCUS: {
            return {
                ...state,
                currentOrder: { ...paymentFieldLostFocus(action.orderId, action.cardId) }
            }
        }

        default: {
            return state;
        }
    }
}

function retrieveOrder(orderId: number): IOrders {
    let ordersArray: IOrders[] = Object(Orders);
    let currentOrder : IOrders = ordersArray[orderId - 1];

    currentOrder.peopleLeftToPay = calculateNumberOfPeopleLeftToPay(currentOrder.userOrders);
    currentOrder.peopleLeftToReceiveChange = calculateNumberOfPeopleLeftToReceiveChange(currentOrder.userOrders);
    currentOrder.totalOrderCost = calculateTotalOrdersCost(currentOrder);

    console.log("Retrieve Order -------------------------------");
    console.log(ordersArray[orderId - 1]);
    return {...ordersArray[orderId - 1]};
}

function calculateTotalOrdersCost(ordersArray: IOrders): number {
    let total: number = 0;

    ordersArray.userOrders.forEach(
        order => {
            total += order.food.price;
        }
    );

    return total;
}

function checkOrderUserValidity(loggedInUserId: number, orderUserId: number): boolean {
    let validity: boolean = false;

    validity = loggedInUserId === retrieveOrder(orderUserId).placed_order_user.id ? true : false;
    return validity;
}

function changeCardStatus(orderId: number, cardID: number): IOrders {
    let currentOrder: IOrders = retrieveOrder(orderId);
    let currentCard: IUserOrders = currentOrder.userOrders[cardID];

    // If user clicks on button and the status is still in progress(users hasn't yet received the change)
    if (currentCard.receivedChange) {
        currentCard.receivedChange = false
        currentCard.payed = 0;
        currentCard.auxPayedValue = currentCard.payed + " lei";
        currentCard.change = 0;
    } else {
        currentCard.receivedChange = true
        currentCard.payed = currentCard.food.price;
        currentCard.auxPayedValue = currentCard.payed + " lei";
        currentCard.change = 0;
    }

    // Updating stats
    console.log("Updating stats - ChangeCardStatus - initial state ->");
    console.log(currentOrder);
    currentOrder.haveAllChangesBeenAcquitted = checkForRemainingChanges(currentOrder);
    console.log("Updating stats - CheckAllChangesQcquitted - after ->");
    console.log(currentOrder);

    return currentOrder;
}

function paymentFieldIsFocused(orderId: number, cardID: number): IOrders {
    let currentOrder: IOrders = retrieveOrder(orderId);
    let currentCard: IUserOrders = currentOrder.userOrders[cardID];

    currentCard.auxPayedValue = currentCard.auxPayedValue.split(" ")[0];

    return currentOrder;
}

function changeAmountPayed(orderId: number, cardID: number, amountPayed: string): IOrders {
    let currentOrder: IOrders = retrieveOrder(orderId);
    let currentCard: IUserOrders = currentOrder.userOrders[cardID];

    currentCard.auxPayedValue = amountPayed;

    return currentOrder;
}

function paymentFieldLostFocus(orderId: number, cardID: number): IOrders {
    let currentOrder: IOrders = retrieveOrder(orderId);
    let currentCard: IUserOrders = currentOrder.userOrders[cardID];
    let auxValue: string = currentCard.auxPayedValue;

    // If the entered value is a number, than we can proceed with saving it
    if (+auxValue !== null) {
        currentCard.payed = +auxValue;
        currentCard.auxPayedValue = currentCard.auxPayedValue + " lei";

        // if we actually need to have a change at all
        if(currentCard.payed >= currentCard.food.price) {
            currentCard.change = currentCard.payed >= 0 ? Math.abs(currentCard.payed - currentCard.food.price) : 0;
        }

        // if user payed the whole food price, then update the card status as well
        if(currentCard.payed === currentCard.food.price) {
            currentCard.receivedChange = true;
        }
    } else {    // otherwise we revert back to the initial value
        currentCard.auxPayedValue = new Number(currentCard.payed).toString() + " lei";
    }

    // Update stats
    currentOrder.peopleLeftToPay = calculateNumberOfPeopleLeftToPay(currentOrder.userOrders);
    currentOrder.peopleLeftToReceiveChange = calculateNumberOfPeopleLeftToReceiveChange(currentOrder.userOrders);
    currentOrder.totalOrderCost = calculateTotalOrdersCost(currentOrder);
    currentOrder.haveAllChangesBeenAcquitted = checkForRemainingChanges(currentOrder);

    return currentOrder;
}

function calculateNumberOfPeopleLeftToPay(userOrdersArray : IUserOrders[]) : number {
    let result : number = 0;

    userOrdersArray.forEach(
        (order : IUserOrders) => {
            if(order.payed === 0) {
                result += 1;
            }
        }
    );

    return result;
}

function calculateNumberOfPeopleLeftToReceiveChange(userOrdersArray : IUserOrders[]) : number {
    let result : number = 0;
    
    userOrdersArray.forEach(
        (order : IUserOrders) => {
            if(!order.receivedChange) {
                result += 1;
            }
        }
    );

    return result;
}

// Are there remaining changes/payments to be made?
function checkForRemainingChanges(currentOrder : IOrders) : boolean {
    let response : boolean = false;
    console.log("********* CheckChangesFunction - initial state ->");
    console.log(currentOrder);
    
    if(currentOrder.peopleLeftToPay == 0 && currentOrder.peopleLeftToReceiveChange == 0) {
        response = true;
    }

    console.log("********* CheckChangesFunction - result ->");
    console.log(response);

    return response;
}