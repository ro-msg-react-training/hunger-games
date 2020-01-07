import React from "react";
import { LoginDisplay } from "./LoginDumbComponent";
import { GlobalState } from "../../ReduxStore";
import { connect } from "react-redux";
import { compose, setDisplayName } from "recompose";
import { IUser } from "../../model/entites";
import { cloneDeep } from "lodash";
import { Dispatch } from "redux";
import { updateLoginUserValues, loginEventHandler } from "../../ReduxStore/LoginSection/actions";
import Users from '../../MockupData/users.json';
import { showNotification } from "../../ReduxStore/NotificationSection/actions";

export interface LoginComponentState {
    userData: IUser;
    onUsernameChange: (props: LoginComponentState, value: string) => void;
    onPasswordChange: (props: LoginComponentState, value: string) => void;
    onLoginClick: (props: LoginComponentState) => void;
    isLoggedIn: boolean;
    history: any;
}

class LoginSmartView extends React.Component<LoginComponentState> {    
    componentDidMount() {
        this.props.history.replace("/login");
    }

    render() {
        return (
            <LoginDisplay {...this.props}/>
        );
    }
}

const checkInputFields = (dispatch: Dispatch, userData: IUser): boolean => {
    let operationStatus: boolean = true;

    if (userData.username.length === 0) {
        dispatch(showNotification("Username can't be empty!", "warning"));
        operationStatus = false;
    } else if (userData.username.length < 4 || userData.username.length > 21) {
        dispatch(showNotification("Username should have a length comprised between 4 and 20 characters!", "warning"));
        operationStatus = false;
    } else if (userData.password.length === 0) {
        dispatch(showNotification("Password can't be empty!", "warning"));
        operationStatus = false;
    } else if (userData.password.length < 4 || userData.password.length > 21) {
        dispatch(showNotification("The password should have a length comprised between 4 and 20 characters!", "warning"));
        operationStatus = false;
    }

    return operationStatus;
}

const findUserAndLogin = (props : LoginComponentState, dispatch: Dispatch, userData: IUser): void => {
    let userWasFound: boolean = false;

    for (let i: number = 0; i < Users.length; i++) {
        if (Users[i].username === userData.username && Users[i].password === userData.password) {
            dispatch(loginEventHandler(Users[i]));
            userWasFound = true;
        }
    }

    if (!userWasFound) {
        dispatch(showNotification("Wrong login credentials!", "danger"));
    }
}

const mapStateToProps = (state: GlobalState) => ({
    userData: state.loginReducerGlobal.userData,
    isLoggedIn: state.loginReducerGlobal.isLoggedIn
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onUsernameChange: (props: LoginComponentState, value: string) => {
        let auxObject: IUser = cloneDeep(props.userData);

        auxObject.username = value;
        dispatch(updateLoginUserValues(auxObject));
    },

    onPasswordChange: (props: LoginComponentState, value: string) => {
        let auxObject: IUser = cloneDeep(props.userData);

        auxObject.password = value;
        dispatch(updateLoginUserValues(auxObject));
    },

    onLoginClick: (props: LoginComponentState) => {
        if (checkInputFields(dispatch, props.userData)) {
            findUserAndLogin(props, dispatch, props.userData);
        }
    }
});

const LoginViewInitializer = compose<LoginComponentState, {}>(
    setDisplayName("Login Smart Component"),
    connect(mapStateToProps, mapDispatchToProps)
)(LoginSmartView);

export default LoginViewInitializer;