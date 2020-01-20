import React from "react";
import { FaPen, FaCheck } from "react-icons/fa";
import { PKDCardActionItemState } from "./PeacekeepersDetailedSmartView";

export const CardActionIcon: React.FC<PKDCardActionItemState> = (props : PKDCardActionItemState) => {
    if(!props.receivedChange) {
        return (
            <FaCheck className = "paymentCardActionIcon"/>
        );
    } else {
        return (
            <FaPen className = "paymentCardActionIcon"/>
        );
    }
}