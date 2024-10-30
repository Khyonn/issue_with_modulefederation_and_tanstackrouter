import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <nav style={{ backgroundColor: "#b5b5ff", color: "white", display: "flex", gap: "1rem", padding: "1rem  2rem" }}>
        <Link style={{ color: "white" }} to="/">
          Home
        </Link>
        <Link style={{ color: "white" }} to={"/child-app/foobar" as string}>
          Page "foobar" in child app
        </Link>
        <Link style={{ color: "white" }} to={"/not-found" as string}>
          Not found
        </Link>
      </nav>
      <Outlet />
    </React.Fragment>
  ),
});
