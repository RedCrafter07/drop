import { defineConfig } from "vite";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte"

export default defineConfig({
  appType: "spa",
  plugins: [svelte({ preprocess: vitePreprocess() })],
  root: "./src/client/"
})
