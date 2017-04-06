/**
 * Created by Rich Hopkins on 4/4/2017.
 */
'use strict'

eventsApp.controller('EditEventController', function EditEventController($scope) {
  $scope.saveEvent = function (event, newEventForm) {
    if (newEventForm.$valid) {
      window.alert("save was clicked");
    }
  };

  $scope.cancelEdit = function () {
    window.location = "/EventDetails.html";
  };
});