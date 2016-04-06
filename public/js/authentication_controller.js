angular.module('fpMeteorology').controller('AuthenticationController', AuthenticationController);

function AuthenticationController($scope, $http, $rootScope){
  $scope.isLoggedIn = function() {
    $http.get('/checklogin').
      success(function(data) {
        if (data === "true"){
          $rootScope.loggedIn = data;
        }
    });
  };
}