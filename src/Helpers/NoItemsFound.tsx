import React from "react";
import "../styles/PeacekeepersNoItemsFound.scss";

export const NoItemsFound : React.FC<{message : string}> = (props : any) => {
    return (
        <div className = "box noItemsFoundCard is-size-4">
            {props.message}
        </div>
    );
}