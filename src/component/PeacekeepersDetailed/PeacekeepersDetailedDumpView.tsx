import React from "react";
import "../../styles/peacekeepersDetailedMainView.scss";
import Orders from '../../MockupData/orders.json';
import { IOrders, IUserOrders } from "../../model/entites.js";
import { NoItemsFound } from "../Peacekeepers/NoItemsFound";
import { PeacekeeperPaymentItemDumpView, MyPaymentItem } from "./PeacekeeperPaymentItem";

export interface PeacekeepersState {
    match?: any;
}

export const PeacekeepersDetailedDumpView: React.FC<PeacekeepersState> = (props: PeacekeepersState) => {
    // Nu ar trebui implementat asa *
    let ordersArray: IOrders[] = Object(Orders);
    let userOrdersFromCurrentRestaurant: IOrders = ordersArray[findIndividualOder(ordersArray, props.match.params.id)];

    function findIndividualOder(array: IOrders[], receivedId: number): number {
        let arrayIndex: number = 0;

        for (let i: number = 0; i < array.length; i++) {
            if (array[i].order_id == receivedId) {
                arrayIndex = i;
                break;
            }
        }

        return arrayIndex;
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

    const generatePaymentCards = () => {
        let ordersArray: IOrders[] = Object(Orders);
        let userOrdersFromCurrentRestaurant: IOrders = ordersArray[findIndividualOder(ordersArray, props.match.params.id)];
        let ordersCards: JSX.Element[] = [];

        if (userOrdersFromCurrentRestaurant !== null) {
            ordersCards = userOrdersFromCurrentRestaurant.userOrders.map(
                (order: IUserOrders) => {
                    let paymentItemValues: MyPaymentItem = {} as any;
                    paymentItemValues.isFullyPaidFor = false;
                    paymentItemValues.singleOrder = order;

                    return <PeacekeeperPaymentItemDumpView {...paymentItemValues} key={"Payment Card " + order.user_order_id} />;
                }
            );

            return ordersCards;
        } else {
            return (
                <NoItemsFound message="Nothing to show here" />
            );
        }
    }
    return (
        <div className="hero is-dark is-bold is-fullheight is-fullwidth is-family-sans-serif">
            <div className="hero-head customHeadSpacing">
                <div className="container CustomHeaderBox dropdown:hover has-text-centered">
                    <div id="paymentScreenRestaurantName" className="has-text-black-ter has-text-weight-medium is-size-5">
                        {userOrdersFromCurrentRestaurant.restaurant.restaurant_name}
                    </div>
                </div>
                <div className="container is-fluid">
                    <div className="columns is-multiline is-fluid is-mobile is-centered">
                        {generatePaymentCards()}
                    </div>
                </div>
            </div>
            <div className="hero-body"></div>
            <div className="hero-foot"></div>

            <div className="CustomStatsBox is-hidden-mobile">
                <div className="dropdown is-up is-hoverable">
                    <div className="dropdown-trigger">
                        <div className="columns has-text-centered has-text-grey-light" aria-controls="dropdown-menu4">
                            <div className="column">{userOrdersFromCurrentRestaurant.contor}</div>
                            <div className="column">{calculateTotalOrdersCost(userOrdersFromCurrentRestaurant) + " lei"}</div>
                            <div className="column">{"0"} <i className="fa fa-caret-down" /></div>
                            <div className="column">{"0"} <i className="fa fa-caret-up" /></div>
                        </div>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                                <div className="columns has-text-centered has-text-grey-lighter is-vcentered has-text-">
                                    <div className="column">Nr. of orders</div>
                                    <div className="column">Total</div>
                                    <div className="column">People left to pay</div>
                                    <div className="column">People left to receive change</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}