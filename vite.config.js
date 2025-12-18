import path from "node:path";

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isGitHubPages = true;
const repoName = path.basename(process.cwd()); // nombre del repo
const mode = process.env.NODE_ENV === "production" ? "production" : "development";

const base =
  mode === "production" && isGitHubPages
    ? `/${repoName}/`
    : "/";

export default defineConfig({
  root: "src",
  base,
  mode,
  envDir: "../",
  publicDir: "../public",
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname
    }
  },
  build: {
    outDir: "../docs",
    assetsDir: ".", 
    emptyOutDir: true
  }
});
