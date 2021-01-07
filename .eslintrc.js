module.exports = {
  extends: ['airbnb-typescript', 'plugin:jest/recommended'],
  plugins: ['jest'],
  parserOptions: {
    project: './tsconfig.json',
  },

  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },

  rules: {
    // We do export
    'jest/no-export': 'off',

    // some props require dangle
    'no-underscore-dangle': 'off',

    // sometimes it is better
    'no-nested-ternary': 'off',

    // controlled with prettier
    'arrow-parens': 'off',
    'function-paren-newline': 'off',

    // disabled for condition && someFunc()
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',

    // backend developers like _, no need to transform data all the time
    camelcase: 'off',

    // just the formatting issues, prettier does all the job
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'spaced-comment': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],

    '@typescript-eslint/comma-dangle': 'off',

    // increase max line length to 100
    'max-len': [
      'error',
      120,
      {
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // pray that backend developer will send sanatized html
    'react/no-danger': 'off',

    // we are not ready for these rules yet
    'react/static-property-placement': 'off',
    'react/require-default-props': 'off',

    // these rules are bullshit
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',

    // these are tottaly useless
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',

    // sort react component properties whatever you like
    'react/sort-comp': 'off',

    // sometimes there is no alternative
    'react/no-array-index-key': 'off',

    // redux actions do not work well with this
    'import/prefer-default-export': 'off',

    // does not matter for monorepo
    'import/no-extraneous-dependencies': 'off',

    // this rule throws an error with imported prop-types
    // https://github.com/yannickcr/eslint-plugin-react/issues/1389
    'react/no-typos': 'off',

    // sometimes you need to pass object, e.g. styles
    'react/forbid-prop-types': 'off',

    // rules are broken and provide falsy mistakes
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/anchor-is-valid': 'off',

    // it does not spoil anything if used wisely
    'jsx-a11y/no-autofocus': 'off',

    // usefull for underscore dangaled components names
    'react/jsx-pascal-case': 'off',

    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/naming-convention': 'off',

    'no-confusing-arrow': 'off',
    'class-methods-use-this': 'off',
  },
};
