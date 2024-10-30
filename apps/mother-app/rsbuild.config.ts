import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { dependencies } from "./package.json";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "mother_app",
      remotes: {
        child_app: "child_app@http://localhost:3001/mf-manifest.json",
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
    port: 3000,
  },
});
