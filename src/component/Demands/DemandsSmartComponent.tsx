import React from "react";
import { DemandsView } from "./DemandsDumbComponent";
import { GlobalState } from "../../ReduxStore";
import { connect } from "react-redux";
import { compose } from "recompose";
import { IDemands } from "../../model/entites";
import { RestaurantsComponentState } from "../Restaurants/RestaurantsSmartComponent";
import { Dispatch } from "redux";

export interface DemandsComponentState {
    orders: IDemands[];
}

class DemandsSmartView extends React.Component<DemandsComponentState> {    
    componentDidMount() {
        
    }

    render() {
        return (
            <DemandsView {...this.props}/>
        );
    }
}

const removeOrder = (dispatch: Dispatch, crtOrder: IDemands): void => {
    // dispatch(removeOrderFromList(crtOrder));
    
}

const placeOrder = (props : DemandsComponentState, dispatch: Dispatch, crtOrder: IDemands): void => {
    // dispatch(placeOrder(crtOrder));
    // dispatch(removeOrderFromList(crtOrder));

}

const mapStateToProps = (state: GlobalState) => ({
    // userData: state.loginReducerGlobal.userData,
    // isLoggedIn: state.loginReducerGlobal.isLoggedIn

    // actualOrders:state.demands.actualOrdersList
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    // onUsernameChange: (props: DemandsComponentState, value: string) => {
    //     let auxObject: IUser = cloneDeep(props.userData);

    //     auxObject.username = value;
    //     dispatch(updateLoginUserValues(auxObject));
    // },

    // onPasswordChange: (props: DemandsComponentState, value: string) => {
    //     let auxObject: IUser = cloneDeep(props.userData);

    //     auxObject.password = value;
    //     dispatch(updateLoginUserValues(auxObject));
    // },

    // onLoginClick: (props: DemandsComponentState) => {
    //     if (checkInputFields(dispatch, props.userData)) {
    //         findUserAndLogin(props, dispatch, props.userData);
    //     }
    // }
});

const DemandsViewInitializer = compose<DemandsComponentState, {}>(
    connect(mapStateToProps, mapDispatchToProps)
)(DemandsSmartView);
export default DemandsViewInitializer;