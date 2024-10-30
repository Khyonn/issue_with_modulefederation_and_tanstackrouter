import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <h1>MOTHER APP - HOME</h1>
      <p>First step : Please click on "Page 'foobar' in child app"</p>
    </>
  ),
});
