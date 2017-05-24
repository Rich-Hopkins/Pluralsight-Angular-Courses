/**
 * Created by Rich Hopkins on 5/5/2017.
 */
(function(){

  angular.module('app')
    .factory('dataService', ['$q', '$timeout', '$http', 'constants', dataService]);

  function dataService($q, $timeout, $http, constants) {
    return{
      getAllBooks: getAllBooks,
      getAllReaders: getAllReaders,
      getBookById: getBookById,
      updateBook: updateBook
    };

    function getAllBooks(){
      return $http({
        method:'GET',
        url: 'api/books',
        headers: {
          'PS-BookLogger-Version': constants.APP_VERSION
        }
      })
        .then(sendResponseData)
        .catch(sendGetBooksError);
    }

    function getBookById(bookID) {
      return $http({
        method: 'GET',
        url: 'api/books/' + bookID
      })
        .then(sendResponseData)
        .catch(sendGetBooksError);
    }

    function sendResponseData(response){
      return response.data;
    }

    function sendGetBooksError(response){
      return $q.reject('Error retrieving books. (HTTP status: ' + response.status + ')');
    }

    function updateBook(book) {
      return $http({
        method: 'PUT',
        url: 'api/books/' + book.book_id,
        data: book
      })
        .then(updateBookSuccess)
        .catch(updateBookError);
    }

    function updateBookSuccess(response) {
      return 'Book updated: ' + response.config.data.title;
    }

    function updateBookError(response) {
      return $q.reject('Error updating book. (HTTP status: ' + response.status + ')');
    }


    function getAllReaders() {
      var readersArray = [
        {
          reader_id: 1,
          name: 'Rich',
          weeklyReadingGoal: 315,
          totalMinutesRead: 5600
        },
        {
          reader_id: 2,
          name: 'Suzi',
          weeklyReadingGoal: 225,
          totalMinutesRead: 3000
        },
        {
          reader_id: 3,
          name: 'Fred',
          weeklyReadingGoal: 160,
          totalMinutesRead: 500
        }
      ];

      var deferred = $q.defer();

      $timeout(function(){
        deferred.resolve(readersArray);
      }, 15);

      return deferred.promise;
    }
  }

  dataService.$inject = ['logger'];
}());