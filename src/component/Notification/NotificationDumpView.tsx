import React from "react";
import "../../styles/notification.scss";
import { NotificationComponentState } from './NotificationSmartView';

export const NotificationDumpView: React.FC<NotificationComponentState> = (props: NotificationComponentState) => {
    setTimeout(() => {
        console.log("Au trecut 5 secunde de cand a fost afisata initial notificarea");
    }, 5000)

    if (props.isVisible) {
        return (
            <div id="notificationComponent">
                <div className={"notification is-" + props.color}>
                    <button className="delete"></button>
                    {props.message}
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}