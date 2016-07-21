// import tmpl from './mainMenu.html';
// import styles from './mainMenu.scss';

export default ngModule => {
  "use strict";

  ngModule.directive('mainMenu', function () {
    let ctrl = () => {};
    let link = () => {};

    return {
      restrict: 'E',
      scope: {},
      templateUrl: tmpl,
      controller: ctrl,
      controllerAs: 'menu'
    }
  });
}