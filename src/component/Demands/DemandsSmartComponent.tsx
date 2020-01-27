import React from "react";
import { GlobalState } from "../../ReduxStore";
import { Dispatch } from "redux";
import { compose } from "recompose";
import { connect } from "react-redux";
import {
  IRestaurant,
  IDemands,
  IUser,
  RestaurantDemands,
  IUserOrders,
  RestaurantOrdersDemands,
  IOrders
} from "../../model/entites";
import { DemandsView } from "./DemandsDumbComponent";
import {
  removeOrderItemEvent,
  removeOrderOnRestaurantEvent
} from "../../ReduxStore/DemandsSection/action";
import {
  decreadseNumberOfOrdersEventHandler,
  reloadNumberOfOrdersEventHandler
} from "../../ReduxStore/RestaurantListSection/actions";
import { addOrderToList } from "../../ReduxStore/PeacekeepersSection/actions";
import { showNotification } from "../../ReduxStore/NotificationSection/actions";

export interface DemandsComponentState {
  restaurantsList: IRestaurant[];
  orders: IDemands[];
  onDeleteOrderItemEventHandler: (
    itemToDelete: IDemands,
    crtActiveUser: IUser
  ) => void;
  decreaseNumberOfOrderitemsForRestaurant: (
    crtRestaurant: RestaurantDemands
  ) => void;
  onSendOrderEvent: (
    props: DemandsComponentState,
    restaruantId: number
  ) => void;
  peacekeepersArrayLenght: number;
  crtActiveUser: IUser;
  contorForRestaurants: IRestaurant[];
}

class DemandsSmartView extends React.Component<DemandsComponentState> {
  componentDidMount() {}

  render() {
    return <DemandsView {...this.props} />;
  }
}

const mapStateToProps = (state: GlobalState) => ({
  orders: state.demandsReducer.listOfOrders,
  crtActiveUser: state.loginReducerGlobal.userData,
  contorForRestaurants: state.restReducer.restaurants,
  peacekeepersArrayLenght: state.peacekeeperReducerGlobal.placedOrders.length
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDeleteOrderItemEventHandler: (
    crtItemToErase: IDemands,
    crtActiveUser: IUser
  ) => dispatch(removeOrderItemEvent(crtItemToErase, crtActiveUser)),
  decreaseNumberOfOrderitemsForRestaurant: (crtRestaurant: RestaurantDemands) =>
    dispatch(decreadseNumberOfOrdersEventHandler(crtRestaurant)),

  onSendOrderEvent: (props: DemandsComponentState, restaruantId: number) => {
    let newIOrder: IOrders = {} as IOrders;
    let userOrders: IUserOrders[] = [] as IUserOrders[];
    let itemsToRemove: IDemands[] = [];

    // Generating UserOrders array
    props.orders
      .filter(element => element.restaurant.id === restaruantId)
      .forEach(currentOrder => {
        let crtOrder: IUserOrders = {} as IUserOrders;

        itemsToRemove.push(currentOrder);
        crtOrder.food = currentOrder.food;
        crtOrder.user = currentOrder.user;
        crtOrder.payed = 0;
        crtOrder.change = 0;
        crtOrder.receivedChange = false;
        crtOrder.auxPayedValue = "0 lei";
        crtOrder.cart_item_id = userOrders.length;
        userOrders.push(crtOrder);
      });

    // Generating restaurant
    let restaurant: RestaurantOrdersDemands = {} as RestaurantOrdersDemands;
    let seachedRestaurant: IRestaurant = {} as IRestaurant;

    for (let i = 0; i < props.contorForRestaurants.length; i++) {
      if (props.contorForRestaurants[i].id === restaruantId) {
        seachedRestaurant = props.contorForRestaurants[i];
      }
    }
    restaurant.toPay = seachedRestaurant ? seachedRestaurant.toPay : 0;
    restaurant.id = seachedRestaurant ? seachedRestaurant.id : 0;
    restaurant.name = seachedRestaurant
      ? seachedRestaurant.restaurant_name
      : "";

    // Generating remaining fields
    let order_id: number = props.peacekeepersArrayLenght + 1;
    let placed_order_user: IUser = props.crtActiveUser;
    let peopleLeftToPay: number = 0;
    let peopleLeftToReceiveChange: number = 0;
    let haveAllChangesBeenAcquitted: boolean = false;
    let orderIsActive: boolean = true;

    // Generating final Order
    newIOrder.restaurant = restaurant;
    newIOrder.userOrders = userOrders;
    newIOrder.order_id = order_id;
    newIOrder.placed_order_user = placed_order_user;
    newIOrder.peopleLeftToPay = peopleLeftToPay;
    newIOrder.peopleLeftToReceiveChange = peopleLeftToReceiveChange;
    newIOrder.haveAllChangesBeenAcquitted = haveAllChangesBeenAcquitted;
    newIOrder.orderIsActive = orderIsActive;

    dispatch(addOrderToList(newIOrder));

    dispatch(removeOrderOnRestaurantEvent(itemsToRemove));
    dispatch(reloadNumberOfOrdersEventHandler(restaruantId));

    dispatch(showNotification("Order placed!", "success"));
  }
});

const DemandsInitializer = compose<DemandsComponentState, {}>(
  connect(mapStateToProps, mapDispatchToProps)
)(DemandsSmartView);

export default DemandsInitializer;
