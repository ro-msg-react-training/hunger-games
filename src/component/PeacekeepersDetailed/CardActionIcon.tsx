import React from "react";
import { FaPen, FaCheck } from "react-icons/fa";

export interface ThisElemetInterface {
    user1 : boolean;
    user2 : boolean;
}

export const CardActionIcon: React.FC<ThisElemetInterface> = (props : ThisElemetInterface) => {
    if(props.user1 && props.user2) {
        return (
            <FaCheck className = "paymentCardActionIcon"/>
        );
    } else if(!props.user1 && !props.user2) {
        return (
            <FaPen className = "paymentCardActionIcon"/>
        );
    } else {
        return (
            <div></div>
        );
    }
}