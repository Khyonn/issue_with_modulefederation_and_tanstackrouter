import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { dependencies } from "./package.json";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "child_app",
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: Object.fromEntries(Object.keys(dependencies).map((key) => [key, { singleton: true }])),
    }),
  ],
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack()],
    },
  },
  server: {
    port: 3001,
  },
});
