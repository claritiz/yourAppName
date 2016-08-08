angular.module('yourAppsName.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


    // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  // console.log("apps Ctrl");
})

// .controller('PlaylistsCtrl', function($scope) {
//   $scope.playlists = [
//     { title: 'second time', id: 1 },
//     { title: 'Chill', id: 2 },
//     { title: 'Dubstep', id: 3 },
//     { title: 'Indie', id: 4 },
//     { title: 'Rap', id: 5 },
//     { title: 'Cowbell', id: 6 },
//     { title: 'new data frsecond time', id: 7 }
//   ];
//   console.log("Playlists Ctrl");
// })
//
// .controller('PlaylistCtrl', function($scope, $stateParams) {
// $scope.dynamicViewFromStateparam = $stateParams.id;
// // console.log($scope.dynamicViewFromStateparam);
// // console.log("Playlist Ctrl");
// });

// .controller('myStocksCtrl', function($scope) {
//   $scope.playlists = [
//     { title: 'second time', id: 1 },
//     { title: 'Chill', id: 2 },
//     { title: 'Dubstep', id: 3 },
//     { title: 'Indie', id: 4 },
//     { title: 'Rap', id: 5 },
//     { title: 'Cowbell', id: 6 },
//     { title: 'new data frsecond time', id: 7 }
//   ];
//   // console.log("Playlists Ctrl");
// })


.controller('myStocksCtrl', ['$scope',
function($scope) {
  $scope.myStocksArray = [
    { ticker: "AAPL"},
    { ticker: "GPRO"},
    { ticker: "FB"},
    { ticker: "INTC"},
    { ticker: "MSFT"},
    { ticker: "GE"},
    { ticker: "C"}
  ];
  // console.log("Playlists Ctrl");
}])

// .controller('StockCtrl', function($scope, $stateParams) {
// // $scope.dynamicViewFromStateparam = $stateParams.id;
// // console.log($scope.dynamicViewFromStateparam);
// // console.log("Playlist Ctrl");
// $scope.ticker = $stateParams.stockTicker;
// });
.controller('StockCtrl', ['$scope', '$stateParams', '$http', 'stockDataService',
function($scope, $stateParams , $http, stockDataService) {
  $scope.ticker = $stateParams.stockTicker;


     var promise = stockDataService.getPriceData($scope.ticker);
  promise.then(function(data) {
console.log(data);
});

  // // http://finance.yahoo.com/webservice/v1/symbols/YHOO/quote?format=json&view=detail
  //
  // $http.get("http://finance.yahoo.com/webservice/v1/symbols/YHOO/quote?format=json&view=detail")
  // .then(function(jsonData) {
  //   console.log(jsonData.data.list.resources[0].resource.fields);
  // });
}]);
