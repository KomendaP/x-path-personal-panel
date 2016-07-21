// import tmpl from './mainMenu.html';
// import styles from './mainMenu.scss';

export default ngModule => {
  "use strict";

  ngModule.directive('appGallery', function () {
    let ctrl = () => {};
    let link = () => {};

    return {
      restrict: 'E',
      scope: {},
      templateUrl: tmpl,
      controller: ctrl,
      controllerAs: 'gallery'
    }
  });
}