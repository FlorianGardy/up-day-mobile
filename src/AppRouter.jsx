import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login.page.jsx";
import Defecation from "./pages/Defecation.page.jsx";
import Drink from "./pages/Drink.page.jsx";
import Infos from "./pages/Infos.page.jsx";
import History from "./pages/History.page.jsx";
import Urination from "./pages/Urination.page.jsx";
import Activity from "./pages/Activity.page.jsx";
import Summary from "./pages/Summary.page.jsx";

function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/events/summary" exact component={Summary} />
          <Route path="/events/defecation" exact component={Defecation} />
          <Route path="/events/drink" exact component={Drink} />
          <Route path="/events/urination" exact component={Urination} />
          <Route path="/events/activity" exact component={Activity} />
          <Route path="/history" exact component={History} />
          <Route path="/about" exact component={Infos} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
