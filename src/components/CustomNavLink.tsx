import React from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

// from stack overflow.. still working on this
export const CustomNavLink = ({ to, title }: any) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  console.log(match)

  return (
    <NavLink
      className="ui button"
      to={to}
    >
      <span>{title}</span>
    </NavLink>
  );
};
