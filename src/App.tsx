import * as React from "react";
import "./style.css";

import { DataBrowserRouter, Route } from "react-router-dom";
import * as Root from "./Root";
import Team from "./teams/Team";
import Players from "./teams/Players";
import AllPlayers from "./teams/AllPlayers";

import {setupIonicReact,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

setupIonicReact();

const BigSpinner = () => {
  return <p>LOADING... BIG SPINNER</p>;
};

const GlobalErrorPage = () => {
  return <p>ERROR</p>;
};

const App = () => {
  return (
    <DataBrowserRouter
      // if you're not server rendering, this manages the
      // initial loading state
      fallbackElement={<BigSpinner />}
    >
      <Route
        element={<Root.Component />}
        loader={Root.loader}
        errorElement={<Root.Error />}
        path="/"
      >
        <Route
          path="players"
          element={<AllPlayers />}
          loader={AllPlayers.loader}
        ></Route>
        <Route path="teams" element={<Team />} loader={Team.loader}>
          <Route
            path=":teamId/players"
            element={<Players />}
            loader={Players.loader}
            errorElement={<Players.Error />}
          ></Route>
        </Route>
      </Route>
    </DataBrowserRouter>
  );
};

export default App;
