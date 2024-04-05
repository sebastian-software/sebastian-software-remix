import { recommended } from "@effective/eslint-config"

export default [
  recommended,
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
