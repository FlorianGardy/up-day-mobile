import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login.page.jsx";
import Events from "./pages/Events.page.jsx";
import Defecation from "./pages/Defecation.page.jsx";
import Drink from "./pages/Drink.page.jsx";
import About from "./pages/About.page.jsx";
import History from "./pages/History.page.jsx";
import Urination from "./pages/Urination.page.jsx";

function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/events" exact component={Events} />
          <Route path="/defecation" exact component={Defecation} />
          <Route path="/drink" exact component={Drink} />
          <Route path="/about" exact component={About} />
          <Route path="/history" exact component={History} />
          <Route path="/urination" exact component={Urination} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
