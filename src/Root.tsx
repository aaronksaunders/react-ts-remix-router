import { useTransition } from "react";
import * as React from "react";
import { Outlet, useLoaderData, useRouteError } from "react-router-dom";
import { CustomNavLink } from "./components/CustomNavLink";

let sleep = () => new Promise((r) => setTimeout(r, 300));

const Root = () => {
  // components access route data with this hook, data is guaranteed
  // to be here, error free, and no pending states to deal with in
  // every component that has a data dependency (also helps with
  // removing Content Layout Shift).
  let data = useLoaderData();

  return (
    <div className="ui container" style={{ marginTop: 40 }}>
      <CustomNavLink to="/teams" title="View Teams"></CustomNavLink>
      <CustomNavLink to="/players" title="View All Players"></CustomNavLink>
      <Header user={data.user} />
      <Outlet />
    </div>
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
    <div>
      <h2>Error in Root</h2>
      <p>{JSON.stringify(error)}</p>
    </div>
  );
};

export { Root as Component, loader, Error };
