/**
 * Created by Rich Hopkins on 4/3/2017.
 */
'use strict';

eventsApp.controller('EventController',
  function EventController($scope, eventData) {

    $scope.sortOrder = 'name';
    $scope.colorRed = {color: 'red'};
    $scope.boolValue = false;
    eventData.getEvent(function(event) {
      $scope.event = event;
    });

    $scope.upVoteSession = function (session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function (session) {
      session.upVoteCount--;
    };
  });