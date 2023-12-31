module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
      typescript: {},
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: '**/tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    // dando erro de CF LF
    'linebreak-style': 'off',

    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],

    'react/style-prop-object': 'off',

    // Poder usar stylesheet na ordem que quiser
    'no-use-before-define': ['error', { variables: false }],

    // Componentes em react native podem ser nested
    'react/no-unstable-nested-components': 'off',

    'no-undef': 'off',

    'import/extensions': 'off',

    'prettier/prettier': ['error'],

    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    'react/prop-types': 'off', // Since we do not use prop-types

    'react/require-default-props': 'off', // Since we do not use prop-types
  },
};
