var app = angular.module('fpMeteorology', []);

$(document).ready(function () {
  $('#drop-down li').hover(
  function () {
      //show submenu
      $('ul', this).show();
  }, function () {
      //hide submenu
      $('ul', this).hide();
  });
});