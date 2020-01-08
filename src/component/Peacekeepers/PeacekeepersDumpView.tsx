import React from "react";
import { PeacekeepersViewState } from "./PeacekeepersSmartView.js";

export const PeacekeepersDumpView: React.FC<PeacekeepersViewState> = (props : PeacekeepersViewState) => {
    return (
        <section className="hero is-dark is-bold is-fullheight is-family-sans-serif">
            <div className="hero-head customHeroHead">
            <div className="container">
                    <div className="columns is-multiline is-fluid is-mobile is-centered">
                        {props.loadOrdersList(props)}
                    </div>
                </div>
            </div>
            <div className="hero-body"></div>
            <div className="hero-foot"></div>
        </section>
    );
}