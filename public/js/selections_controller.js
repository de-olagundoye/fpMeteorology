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

  $scope.replaceDefault = $(function(){
    $("#drop-down-weather").on('click', 'a', function(){
      $(".selectedWeather:first-child").text($(this).text());
    });

    $("#drop-down-occasion").on('click', 'a', function(){
      $(".selectedOccasion:first-child").text($(this).text());
    });

    $("#drop-down-girl").on('click', 'a', function(){
      $(".selectedGirl:first-child").text($(this).text());
    });

    $("#reset-button").on('click', function(){
      $(".selectedWeather:first-child").text(("Weather"));
      $(".selectedOccasion:first-child").text(("Occasion"));
      $(".selectedGirl:first-child").text(("FP Girl"));
    })
  });
}
// $(".selectedGirl:first-child").val($(this).text());