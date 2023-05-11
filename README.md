# @zestia/stylelint-config

This package provides linting rules for CSS and SCSS.

The rules are based on community standards, with a few extra ones specific to Zestia.

## Installation

```
npm install --save-dev @zestia/stylelint-config
```

## Setup

1. Create the following file `.stylelintrc.js`

   ```javascript
   module.exports = {
     extends: '@zestia/stylelint-config'
   };
   ```

2. Add the following to `scripts` in `package.json`

   ```
   "lint:css": "stylelint '**/*.{css,scss}'"
   ```

## Running

```
npm run lint:css
```

## Notes

- `stylelint-config-standard-scss` for a set of community lint rules around best practices and catching errors in scss
- `stylelint-scss` for scss specific stylelint rules
- `stylelint-prettier` adds prettier as a stylelint rule
- `stylelint-selector-bem-pattern` for a bem-like naming convention
- `stylelint-declaration-strict-value` to enforce variables (e.g. for a consistent colour palette etc)
- `stylelint-order` to enforce the order of certain rules

## Related repos

- https://github.com/zestia/stylelint-config
- https://github.com/zestia/eslint-config
- https://github.com/zestia/template-lint-config
- https://github.com/zestia/prettier-config
