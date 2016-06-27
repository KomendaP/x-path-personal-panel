import tmpl from './appCard.html';
// import styles from './appCounter.scss';

export default ngModule => {
  "use strict";

  ngModule.directive('appCard', function () {
    let ctrl = function ($scope) {
      $scope.cards = [
        {
          title: `Fresh & Clean Design`,
          descr: `Nulla consectetur ornare nibh, a
                  auctor mauris scelerisque eu proin nec
                  urna quis justo adipiscing auctor ut auctor.`,
          class: `Des`,
          icon: `heart`
        },
        {
          title: `Very Flexible`,
          descr: `Nulla consectetur ornare nibh, a
                  auctor mauris scelerisque eu proin nec
                  urna quis justo adipiscing auctor ut auctor.`,
          class: `Ver`,
          icon: `cog`
        },
        {
          title: `Fully Responsive`,
          descr: `Nulla consectetur ornare nibh, a
                  auctor mauris scelerisque eu proin nec
                  urna quis justo adipiscing auctor ut auctor.`,
          class: `Fully`,
          icon: `tablet`
        }
      ]
    };

    return {
      restrict: 'E',
      template: tmpl,
      controller: ctrl
    }
  });
}