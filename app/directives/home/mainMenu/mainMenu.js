import tmpl from './mainMenu.html';
// import styles from './mainMenu.scss';

export default ngModule => {
  "use strict";

  ngModule.directive('mainMenu', function () {
    let ctrl = function () {
      this.menuItems = [
        {
          link: 'home',
          title: 'Home',
          active: false
        },
        {
          link: 'about',
          title: 'About',
          active: false
        },
        {
          link: 'project',
          title: 'Projects',
          active: false
        },
        {
          link: 'news',
          title: 'News',
          active: false
        },
        {
          link: 'contact',
          title: 'Contact',
          active: false
        },
      ]
    };

    return {
      restrict: 'E',
      scope: {},
      template: tmpl,
      controller: ctrl,
      controllerAs: 'menu'
    }
  });
}