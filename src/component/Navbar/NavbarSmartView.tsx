import { IUser } from "../../model/entites";
import React from "react";
import { GlobalState } from "../../ReduxStore";
import { Dispatch } from "redux";
import { compose, setDisplayName } from "recompose";
import { connect } from "react-redux";
import { NavbarDumpView } from "./NavbarDumpView";
import { logoutEventHandler } from "../../ReduxStore/LoginSection/actions";

export interface NavbarComponentState {
    loggedInUserDetails : IUser;
    activateNavbar : boolean;
    logout: () => void;
}

class NavbarSmartView extends React.Component<NavbarComponentState> {
    render() {
        return (
            <NavbarDumpView {...this.props}/>
        );
    }
}

const mapStateToProps = (state: GlobalState) => ({
    loggedInUserDetails : state.loginReducerGlobal.userData,
    activateNavbar : state.loginReducerGlobal.activateNavbar
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    logout : () => dispatch(logoutEventHandler())
});

const NavbarInitializer = compose<NavbarComponentState, {}>(
    setDisplayName("Navbar Component"),
    connect(mapStateToProps, mapDispatchToProps)
)(NavbarSmartView);

export default NavbarInitializer;