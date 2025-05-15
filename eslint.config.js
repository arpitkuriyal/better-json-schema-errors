import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
// @ts-expect-error No types available
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  importPlugin.flatConfigs.recommended, // eslint-disable-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  importPlugin.flatConfigs.typescript, // eslint-disable-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  stylistic.configs.customize({
    arrowParens: true,
    braceStyle: "1tbs",
    commaDangle: "never",
    jsx: false,
    quotes: "double",
    semi: true
  }),
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    settings: {
      "import/resolver": {
        typescript: {}
      }
    },
    rules: {
      // TypeScript
      "@typescript-eslint/no-unused-vars": ["error", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_"
      }],
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "no-console": "error",

      // Imports
      "import/extensions": ["error", "ignorePackages"],
      "import/no-named-as-default-member": "off",

      // Stylistic
      "@stylistic/yield-star-spacing": ["error", "after"],
      "@stylistic/multiline-ternary": "off",
      "@stylistic/no-mixed-operators": "off",
      "@stylistic/quote-props": ["error", "as-needed"]
    }
  }
);
