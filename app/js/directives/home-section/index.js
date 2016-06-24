module.exports = function (ngModule) {
  ngModule.directive('homeSection', function () {
    var ctrl = function () {
      this.entity = 'Personal panel'
    };
    return {
      restrict: 'E',
      templateUrl: './js/directives/home-section/home-section.html',
      scope: {},
      controller: ctrl,
      controllerAs: 'home'
    }
  })
}