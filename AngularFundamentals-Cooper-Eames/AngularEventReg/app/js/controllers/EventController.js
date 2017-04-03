/**
 * Created by Rich Hopkins on 4/3/2017.
 */
'use strict';

eventsApp.controller('EventController',
    function EventController($scope){
      $scope.event = {
        name: 'Angular Boot Camp',
        date: '4/4/2017',
        time: '10:30 am',
        location: {
          address: 'Microsoft',
          city: 'Alpharetta',
          state: 'GA'
        },
        imageUrl: '/img/angularjs-logo.png'
      }
    });