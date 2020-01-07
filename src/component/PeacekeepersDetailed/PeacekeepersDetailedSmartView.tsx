import React from "react";
import { PeacekeepersDetailedDumpView } from "./PeacekeepersDetailedDumpView";
import { GlobalState } from "../../ReduxStore";
import { Dispatch } from "redux";
import { compose, setDisplayName } from "recompose";
import { connect } from "react-redux";

export interface PeacekeepersDetailedViewState {
    match : any;
}

class PeacekeepersDetailedSmartView extends React.Component<PeacekeepersDetailedViewState> {
    render() {
        return (
            <PeacekeepersDetailedDumpView {...this.props}/>
        );
    }
}

const mapStateToProps = (state : GlobalState) => ({

});

const mapDispatchToProps = (dispatch : Dispatch) => ({

});

const PeacekeepersDetailedViewInitializer = compose<PeacekeepersDetailedViewState, {}>(
    setDisplayName("Peacekeepers Detailed Smart View"),
    connect(mapStateToProps, mapDispatchToProps)
)(PeacekeepersDetailedSmartView);

export default PeacekeepersDetailedViewInitializer;