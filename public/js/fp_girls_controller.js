angular.module('fpMeteorology').controller('FpGirlsController', FpGirlsController);

function FpGirlsController($scope, $http){
  $http.get('/fp_girls').success(function(response){
    $scope.fpGirls = response
  });

  $scope.showGirl = function(id){
    $scope.fpGirls.forEach(function(girl){
      if (girl._id === id) {
        $scope.clickGirl = girl
      }
    })
  };
}