(function(){

  angular.module('app')
    .controller('BooksController', ['$q', 'books', 'dataService', 'badgeService', '$cookies', '$cookieStore', '$log', '$route', 'BooksResource', BooksController]);


  function BooksController($q, books, dataService, badgeService, $cookies, $cookieStore, $log, $route, BooksResource){

    var vm = this;

    vm.appName = books.appName;

    dataService.getUserSummary()
      .then(getUserSummarySuccess);

    function getUserSummarySuccess(summaryData){
      vm.summaryData = summaryData;
    }

    var booksPromise = dataService.getAllBooks();
    var readersPromise = dataService.getAllReaders();

    $q.all([booksPromise, readersPromise])
      .then(getAllDataSuccess)
      .catch(getAllDataError);

    function getAllDataSuccess(dataArray) {
      vm.allBooks = dataArray[0];
      vm.allReaders = dataArray[1];
    }

    function getAllDataError(reason){
      console.log(reason);
    }

    vm.deleteBook = function(bookID) {
      dataService.deleteBook(bookID)
        .then(deleteBookSuccess)
        .catch(deleteBookError);
    };

    function deleteBookSuccess(message) {
      $log.info(message);
      $route.reload();
    }

    function deleteBookError(errorMessage){
      $log.error(errorMessage);
    }

    vm.getBadge = badgeService.retrieveBadge;

    vm.favoriteBook = $cookies.favoriteBook;

    vm.lastEdited = $cookieStore.get('lastEdited');

  }


}());