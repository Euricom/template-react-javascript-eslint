module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true, // Defines things like process.env when generating through node
  },
  extends: ['react-app', 'airbnb', 'plugin:jsx-a11y/recommended', 'prettier'],
  parser: 'babel-eslint', // Uses babel-eslint transforms.
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['jsx-a11y', 'prettier'],
  root: true,
  settings: {
    react: {
      version: 'detect', // Detect react version
    },
    'import/resolver': {
      node: {
        // allow typescript files
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    // Override for typescript files
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: ['react-app', 'airbnb', 'airbnb-typescript', 'plugin:jsx-a11y/recommended', 'prettier'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'no-array-constructor': 'off',
        'lines-between-class-members': 'off',
        'react/react-in-jsx-scope': 'off',
        'arrow-body-style': ['warn'],

        'import/prefer-default-export': ['warn'],

        '@typescript-eslint/no-array-constructor': 'warn',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/indent': 'off', // prettier is handling this
      },
    },
  ],
  rules: {
    'no-console': ['warn'],
    'no-debugger': ['error'],
    'linebreak-style': 'off', // Don't play nicely with Windows
    'no-unused-vars': 'warn',
    'consistent-return': 'off',
    'no-plusplus': 'off',
    'no-useless-constructor': 'off',
    'arrow-body-style': ['warn'],

    'react/react-in-jsx-scope': 'off', // for react 17
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': ['off'],
    'react/forbid-prop-types': ['off'],
    'react/sort-comp': ['off'],

    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
  },
};
