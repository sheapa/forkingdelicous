/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/user";
import Landing from "./pages/landing";

function App() {
    return (
      <Router>
        <Switch>
        <div>
          <Route exact path={["/", "/landing"]}>
          <Landing />
          </Route>
        </div>
        <div>
          <Route exact path="/user">
            <User />
          </Route>
        </div>
        </Switch>
      </Router>
    );
}

export default App;
