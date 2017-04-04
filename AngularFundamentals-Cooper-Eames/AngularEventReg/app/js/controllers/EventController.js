/**
 * Created by Rich Hopkins on 4/3/2017.
 */
'use strict';

eventsApp.controller('EventController',
  function EventController($scope, eventData) {

    $scope.sortOrder = 'name';
    $scope.colorRed = {color: 'red'};
    $scope.classBlue = "blue";
    $scope.boolValue = false;
    $scope.event = eventData.event;

    $scope.upVoteSession = function (session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function (session) {
      session.upVoteCount--;
    };
  });