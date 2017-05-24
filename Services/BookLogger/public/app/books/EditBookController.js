/**
 * Created by Rich Hopkins on 5/23/2017.
 */
(function(){

  angular.module('app')
    .controller('EditBookController', ['$routeParams', 'books', '$cookies', '$cookieStore', 'dataService', '$log', '$location', EditBookController]);

  function EditBookController($routeParams, books, $cookies, $cookieStore, dataService, $log, $location){

    var vm = this;

    dataService.getBookById($routeParams.bookID)
      .then(getBookSuccess)
      .catch(getBookError);

    function getBookSuccess(book){
      vm.currentBook = book;
      $cookieStore.put('lastEdited', vm.currentBook);
    }

    function getBookError(reason){
      $log.error(reason);
    }

    vm.saveBook = function (){
      dataService.updateBook(vm.currentBook)
        .then(updateBookSuccess)
        .catch(updateBookError);
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