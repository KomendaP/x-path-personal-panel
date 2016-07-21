import template from './counter.html';

export default ngModule => {
  "use strict";

  ngModule.directive('myCounter', function ($timeout) {
    let getCordsForAngle = ( centerX, centerY, radius, angleDegr) => {
      let angleRadians = (angleDegr - 180) * Math.PI / 180.0;
      return {
        x: parseInt(centerX + radius * Math.cos(angleRadians)),
        y: parseInt(centerY + radius * Math.sin(angleRadians))
      }
    };
  
    let getArcForAngle = function (startAng, endAng, radius, centerX, centerY) {
      let startPoint = getCordsForAngle(centerX, centerY, radius, startAng);
      let endPoint = getCordsForAngle(centerX, centerY, radius, endAng);
      return ["M", startPoint.x, startPoint.y, "A", radius, radius, 0, 0, 1, endPoint.x, endPoint.y].join(' ')
    };
  
    let controller = function ($scope) {
      $scope.initial = 0;
      $scope.getArcForAngle = getArcForAngle;
    };

    let link = function (scope) {
      let counter = scope.initial;
      let updateCounter = function() {
        counter++;
        let timer = $timeout(updateCounter, 10);
        scope.initial = counter;
        if (counter == scope.max) {
          $timeout.cancel(timer);
        }
      };
      updateCounter();
    };
    
    return {
      restrict: 'E',
      template,
      scope: {
        max: '='
      },
      controller,
      link
    }
  });
}