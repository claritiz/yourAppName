angular.module('yourAppsName.services', [])


// .factory('stockDataService', function($q, $http) {
//    var getDetailsData = function(ticker) {
//      var deferred = $q.defer(),
//      query = 'select * from yahoo.finance.quotes where symbol IN ("' + ticker + '")',
//      url = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIService.encode(query) + '&format=json&env=http://datatables.org/alltables.env';
//
//      $http.get(url)
//        .success(function(json) {
//          var jsonData = json.query.results.quote;
//          deferred.resolve(jsonData);
//        })
//        .error(function(error) {
//          console.log("Details data error: " + error);
//          deferred.reject();
//        });
//
//      return deferred.promise;
//    };

.factory('stockDataService', function($q, $http) {

var getPriceData = function(ticker) {

  var deferred = $q.defer(),
  url = "http://finance.yahoo.com/webservice/v1/symbols/" + ticker + "/quote?format=json&view=detail";

  // $http.get(url)
  // .success(function(jsonData) {
  //   console.log(jsonData.data.list.resources[0].resource.fields);
  // });
  $http.get(url)
         .success(function(json) {
           var jsonData = json.list.resources[0].resource.fields;
           deferred.resolve(jsonData);
         })
         .error(function(error) {
           console.log("Details data error: " + error);
           deferred.reject();
         });
  return deferred.promise;

};



  return {
getPriceData: getPriceData
  };

})
;
