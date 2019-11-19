import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, Redirect } from "react-router";

import { store } from "./state/store";
import { history } from "./state/history";
import { Home } from "./component/example/home";
import { SmartExampleList } from "./component/example/smart-example-list";
import { LoginDisplay } from "./component/Login/dumbLogin";

const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LoginDisplay {...{} as any}></LoginDisplay>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/examples" component={SmartExampleList} />
        <Route exact path="/login" component={LoginDisplay}/>
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
