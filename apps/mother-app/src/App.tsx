import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
export default function App({ basePath }: { basePath?: string }) {
  return (
    <StrictMode>
      <RouterProvider router={router} basepath={basePath} />
    </StrictMode>
  );
}
