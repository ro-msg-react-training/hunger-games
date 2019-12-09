import React from "react";
import Orders from '../../MockupData/orders.json';
import { IOrders } from "../../model/entites.js";
import { OrderCard } from "./OrderCard";


export const PeacekeepersDumpView: React.FC = () => {
    const generateOrdersList = () => {
        let ordersArray: IOrders[] = Object(Orders);
        let ordersCards : JSX.Element[] = [];

        ordersCards = ordersArray.map(
            (order: IOrders) =>
            <div className = "foodContainer">
                <OrderCard {...order}/>
            </div>
        );

        return ordersCards;
    }

    return (
        <section className="hero is-dark is-bold is-fullheight is-family-sans-serif">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-flex is-mobile is-centered">
                        {generateOrdersList()}
                    </div>
                </div>
            </div>
        </section>
    );
}