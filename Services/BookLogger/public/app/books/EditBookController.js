/**
 * Created by Rich Hopkins on 5/23/2017.
 */
(function(){

  angular.module('app')
    .controller('EditBookController', ['$routeParams', 'books', '$cookies', '$cookieStore', EditBookController]);

  function EditBookController($routeParams, books, $cookies, $cookieStore){

    var vm = this;

    vm.currentBook = books.filter(function(item){
      return item.book_id == $routeParams.bookID;
    })[0];

    vm.setAsFavorite = function(){
      $cookies.favoriteBook = vm.currentBook.title;
    };

    $cookieStore.put('lastEdited', vm.currentBook);

  }

}());