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
             .success(function(event){
               $scope.event = event
             })
             .error(function(data, status, headers, config){
               $log.warn(data, status, headers, config);
             });

    $scope.upVoteSession = function(session){
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session){
      session.upVoteCount--;
    }
  });