(function(){

  var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngResource']);

  app.provider('books', ['constants', function(constants){
    this.$get = function(){

      var appName = constants.APP_TITLE;
      var appDesc = constants.APP_DESCRIPTION;
      var version = constants.APP_VERSION;

      if(includeVersionInTitle){
        appName += ' ' + version;
      }

      return {
        appName: appName,
        appDesc: appDesc
      };
    };

    var includeVersionInTitle = false;
    this.setIncludeVersionInTitle = function(value){
      includeVersionInTitle = value;
    }
  }]);

  app.config(['booksProvider', '$routeProvider', '$logProvider', '$provide', 'constants', 'dataServiceProvider', function(booksProvider, $routeProvider, $logProvider, $provide, constants){

    $provide.decorator('$log', ['$delegate', 'books', logDecorator]);

    booksProvider.setIncludeVersionInTitle(false);
    $logProvider.debugEnabled(true);

    $routeProvider
      .when('/', {
        templateUrl: '/app/templates/books.html',
        controller: 'BooksController',
        controllerAs: 'books'
      })
      .when('/AddBook', {
        templateUrl: '/app/templates/addBook.html',
        controller: 'AddBookController',
        controllerAs: 'bookAdder'
      })
      .when('/EditBook/:bookID', {
        templateUrl: '/app/templates/editBook.html',
        controller: 'EditBookController',
        controllerAs: 'bookEditor'
      })
      .otherwise('/');
  }]);

  function logDecorator($delegate, books){

    function log(message){
      message += ' - ' + new Date() + ' (' + books.appName + ')';
      $delegate.log(message);
    }

    function info(message){
      $delegate.info(message);
    }

    function warn(message){
      $delegate.warn(message);
    }

    function error(message){
      $delegate.error(message);
    }

    function debug(message){
      $delegate.debug(message);
    }

    function jedi(message){
      message = 'The Force is strong in you, young jedi.';
      $delegate.debug(message);
    }

    return {
      log: log,
      info: info,
      warn: warn,
      error: error,
      debug: debug,
      jedi: jedi
    };
  }

  app.run(['$rootScope', function($rootScope){

    $rootScope.$on('$routeChangeSuccess', function(event, current, previous){
      // console.log('successfully changed routes')
    });

    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
      console.log('error changing routes');
      console.log(event);
      console.log(current);
      console.log(previous);
      console.log(rejection);

    });

  }]);

}());