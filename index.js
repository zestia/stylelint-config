module.exports = {
  plugins: [
    'stylelint-selector-bem-pattern',
    'stylelint-declaration-use-variable',
    'stylelint-order'
  ],
  rules: {
    'plugin/selector-bem-pattern': {
      componentName: '^[a-z0-9-]+$',
      componentSelectors: {
        initial: '^\\.{componentName}(?:[\\.a-z0-9-\\[\\]\\*\\=\\^\']+)?$',
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
    'color-no-hex': true,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'font-family-name-quotes': 'always-where-required',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'function-calc-no-unspaced-operator': true,
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-space-inside': 'never-single-line',
    'function-whitespace-after': 'always',
    'number-leading-zero': 'always',
    'number-max-precision': 3,
    'number-no-trailing-zeros': true,
    'length-zero-no-unit': true,
    'string-no-newline': true,
    'string-quotes': 'single',
    'unit-blacklist': ['rem', 'em'],
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    'value-list-comma-space-after': 'always',
    'shorthand-property-no-redundant-values': true,
    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'keyframe-declaration-no-important': true,
    'keyframes-name-pattern': /^[a-z0-9-]+$/,
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-no-important': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-property-value-blacklist': {
      'font-size': ['13.5px'],
      'font-weight': ['500']
    },
    'block-closing-brace-newline-after': null,
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': null,
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-class-pattern': [
      '^[a-z0-9-]+$',
      {
        resolveNestedSelectors: true
      }
    ],
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-id-pattern': '^[a-z0-9-]+$',
    'selector-max-compound-selectors': 5,
    'selector-max-id': 0,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute']
      }
    ],
    'selector-max-type': 0,
    'selector-max-universal': 0,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'selector-max-empty-lines': 0,
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested']
      }
    ],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-blacklist': ['extend'],
    'comment-empty-line-before': null,
    indentation: [
      2
    ],
    'max-empty-lines': 1,
    'max-line-length': [
      80,
      {
        ignore: ['non-comments']
      }
    ],
    'max-nesting-depth': 3,
    'no-duplicate-selectors': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-duplicate-at-import-rules': true,
    'no-descending-specificity': null,
    'no-missing-end-of-source-newline': true,
    'no-empty-source': null,
    // 'linebreaks': 'unix'
  }
};
