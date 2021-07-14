import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
    </Switch>
  );
}