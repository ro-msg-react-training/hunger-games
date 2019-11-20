import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, Redirect } from "react-router";

import { store } from "./state/store";
import { history } from "./state/history";
import { Home } from "./component/example/home";
import { SmartExampleList } from "./component/example/smart-example-list";
import { LoginDisplay } from "./component/Login/dumbLogin";
import { RegisterDisplay } from "./component/Register/dumbRegister";

const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Redirect exact from = "/" to = "/login"/>
        <Route path = "/districts" exact component = {Home} />
        <Route path = "/districts/:id" exact component = {Home} />
        <Route path = "/demands" exact component = {Home} />
        <Route path = "/peacekeepers" exact component = {Home} />
        <Route path = "/peacekeepers/:id" exact component = {Home} />
        <Route exact path="/home" component={Home} /> 
        <Route exact path="/examples" component={SmartExampleList} />
        <Route exact path="/login" component={LoginDisplay}/>
        <Route exact path="/register" component={RegisterDisplay}/>
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
