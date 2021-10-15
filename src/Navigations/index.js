import { Route } from "react-router-dom";

import HomePage from "../Screens/HomePage/index";

const Navigation = () => {
  return <Route path="/" component={HomePage} exact />;
};

export default Navigation;
