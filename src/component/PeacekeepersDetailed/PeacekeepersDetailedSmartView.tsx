import React, { ReactNode, SyntheticEvent } from "react";
import { PeacekeepersDetailedDumpView } from "./PeacekeepersDetailedDumpView";
import { GlobalState } from "../../ReduxStore";
import { Dispatch } from "redux";
import { compose, setDisplayName } from "recompose";
import { connect } from "react-redux";
import { IOrders, IUser, IUserOrders } from "../../model/entites";
import { loadOrder, changeCardStatus, paymentFieldIsFocused, changePayedAmount, paymentFieldLostFocus } from "../../ReduxStore/PeacekeepersDetailedSection/actions";
import { NoItemsFound } from "../../Helpers/NoItemsFound";
import { PeacekeeperPaymentItemDumpView } from "./PeacekeeperPaymentItem";

export interface PeacekeepersDetailedViewState {
    match: any;
    currentUser: IUser;
    currentOrder: IOrders;
    hasUserPlacedTheOrder: boolean;
    loadOrderData: (props: PeacekeepersDetailedViewState) => void;
    generatePaymentCards: (props: PeacekeepersDetailedViewState) => ReactNode;
    changeCardStatus: (props: PKDSingleCardState, userOrderId: number) => void;
    onFieldFocused: (props: PKDSingleCardState, userOrderId: number, eventValue: SyntheticEvent) => void;
    onFieldLostFocus: (props: PKDSingleCardState, userOrderId: number) => void;
    onChangeAuxPayedAmount: (props: PKDSingleCardState, userOrderId: number, eventValue: SyntheticEvent) => void;
    enableCloseOrderButton: (props : PeacekeepersDetailedViewState) => boolean;
}

export interface PKDSingleCardState {
    currentOrderId: number;
    singleOrder: IUserOrders;
    didUserPlaceOrder: boolean;
    receivedChange: boolean;
    iconStatus: PKDCardActionItemState;
    changePayedAmount: (props: PKDSingleCardState, value: string) => void;
    changeCardStatus: (props: PKDSingleCardState, userOrderId: number) => void;
    onFieldFocused: (props: PKDSingleCardState, userOrderId: number, eventValue: SyntheticEvent) => void;
    onFieldLostFocus: (props: PKDSingleCardState, userOrderId: number) => void;
    onChangeAuxPayedAmount: (props: PKDSingleCardState, userOrderId: number, eventValue: SyntheticEvent) => void;
}

export interface PKDCardActionItemState {
    receivedChange: boolean;
}

class PeacekeepersDetailedSmartView extends React.Component<PeacekeepersDetailedViewState> {
    componentDidMount() {
        this.props.loadOrderData(this.props);
    }

    render() {
        return (
            <PeacekeepersDetailedDumpView {...this.props} />
        );
    }
}

const mapStateToProps = (state: GlobalState) => ({
    currentUser: state.loginReducerGlobal.userData,
    currentOrder: state.peacekeeperDetailedReducerGlobal.currentOrder,
    hasUserPlacedTheOrder: state.peacekeeperDetailedReducerGlobal.hasUserPlacedTheOrder,
    peopleLeftToPay: state.peacekeeperDetailedReducerGlobal.currentOrder.peopleLeftToPay,
    peopleLeftToReceiveChange: state.peacekeeperDetailedReducerGlobal.currentOrder.peopleLeftToReceiveChange,
    totalOrderCost: state.peacekeeperDetailedReducerGlobal.currentOrder.totalOrderCost
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    loadOrderData: (props: PeacekeepersDetailedViewState) => {
        dispatch(loadOrder(props.match.params.id, props.currentUser));
    },

    generatePaymentCards: (props: PeacekeepersDetailedViewState): ReactNode => {
        let ordersCards: JSX.Element[] = [];

        if (props.currentOrder.userOrders !== null) {
            ordersCards = props.currentOrder.userOrders.map(
                (order: IUserOrders) => {
                    let paymentItemValues: PKDSingleCardState = {} as any;
                    paymentItemValues.singleOrder = order;
                    paymentItemValues.didUserPlaceOrder = props.hasUserPlacedTheOrder;
                    paymentItemValues.receivedChange = order.receivedChange;
                    paymentItemValues.currentOrderId = props.currentOrder.order_id;

                    let defaultIconStatus: PKDCardActionItemState = { receivedChange: false };
                    paymentItemValues.iconStatus = defaultIconStatus;
                    paymentItemValues.iconStatus.receivedChange = paymentItemValues.receivedChange;
                    paymentItemValues.changeCardStatus = props.changeCardStatus;
                    paymentItemValues.onFieldFocused = props.onFieldFocused;
                    paymentItemValues.onFieldLostFocus = props.onFieldLostFocus;
                    paymentItemValues.onChangeAuxPayedAmount = props.onChangeAuxPayedAmount;

                    return <PeacekeeperPaymentItemDumpView {...paymentItemValues} key={"Payment Card " + order.user_order_id} />;
                }
            );

            return ordersCards;
        } else {
            return (
                <NoItemsFound message="Nothing to show here" />
            );
        }
    },

    changeCardStatus: (props: PKDSingleCardState, userOrderId: number) => {
        dispatch(changeCardStatus(props.currentOrderId, userOrderId));
    },

    onFieldFocused: (props: PKDSingleCardState, userOrderId: number, eventValue: SyntheticEvent) => {
        dispatch(paymentFieldIsFocused(props.currentOrderId, userOrderId));
    },

    onFieldLostFocus: (props: PKDSingleCardState, userOrderId: number) => {
        dispatch(paymentFieldLostFocus(props.currentOrderId, userOrderId));
    },

    onChangeAuxPayedAmount: (props: PKDSingleCardState, userOrderId: number, eventValue: SyntheticEvent) => {
        let fieldValue: string = (eventValue.target as HTMLInputElement).value.trim();

        dispatch(changePayedAmount(props.currentOrderId, userOrderId, fieldValue));
    },

    enableCloseOrderButton: (props : PeacekeepersDetailedViewState) : boolean => {
        let response : boolean = false;

        if(props.currentUser.id === props.currentOrder.placed_order_user.id && props.currentOrder.haveAllChangesBeenAcquitted) {
            response = true;
        }

        return response;
    }
});

const PeacekeepersDetailedViewInitializer = compose<PeacekeepersDetailedViewState, {}>(
    setDisplayName("Peacekeepers Detailed Smart View"),
    connect(mapStateToProps, mapDispatchToProps)
)(PeacekeepersDetailedSmartView);

export default PeacekeepersDetailedViewInitializer;