import mdx from "@mdx-js/rollup"
import { vitePlugin as remix } from "@remix-run/dev"
import { installGlobals } from "@remix-run/node"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import { vercelPreset } from "@vercel/remix/vite"
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

installGlobals()

// SST is 1 if SST is used for deployment
const presets = process.env.SST === "1" ? [] : [vercelPreset()]

export default defineConfig({
  build: {
    assetsInlineLimit(filePath) {
      if (filePath.includes("/favicon/")) {
        return false
      }

      // return nothing => default behavior
    }
  },
  plugins: [
    mdx({ remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter] }),
    remix({ presets }),
    tsconfigPaths(),
    vanillaExtractPlugin()
  ]
})
