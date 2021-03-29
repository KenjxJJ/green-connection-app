import React from "react";
import Nagivation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AboutUsPage from "./pages/AboutUsPage";
import TraceProductPage from "./pages/TraceProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import AddNewProductPage from "./pages/AddNewProductPage";
import CreateNewPackage from "./pages/CreateNewPackagePage";

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
            <Route path="/about-us" component={AboutUsPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/create-package" component={CreateNewPackage} />
            <Route path="/add-product" component={AddNewProductPage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/product/:id" component={ProductDetailsPage} />
          </Switch>
        </Router>
      </ProductDetailsContextProvider>
    </>
  );
};

export default App;
