import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./component/example/home";
import { SmartExampleList } from "./component/example/smart-example-list";
import { NavbarDumpView } from "./component/Navbar/NavbarDumpView";
import { LoginDisplay } from "./component/Login/dumbLogin";
import { RestaurantsListView } from "./component/Restaurants/dumbRestaurants";
import { RestaurantDishesDumpView } from "./component/RestaurantDishes/RestaurantDishesDumpView";
import { PeacekeepersDumpView } from "./component/Peacekeepers/PeacekeepersDumpView";

import { PeacekeepersDetailedDumpView } from "./component/PeacekeepersDetailed/PeacekeepersDetailedDumpView";

const App: React.FC = () => (
  <Router>
    <NavbarDumpView />
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/districts" exact component={RestaurantsListView} />
      <Route path="/districts/:id" exact render={(props) => <RestaurantDishesDumpView {...props} />} />
      <Route path="/demands" exact component={PeacekeepersDumpView} />
      <Route path="/peacekeepers" exact component={PeacekeepersDumpView} />
      <Route path="/peacekeepers/:id" exact render={(props) => <PeacekeepersDetailedDumpView {...props} />} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/examples" component={SmartExampleList} />
      <Route exact path="/login" component={LoginDisplay} />
      <Route exact path="/register" component={RegisterDisplay} />
    </Switch>
  </Router>
import { DemandsView } from "./component/Demands/DumbDemands";
import NotificationInitializer from "./component/Notification/NotificationSmartView";
import RegisterViewInitializer from "./component/Register/RegisterSmartComponent";

const App: React.FC = () => (
    <Router>
      <NavbarDumpView />
      <Switch>
        <Redirect exact from = "/" to = "/login"/>
        <Route path = "/districts" exact component = {RestaurantsListView } />
        <Route path = "/districts/:id" exact render = {(props) => <RestaurantDishesDumpView {...props}/>} />
        <Route path = "/demands" exact component = {PeacekeepersDumpView} />
        <Route path = "/peacekeepers" exact component = {PeacekeepersDumpView} />
        <Route path = "/demands" exact component = {DemandsView} />
        <Route path = "/peacekeepers" exact component = {Home} />
        <Route path = "/peacekeepers/:id" exact component = {Home} />
        <Route exact path="/home" component={Home} /> 
        <Route exact path="/examples" component={SmartExampleList} />
        <Route exact path="/login" component={LoginDisplay}/>
        <Route exact path="/register" component={RegisterViewInitializer}/>
      </Switch>
      <NotificationInitializer />
    </Router>
);

export default App;
