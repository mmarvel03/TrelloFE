import js from "@eslint/js";
import { Linter } from "eslint"; 

const config: Linter.FlatConfig[] = [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        browser: true,
        node: true,
        es2021: true,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  }
];

export default config;


/*

import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  }
];

*/