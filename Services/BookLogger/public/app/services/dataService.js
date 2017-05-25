/**
 * Created by Rich Hopkins on 5/5/2017.
 */
(function(){

  angular.module('app')
    .factory('dataService', ['$q', '$timeout', '$http', 'constants', '$cacheFactory', dataService]);

  function dataService($q, $timeout, $http, constants, $cacheFactory){
    return {
      getAllBooks: getAllBooks,
      getAllReaders: getAllReaders,
      getBookById: getBookById,
      updateBook: updateBook,
      addBook: addBook,
      deleteBook: deleteBook,
      getUserSummary: getUserSummary
    };

    function getUserSummary() {

      var deferred = $q.defer();

      var dataCache = $cacheFactory.get('bookLoggerCache');

      if (!dataCache) {
        dataCache = $cacheFactory('bookLoggerCache');
      }

      var summaryFromCache = dataCache.get('summary');

      if (summaryFromCache) {
        deferred.resolve(summaryFromCache);
      }
      else {
        var booksPromise = getAllBooks();
        var readersPromise = getAllReaders();

        $q.all([booksPromise, readersPromise])
          .then(function (bookLoggerData) {

            var allBooks = bookLoggerData[0];
            var allReaders = bookLoggerData[1];

            var grandTotalMinutes = 0;

            allReaders.forEach(function (currentReader, index, array) {
              grandTotalMinutes += currentReader.totalMinutesRead;
            });

            var summaryData = {
              bookCount: allBooks.length,
              readerCount: allReaders.length,
              grandTotalMinutes: grandTotalMinutes
            };

            dataCache.put('summary', summaryData);
            deferred.resolve(summaryData);

          });

      }

      return deferred.promise;

    }

    function deleteSummaryFromCache(){
      var dataCache = $cacheFactory.get('bookLoggerCache');
      dataCache.remove('summary');
    }

    function getAllBooks(){
      return $http({
        method: 'GET',
        url: 'api/books',
        headers: {
          'PS-BookLogger-Version': constants.APP_VERSION
        },
        cache: true
      })
        .then(sendResponseData)
        .catch(sendGetBooksError);
    }

    function deleteAllBooksResponseFromCache() {
      var httpCache = $cacheFactory.get('$http');
      httpCache.remove('api/books');
    }

    function getBookById(bookID){
      return $http.get('api/books/' + bookID)
        .then(sendResponseData)
        .catch(sendGetBooksError);
    }

    function sendResponseData(response){
      return response.data;
    }

    function sendGetBooksError(response){
      return $q.reject('Error retrieving books. (HTTP status: ' + response.status + ')');
    }

    function updateBook(book){
      deleteSummaryFromCache();
      deleteAllBooksResponseFromCache();
      return $http.put('api/books/' + book.book_id, book)
        .then(updateBookSuccess)
        .catch(updateBookError);
    }

    function updateBookSuccess(response){
      return 'Book updated: ' + response.config.data.title;
    }

    function updateBookError(response){
      return $q.reject('Error updating book. (HTTP status: ' + response.status + ')');
    }

    function addBook(newBook){
      deleteSummaryFromCache();
      deleteAllBooksResponseFromCache();
      return $http.post('api/books',newBook)
        .then(addBookSuccess)
        .catch(addBookError);
    }

    function addBookSuccess(response){
      return 'Book added: ' + response.config.data.title;
    }

    function addBookError(response){
      return $q.reject('Error adding the book. (HTTP status: ' + response.status + ')');
    }

    function deleteBook(bookID){
      deleteSummaryFromCache();
      deleteAllBooksResponseFromCache();
      return $http.delete('api/books/' + bookID)
        .then(deleteBookSuccess)
        .catch(deleteBookError);
    }

    function deleteBookSuccess(response){
      return 'Book deleted.';
    }

    function deleteBookError(response){
      return $q.reject('Error deleting book. (HTTP status: ' + response.status + ')');
    }

    function getAllReaders(){
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