export default ngModule => {

  //test
  if (ON_TEST) {
    require('./index.test.js')(ngModule);
  }


  ngModule.directive('projectSection', () => {
    // styles
    require('./project-section.scss');
    
    // controller
    let ctrl = function () {};
    
    return {
      restrict: 'E',
      template: require('./project-section.html'),
      scope: {},
      controller: ctrl,
      controllerAs: 'proj'
    }
  })
};