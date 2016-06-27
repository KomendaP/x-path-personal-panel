export default ngModule => {
  "use strict";

  ngModule.directive('myCounter', function ($timeout) {
    let link = function (scope) {
      let counter = 0;
      let updateCounter = function() {
        counter++;
        let timer = $timeout(updateCounter, 10);
        scope.$parent.item.initial = counter;
        if (counter == scope.myCounter) {
          $timeout.cancel(timer);
        }
      };
      updateCounter();
    };
    
    return {
      restrict: 'A',
      scope: {
        myCounter: '='
      },
      link
    }
  });
}