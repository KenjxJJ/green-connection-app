import React from "react";
import Nagivation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Router>
        <Nagivation />

        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>

      </Router>
    </>
  );
};

export default App;
