/**
 * Created by Rich Hopkins on 4/13/2017.
 */
'use strict';

eventsApp.controller('EventListController',
  function EventListController($scope, eventData) {
    $scope.events = eventData.getAllEvents();
  }
);