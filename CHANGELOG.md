# Changelog

## 5.1.1

- Disallow use of sass `color` functions to manipulate colour palettes
- Update `stylelint-config-standard-scss`

## 5.1.0

- Upgrade dependencies

## 5.0.2

- Update `@zestia` scoped packages

## 5.0.1

- Re-release of 5.0.0 for testing publishing to GH instead of NPM

## 5.0.0

- Upgrade to stylelint 15

## 4.1.5

- Allow a colon in class names

## 4.1.4

- Upgrade dependencies

## 4.1.3

- Require a version of `stylelint-declaration-strict-value` that supports stylelint v14

## 4.1.2

- Ensure rules are available by bumping `stylelint-scss` peer dep

## 4.1.1

- Add `scss/function-no-unknown`

## 4.1.0

- Remove conflicting css vs scss rules

## 4.0.6

- Upgrade dependencies

## 4.0.5

- Add stylelint to peer deps
- Upgrade dependencies

## 4.0.4

- Move deps to peer deps

## 4.0.3

- Upgrade dependencies

## 4.0.2

- Revert changes from 4.0.1 [Issue closed](https://github.com/kimroen/ember-cli-autoprefixer/pull/74)

## 4.0.1

- Ensure v8 of postcss [Issue](https://github.com/stylelint/stylelint/issues/5632#issuecomment-951601124)

## 4.0.0

- Stylelint 14 support

## 3.0.2

- Ignore css keywords for rules that require a variable

## 3.0.1

- Upgrade dependencies

## 3.0.0

- Replaced `stylelint-declaration-use-variable` with `stylelint-declaration-strict-value` due to it being deprecated.
- Adds `stylelint-scss` to enforce a consistent pattern for dollar variables and mixin names.

## 2.0.47

- Upgrade dependencies

## 2.0.46

- Upgrade dependencies

## 2.0.45

- Upgrade dependencies

## 2.0.44

- Upgrade dependencies

## 2.0.43

- Change `at-rule-blacklist` to `at-rule-disallowed-list`
- Upgrade dependencies

## 2.0.42

- Upgrade dependencies

## 2.0.41

- Upgrade dependencies

## 2.0.40

- Upgrade dependencies

## 2.0.39

- Upgrade dependencies

## 2.0.38

- Upgrade dependencies
- Add prettier config
- Add eslint config
- Add comments as to why rules are present
- Remove `unit-blacklist` (was project specific)
- Remove `value-keyword-case` (now a Standard default)

## 2.0.37

- Upgrade dependencies

## 2.0.36

- Upgrade dependencies

## 2.0.35

- Upgrade dependencies

## 2.0.34

- Upgrade dependencies

## 2.0.33

- Add `@import` to list of denied 'at' rules. `@use` should be used instead.

## 2.0.32

- Remove overflow rules specific to a particular project

## 2.0.31

- Make sure a variable is used for text-shadow

## 2.0.30

- Specifically disable font-family-name-quotes

## 2.0.29

- Remove font-family-name-quotes due to incompatibility with scopes

## 2.0.28

- Add unknown at rule back

## 2.0.27

- Re-release due to NPM issues

## 2.0.26

- Remove unknown at rule
- Remove rules that were specific to a single project

## 2.0.25

- Allow `initial` to be ignored from the require variable rule

## < 2.0.24

- No changelog
