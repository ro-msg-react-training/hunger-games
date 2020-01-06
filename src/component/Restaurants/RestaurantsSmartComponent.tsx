import React from "react";
import { GlobalState } from "../../ReduxStore";
import { Dispatch } from "redux";
import { compose} from "recompose";
import { connect } from "react-redux";
import { IRestaurant } from "../../model/entites";
import { RestaurantsListView } from "./RestaurantDumbComponent";

export interface RestaurantsComponentState {
    restaurants: IRestaurant[];
    restaurantOrders: Map<string,number>
}

class RestaurantListSmartView extends React.Component<RestaurantsComponentState> {
    

    componentDidMount() {
        
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
    // onClickEventHandler: () => dispatch(hideNotification())
});

const RestaurantsInitializer = compose<RestaurantsComponentState, {}>(
    connect(mapStateToProps, mapDispatchToProps)
)(RestaurantListSmartView);

export default RestaurantsInitializer;