angular.module('fpMeteorology').controller('LooksController', LooksController);

function LooksController($scope, $http){
  $http.get('/looks.json').success(function(response){
    $scope.users = response
    console.log($scope.users)

    $scope.random = function(){
      return 0.5 - Math.random();
    };
  });

  $scope.showImages = function(){
    $scope.all.forEach(function(user){
      user.looks.forEach(function(response){
        $scope.looks = response
        console.log(response)
      })
    })
  }

  // $scope.all.forEach(function(user){
  //     user.looks.forEach(function(response){
  //       $scope.looks = response;
  //       console.log($scope.looks.img_src)
  //     });
  //   });
}