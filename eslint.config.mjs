import js from '@eslint/js'; 
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier'; 
import prettierPlugin from 'eslint-plugin-prettier'; 
import vue from 'eslint-plugin-vue'; 

export default [
  {
  
    files: ['**/*.vue', '**/*.js', '**/*.ts'],
    ignores: ['node_modules/**'], 

    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module', 
      },
      globals: {
        window: 'readonly', 
        process: 'readonly', 
      },
    },

    plugins: {
      vue,
      '@typescript-eslint': typescript,
      prettier: prettierPlugin,
    },

    rules: {
      ...js.configs.recommended.rules,

      ...vue.configs['recommended'].rules,

      ...typescript.configs['recommended'].rules,

      ...prettier.rules, 
      'prettier/prettier': 'error',  
    },

    settings: {
      vue: {
        version: 'detect', 
      },
    },
  },
];
