export default ngModule => {

  //test
  if (ON_TEST) {
    require('./index.test')(ngModule);
  }


  ngModule.directive('homeSection', () => {
    // styles
    require('./home-section.scss');
    
    // controller
    let ctrl = function () {
      this.entity = [
        'We listen.',
        'We discuss.',
        'We develop.'
      ]
    };
    
    return {
      restrict: 'E',
      template: require('./home-section.html'),
      scope: {},
      controller: ctrl,
      controllerAs: 'home'
    }
  })
};