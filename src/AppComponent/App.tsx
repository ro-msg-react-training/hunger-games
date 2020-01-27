import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import NotificationInitializer from "../component/Notification/NotificationSmartView";
import RegisterViewInitializer from "../component/Register/RegisterSmartComponent";
import NavbarInitializer from "../component/Navbar/NavbarSmartView";
import LoginViewInitializer from "../component/Login/LoginSmartComponent";
import { AppComponentState } from "./AppSmartComponent";
import RestaurantDishesViewInitializer from "../component/RestaurantDishes/RestaurantDishesSmartView";
import PeacekeepersDetailedViewInitializer from "../component/PeacekeepersDetailed/PeacekeepersDetailedSmartView";
import PeacekeepersViewInitializer from "../component/Peacekeepers/PeacekeepersSmartView";
import RestaurantsInitializer from "../component/Restaurants/RestaurantsSmartComponent";
import DemandsInitializer from "../component/Demands/DemandsSmartComponent";

const App: React.FC<AppComponentState> = (props: AppComponentState) => {
  if (!props.userIsLoggedIn) {
    return (
      <Router>
        <NavbarInitializer />
        <Switch>
          <Route exact path="/login" component={LoginViewInitializer} />
          <Route exact path="/register" component={RegisterViewInitializer} />
          <Route path="/login:a" component={LoginViewInitializer} />
          <Route path="/register:a" component={RegisterViewInitializer} />
          <Route path="/" component={LoginViewInitializer} />
        </Switch>
        <NotificationInitializer />
      </Router>
    );
  } else {
    return (
      <Router>
        <NavbarInitializer />
        <Switch>
          <Redirect exact from="/" to="/districts" />
          <Route path="/districts" exact component={RestaurantsInitializer} />
          <Route
            path="/districts/:id"
            exact
            render={props => <RestaurantDishesViewInitializer {...props} />}
          />
          <Route path="/demands" exact component={DemandsInitializer} />
          <Route
            path="/peacekeepers"
            exact
            component={PeacekeepersViewInitializer}
          />
          <Route
            path="/peacekeepers/:id"
            exact
            render={props => <PeacekeepersDetailedViewInitializer {...props} />}
          />
          <Route exact path="/login" component={LoginViewInitializer} />
          <Route exact path="/register" component={RegisterViewInitializer} />
        </Switch>
        <NotificationInitializer />
      </Router>
    );
  }
};

export default App;
