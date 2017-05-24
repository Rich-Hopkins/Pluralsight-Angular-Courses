(function(){

  angular.module('app')
    .controller('BooksController', ['$q', 'books', 'dataService', 'badgeService', '$cookies', '$cookieStore', '$log', BooksController]);


  function BooksController($q, books, dataService, badgeService, $cookies, $cookieStore, $log){

    var vm = this;

    vm.appName = books.appName;

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

    vm.getBadge = badgeService.retrieveBadge;

    vm.favoriteBook = $cookies.favoriteBook;

    vm.lastEdited = $cookieStore.get('lastEdited');

  }


}());