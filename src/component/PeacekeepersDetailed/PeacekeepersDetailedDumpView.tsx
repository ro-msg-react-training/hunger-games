import React from "react";
import "../../styles/peacekeepersDetailedMainView.scss";
import { FaLayerGroup } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PeacekeepersDetailedViewState } from "./PeacekeepersDetailedSmartView";
import { isNullOrUndefined } from "util";
import { NoItemsFound } from "../../Helpers/NoItemsFound";

export const PeacekeepersDetailedDumpView: React.FC<PeacekeepersDetailedViewState> = (props: PeacekeepersDetailedViewState) => {
    if (!isNullOrUndefined(props.currentOrder)) {
        return (
            <div className="hero is-dark is-bold custom-scroll-bar is-family-sans-serif">
                <div className="hero-head customHeadSpacing">
                    <div className="container CustomHeaderBox has-text-centered">
                        <div className="dropdown is-hoverable">
                            <div className="dropdown-trigger">
                                <div id="paymentScreenRestaurantName" className="has-text-black-ter has-text-weight-medium is-size-5" aria-controls="additionalOrderInfoDrop">
                                    <Link className="has-text-black-ter" to={"/districts/" + props.currentOrder.restaurant.id}>
                                        {props.currentOrder.restaurant.restaurant_name}
                                    </Link>
                                </div>
                            </div>
                            <div className="dropdown-menu" id="dadditionalOrderInfoDrop" role="menu">
                                <div className="dropdown-content topDropDownContent">
                                    <div className="dropdown-item">
                                        <div className="columns is-size-7 has-text-centered has-text-black-ter has-text-weight-medium is-vcentered">
                                            <div className="column">{"Order #" + props.currentOrder.order_id}</div>
                                            <div className="column">{"Ordered by " + props.currentOrder.placed_order_user.username}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container is-fluid">
                        <div className="columns is-multiline is-fluid is-mobile is-centered">
                            {props.generatePaymentCards(props)}
                        </div>
                    </div>

                    <div className={props.enableCloseOrderButton(props) ? "button closeOrderButton" : "is-hidden"} onClick={() => props.onClickCloseOrderButton(props, props.currentOrder.order_id)}>
                        <Link to="/peacekeepers" className="button closeOrderButton">
                            <span className="icon">
                                <i className="fa fa-check-circle"></i>
                            </span>
                            <span className="has-text-weight-medium">Close order</span>
                        </Link>
                    </div>
                </div>
                <div className="hero-body"></div>
                <div className="hero-foot"></div>

                <div className={props.hasUserPlacedTheOrder ? "CustomStatsBox is-hidden-mobile" : "is-hidden"}>
                    <div className="dropdown is-up is-hoverable">
                        <div className="dropdown-trigger">
                            <div className="columns has-text-centered has-text-grey-light" aria-controls="dropdown-menu4">
                                <div className="column">{props.currentOrder.userOrders.length} <FaLayerGroup className="is-size-7" /></div>
                                <div className="column">{props.currentOrder.totalOrderCost + " lei"}</div>
                                <div className="column">{props.currentOrder.peopleLeftToPay} <i className="fa fa-caret-down" /></div>
                                <div className="column">{props.currentOrder.peopleLeftToReceiveChange} <i className="fa fa-caret-up" /></div>
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
    } else {
        return (
            <NoItemsFound message="Nothing to show for now. Check back later..." />
        );
    }
}