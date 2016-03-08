angular.module('fpMeteorology').controller('LooksController', LooksController);

function LooksController($scope, $http){
  $http.get('/looks.json').success(function(response){
    $scope.users = response;

    $scope.random = function(){
      return Math.random();
    };
  });

  $scope.show = function(response){
    document.getElementById("modal").style.visibility = "visible";
    $scope.thisLook = response;
  };

  $scope.close = function(){
    document.getElementById("modal").style.visibility = "hidden";
  };
}