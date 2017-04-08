/**
 * Created by Rich Hopkins on 4/3/2017.
 */
'use strict';

eventsApp.controller('EventController',
  function EventController($scope, eventData, $log){

    $scope.sortOrder = 'name';
    $scope.colorRed = {color: 'red'};
    $scope.boolValue = false;
    eventData.getEvent()
             .$promise
             .then(function(event){
               $scope.event = event;
             })
             .catch(function(response){
               $log(response);
             });

    $scope.upVoteSession = function(session){
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session){
      session.upVoteCount--;
    }
  });