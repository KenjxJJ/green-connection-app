import React from "react";
import Nagivation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TraceProductPage from "./pages/TraceProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";

import ProductDetailsContextProvider from "./contexts/ProductDetailsContext";

const App = () => {
  return (
    <>
      <ProductDetailsContextProvider>
        <Router>
          <Nagivation />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/trace" component={TraceProductPage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/product/:id" component={ProductDetailsPage} />
          </Switch>
        </Router>
      </ProductDetailsContextProvider>
    </>
  );
};

export default App;
