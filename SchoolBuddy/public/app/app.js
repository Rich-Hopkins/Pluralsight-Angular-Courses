(function(){

  var app = angular.module('app', ['ngRoute']);

  app.config(['$logProvider', '$routeProvider', function($logProvider, $routeProvider){

    $logProvider.debugEnabled(true);

    $routeProvider
      .when('/', {
        controller: 'HomeController',
        controllerAs: 'home',
        templateUrl: 'app/templates/home.html'
      })
      .when('/schools', {
        controller: 'AllSchoolsController',
        controllerAs: 'schools',
        templateUrl: 'app/templates/allSchools.html'
      })
      .when('/activities', {
        controller: 'AllActivitiesController',
        controllerAs: 'activities',
        templateUrl: 'app/templates/allActivities.html'
      })
      .when('/classrooms', {
        controller: 'AllClassroomsController',
        controllerAs: 'classrooms',
        templateUrl: 'app/templates/allClassrooms.html'
      })
      .when('/classrooms/:id', {
        controller: 'ClassroomController',
        controllerAs: 'classroom',
        templateUrl: 'app/templates/classroom.html'
      })
      .when('/classrooms/:id/detail/:month?', {
        templateUrl: '/app/templates/classroomDetail.html',
        controller: 'ClassroomController',
        controllerAs: 'classroom'
      })
      .otherwise('/');

  }]);

  app.run(['$rootScope', '$log', function($rootScope, $log){
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      // $log.debug('Changed routes');
      // $log.debug(event);
      // $log.debug(current);
      // $log.debug(previous);
    });

    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
      // $log.debug('Changed routes');
      // $log.debug(event);
      // $log.debug(current);
      // $log.debug(previous);
      // $log.debug(rejection);
    });

  }]);

}());