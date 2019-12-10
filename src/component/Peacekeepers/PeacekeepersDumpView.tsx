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
                    <OrderCard {...order} />
            );

            return ordersCards;
        } else {
            return (
                <NoItemsFound />
            );
        }
    }

    return (
        <section className="hero is-dark is-bold is-fullheight is-family-sans-serif">
            <div className="hero-head customHeroHead">
            <div className="container">
                    <div className="columns is-multiline is-fluid is-mobile is-centered">
                        {generateOrdersList()}
                    </div>
                </div>
            </div>
            <div className="hero-body"></div>
            <div className="hero-foot"></div>
        </section>
    );
}