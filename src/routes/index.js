import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import * as Pages from "../pages"

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Pages.LoginPage />
        </Route>
        <Route path="/login">
          <Pages.LoginPage />
        </Route>
        <Route path="/register">
          <Pages.RegisterPage />
        </Route>
        <Route path="/dashboard">
          <Pages.DashboardPage />
        </Route>
        <Route path="/users">
          <Pages.UsersPage />
        </Route>
      </Switch>
    </Router>
  )
}