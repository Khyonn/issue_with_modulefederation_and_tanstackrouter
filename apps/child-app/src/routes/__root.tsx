import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <Outlet />
    </div>
  ),
});
