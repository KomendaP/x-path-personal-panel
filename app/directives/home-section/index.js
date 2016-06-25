export default ngModule => {

  //test
  if (ON_TEST) {
    require('./index.test.js')(ngModule);
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
      ];
      this.mainMenu = [
        {title: 'Home', link: '#home', active: true},
        {title: 'About', link: '#about', active: false},
        {title: 'Projects', link: '#project', active: false},
        {title: 'News', link: '#news', active: false},
        {title: 'Contact', link: '#contact', active: false}
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