import React from "react";
import "../../styles/PeacekeepersNoItemsFound.css";

export const NoItemsFound : React.FC<{message : string}> = (props : any) => {
    return (
        <div className = "box customBoxClass is-size-4">
            {props.message}
        </div>
    );
}