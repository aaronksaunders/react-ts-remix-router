import { useTransition } from "react";
import * as React from "react";
import {
  Outlet,
  useLoaderData,
  useRouteError,
  NavLink,
} from "react-router-dom";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/react";

let sleep = () => new Promise((r) => setTimeout(r, 300));

const Root = () => {
  // components access route data with this hook, data is guaranteed
  // to be here, error free, and no pending states to deal with in
  // every component that has a data dependency (also helps with
  // removing Content Layout Shift).
  let data = useLoaderData();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic React w/Remix-Router</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <div className="ui container" style={{ marginTop: 40 }}>
          <NavLink to="/teams" title="View Teams">
            <IonButton>View Teams</IonButton>
          </NavLink>
          <NavLink to="/players" title="View All Players">
            <IonButton>View All Players</IonButton>
          </NavLink>
          <Header user={data.user} />
          <Outlet />
        </div>
      </IonContent>
    </IonPage>
  );
};

/**
 *
 * @returns some dummy response
 */
const loader = async () => {
  await sleep();
  return {
    user: "Aaron Saunders",
  };
};

const Header = ({ user }: any) => {
  return <h2>{user}</h2>;
};

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ERROR PAGE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <div>
          <h2>Error in Root</h2>
          <p>{JSON.stringify(error)}</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export { Root as Component, loader, Error };
