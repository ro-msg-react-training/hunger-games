import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, Redirect } from "react-router";

import { store } from "./state/store";
import { history } from "./state/history";
import { Home } from "./component/example/home";
import { SmartExampleList } from "./component/example/smart-example-list";
import { NavbarDumpView } from "./component/Navbar/NavbarDumpView";
import { LoginDisplay } from "./component/Login/dumbLogin";

const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <NavbarDumpView />
      <Switch>
        <Redirect exact from = "/" to = "/districts"/>
        <Route path = "/districts" exact component = {Home} />
        <Route path = "/districts/:id" exact component = {Home} />
        <Route path = "/demands" exact component = {Home} />
        <Route path = "/peacekeepers" exact component = {Home} />
        <Route path = "/peacekeepers/:id" exact component = {Home} />
        <Route path = "/register" exact component = {Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/examples" component={SmartExampleList} />
        <Route exact path="/login" component={LoginDisplay}/>
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
