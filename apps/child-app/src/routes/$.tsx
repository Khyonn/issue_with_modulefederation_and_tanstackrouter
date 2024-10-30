import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
  component: () => (
    <>
      <h1>CHILD APP - NOT FOUND</h1>
      <p>As you can see the URL is now "/child-app/not-found" instead of "/child-app/foobar"</p>
    </>
  ),
});
