import React from "react";
import "../../styles/PeacekeepersNoItemsFound.css";

export const NoItemsFound : React.FC = () => {
    return (
        <div className = "box customBoxClass is-size-4">
            Nothing to show for now. Check back later...
        </div>
    );
}