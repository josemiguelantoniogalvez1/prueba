import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as Pages from "../pages"

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Pages.LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}