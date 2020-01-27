import { PeacekeepersViewState } from "./PeacekeepersSmartView.js";
import React from "react";

export const PeacekeepersDumpView: React.FC<PeacekeepersViewState> = (
  props: PeacekeepersViewState
) => {
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
};
