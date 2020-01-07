import React from "react";
import "../../styles/peacekeepersDetailedMainView.scss";
import Orders from '../../MockupData/orders.json';
import { IOrders, IUserOrders } from "../../model/entites.js";
import { NoItemsFound } from "../Peacekeepers/NoItemsFound";
import { PeacekeeperPaymentItemDumpView, MyPaymentItem } from "./PeacekeeperPaymentItem";
import { FaLayerGroup } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PeacekeepersDetailedViewState } from "./PeacekeepersDetailedSmartView";

export const PeacekeepersDetailedDumpView: React.FC<PeacekeepersDetailedViewState> = (props: PeacekeepersDetailedViewState) => {
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
                    paymentItemValues.isFullyPaidFor = true;
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
                <div className="container CustomHeaderBox has-text-centered">
                    <div className="dropdown is-hoverable">
                        <div className="dropdown-trigger">
                            <div id="paymentScreenRestaurantName" className="has-text-black-ter has-text-weight-medium is-size-5" aria-controls="additionalOrderInfoDrop">
                                <Link className="has-text-black-ter" to={"/districts/" + userOrdersFromCurrentRestaurant.restaurant.id}>
                                    {userOrdersFromCurrentRestaurant.restaurant.restaurant_name}
                                </Link>
                            </div>
                        </div>
                        <div className="dropdown-menu" id="dadditionalOrderInfoDrop" role="menu">
                            <div className="dropdown-content topDropDownContent">
                                <div className="dropdown-item">
                                    <div className="columns is-size-7 has-text-centered has-text-black-ter has-text-weight-medium is-vcentered">
                                        <div className="column">{"Order #" + userOrdersFromCurrentRestaurant.order_id}</div>
                                        <div className="column">{"Ordered by " + userOrdersFromCurrentRestaurant.placed_order_user.username}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                

                <div className="container is-fluid">
                    <div className="columns is-multiline is-fluid is-mobile is-centered">
                        {generatePaymentCards()}
                    </div>
                </div>

                <div className="button closeOrderButton">
                    <span className="icon">
                        <i className="fa fa-check-circle"></i>
                    </span>
                    <span className="has-text-weight-medium">Close order</span>
                </div>
            </div>
            <div className="hero-body"></div>
            <div className="hero-foot"></div>

            <div className="CustomStatsBox is-hidden-mobile">
                <div className="dropdown is-up is-hoverable">
                    <div className="dropdown-trigger">
                        <div className="columns has-text-centered has-text-grey-light" aria-controls="dropdown-menu4">
                            <div className="column">{userOrdersFromCurrentRestaurant.contor} <FaLayerGroup className="is-size-7" /></div>
                            <div className="column">{calculateTotalOrdersCost(userOrdersFromCurrentRestaurant) + " lei"}</div>
                            <div className="column">{"0"} <i className="fa fa-caret-down" /></div>
                            <div className="column">{"0"} <i className="fa fa-caret-up" /></div>
                        </div>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div className="dropdown-content bottomDropDownContent">
                            <div className="dropdown-item">
                                <div className="columns is-size-7 has-text-centered has-text-grey-lighter is-vcentered">
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