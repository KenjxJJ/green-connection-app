import React from "react";
import Nagivation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TraceProduct from "./pages/TraceProductPage";

const App = () => {
  return (
    <>
      <Router>
        <Nagivation />

        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/trace" component={TraceProduct}/>
        </Switch>

      </Router>
    </>
  );
};

export default App;
