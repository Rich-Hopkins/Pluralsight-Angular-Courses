/**
 * Created by Rich Hopkins on 5/25/2017.
 */
(function(){
  angular.module('app')
    .factory('BooksResource', ['$resource', BooksResource]);

  function BooksResource($resource){
    return $resource('/api/books/:book_id', {book_id: '@book_id'},
      {
        'update':{method:'PUT'}
      });
  }
}());