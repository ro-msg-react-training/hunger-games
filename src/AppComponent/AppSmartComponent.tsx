import React from "react";
import App from "./App";
import { GlobalState } from "../ReduxStore";
import { Dispatch } from "redux";
import { compose, setDisplayName } from "recompose";
import { connect } from "react-redux";

export interface AppComponentState {
    userIsLoggedIn : boolean;
    history: any;
}

class AppSmartView extends React.Component<AppComponentState> {
    componentDidMount() {
        
    }

    render() {
        return (
            <App {...this.props}/>
        );
    }
}

const mapPropsToState = (state : GlobalState) => ({
    userIsLoggedIn : state.loginReducerGlobal.isLoggedIn
});

const mapDispatchToProps = (dispatch : Dispatch) => ({

});

const AppViewInitializer = compose<AppComponentState, {}>(
    setDisplayName("App Smart Component"),
    connect(mapPropsToState, mapDispatchToProps)
)(AppSmartView);

export default AppViewInitializer;