# Testling Backbone Boilerplate

[![Build Status](http://img.shields.io/travis/omnibus-app/testling-backbone-boilerplate.svg?style=flat)](https://travis-ci.org/omnibus-app/testling-backbone-boilerplate)

[![browser support](https://ci.testling.com/nickb1080/testling-backbone-boilerplate.png)
](https://ci.testling.com/nickb1080/testling-backbone-boilerplate)

Basic setup for testing a Backbone front-end with [testling](https://github.com/substack/testling).

## Unit Tests

1. Install `testling` globally.
2. Run `npm test` enjoy.

## Code Coverage

1. Install `coverify` globally.
2. run `testling | coverify` for coverage data

## To Do
- [x] Integrate with [Testling CI](http://ci.testling.com)
- [x] See if this can work with [Travis CI](https://travis-ci.org)
- [ ] Figure out if we can instrument only non-test files with `coverify`; including specs skews our code coverage.
