const angular = require('angular');

// tests
if (NODE_ENV === 'test'){
  console.log('test');
  // require('angular-mocks/angular-mocks');
}

const ngModule = angular.module('app', []);

import directives from './directives';

directives(ngModule);