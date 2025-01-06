const slug = '^[a-z0-9-_:]+$';
const keyword = '/auto|inherit|initial|revert|unset|normal/';
const colour = '/transparent|none|white|black/';
const number = '/[0-9]+[a-z]{0,}/';

export default {
  plugins: [
    // For scss specific stylelint rules
    'stylelint-scss',
    // For a loose BEM convention
    'stylelint-selector-bem-pattern',
    // For using a variable or function for certain rules
    'stylelint-declaration-strict-value',
    // For ordering of certain rules
    'stylelint-order'
  ],
  extends: [
    // Use the community Standard rule set for both CSS and SCSS
    'stylelint-config-standard-scss'
  ],
  customSyntax: 'postcss-scss',
  rules: {
    // Disallow unknown functions
    'scss/function-no-unknown': true,
    // Enforce a consistent pattern for variable names
    'scss/dollar-variable-pattern': slug,
    // Enforce a consistent pattern for mixin names
    'scss/at-mixin-pattern': slug,
    // Disallow certain at rules
    'at-rule-disallowed-list': [
      // Disallow @extend in favour of @mixin
      'extend'
    ],
    // Colours should always reference a variable
    'color-no-hex': true,
    // There is always a better alternative to using !important
    'declaration-no-important': true,
    // Prevent introducing unofficial colours by manipulating the official palette
    'function-disallowed-list': ['/^color/'],
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
      preset: 'bem',
      componentSelectors: {
        initial: '^\\.{componentName}',
        combined: '.*'
      },
      ignoreSelectors: "^\\[data-theme='.*'\\]$"
    },
    // Use a loose naming convention for animation keyframe names
    'keyframes-name-pattern': slug,
    // Use a loose BEM naming convention for class names
    'selector-class-pattern': [slug, { resolveNestedSelectors: true }],
    // Use a loose naming convention for ID selectors
    'selector-id-pattern': slug,
    // Try to avoid complex selectors
    'selector-max-compound-selectors': 5,
    // No need to specify IDs, class names will suffice
    'selector-max-id': 0,
    // Disallow styling global elements, use BEM instead
    'selector-max-type': 0,
    // Disallow styling everything at once
    'selector-max-universal': 0,
    // Disallow -of-type rules (which are frequently misunderstood)
    'selector-pseudo-class-disallowed-list': ['/of-type/'],
    // Enforce the use of a variable for these properties
    // to provide consistency.
    'scale-unlimited/declaration-strict-value': [
      [
        '/color/', // background-color, border-color, color, etc.
        '/margin/', // margin, margin-top etc.
        '/padding/', // padding, padding-left etc.
        'box-shadow',
        'font-family',
        'line-height',
        'text-shadow',
        'z-index'
      ],
      {
        expandShorthand: true,
        ignoreValues: {
          '/color/': [keyword, colour],
          'box-shadow': [keyword, colour, number, 'inset'],
          'font-family': [keyword],
          'line-height': [keyword, '0'],
          'text-shadow': [keyword, colour, number],
          'z-index': [keyword, '0'],
          '/margin/': [keyword, '0'],
          '/padding/': [keyword, '0']
        }
      }
    ]
  }
};
