module.exports = {
  plugins: [
    'stylelint-selector-bem-pattern',
    'stylelint-declaration-use-variable',
    'stylelint-order',
    'stylelint-prettier'
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended'
  ],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['function', 'if', 'else', 'each', 'include', 'mixin', 'return']
    }],
    'at-rule-blacklist': ['extend'],
    'color-no-hex': true,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-no-important': true,
    'declaration-property-value-blacklist': {
      'font-size': ['13.5px'],
      'font-weight': ['500']
    },
    'font-family-name-quotes': 'always-where-required',
    'keyframes-name-pattern': /^[a-z0-9-]+$/,
    'max-nesting-depth': 3,
    'no-descending-specificity': null, // enable me soon
    'number-max-precision': 3,
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
    'plugin/selector-bem-pattern': {
      componentName: '^[a-z0-9-]+$',
      componentSelectors: {
        initial: '^\\.{componentName}|\\[.*{componentName}.*\\].*$',
        combined: '.*'
      }
    },
    'property-blacklist': ['overflow-x', 'overflow-y'],
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
    'shorthand-property-no-redundant-values': true,
    'sh-waqar/declaration-use-variable': [
      [
        '/color/',
        'font-family',
        'z-index',
        'line-height',
        {
          ignoreValues: [
            '/[a-z-]+\(.*?\)/',
            'inherit',
            'transparent'
          ]
        }
      ]
    ],
    'unit-blacklist': ['rem', 'em'],
    'value-keyword-case': 'lower'
  }
};
