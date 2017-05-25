/**
 * Created by Rich Hopkins on 5/23/2017.
 */
(function(){

  angular.module('app')
    .controller('EditBookController', ['$routeParams', 'books', '$cookies', '$cookieStore', 'dataService', '$log', '$location', 'BooksResource', EditBookController]);

  function EditBookController($routeParams, books, $cookies, $cookieStore, dataService, $log, $location, BooksResource){

    var vm = this;

    // dataService.getBookById($routeParams.bookID)
    //   .then(getBookSuccess)
    //   .catch(getBookError);

    vm.currentBook = BooksResource.get({book_id: $routeParams.bookID});
    // This method uses the BooksResource instead of the dataService to get the book.

    function getBookSuccess(book){
      vm.currentBook = book;
      $cookieStore.put('lastEdited', vm.currentBook);
    }

    function getBookError(reason){
      $log.error(reason);
    }

    vm.saveBook = function (){
      // dataService.updateBook(vm.currentBook)
      //   .then(updateBookSuccess)
      //   .catch(updateBookError);
      vm.currentBook.$update();
      $location.path('/');
    };

    function updateBookSuccess(message){
      $log.info(message);
      $location.path('/');
    }

    function updateBookError(errorMessage){
      $log.error(errorMessage);
    }

    vm.setAsFavorite = function(){
      $cookies.favoriteBook = vm.currentBook.title;
    };


  }

}());