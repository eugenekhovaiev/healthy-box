module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-useless-constructor': ['error'],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'arrow-body-style': 'off',
    'class-methods-use-this': 'warn',

    'prettier/prettier': ['error'],

    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/function-component-definition': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      { some: ['nesting', 'id'] },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-named-as-default': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.ts', '.tsx'],
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: './tsconfig.app.json',
  },
};
