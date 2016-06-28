export default ngModule => {
  "use strict";

  ngModule.controller('HomeCtrl', ['DataSvc', function (DataSvc) {
    DataSvc
      .getData()
      .then(data => {
        this.cBusiness = data.home.cBusiness;
      });
  }]);
}