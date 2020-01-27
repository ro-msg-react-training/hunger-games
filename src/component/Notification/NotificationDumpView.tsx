import React from "react";
import "../../styles/notification.scss";
import { NotificationComponentState } from "./NotificationSmartView";

export const NotificationDumpView: React.FC<NotificationComponentState> = (
  props: NotificationComponentState
) => {
  if (props.isVisible) {
    return (
      <div id="notificationComponent">
        <div className={"notification is-" + props.color}>
          <button
            className="delete"
            onClick={() => props.onClickEventHandler()}
          ></button>
          {props.message}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
