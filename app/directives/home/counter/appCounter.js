import tmpl from './appCounter.html';
// import styles from './appCounter.scss';

export default ngModule => {
  "use strict";

  ngModule.directive('appCounter', function () {
    let ctrl = function ($scope, DataSvc) {
      DataSvc
        .getData()
        .then(data => {
          $scope.counters = data.home.counters;
        });
    };

    return {
      restrict: 'E',
      template: tmpl,
      controller: ctrl
    }
  });
}