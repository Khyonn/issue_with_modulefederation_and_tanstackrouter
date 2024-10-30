import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/foobar")({
  component: () => (
    <>
      <h1>CHILD APP - FOOBAR</h1>
      <p>Second step : Please click on "Not found"</p>
    </>
  ),
});
