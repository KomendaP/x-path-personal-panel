export default ngModule => {
  "use strict";

  ngModule.factory('DataSvc', function ($http, $q) {

    function success(res) {
      console.info('success!', res.data);
      return res.data;
    }

    function errorHandler(res) {
      $q.reject('Error: ' + res.statusCode);
    }
    
    function getData() {
      return $http({
        method: 'GET',
        url: './data.json'
      })
        .then(success)
        .catch(errorHandler)
    }
    
    return {
      getData
    }
  });
}