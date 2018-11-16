# @zestia/stylelint-config

```javascript
// .stylelintrc.js
module.exports = {
  extends: '@zestia/stylelint-config'
};
```

This config includes:

* `stylelint-config-recommended` for a set of sensible lint rules around best practices and catching errors
* `stylelint-prettier/recommended` for a set of sensible lint rules around pretty code
* `stylelint-config-prettier` for turning off stylelint pretty-code rules that could conflict with prettier
* `stylelint-selector-bem-pattern` for a simpler bem-like naming convention
* `stylelint-declaration-use-variable` to enforce variables
* `stylelint-order` to enforce the order of certain rules

<hr>

Related repos:

* https://github.com/zestia/stylelint-config
* https://github.com/zestia/eslint-config
* https://github.com/zestia/ember-template-lint-plugin