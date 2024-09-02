/**
 * use the commands below when ESLint v9.+ will be released and it will support ESModules!
 *
 * @example
 *  import path from 'path';
 *  const __dirname = import.meta.dirname;
 *
 *  project: path.resolve(__dirname, 'configs/ts/tsconfig.json'),
 */

const path = require('path');

module.exports = {
  env: {
    browser: true,
    node: true,
    es2024: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['*.js'],
      extends: ['airbnb-base', 'prettier'],
    },
    {
      files: ['*.js', '*.jsx'],
      extends: [
        'airbnb-base',
        'airbnb',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
      ],
      plugins: ['react', 'react-hooks'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/react-in-jsx-scope': 'off', // For React 17+, you do not need to import React into JSX files
        // '@typescript-eslint/explicit-function-return-type': 'off' /*If you prefer not to specify the type of the return value of the functions  */,
        'jsx-a11y/label-has-associated-control': 'off', // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
        'jsx-a11y/control-has-associated-label': 'off', // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md
      },
    },
    {
      env: {
        mocha: true,
        jest: true,
      },
      files: ['**/*.test.js', '**/*.test.jsx', 'jest-setup.js'],
      extends: [
        'airbnb-base',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
        'prettier',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  rules: {},
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
};
