# @zestia/stylelint-config

This package provides linting rules for our CSS and SCSS.

The rules are based on community standards, with a few extra ones specific to Zestia.

## Installation

```
npm install --save @zestia/stylelint-config
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

* `stylelint-config-standard` for a set of community lint rules around best practices and catching errors
* `stylelint-prettier` for a set of community lint rules around pretty code
* `stylelint-config-prettier` for turning off stylelint pretty-code rules that could conflict with prettier
* `stylelint-selector-bem-pattern` for a simpler bem-like naming convention
* `stylelint-declaration-use-variable` to enforce variables
* `stylelint-order` to enforce the order of certain rules

## Related repos

* https://github.com/zestia/stylelint-config
* https://github.com/zestia/eslint-config
* https://github.com/zestia/ember-template-lint-plugin
* https://github.com/zestia/prettier-config