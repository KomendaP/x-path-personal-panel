
const angular = require('angular');
const ngModule = angular.module('app', []);
// tests
if (NODE_ENV === 'test'){
  console.log('test');
}

import controllers from './controllers';
import services from './services';
import directives from './directives';

directives(ngModule);
controllers(ngModule);
services(ngModule);
