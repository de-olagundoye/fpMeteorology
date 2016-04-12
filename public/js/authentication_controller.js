angular.module('fpMeteorology').controller('AuthenticationsController', AuthenticationsController);

function AuthenticationsController($scope, $http, $rootScope){
  $http.get('/checklogin').success(function(response) {
    if (response){
      $scope.loggedIn = response;
      console.log(response)
    } else {
      console.log("logged out")
    }
  });
}