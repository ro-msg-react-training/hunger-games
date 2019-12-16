import React from "react";
import { IUser } from "../../model/entites";
import { RegisterDumpView } from "./dumbRegister";
import { GlobalState } from "../../ReduxStore";
import { Dispatch } from "redux";
import { setDisplayName, compose } from "recompose";
import { connect } from "react-redux";
import { cloneDeep } from "lodash";
import { updateUserValues, registerEventHandler, loginFromRegiterEventHandler } from "../../ReduxStore/RegisterSection/actions";
import { showNotification } from "../../ReduxStore/NotificationSection/actions";

export interface RegisterComponentState {
    userInfo: IUser;
    activateNavbar: boolean;
    onUsernameChange: (props: RegisterComponentState, value: string) => void;
    onPasswordChange: (props: RegisterComponentState, value: string) => void;
    onEmailChange: (props: RegisterComponentState, value: string) => void;
    saveUserData: (props: RegisterComponentState) => void;
}

class RegisterSmartView extends React.Component<RegisterComponentState> {
    render() {
        return (
            <RegisterDumpView {...this.props} />
        );
    }
}

const checkInputFields = (dispatch : Dispatch, userData : IUser) : boolean => {
    let operationStatus : boolean = true;

    if(userData.username.length === 0) {
        dispatch(showNotification("Username can't be empty!", "warning"));
        operationStatus = false;
    } else if(userData.username.length < 4 || userData.username.length > 21) {
        dispatch(showNotification("Username should have a length comprised between 4 and 20 characters!", "warning"));
        operationStatus = false;
    } else if(userData.password.length === 0) {
        dispatch(showNotification("Password can't be empty!", "warning"));
        operationStatus = false;
    } else if(userData.password.length < 4 || userData.password.length > 21) {
        dispatch(showNotification("The password should have a length comprised between 4 and 20 characters!", "warning"));
        operationStatus = false;
    } else if(userData.email.length === 0) {
        dispatch(showNotification("The email address can't be empty!", "warning"));
        operationStatus = false;
    } else if(!userData.email.endsWith("@msg.group")) {
        dispatch(showNotification("The email address should end in @msg.group!", "warning"));
        operationStatus = false;
    }

    return operationStatus;
}

const mapStateToProps = (state: GlobalState) => ({
    userInfo: state.registerReducerGlobal.userData,
    activateNavbar: state.registerReducerGlobal.activateNavbar
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onUsernameChange: (props: RegisterComponentState, value: string) => {
        let auxObject: IUser = cloneDeep(props.userInfo);

        auxObject.username = value;
        dispatch(updateUserValues(auxObject));
    },

    onPasswordChange: (props: RegisterComponentState, value: string) => {
        let auxObject: IUser = cloneDeep(props.userInfo);

        auxObject.password = value;
        dispatch(updateUserValues(auxObject))
    },

    onEmailChange: (props: RegisterComponentState, value: string) => {
        let auxObject: IUser = cloneDeep(props.userInfo);

        auxObject.email = value;
        dispatch(updateUserValues(auxObject))
    },

    saveUserData: (props: RegisterComponentState) => {
        if (checkInputFields(dispatch, props.userInfo)) {
            dispatch(showNotification("User  " + props.userInfo.username + " created successfully!", "success"));
            dispatch(registerEventHandler(props.userInfo));
            dispatch(loginFromRegiterEventHandler(props.userInfo));
        }
    }
});

const RegisterViewInitializer = compose<RegisterComponentState, {}>(
    setDisplayName("Register Smart Component"),
    connect(mapStateToProps, mapDispatchToProps)
)(RegisterSmartView);

export default RegisterViewInitializer;