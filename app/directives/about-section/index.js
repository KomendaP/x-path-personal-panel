export default ngModule => {

  //test
  if (ON_TEST) {
    require('./index.test.js')(ngModule);
  }


  ngModule.directive('aboutSection', () => {
    // styles
    require('./about-section.scss');
    
    // controller
    let ctrl = function () {};
    
    return {
      restrict: 'E',
      template: require('./about-section.html'),
      scope: {},
      controller: ctrl,
      controllerAs: 'about'
    }
  })
};