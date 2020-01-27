import { IUser } from "../../model/entites";
import React from "react";
import { GlobalState } from "../../ReduxStore";
import { Dispatch } from "redux";
import { compose, setDisplayName } from "recompose";
import { connect } from "react-redux";
import { NavbarDumpView } from "./NavbarDumpView";
import { logoutEventHandler } from "../../ReduxStore/LoginSection/actions";
import { changeActiveTab } from "../../ReduxStore/NavbarSection/actions";

export interface NavbarComponentState {
  loggedInUserDetails: IUser;
  activateNavbar: boolean;
  logout: () => void;
  activeTab: string;
  setActiveTab: (props: NavbarComponentState, tab: string) => void;
}

class NavbarSmartView extends React.Component<NavbarComponentState> {
  render() {
    return <NavbarDumpView {...this.props} />;
  }
}

const mapStateToProps = (state: GlobalState) => ({
  loggedInUserDetails: state.loginReducerGlobal.userData,
  activateNavbar: state.loginReducerGlobal.activateNavbar,
  activeTab: state.navReducerGlobal.activeTab
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch(logoutEventHandler()),

  setActiveTab: (props: NavbarComponentState, tab: string) => {
    dispatch(changeActiveTab(tab));
  }
});

const NavbarInitializer = compose<NavbarComponentState, {}>(
  setDisplayName("Navbar Component"),
  connect(mapStateToProps, mapDispatchToProps)
)(NavbarSmartView);

export default NavbarInitializer;
