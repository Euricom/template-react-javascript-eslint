# Getting Started with Create React App

## ESlint/Prettier

DevDependencies

```
"eslint-config-airbnb": "^18.2.1",
"eslint-config-prettier": "^8.3.0",
"eslint-plugin-jsx-a11y": "^6.4.1",
"eslint-plugin-prettier": "^4.0.0",
"prettier": "^2.4.1",
```

Scripts

```
"scripts": {
  "lint": "eslint -c .eslintrc.js --ext .js,.jsx,.ts,.tsx .",
  "lint:fix": "npm run lint -- --fix",
}
```

Extra files

- eslintignore
- eslintrc.js
- .prettierrc

## Typescript support

DevDependencies

```
"@types/react": "^17.0.29",
"@typescript-eslint/eslint-plugin": "^4.28.0",
"@typescript-eslint/parser": "^4.28.0",
"eslint-config-airbnb-typescript": "^14.0.1",
"typescript": "^4.4.4"
```

Extra files

- tsconfig.json

## Environment files

```
"scripts": {
  "build": "sh -ac '. .env.${REACT_APP_ENV}; react-scripts build'",
  "build:dev": "REACT_APP_ENV=development npm run build",
  "build:prod": "REACT_APP_ENV=production npm run build",
  "build:staging": "REACT_APP_ENV=staging npm run build"
}
```

Extra files

- .env
- .env.development
- .env.development.local
- .env.production
- .env.staging

## I18n Parser

Extra files

- i18next.config.js

Scripts

```
"scripts": {
  "i18n:extract": "i18next --config ./i18next.config.js"
}
```
