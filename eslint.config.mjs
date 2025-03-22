import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config} */
export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'lf' }],
    },
  },
  pluginJs.configs.recommended,
  eslintPluginPrettier,
];
