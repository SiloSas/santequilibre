import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch, useParams } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import Components from "./Components/Components.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import Sylvie_Bonnassieux from "./Sylvie_Bonnassieux/Sylvie_Bonnassieux.jsx";
import Nathalie_Pardo from "./Nathalie_Pardo/Nathalie_Pardo.jsx";
import Chrystel_Diener from "./Chrystel_Diener/Chrystel_Diener.jsx";
import ProfilePage from "./ProfilePage/ProfilePage.jsx";
import teamData from "assets/json/team"

let hist = createMemoryHistory();


export default () => (
  <Router history={hist}>
    <div>
      <Route path="/" component={LandingPage} />
      <Route path="/Sylvie_Bonnassieux" component={Sylvie_Bonnassieux} />
      <Route path="/Nathalie_Pardo" component={Nathalie_Pardo} />
      <Route path="/Chrystel_Diener" component={Chrystel_Diener} />
    </div>
  </Router>
);
