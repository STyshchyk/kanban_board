module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'npm init @eslint/config -- --config semistandardodule',
    tsconfigRootDir: './',
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
