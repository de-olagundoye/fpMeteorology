angular.module('fpMeteorology').controller('SelectionsController', SelectionsController);

function SelectionsController($scope, $http){
  $http.get('/weather').success(function(response){
    $scope.weathers = response;
  });

  $http.get('/occasions').success(function(response){
    $scope.occasions = response
  });

  $http.get('/fp_girls').success(function(response){
    $scope.girls = response
  });
}