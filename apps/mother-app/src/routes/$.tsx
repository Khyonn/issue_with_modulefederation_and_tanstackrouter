import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
  component: () => (
    <>
      <h1>MOTHER APP - NOT FOUND</h1>
      <p>Last step : Please click back()</p>
    </>
  ),
});
