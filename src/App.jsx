import React from "react";
import Nagivation from "./components/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Nagivation />
      </Router>
    </>
  );
};

export default App;
