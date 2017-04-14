'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngRoute'])
                       .config(function($routeProvider){
                         $routeProvider.when('/newEvent',
                           {
                             templateUrl: 'templates/NewEvent.html',
                             controller: 'EditEventController'
                           })
                       });
