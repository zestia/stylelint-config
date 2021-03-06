const slug = '^[a-z0-9-_]+$';
const colour = '/inherit|initial|transparent|none/';
const number = '/[0-9]+[a-z]{0,}/';

module.exports = {
  plugins: [
    // For scss specific stylelint rules
    'stylelint-scss',
    // For a loose BEM convention
    'stylelint-selector-bem-pattern',
    // For using a variable or function for certain rules
    'stylelint-declaration-strict-value',
    // For ordering of certain rules
    'stylelint-order',
    // For ensuring css is pretty
    'stylelint-prettier'
  ],
  extends: [
    // Use the community Standard rule set
    'stylelint-config-standard',
    // Turns off stylelint rules that could conflict with prettier
    'stylelint-prettier/recommended'
  ],
  rules: {
    // Turn off stylelint unknown at-rules, because it doesn't know about scss ones (see below)
    'at-rule-no-unknown': null,
    // Prevent unknown scss at-rules (see above)
    'scss/at-rule-no-unknown': true,
    // Enforce a consistent pattern for variable names
    'scss/dollar-variable-pattern': slug,
    // Enforce a consistent pattern for mixin names
    'scss/at-mixin-pattern': slug,
    // Disallow certain at rules
    'at-rule-disallowed-list': [
      // Disallow @extend in favour of @mixin
      'extend',
      // Disallow @import in favour of @use
      'import'
    ],
    // Colours should always reference a variable
    'color-no-hex': true,
    // There is always a better alternative to using !important
    'declaration-no-important': true,
    // Deep nesting creates overly specified rules
    'max-nesting-depth': 3,
    // Enable me soon
    'no-descending-specificity': null,
    // Make sure @ rules come at the beginning
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
    // Use a loose BEM naming convention by @define'ing a namespace
    'plugin/selector-bem-pattern': {
      componentName: slug,
      componentSelectors: {
        initial: '^\\.{componentName}',
        combined: '.*'
      }
    },
    // Use a loose naming convention for animation keyframe names
    'keyframes-name-pattern': slug,
    // Use a loose BEM naming convention for class names
    'selector-class-pattern': [slug, { resolveNestedSelectors: true }],
    // Use a loose naming convention for ID selectors
    'selector-id-pattern': slug,
    // Disallow vendor prefixes, these should be added by autoprefixer
    'property-no-vendor-prefix': true,
    // Try to avoid complex selectors
    'selector-max-compound-selectors': 5,
    // No need to specify IDs, class names will suffice
    'selector-max-id': 0,
    // Disallow styling global elements, use BEM instead
    'selector-max-type': 0,
    // Disallow styling everything at once
    'selector-max-universal': 0,
    // No need to specify redundant values
    'shorthand-property-no-redundant-values': true,
    // Enforce the use of a variable for these properties
    // to provide consistency.
    'scale-unlimited/declaration-strict-value': [
      [
        '/color/', // background-color, border-color, color, etc.
        'box-shadow',
        'font-family',
        'line-height',
        'text-shadow',
        'z-index'
      ],
      {
        expandShorthand: true,
        ignoreValues: {
          '/color/': colour,
          'box-shadow': ['inset', number, colour],
          'font-family': 'inherit',
          'line-height': ['0', 'inherit'],
          'text-shadow': [number, colour],
          'z-index': '0'
        }
      }
    ]
  }
};
