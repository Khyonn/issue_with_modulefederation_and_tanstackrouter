import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";

const App = lazy(() => import("child_app/App"));
export const Route = createFileRoute("/child-app/$")({
  component: () => <App basePath="/child-app" />,
});
