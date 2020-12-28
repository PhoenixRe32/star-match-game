const OFF = 0, WARN = 1, ERROR = 2;

module.exports = {
  extends: ['react-app', 'plugin:jsx-a11y/recommended', 'plugin:react/recommended', 'plugin:import/recommended'],
  plugins: ['jsx-a11y'],
  rules: {
    // You can do your customizations here...
    // For example, if you don't want to use the prop-types package,
    // you can turn off that recommended rule with: 'react/prop-types': ['off']
    'semi': WARN,
    'quotes': [WARN, 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    'max-len': [
      WARN,
      { code: 120, ignoreComments: true, ignoreUrls: true, ignoreTemplateLiterals: true, ignoreStrings: true }
    ],

    'no-var': ERROR,
    'one-var': [WARN, 'never'],
    'prefer-const': WARN,
    'no-useless-return': WARN,
    'no-unneeded-ternary': WARN,
    'curly': WARN,
    'no-unused-expressions': [WARN, { allowShortCircuit: true, allowTernary: true }],
    'arrow-body-style': ["error", "as-needed"],

    'react/no-unescaped-entities': ERROR,
    'react/jsx-closing-bracket-location': [WARN, 'line-aligned'],

    'react/jsx-boolean-value': [WARN, 'never'],
    'react/jsx-first-prop-new-line': [WARN],
    'react/jsx-max-props-per-line': [WARN, { maximum: 1, when: 'multiline' }]
  },
};
