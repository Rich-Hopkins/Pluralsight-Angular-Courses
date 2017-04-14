/**
 * Created by Rich Hopkins on 4/14/2017.
 */
'use strict';

eventsApp.controller('MainMenuController',
  function MainMenuController($scope, $location){
    $scope.createEvent = function(){
      $location.url('/newEvent');
    };
    $scope.editProfile = function(){
      $location.url('/editProfile');
    };
    $scope.showEvents = function() {
      $location.url('/events');
    };
  });