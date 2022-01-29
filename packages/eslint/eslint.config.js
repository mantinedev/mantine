module.exports = {
  extends: ['airbnb-typescript', 'plugin:jest/recommended'],
  plugins: ['jest', 'import', 'react', 'jsx-a11y'],

  rules: {
    'max-len': [
      'error',
      100,
      {
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // typescript-eslint overrides
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-bind': 'off',

    // @mantine/tests require jest exports
    'jest/no-export': 'off',

    // This looks very messy in editor
    'jest/expect-expect': 'off',

    // sometimes it is better
    'no-nested-ternary': 'off',

    // Usually default case is not required
    'default-case': 'off',

    // controlled with prettier
    'arrow-parens': 'off',
    'function-paren-newline': 'off',
    'react/jsx-curly-newline': 'off',

    // disabled for condition && someFunc()
    'no-unused-expressions': 'off',

    // backend developers like _, no need to transform data all the time
    camelcase: 'off',

    // just the formatting issues, prettier does all the job
    'react/jsx-indent': 'off',
    'react/jsx-wrap-multilines': 'off',
    'no-confusing-arrow': 'off',
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

    // these are totally useless
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/static-property-placement': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'react/sort-comp': 'off',
    'react/no-danger': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'import/prefer-default-export': 'off',

    // sometimes there is no alternative
    'react/no-array-index-key': 'off',

    // does not matter for monorepo
    'import/no-extraneous-dependencies': 'off',

    // rules are broken and provide falsy mistakes
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/anchor-is-valid': 'off',

    // it does not spoil anything if used wisely
    'jsx-a11y/no-autofocus': 'off',
  },
};
