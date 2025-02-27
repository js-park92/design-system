# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [18.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@18.0.7...@pluralsight/ps-design-system-datepicker@18.1.0) (2022-02-24)


### Features

* **icon:** update snapshot tests with new icon element ([e31e75b](https://github.com/pluralsight/design-system/commit/e31e75beea9d1d886addfe0a876ae9cc590de4e6))





## [18.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@18.0.6...@pluralsight/ps-design-system-datepicker@18.0.7) (2022-02-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [18.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@18.0.5...@pluralsight/ps-design-system-datepicker@18.0.6) (2022-01-27)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [18.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@18.0.4...@pluralsight/ps-design-system-datepicker@18.0.5) (2021-12-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [18.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@18.0.3...@pluralsight/ps-design-system-datepicker@18.0.4) (2021-12-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [18.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@18.0.2...@pluralsight/ps-design-system-datepicker@18.0.3) (2021-12-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [18.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@18.0.1...@pluralsight/ps-design-system-datepicker@18.0.2) (2021-12-06)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [18.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@18.0.0...@pluralsight/ps-design-system-datepicker@18.0.1) (2021-12-02)


### Bug Fixes

* **datepicker:** remove focus onMount & update ([5c42b51](https://github.com/pluralsight/design-system/commit/5c42b51181734c4f1bac04ab450659a3d9a4c02e))





# [18.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@17.0.0...@pluralsight/ps-design-system-datepicker@18.0.0) (2021-10-28)


### core

* remove deprecated vars ([#1998](https://github.com/pluralsight/design-system/issues/1998)) ([c1b80e5](https://github.com/pluralsight/design-system/commit/c1b80e56d72878972330139df3103ede6eefd5e7))


### BREAKING CHANGES

* if this breaks your feature see #1998 PR for including old core vars

* refactor(docs): replace deprecated core type var references

* refactor(datepicker): replace deprecated core type var references

* refactor(errors): replace deprecated core type var references

* refactor(menu): replace deprecated core type var references

* refactor(normalize): replace deprecated core type var references

* test(core): update snapshots

* fix(avatar): update font variable

* refactor(core): prettier mod

Co-authored-by: Edward Irby <edward-irby@pluralsight.com>





# [17.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@16.0.4...@pluralsight/ps-design-system-datepicker@17.0.0) (2021-09-15)


### Features

* autoselect current date or selected date ([#1933](https://github.com/pluralsight/design-system/issues/1933)) ([d50d5f6](https://github.com/pluralsight/design-system/commit/d50d5f6c9e9fa2bea777302c9bd5fc68efd777c9))


### BREAKING CHANGES

* useRangeSelectChange  useDateSelectChange removed
Hooks have been removed in facor of callback functions:
handleDateSelectChange & handleRangeSelectChange

* feat(focusmanager): export useFocusManager hook for better composability

* test(datepicker): use hook instead of FocusManager

* docs: update datepicker docs

* feat(datepicker): key events for month buttons

* fix(datepicker): datepicker focus on close and height set on grid

* test(datepicker): update story so that snapshots stay consitent with new functionality

* fix(datepicker): focus trap fix

* fix(datepicker): focus trap tuning

Co-authored-by: Brian Sweeting <brian-sweeting@pluralsight.com>





## [16.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@16.0.3...@pluralsight/ps-design-system-datepicker@16.0.4) (2021-09-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [16.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@16.0.2...@pluralsight/ps-design-system-datepicker@16.0.3) (2021-08-23)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [16.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@16.0.1...@pluralsight/ps-design-system-datepicker@16.0.2) (2021-08-12)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [16.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@16.0.0...@pluralsight/ps-design-system-datepicker@16.0.1) (2021-07-27)


### Bug Fixes

* **datepicker:** set normalize peerDependency to 6.0.0 ([981c24d](https://github.com/pluralsight/design-system/commit/981c24d7818d8e66ed7a90afbe20486148c63ff1))





# [16.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.3.4...@pluralsight/ps-design-system-datepicker@16.0.0) (2021-07-26)


### Bug Fixes

* **datepicker:** resolve dependency errors ([5d7b020](https://github.com/pluralsight/design-system/commit/5d7b020c6d01b6eebb320e06010899fc951b38ad))


### Code Refactoring

* **datepicker:** convert to vanilla css; remove glamor; dashify ([1d92755](https://github.com/pluralsight/design-system/commit/1d92755df18067041464e9f3a448d9d9899cc903)), closes [#1857](https://github.com/pluralsight/design-system/issues/1857)


### BREAKING CHANGES

* **datepicker:** convert styles to vanilla css; requires bundling
* **datepicker:** dashify css selectors
* **datepicker:** useIsInRange returns a string for className; requires
merging





## [15.3.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.3.3...@pluralsight/ps-design-system-datepicker@15.3.4) (2021-06-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [15.3.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.3.2...@pluralsight/ps-design-system-datepicker@15.3.3) (2021-06-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [15.3.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.3.1...@pluralsight/ps-design-system-datepicker@15.3.2) (2021-06-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [15.3.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.3.0...@pluralsight/ps-design-system-datepicker@15.3.1) (2021-06-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [15.3.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.2.6...@pluralsight/ps-design-system-datepicker@15.3.0) (2021-06-22)


### Features

* **datepicker:** add value prop for controlled DatePicker ([2bca1e8](https://github.com/pluralsight/design-system/commit/2bca1e883aebe91be380957200f661c1b171d9ab)), closes [#1823](https://github.com/pluralsight/design-system/issues/1823)





## [15.2.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.2.4...@pluralsight/ps-design-system-datepicker@15.2.6) (2021-06-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [15.2.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.2.4...@pluralsight/ps-design-system-datepicker@15.2.5) (2021-06-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [15.2.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.2.3...@pluralsight/ps-design-system-datepicker@15.2.4) (2021-06-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [15.2.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.2.2...@pluralsight/ps-design-system-datepicker@15.2.3) (2021-06-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [15.2.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.2.1...@pluralsight/ps-design-system-datepicker@15.2.2) (2021-06-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [15.2.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.2.0...@pluralsight/ps-design-system-datepicker@15.2.1) (2021-06-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [15.2.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.1.6...@pluralsight/ps-design-system-datepicker@15.2.0) (2021-05-28)


### Features

* **datepicker:** add optional dateFormat parameter to useDateSelectChange and useRangeSelectChange ([ef0bef1](https://github.com/pluralsight/design-system/commit/ef0bef108e89ead69c3c36530bf85f7dbb9aefb9))
* **datepicker:** test custom date format ([a11a06c](https://github.com/pluralsight/design-system/commit/a11a06c56fdb8eb5beb887974047c6562ef00d71))
* **datepicker:** test custom date format ([528afd9](https://github.com/pluralsight/design-system/commit/528afd98d195c181c60d386d8f6b47b3acde37bd))





## [15.1.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.1.5...@pluralsight/ps-design-system-datepicker@15.1.6) (2021-05-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [15.1.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.1.4...@pluralsight/ps-design-system-datepicker@15.1.5) (2021-05-26)


### Bug Fixes

* **datepicker:** set correct peer dependency on ps normalize ([ebabdb0](https://github.com/pluralsight/design-system/commit/ebabdb039647df85160e01b5c1d58b3f27a84baa))





## [15.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.1.3...@pluralsight/ps-design-system-datepicker@15.1.4) (2021-05-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [15.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.1.2...@pluralsight/ps-design-system-datepicker@15.1.3) (2021-04-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [15.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.1.1...@pluralsight/ps-design-system-datepicker@15.1.2) (2021-04-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [15.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.1.0...@pluralsight/ps-design-system-datepicker@15.1.1) (2021-04-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [15.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.0.1...@pluralsight/ps-design-system-datepicker@15.1.0) (2021-04-20)


### Features

* **datepicker:** add style condition to conditional exports ([6411929](https://github.com/pluralsight/design-system/commit/64119293a930012443ecb237e74706dc5fef23dc))
* **datepicker:** expose package.json in conditional exports ([face77a](https://github.com/pluralsight/design-system/commit/face77abb3e1c67d101676a9c8b299667ee1f9b2))





## [15.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@15.0.0...@pluralsight/ps-design-system-datepicker@15.0.1) (2021-04-15)


### Bug Fixes

* **datepicker:** properly order the conditional exports in package ([cb6b7e7](https://github.com/pluralsight/design-system/commit/cb6b7e764928f89e108a494b6893cf241821ba24))





# [15.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@14.1.4...@pluralsight/ps-design-system-datepicker@15.0.0) (2021-04-14)


### Code Refactoring

* **datepicker:** add exports to package.json as alternate entry point ([aaa642c](https://github.com/pluralsight/design-system/commit/aaa642c0d7de38f8397a426373dc88a2b267ebd9))
* **datepicker:** convert to esm ([a29b3df](https://github.com/pluralsight/design-system/commit/a29b3dfe0bd4cd4000f3220636cab4d1fed5c7fa))


### BREAKING CHANGES

* **datepicker:** add exports to package.json
* **datepicker:** Drop cjs; esm only; all in on tree shaking
* **datepicker:** Remove file imports (eg, packageName/react)





## [14.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@14.1.3...@pluralsight/ps-design-system-datepicker@14.1.4) (2021-04-05)


### Bug Fixes

* **datepicker:** closes on click outside resolves [#1655](https://github.com/pluralsight/design-system/issues/1655) ([#1700](https://github.com/pluralsight/design-system/issues/1700)) ([55aeaef](https://github.com/pluralsight/design-system/commit/55aeaef494cd9ced86c21ff21e041245119ee03a))





## [14.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@14.1.2...@pluralsight/ps-design-system-datepicker@14.1.3) (2021-03-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [14.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@14.1.1...@pluralsight/ps-design-system-datepicker@14.1.2) (2021-03-23)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [14.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@14.1.0...@pluralsight/ps-design-system-datepicker@14.1.1) (2021-03-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [14.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@14.0.3...@pluralsight/ps-design-system-datepicker@14.1.0) (2021-03-11)


### Features

* **datepicker:** pass all Field-support props to Datepicker ([774b7d2](https://github.com/pluralsight/design-system/commit/774b7d29beee0b5c754d7e27053ab1f7bf752ea8))





## [14.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@14.0.2...@pluralsight/ps-design-system-datepicker@14.0.3) (2021-02-25)


### Bug Fixes

* **datepicker:** update peerDep version ([f2f6a99](https://github.com/pluralsight/design-system/commit/f2f6a99768e5e582eb5b815cbe4f5cc7e94a5c04))





## [14.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@14.0.1...@pluralsight/ps-design-system-datepicker@14.0.2) (2021-02-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [14.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@14.0.0...@pluralsight/ps-design-system-datepicker@14.0.1) (2021-02-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [14.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@13.1.0...@pluralsight/ps-design-system-datepicker@14.0.0) (2021-02-16)


* new icon size and updated button (#1608) ([86a5acc](https://github.com/pluralsight/design-system/commit/86a5acc1be39c58dba78f3f563453b69ec851034)), closes [#1608](https://github.com/pluralsight/design-system/issues/1608)


### BREAKING CHANGES

* small is now xSmall please update your sizing

* refactor(docs): document additional icon size

* refactor(button): spacing tweaks to match designs

* test(button): update snapshots

Co-authored-by: Edward Irby <EdwardIrby@users.noreply.github.com>





# [13.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@13.0.1...@pluralsight/ps-design-system-datepicker@13.1.0) (2021-02-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [13.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@13.0.0...@pluralsight/ps-design-system-datepicker@13.0.1) (2021-02-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [13.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@11.0.1...@pluralsight/ps-design-system-datepicker@13.0.0) (2021-02-03)


### Features

* **date:** needs animation,  text input examples, hook tests ([#1524](https://github.com/pluralsight/design-system/issues/1524)) ([f57c16b](https://github.com/pluralsight/design-system/commit/f57c16bb9aae30944d96b16ec53241d391b40329))


### BREAKING CHANGES

* **date:** Complete rewrite with new vars and named imports please review docs.

* docs(datepicker): example and guides updated

* test(datepicker): lint fix

* test(datepicker): lint fix

* refactor(docs): update component section of datepicker

* refactor(docs): update examples section of datepicker

* docs(datepicker): simplify examples for copy & pasta

update doc table to optionally hide default defaultColumn

* feat(datepicker): export DropdownDatePicker

* feat(datepicker): set consistent api for onSelect

Co-authored-by: jaketrent <trent.jake@gmail.com>





## [11.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@11.0.0...@pluralsight/ps-design-system-datepicker@11.0.1) (2021-02-01)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [11.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@10.0.10...@pluralsight/ps-design-system-datepicker@11.0.0) (2021-01-25)


### Build System

* **datepicker:** update to react@17 ([28f47b2](https://github.com/pluralsight/design-system/commit/28f47b223de46153916ed2e806c96c2714603e6e))


### BREAKING CHANGES

* **datepicker:** react@17 peerDependency upgrade





## [10.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@10.0.9...@pluralsight/ps-design-system-datepicker@10.0.10) (2021-01-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [10.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@10.0.8...@pluralsight/ps-design-system-datepicker@10.0.9) (2021-01-14)


### Bug Fixes

* **datepicker:** avoid infinite loop in calendar state update ([37a846c](https://github.com/pluralsight/design-system/commit/37a846c06483535753a4de139e2b694eef22f6c5)), closes [#1544](https://github.com/pluralsight/design-system/issues/1544)





## [10.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@10.0.7...@pluralsight/ps-design-system-datepicker@10.0.8) (2021-01-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [10.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@10.0.6...@pluralsight/ps-design-system-datepicker@10.0.7) (2021-01-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [10.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@10.0.5...@pluralsight/ps-design-system-datepicker@10.0.6) (2020-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [10.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@10.0.4...@pluralsight/ps-design-system-datepicker@10.0.5) (2020-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [10.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@10.0.3...@pluralsight/ps-design-system-datepicker@10.0.4) (2020-12-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [10.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@10.0.2...@pluralsight/ps-design-system-datepicker@10.0.3) (2020-12-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [10.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@10.0.1...@pluralsight/ps-design-system-datepicker@10.0.2) (2020-12-11)


### Bug Fixes

* test config syntax and lint errors ([37429b2](https://github.com/pluralsight/design-system/commit/37429b289e428500233a3954c5bf1bb96df852a6))





## [10.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@10.0.0...@pluralsight/ps-design-system-datepicker@10.0.1) (2020-12-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [10.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@9.0.7...@pluralsight/ps-design-system-datepicker@10.0.0) (2020-12-07)


### Code Refactoring

* **datepicker:** change from onSelect to onChange ([b825152](https://github.com/pluralsight/design-system/commit/b82515268090a5b048d9cd2177421c364cb96579))
* **datepicker:** remove onSubBlur; fix re-type date in test errors ([cae14cd](https://github.com/pluralsight/design-system/commit/cae14cd368eccbbbfe7930d7c6a08d001ae955cb))


### BREAKING CHANGES

* **datepicker:** Rename onSelect to onChange to closer align with React
norms
* **datepicker:** Remove onSubBlur event listener
* **datepicker:** onSelect event param type changed to receive
React.ChangeEvent instead of React.FocusEvent





## [9.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@9.0.6...@pluralsight/ps-design-system-datepicker@9.0.7) (2020-12-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [9.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@9.0.5...@pluralsight/ps-design-system-datepicker@9.0.6) (2020-12-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [9.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@9.0.4...@pluralsight/ps-design-system-datepicker@9.0.5) (2020-11-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [9.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@9.0.3...@pluralsight/ps-design-system-datepicker@9.0.4) (2020-11-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [9.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@9.0.2...@pluralsight/ps-design-system-datepicker@9.0.3) (2020-11-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [9.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@9.0.1...@pluralsight/ps-design-system-datepicker@9.0.2) (2020-11-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [9.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@9.0.0...@pluralsight/ps-design-system-datepicker@9.0.1) (2020-11-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [9.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@8.0.8...@pluralsight/ps-design-system-datepicker@9.0.0) (2020-11-16)


### Bug Fixes

* **datepicker:** revert to conditional ref for selected calendar day ([17a8ec0](https://github.com/pluralsight/design-system/commit/17a8ec0722742d87574e9df6e914065e8d2112d2))


### Code Refactoring

* **datepicker:** change to use date type and cleanup ([2b7b4f1](https://github.com/pluralsight/design-system/commit/2b7b4f1eee45cda402f00fc475cd39d5d37303f4)), closes [#1344](https://github.com/pluralsight/design-system/issues/1344)


### Features

* **datepicker:** support single-field date in html for form usage ([1e1f6a9](https://github.com/pluralsight/design-system/commit/1e1f6a992116fb5fbc67eb0f501569c1eb12e8d2))


### BREAKING CHANGES

* **datepicker:** Must be a controlled component via supplied value prop
* **datepicker:** onSelect and onSubBlur signatures change
* **datepicker:** input and output values are of Date type





## [8.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@8.0.7...@pluralsight/ps-design-system-datepicker@8.0.8) (2020-11-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [8.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@8.0.6...@pluralsight/ps-design-system-datepicker@8.0.7) (2020-11-12)


### Bug Fixes

* **datepicker:** restore toggle open calendar functionality ([def6c19](https://github.com/pluralsight/design-system/commit/def6c193f20dd01a62ddda149141411d673ede9c))





## [8.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@8.0.5...@pluralsight/ps-design-system-datepicker@8.0.6) (2020-11-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [8.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@8.0.4...@pluralsight/ps-design-system-datepicker@8.0.5) (2020-11-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [8.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@8.0.3...@pluralsight/ps-design-system-datepicker@8.0.4) (2020-11-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [8.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@8.0.2...@pluralsight/ps-design-system-datepicker@8.0.3) (2020-10-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [8.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@8.0.1...@pluralsight/ps-design-system-datepicker@8.0.2) (2020-10-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [8.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@8.0.0...@pluralsight/ps-design-system-datepicker@8.0.1) (2020-10-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [8.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.2.2...@pluralsight/ps-design-system-datepicker@8.0.0) (2020-10-26)


* Feat/searchinput ts conversion (#1348) ([60df731](https://github.com/pluralsight/design-system/commit/60df731cf78abe60c82e9433ace844f0b32b1a6d)), closes [#1348](https://github.com/pluralsight/design-system/issues/1348)


### BREAKING CHANGES

* single element reference only

* feat(searchinput): fix typings

* feat(searchinput): update stories types

* feat(typeahead): use parentNode instead of second ref

* feat(searchinput): lint fix

* feat(searchinput): lint fix

Co-authored-by: Jake Trent <trent.jake@gmail.com>





## [7.2.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.2.1...@pluralsight/ps-design-system-datepicker@7.2.2) (2020-10-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.2.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.2.0...@pluralsight/ps-design-system-datepicker@7.2.1) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [7.2.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.1.11...@pluralsight/ps-design-system-datepicker@7.2.0) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.1.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.1.10...@pluralsight/ps-design-system-datepicker@7.1.11) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.1.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.1.9...@pluralsight/ps-design-system-datepicker@7.1.11) (2020-10-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.1.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.1.9...@pluralsight/ps-design-system-datepicker@7.1.10) (2020-10-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.1.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.1.8...@pluralsight/ps-design-system-datepicker@7.1.9) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.1.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.1.7...@pluralsight/ps-design-system-datepicker@7.1.8) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.1.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.1.6...@pluralsight/ps-design-system-datepicker@7.1.7) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.1.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.1.5...@pluralsight/ps-design-system-datepicker@7.1.6) (2020-09-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.1.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.1.4...@pluralsight/ps-design-system-datepicker@7.1.5) (2020-09-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.1.3...@pluralsight/ps-design-system-datepicker@7.1.4) (2020-09-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.1.2...@pluralsight/ps-design-system-datepicker@7.1.3) (2020-09-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.1.1...@pluralsight/ps-design-system-datepicker@7.1.2) (2020-09-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.1.0...@pluralsight/ps-design-system-datepicker@7.1.1) (2020-08-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [7.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.20...@pluralsight/ps-design-system-datepicker@7.1.0) (2020-08-25)


### Features

* disabled cursor styles ([#1115](https://github.com/pluralsight/design-system/issues/1115)) ([94fd04c](https://github.com/pluralsight/design-system/commit/94fd04c1751231573c06ad590c037c2cf9397d02))





## [7.0.20](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.19...@pluralsight/ps-design-system-datepicker@7.0.20) (2020-08-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.18...@pluralsight/ps-design-system-datepicker@7.0.19) (2020-08-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.18](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.17...@pluralsight/ps-design-system-datepicker@7.0.18) (2020-08-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.16...@pluralsight/ps-design-system-datepicker@7.0.17) (2020-08-06)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.15...@pluralsight/ps-design-system-datepicker@7.0.16) (2020-07-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.14...@pluralsight/ps-design-system-datepicker@7.0.15) (2020-05-19)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.13...@pluralsight/ps-design-system-datepicker@7.0.14) (2020-05-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.12...@pluralsight/ps-design-system-datepicker@7.0.13) (2020-05-07)


### Bug Fixes

* update normalize peer dependency ([cd5b8a4](https://github.com/pluralsight/design-system/commit/cd5b8a41aa231dc2f5102643a3dca9a772d9b5ae))





## [7.0.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.11...@pluralsight/ps-design-system-datepicker@7.0.12) (2020-05-06)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.10...@pluralsight/ps-design-system-datepicker@7.0.11) (2020-05-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.9...@pluralsight/ps-design-system-datepicker@7.0.10) (2020-05-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.8...@pluralsight/ps-design-system-datepicker@7.0.9) (2020-04-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.7...@pluralsight/ps-design-system-datepicker@7.0.8) (2020-04-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.6...@pluralsight/ps-design-system-datepicker@7.0.7) (2020-04-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.5...@pluralsight/ps-design-system-datepicker@7.0.6) (2020-04-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.5...@pluralsight/ps-design-system-datepicker@7.0.6) (2020-04-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.4...@pluralsight/ps-design-system-datepicker@7.0.5) (2020-04-01)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.3...@pluralsight/ps-design-system-datepicker@7.0.4) (2020-03-27)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.2...@pluralsight/ps-design-system-datepicker@7.0.3) (2020-03-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [7.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@7.0.1...@pluralsight/ps-design-system-datepicker@7.0.2) (2020-03-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [7.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.1.10...@pluralsight/ps-design-system-datepicker@7.0.0) (2020-03-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.1.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.1.9...@pluralsight/ps-design-system-datepicker@6.1.10) (2020-02-26)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.1.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.1.8...@pluralsight/ps-design-system-datepicker@6.1.9) (2020-02-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.1.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.1.7...@pluralsight/ps-design-system-datepicker@6.1.8) (2020-02-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.1.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.1.6...@pluralsight/ps-design-system-datepicker@6.1.7) (2020-02-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.1.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.1.5...@pluralsight/ps-design-system-datepicker@6.1.6) (2020-02-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.1.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.1.4...@pluralsight/ps-design-system-datepicker@6.1.5) (2020-02-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.1.3...@pluralsight/ps-design-system-datepicker@6.1.4) (2020-01-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.1.2...@pluralsight/ps-design-system-datepicker@6.1.3) (2020-01-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.1.1...@pluralsight/ps-design-system-datepicker@6.1.2) (2020-01-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.1.0...@pluralsight/ps-design-system-datepicker@6.1.1) (2020-01-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [6.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.20...@pluralsight/ps-design-system-datepicker@6.1.0) (2020-01-24)


### Features

* **datepicker:** apply 2020 colors ([1d62c96](https://github.com/pluralsight/design-system/commit/1d62c9626908d1d6de1ca6cd8c806437211ee412))





## [6.0.20](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.19...@pluralsight/ps-design-system-datepicker@6.0.20) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.0.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.17...@pluralsight/ps-design-system-datepicker@6.0.19) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.0.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.15...@pluralsight/ps-design-system-datepicker@6.0.17) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.0.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.13...@pluralsight/ps-design-system-datepicker@6.0.15) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.0.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.12...@pluralsight/ps-design-system-datepicker@6.0.13) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.0.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.11...@pluralsight/ps-design-system-datepicker@6.0.12) (2020-01-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.0.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.10...@pluralsight/ps-design-system-datepicker@6.0.11) (2020-01-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.9...@pluralsight/ps-design-system-datepicker@6.0.10) (2020-01-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.8...@pluralsight/ps-design-system-datepicker@6.0.9) (2020-01-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.7...@pluralsight/ps-design-system-datepicker@6.0.8) (2020-01-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.5...@pluralsight/ps-design-system-datepicker@6.0.6) (2019-12-19)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.4...@pluralsight/ps-design-system-datepicker@6.0.5) (2019-12-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.3...@pluralsight/ps-design-system-datepicker@6.0.4) (2019-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.2...@pluralsight/ps-design-system-datepicker@6.0.3) (2019-12-16)


### Bug Fixes

* linting errors cleanup ([3ca1954](https://github.com/pluralsight/design-system/commit/3ca1954965fb2e6376a7e58f7281b183dfe70577))
* missing js extensition eslint warnings ([bebf5d7](https://github.com/pluralsight/design-system/commit/bebf5d718290eb9e3a3cdf0e64ee5f1849226c89))





## [6.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.1...@pluralsight/ps-design-system-datepicker@6.0.2) (2019-12-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [6.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@6.0.0...@pluralsight/ps-design-system-datepicker@6.0.1) (2019-12-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [6.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@5.1.0...@pluralsight/ps-design-system-datepicker@6.0.0) (2019-12-02)


### Features

* **icon:** named icon exports and cli util ([15e1e08](https://github.com/pluralsight/design-system/commit/15e1e08a8f04ac6a0aa2bf3cf78efeb412cd6dd6))


### BREAKING CHANGES

* **icon:** Icons must be refactored to used Named exports inatad of id prop. Please see docs for example





# [5.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@5.0.1...@pluralsight/ps-design-system-datepicker@5.1.0) (2019-11-06)


### Bug Fixes

* **datepicker:** fix onblur behavior for subfields in datepicker ([85d7238](https://github.com/pluralsight/design-system/commit/85d72386884c61f4cfbf27d3d27f983484f062b9))
* **datepicker:** fix test for onselect when invalid date is provided ([c6e010f](https://github.com/pluralsight/design-system/commit/c6e010fd9f0b96866e79f7076560967fa9218e87))


### Features

* **datepicker:** adds onSubBlur callback to datepicker ([f78c732](https://github.com/pluralsight/design-system/commit/f78c732a3ff4c45e48146ef067dd0a1a2be97d03))
* **datepicker:** subfield onBlur callback ([e3750b6](https://github.com/pluralsight/design-system/commit/e3750b660c31d5523c28a7a25a46e807624cdaf8))





## [5.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@5.0.0...@pluralsight/ps-design-system-datepicker@5.0.1) (2019-11-06)


### Bug Fixes

* revert react dep ([c8d1a5a](https://github.com/pluralsight/design-system/commit/c8d1a5a5456e99e9cee64c9ccd8b1a98d0642ac0))





# [5.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@4.1.0...@pluralsight/ps-design-system-datepicker@5.0.0) (2019-11-04)


### Code Refactoring

* **core:** esm refactor ([02d5928](https://github.com/pluralsight/design-system/commit/02d5928))
* **datepicker:** esm export refactor ([3c5097c](https://github.com/pluralsight/design-system/commit/3c5097c))
* **halo:** esm export refactor ([723a966](https://github.com/pluralsight/design-system/commit/723a966))
* **textinput:** esm export refactor ([3df387f](https://github.com/pluralsight/design-system/commit/3df387f))
* **theme:** esm export refactor ([dee9f11](https://github.com/pluralsight/design-system/commit/dee9f11))
* **util:** esm export ([55cbd9d](https://github.com/pluralsight/design-system/commit/55cbd9d))


### BREAKING CHANGES

* **textinput:** import pattern
* **datepicker:** import pattern
* **halo:** import pattern
* **util:** import patterns
* **core:** import patterns
* **theme:** new import pattern





# [4.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@4.0.6...@pluralsight/ps-design-system-datepicker@4.1.0) (2019-10-22)


### Features

* **textinput:** adds small size textinput ([edf5d2d](https://github.com/pluralsight/design-system/commit/edf5d2d))





## [4.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@4.0.5...@pluralsight/ps-design-system-datepicker@4.0.6) (2019-10-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [4.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@4.0.4...@pluralsight/ps-design-system-datepicker@4.0.5) (2019-10-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [4.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@4.0.3...@pluralsight/ps-design-system-datepicker@4.0.4) (2019-10-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [4.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@4.0.2...@pluralsight/ps-design-system-datepicker@4.0.3) (2019-10-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [4.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@4.0.1...@pluralsight/ps-design-system-datepicker@4.0.2) (2019-09-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [4.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@4.0.0...@pluralsight/ps-design-system-datepicker@4.0.1) (2019-09-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [4.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@3.0.0...@pluralsight/ps-design-system-datepicker@4.0.0) (2019-08-16)


### Code Refactoring

* **datepicker:** update to use reactv16 style patterns/syntax ([467ce12](https://github.com/pluralsight/design-system/commit/467ce12))


### BREAKING CHANGES

* **datepicker:** innerRef is no longer available in favor of using ref/forwardRef





# [3.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@2.0.6...@pluralsight/ps-design-system-datepicker@3.0.0) (2019-08-09)


### Build System

* **datepicker:** move theme package to peerDeps ([e9d2554](https://github.com/pluralsight/design-system/commit/e9d2554))


### BREAKING CHANGES

* **datepicker:** @pluralsight/ps-design-system-theme is now a peerDependency and
must be installed separately





## [2.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@2.0.5...@pluralsight/ps-design-system-datepicker@2.0.6) (2019-07-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [2.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@2.0.4...@pluralsight/ps-design-system-datepicker@2.0.5) (2019-07-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [2.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@2.0.3...@pluralsight/ps-design-system-datepicker@2.0.4) (2019-07-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [2.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@2.0.2...@pluralsight/ps-design-system-datepicker@2.0.3) (2019-07-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [2.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@2.0.1...@pluralsight/ps-design-system-datepicker@2.0.2) (2019-06-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [2.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@2.0.0...@pluralsight/ps-design-system-datepicker@2.0.1) (2019-05-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [2.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@1.0.9...@pluralsight/ps-design-system-datepicker@2.0.0) (2019-05-31)


### Code Refactoring

* **datepicker:** use withTheme HOC to get theme from contextw ([1d24150](https://github.com/pluralsight/design-system/commit/1d24150))


### BREAKING CHANGES

* **datepicker:** update React peerDep to 16.8.6





## [1.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@1.0.8...@pluralsight/ps-design-system-datepicker@1.0.9) (2019-05-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [1.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@1.0.7...@pluralsight/ps-design-system-datepicker@1.0.8) (2019-05-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [1.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@1.0.6...@pluralsight/ps-design-system-datepicker@1.0.7) (2019-05-14)


### Bug Fixes

* **datepicker:** vertically align calendar button icon ([5fcc73d](https://github.com/pluralsight/design-system/commit/5fcc73d)), closes [#510](https://github.com/pluralsight/design-system/issues/510)





## [1.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@1.0.5...@pluralsight/ps-design-system-datepicker@1.0.6) (2019-05-01)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [1.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@1.0.4...@pluralsight/ps-design-system-datepicker@1.0.5) (2019-04-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [1.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@1.0.3...@pluralsight/ps-design-system-datepicker@1.0.4) (2019-04-23)


### Bug Fixes

* dependency range ([e6e59f9](https://github.com/pluralsight/design-system/commit/e6e59f9))





## [1.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@1.0.2...@pluralsight/ps-design-system-datepicker@1.0.3) (2019-04-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [1.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@1.0.1...@pluralsight/ps-design-system-datepicker@1.0.2) (2019-03-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [1.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@1.0.0...@pluralsight/ps-design-system-datepicker@1.0.1) (2019-03-12)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





# [1.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.5.2...@pluralsight/ps-design-system-datepicker@1.0.0) (2019-03-04)


### Features

* **theme:** forward refs ([5946706](https://github.com/pluralsight/design-system/commit/5946706))


### BREAKING CHANGES

* **theme:** bump to react 16.3 to use forwardrefs api





## [0.5.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.5.1...@pluralsight/ps-design-system-datepicker@0.5.2) (2019-02-12)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [0.5.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.5.0...@pluralsight/ps-design-system-datepicker@0.5.1) (2019-01-29)


### Bug Fixes

* **datepicker:** add keys to avoid errors ([8fbfbc6](https://github.com/pluralsight/design-system/commit/8fbfbc6))





# [0.5.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.28...@pluralsight/ps-design-system-datepicker@0.5.0) (2019-01-17)


### Features

* **datepicker:** close on escape or click out ([e696627](https://github.com/pluralsight/design-system/commit/e696627))





## [0.4.28](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.27...@pluralsight/ps-design-system-datepicker@0.4.28) (2019-01-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [0.4.27](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.26...@pluralsight/ps-design-system-datepicker@0.4.27) (2018-12-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [0.4.26](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.24...@pluralsight/ps-design-system-datepicker@0.4.26) (2018-12-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [0.4.25](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.24...@pluralsight/ps-design-system-datepicker@0.4.25) (2018-12-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [0.4.24](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.23...@pluralsight/ps-design-system-datepicker@0.4.24) (2018-12-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [0.4.23](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.22...@pluralsight/ps-design-system-datepicker@0.4.23) (2018-12-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [0.4.22](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.21...@pluralsight/ps-design-system-datepicker@0.4.22) (2018-11-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [0.4.21](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.20...@pluralsight/ps-design-system-datepicker@0.4.21) (2018-11-27)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [0.4.20](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.19...@pluralsight/ps-design-system-datepicker@0.4.20) (2018-11-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [0.4.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.18...@pluralsight/ps-design-system-datepicker@0.4.19) (2018-11-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [0.4.18](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.17...@pluralsight/ps-design-system-datepicker@0.4.18) (2018-11-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [0.4.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.16...@pluralsight/ps-design-system-datepicker@0.4.17) (2018-11-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [0.4.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.15...@pluralsight/ps-design-system-datepicker@0.4.16) (2018-11-09)


### Bug Fixes

* upgrade storybook and fix issues with require.context ([ba6a6e8](https://github.com/pluralsight/design-system/commit/ba6a6e8))
* **datepicker:** update/parse new calendar values when state changes ([bf6244f](https://github.com/pluralsight/design-system/commit/bf6244f)), closes [#304](https://github.com/pluralsight/design-system/issues/304)





## [0.4.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.14...@pluralsight/ps-design-system-datepicker@0.4.15) (2018-10-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





## [0.4.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.13...@pluralsight/ps-design-system-datepicker@0.4.14) (2018-10-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker





<a name="0.4.13"></a>
## [0.4.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.12...@pluralsight/ps-design-system-datepicker@0.4.13) (2018-10-31)




**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker

<a name="0.4.12"></a>
## [0.4.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.11...@pluralsight/ps-design-system-datepicker@0.4.12) (2018-10-18)




**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker

<a name="0.4.10"></a>
## [0.4.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.9...@pluralsight/ps-design-system-datepicker@0.4.10) (2018-10-17)


### Bug Fixes

* **datepicker:** add missing button dep ([4ee0b17](https://github.com/pluralsight/design-system/commit/4ee0b17))




<a name="0.4.9"></a>
## [0.4.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.8...@pluralsight/ps-design-system-datepicker@0.4.9) (2018-10-10)




**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker

<a name="0.4.8"></a>
## [0.4.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.7...@pluralsight/ps-design-system-datepicker@0.4.8) (2018-09-25)




**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker

<a name="0.4.7"></a>
## [0.4.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.6...@pluralsight/ps-design-system-datepicker@0.4.7) (2018-09-25)


### Bug Fixes

* **datepicker:** do not submit form on calendar button click ([8dcce18](https://github.com/pluralsight/design-system/commit/8dcce18)), closes [#263](https://github.com/pluralsight/design-system/issues/263)




<a name="0.4.5"></a>
## [0.4.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.4...@pluralsight/ps-design-system-datepicker@0.4.5) (2018-09-04)




**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker

<a name="0.4.4"></a>
## [0.4.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.3...@pluralsight/ps-design-system-datepicker@0.4.4) (2018-08-23)




**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker

<a name="0.4.3"></a>
## [0.4.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.2...@pluralsight/ps-design-system-datepicker@0.4.3) (2018-07-31)




**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker

<a name="0.4.2"></a>
## [0.4.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.1...@pluralsight/ps-design-system-datepicker@0.4.2) (2018-07-30)




**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker

<a name="0.4.1"></a>
## [0.4.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.4.0...@pluralsight/ps-design-system-datepicker@0.4.1) (2018-07-26)




**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker

<a name="0.4.0"></a>
# [0.4.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.3.3...@pluralsight/ps-design-system-datepicker@0.4.0) (2018-07-10)


### Features

* **datepicker:** generate stylesheet in build ([eaafc37](https://github.com/pluralsight/design-system/commit/eaafc37))




<a name="0.3.3"></a>
## [0.3.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.3.2...@pluralsight/ps-design-system-datepicker@0.3.3) (2018-07-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker

<a name="0.3.2"></a>
## [0.3.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.3.1...@pluralsight/ps-design-system-datepicker@0.3.2) (2018-07-02)


### Bug Fixes

* **datepicker:** add missing icon dependency ([45a42c4](https://github.com/pluralsight/design-system/commit/45a42c4))




<a name="0.3.1"></a>
## [0.3.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.3.0...@pluralsight/ps-design-system-datepicker@0.3.1) (2018-07-02)




**Note:** Version bump only for package @pluralsight/ps-design-system-datepicker

<a name="0.3.0"></a>
# [0.3.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-datepicker@0.2.0...@pluralsight/ps-design-system-datepicker@0.3.0) (2018-06-29)


### Bug Fixes

* **datepicker:** disable stops input ([b4155a1](https://github.com/pluralsight/design-system/commit/b4155a1))
* **datepicker:** ensure sub field dividers are dark in light theme ([c879327](https://github.com/pluralsight/design-system/commit/c879327))
* **datepicker:** focus and error ring measurements ([f8dfa7b](https://github.com/pluralsight/design-system/commit/f8dfa7b))
* **datepicker:** prevent icon click from submitting the form ([f2b6e8b](https://github.com/pluralsight/design-system/commit/f2b6e8b))
* **datepicker:** update broken snapshot ([67f245b](https://github.com/pluralsight/design-system/commit/67f245b))


### Features

* **datepicker:** clearing subfields triggers onselect with empty value ([fae8541](https://github.com/pluralsight/design-system/commit/fae8541))




<a name="0.2.0"></a>
# 0.2.0 (2018-06-29)


### Bug Fixes

* **datepicker:** close calendar on sub field focus; clean up dividers ([ba645cc](https://github.com/pluralsight/design-system/commit/ba645cc))
* **datepicker:** handle proptypes for calendar empty strings ([3d4fb3f](https://github.com/pluralsight/design-system/commit/3d4fb3f))
* **datepicker:** update broken snapshot ([4435657](https://github.com/pluralsight/design-system/commit/4435657))


### Features

* **datepicker:** add calendar entrace transition ([7d4aa3d](https://github.com/pluralsight/design-system/commit/7d4aa3d))
* **datepicker:** enable form-style focus state ([1a374b3](https://github.com/pluralsight/design-system/commit/1a374b3))
* **datepicker:** expose clicked day to onSelect callback ([ef1f8ab](https://github.com/pluralsight/design-system/commit/ef1f8ab))
* **datepicker:** focus on the calendar day previously selected ([2941695](https://github.com/pluralsight/design-system/commit/2941695))
* **datepicker:** force date subfields to be valid dates ([3514516](https://github.com/pluralsight/design-system/commit/3514516))
* **datepicker:** pass selected value into datepicker and calendar ([cf2e3f5](https://github.com/pluralsight/design-system/commit/cf2e3f5))
* **datepicker:** prev/next month calendar advancement ([65416a8](https://github.com/pluralsight/design-system/commit/65416a8))
* **datepicker:** properly hide value input field ([e0451f1](https://github.com/pluralsight/design-system/commit/e0451f1))
* **datepicker:** show calendar when icon clicked ([361c52b](https://github.com/pluralsight/design-system/commit/361c52b))
* **datepicker:** sub fields and styling ([9e21443](https://github.com/pluralsight/design-system/commit/9e21443))
* **datepicker:** wip calendar styling ([53a4258](https://github.com/pluralsight/design-system/commit/53a4258))
* **datepicker:** wip new component from text input ([a5f3ad6](https://github.com/pluralsight/design-system/commit/a5f3ad6))
