const pattern = '^[a-z0-9-_]+$';

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
      ignoreAtRules: ['function', 'if', 'else', 'each', 'include', 'mixin', 'return', 'for', 'use']
    }],
    'at-rule-blacklist': ['extend', 'import'],
    'color-no-hex': true,
    'color-hex-length': 'long',
    'declaration-no-important': true,
    'font-family-name-quotes': null,
    'keyframes-name-pattern': pattern,
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
      componentName: pattern,
      componentSelectors: {
        initial: '^\\.{componentName}',
        combined: '.*'
      }
    },
    'property-no-vendor-prefix': true,
    'selector-class-pattern': [ pattern, { resolveNestedSelectors: true } ],
    'selector-id-pattern': pattern,
    'selector-max-compound-selectors': 5,
    'selector-max-id': 0,
    'selector-max-type': 0,
    'selector-max-universal': 0,
    'selector-no-qualifying-type': [true, { ignore: ['attribute'] }],
    'shorthand-property-no-redundant-values': true,
    'sh-waqar/declaration-use-variable': [
      [
        '/color/',
        'box-shadow',
        'text-shadow',
        'border',
        'font-family',
        'z-index',
        'line-height',
        {
          ignoreValues: [
            '0',
            '/\\$/',
            '/colou?r/',
            '/inherit/',
            '/initial/',
            '/transparent/',
            '/none/'
          ]
        }
      ]
    ],
    'unit-blacklist': ['rem', 'em'],
    'value-keyword-case': 'lower'
  }
};
