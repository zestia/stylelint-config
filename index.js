module.exports = {
  plugins: [
    'stylelint-selector-bem-pattern',
    'stylelint-declaration-use-variable',
    'stylelint-order',
    'stylelint-prettier'
  ],
  extends: [
    'stylelint-config-recommended',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier'
  ],
  rules: {
    'prettier/prettier': true,
    'plugin/selector-bem-pattern': {
      componentName: '^[a-z0-9-]+$',
      componentSelectors: {
        initial: '^\\.{componentName}|\\[.*{componentName}.*\\].*$',
        combined: '.*'
      }
    },
    'sh-waqar/declaration-use-variable': [
      [
        '/color/',
        'z-index',
        'line-height',
        {
          ignoreValues: [
            '/^darken/',
            '/^lighten/',
            '/^rgba/',
            'inherit',
            'transparent'
          ]
        }
      ]
    ],
    'order/order': [
      {
        type: 'at-rule',
        name: 'include'
      },
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: true
      },
      'declarations'
    ],
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['function', 'if', 'else', 'each', 'include', 'mixin']
    }],
    'at-rule-blacklist': ['extend'],
    'color-hex-length': 'short',
    'color-no-hex': true,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-no-important': true,
    'declaration-property-value-blacklist': {
      'font-size': ['13.5px'],
      'font-weight': ['500']
    },
    'font-family-name-quotes': 'always-where-required',
    'function-name-case': 'lower',
    'keyframes-name-pattern': /^[a-z0-9-]+$/,
    'length-zero-no-unit': true,
    'max-nesting-depth': 3,
    'no-descending-specificity': null, // enable me soon
    'no-missing-end-of-source-newline': true,
    'number-max-precision': 3,
    'property-no-vendor-prefix': true,
    'selector-class-pattern': [
      '^[a-z0-9-]+$',
      { resolveNestedSelectors: true }
    ],
    'selector-id-pattern': '^[a-z0-9-]+$',
    'selector-max-compound-selectors': 5,
    'selector-max-id': 0,
    'selector-max-type': 0,
    'selector-max-universal': 0,
    'selector-no-qualifying-type': [true, { ignore: ['attribute'] }],
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'shorthand-property-no-redundant-values': true,
    'unit-blacklist': ['rem', 'em'],
    'value-keyword-case': 'lower'
  }
};
