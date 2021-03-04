module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest": true
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "2017",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["babel", "react", "import", "prettier"],
  rules: {
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "import/named": "error",
    "prettier/prettier": "error",
    "react/no-typos": "error",
    "react/no-unused-state": "error",
    "react/jsx-no-bind": "error",
    "array-callback-return": "error",
    "consistent-return": "error",
    "babel/no-invalid-this": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "prettier/prettier": ["error", {
      "endOfLine": "auto"
    }],
  },
  settings: {
    react: {
      pragma: "React",
      version: "15.0",
      flowVersion: "0.63.1",
    },
  },
  "overrides": [
    {
      "files": [
        "**/*.spec.js",
        "**/*.spec.jsx"
      ],
      "env": {
        "jest": true
      }
    }
  ]
};
