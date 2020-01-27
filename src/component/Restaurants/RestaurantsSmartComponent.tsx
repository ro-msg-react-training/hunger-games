import React from "react";
import { GlobalState } from "../../ReduxStore";
import { Dispatch } from "redux";
import { compose} from "recompose";
import { connect } from "react-redux";
import { IRestaurant } from "../../model/entites";
import { RestaurantsListView } from "./RestaurantDumbComponent";
import { changeActiveTab } from "../../ReduxStore/NavbarSection/actions";

export interface RestaurantsComponentState {
    restaurants: IRestaurant[];
    restaurantOrders: Map<string,number>;
    setActiveTab:() => void;
}

class RestaurantListSmartView extends React.Component<RestaurantsComponentState> {
    componentDidMount() {
        this.props.setActiveTab();
    }

    render() {
        return (
            <RestaurantsListView {...this.props} />
        );
    }
}

const mapStateToProps = (state: GlobalState) => ({
    restaurants: state.restReducer.restaurants,
    restaurantOrders: state.restReducer.restaurantOrders
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    setActiveTab: () => {
        dispatch(changeActiveTab("districts"));
    }
});

const RestaurantsInitializer = compose<RestaurantsComponentState, {}>(
    connect(mapStateToProps, mapDispatchToProps)
)(RestaurantListSmartView);

export default RestaurantsInitializer;