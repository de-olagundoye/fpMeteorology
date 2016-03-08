angular.module('fpMeteorology').controller('LooksController', LooksController);

function LooksController($scope, $http){

  $http.get('/looks').success(function(response){
    $scope.looks = response;

  $scope.query = function( looks ) {
    return function( item ) {
      console.log();
    };
  };

   random = function(){
      return Math.random();
    };

  $scope.orderProp=random
  });

  $scope.show = function(response){
    document.getElementById("modal").style.visibility = "visible";
    $scope.thisLook = response;
  };

  $scope.close = function(){
    document.getElementById("modal").style.visibility = "hidden";
  };
}