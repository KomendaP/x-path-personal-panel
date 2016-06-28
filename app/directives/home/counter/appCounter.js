import tmpl from './appCounter.html';
// import styles from './appCounter.scss';

export default ngModule => {
  "use strict";

  ngModule.directive('appCounter', function () {
    let getCordsForAngle = ( X, Y, radius, angleDegr) => {
      let angleRadians = (angleDegr - 180) * Math.PI / 180.0;
      return {
        x: parseInt(X + radius * Math.cos(angleRadians)),
        y: parseInt(Y + radius * Math.sin(angleRadians))
      }
    };

    let getArcForAngle = function (startAng, endAng, radius) {
      let startPoint = getCordsForAngle(50, 50, radius, startAng);
      let endPoint = getCordsForAngle(50, 50, radius, endAng);
      return ["M", startPoint.x, startPoint.y, "A", radius, radius, 0, 0, 1, endPoint.x, endPoint.y].join(' ')
    };

    let ctrl = function ($scope, DataSvc) {
      DataSvc
        .getData()
        .then(data => {
          $scope.counters = data.home.counters;
        });
      $scope.background = getArcForAngle(0, 180, 40);
    };

    return {
      restrict: 'E',
      template: tmpl,
      controller: ctrl
    }
  });
}