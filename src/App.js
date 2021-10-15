import { BrowserRouter } from "react-router-dom";

import Navigation from "./Navigations/index";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
};

export default App;
