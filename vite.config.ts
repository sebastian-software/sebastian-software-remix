import { vitePlugin as remix } from "@remix-run/dev"
import { installGlobals } from "@remix-run/node"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import { vercelPreset } from "@vercel/remix/vite"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

installGlobals()

// SST is 1 if SST is used for deployment
const presets = process.env.SST === "1" ? [] : [vercelPreset()]

export default defineConfig({
  plugins: [remix({ presets }), tsconfigPaths(), vanillaExtractPlugin()]
})
