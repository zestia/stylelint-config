# @zestia/stylelint-config

This package provides linting rules for CSS.

## Installation

```
npm install --save-dev @zestia/stylelint-config
```

Add the following to `~/.npmrc` to pull @zestia scoped packages from Github instead of NPM.

```
@zestia:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<YOUR_GH_TOKEN>
```

## Setup

1. Create the following file `stylelint.config.mjs`

   ```javascript
   import zestia from '@zestia/stylelint-config';

   export default zestia;
   ```

2. Add the following to `scripts` in `package.json`

   ```
   "lint:css": "stylelint '**/*.css'"
   ```

## Running

```
npm run lint:css
```

## Notes

- `stylelint-selector-bem-pattern` for a bem-like naming convention
- `stylelint-declaration-strict-value` to enforce variables (e.g. for a consistent colour palette etc)

## Related repos

- https://github.com/zestia/stylelint-config
- https://github.com/zestia/eslint-config
- https://github.com/zestia/template-lint-config
- https://github.com/zestia/prettier-config
