angular.module('fpMeteorology').controller('AuthenticationController', AuthenticationController);

function AuthenticationController($scope, $http, $rootScope){
  $scope.isLoggedIn = function() {
    $http.get('/checklogin').
      success(function(data) {
      console.log(data)
      $rootScope.loggedIn = data;
    }).error(function(data) {
      console.log('ERROR:' + data)
    })
  }
}