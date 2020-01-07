import { IOrders } from "../../model/entites";
import React, { ReactNode } from "react";
import { PeacekeepersDumpView } from "./PeacekeepersDumpView";
import { GlobalState } from "../../ReduxStore";
import { Dispatch } from "redux";
import { compose, setDisplayName } from "recompose";
import { connect } from "react-redux";
import { NoItemsFound } from "./NoItemsFound";
import { OrderCard } from "./OrderCard";

export interface PeacekeepersViewState {
    match : any;
    placedOrders : IOrders[];
    loadOrdersList: (props: PeacekeepersViewState) => ReactNode;
}

class PeacekeepersSmartView extends React.Component<PeacekeepersViewState> {
    componentDidMount() {
        this.props.loadOrdersList(this.props);
    }

    render() {
        return (
            <PeacekeepersDumpView {...this.props}/>
        );
    }
}

const mapStateToProps = (state : GlobalState) => ({
    placedOrders: state.peacekeeperReducerGlobal.placedOrders
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
    loadOrdersList : (props : PeacekeepersViewState) : ReactNode => {
        if (props.placedOrders.length === 0) {
            return (
                <NoItemsFound message = "Nothing to show for now. Check back later..."/>
            );
        } else {
            let ordersCards: JSX.Element[] = [];

            ordersCards = props.placedOrders.map(
                (order: IOrders) =>
                    <OrderCard {...order} key = {"towardsOrder_" + order.order_id}/>
            );

            return (
                ordersCards
            );
        }
    }
});

const PeacekeepersViewInitializer = compose<PeacekeepersViewState, {}>(
    setDisplayName("Peacekeepers Smart Component"),
    connect(mapStateToProps, mapDispatchToProps)
)(PeacekeepersSmartView);

export default PeacekeepersViewInitializer;