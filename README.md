# ember-cli-masked-inputs

[![Build Status][]](https://travis-ci.org/toranb/ember-cli-masked-inputs)
[![NPM Downlaads](https://img.shields.io/npm/dm/ember-cli-masked-inputs.svg)](https://www.npmjs.org/package/ember-cli-masked-inputs)

## Description
Ember-cli-masked-inputs is a set of ember components that each provide a consistent masked look and feel for great user experiences

## Installation
```
# install via npm
$ npm install ember-cli-masked-inputs --save-dev
# make ember-cli fetch internal dependencies
$ ember g ember-cli-masked-inputs
```

## Phone Number

```
{{phone-number value=model.number clazz="foo"}}
```

## Credit Card Expiration

```
{{credit-card-expiration value=model.expiration clazz="bar"}}
```

## Running the unit tests

    npm install
    ember test

## License

Copyright © 2015 Toran Billups http://toranbillups.com

Licensed under the MIT License


[Build Status]: https://secure.travis-ci.org/toranb/ember-cli-masked-inputs.png?branch=master
