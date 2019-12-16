import React from "react";
import { NotificationDumpView } from "./NotificationDumpView";
import { GlobalState } from "../../ReduxStore";
import { Dispatch } from "redux";
import { compose, setDisplayName } from "recompose";
import { connect } from "react-redux";
import { hideNotification } from "../../ReduxStore/NotificationSection/actions";

export interface NotificationComponentState {
    message: string;
    color: string;
    isVisible: boolean;
    onClickEventHandler: () => void;
}

class NotificationSmartView extends React.Component<NotificationComponentState> {
    performAutoHideNotification = () => {
        if (this.props.isVisible) {
            this.props.onClickEventHandler();
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.performAutoHideNotification()
        }, 7000);
    }

    render() {
        return (
            <NotificationDumpView {...this.props} />
        );
    }
}

const mapStateToProps = (state: GlobalState) => ({
    message: state.notReducer.message,
    color: state.notReducer.color,
    isVisible: state.notReducer.isVisible
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onClickEventHandler: () => dispatch(hideNotification())
});

const NotificationInitializer = compose<NotificationComponentState, {}>(
    setDisplayName("Notification Component"),
    connect(mapStateToProps, mapDispatchToProps)
)(NotificationSmartView);

export default NotificationInitializer;