import React from "react";
import "./App.css";
import "tailwindcss/dist/base.css";
import { MainWrapper } from "./components/UI_styled-components/UI";
import LandingPage from "./views/LandingPage";
import VehiclePage from "./views/VehiclePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainWrapper>
            <LandingPage />
          </MainWrapper>
        </Route>
        <Route path="/vehicle">
          <MainWrapper>
            <VehiclePage />
          </MainWrapper>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
