import React from "react";
import Orders from '../../MockupData/orders.json';
import { IOrders } from "../../model/entites.js";
import { OrderCard } from "./OrderCard";
import { NoItemsFound } from './NoItemsFound';

export const PeacekeepersDumpView: React.FC = () => {
    const generateOrdersList = () => {
        let ordersArray: IOrders[] = Object(Orders);
        let ordersCards: JSX.Element[] = [];

        if (ordersArray.length) {
            ordersCards = ordersArray.map(
                (order: IOrders) =>
                    <OrderCard {...order} key={"towardsOrder_" + order.order_id} />
            );

            return ordersCards;
        } else {
            return (
                <NoItemsFound message="Nothing to show for now. Check back later..." />
            );
        }
    }
import { PeacekeepersViewState } from "./PeacekeepersSmartView.js"
export const PeacekeepersDumpView: React.FC<PeacekeepersViewState> = (props : PeacekeepersViewState) => {
    return (
        <div className="hero is-dark is-bold custom-scroll-bar is-family-sans-serif">
            <div className="hero-head customHeroHead">
                <div className="container">
                    <div className="columns is-multiline is-fluid is-mobile is-centered">
                        {props.generateOrdersList(props)}
                    </div>
                </div>
            </div>
            <div className="hero-body"></div>
            <div className="hero-foot"></div>
        </div>
    );
}