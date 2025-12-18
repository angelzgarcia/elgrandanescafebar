import path from "node:path";

import { defineConfig } from "vite";

const repoName = path.basename(process.cwd());

export default defineConfig(({ command }) => ({
  root: "src",
  base: command === "build" ? `/${repoName}/` : "/",
  publicDir: "../public",

  build: {
    outDir: "../docs",
    emptyOutDir: true
  }
}));
