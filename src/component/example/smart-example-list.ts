import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import { ExampleList } from "./example-list";
import { State } from "../../state/state";
import { ExampleState } from "../../state/example/state";
import { Dispatch } from "redux";
import { loadExampleEntities } from "../../state/example/actions";

interface DispatchProps {
  onMount: () => void;
}

const mapStateToProps = (state: State) => state.example;
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onMount: () => dispatch(loadExampleEntities())
});

export const SmartExampleList = compose<ExampleState, {}>(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle<DispatchProps, {}>({
    componentDidMount() {
      this.props.onMount();
    }
  })
)(ExampleList);
