import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from "../Screens/HomePage/index";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={HomePage} />
    </BrowserRouter>
  );
};

export default Navigation;
