const angular = require('angular');

// tests
if (ON_TEST) {
  require('angular-mocks/angular-mocks');
}

const ngModule = angular.module('app', []);

import directives from './js/directives';

directives(ngModule);