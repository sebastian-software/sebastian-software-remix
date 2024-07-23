import { main } from "@effective/eslint-config"

export default [
  {
    ignores: [".*/**/*", "build/**/*"]
  },
  main,
  {
    files: ["**/*.css.ts"],
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase"],
          leadingUnderscore: "forbid",
          trailingUnderscore: "forbid",
          filter: {
            regex: "[- ]",
            match: false
          }
        }
      ]
    }
  }
]
