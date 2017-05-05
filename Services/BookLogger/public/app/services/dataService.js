/**
 * Created by Rich Hopkins on 5/5/2017.
 */
(function(){

  angular.module('app')
    .factory('dataService', dataService);

  function dataService(logger) {
    return{
      getAllBooks: getAllBooks,
      getAllReaders: getAllReaders
    };

    function getAllBooks(){

      // logger.output('Getting all books');

      return [
        {
          book_id: 1,
          title: 'Harry Potter and the Deathly Hallows',
          author: 'J.K. Rowling',
          year_published: 2000
        },
        {
          book_id: 2,
          title: 'Clean Code',
          author: 'Robert Martin',
          year_published: 2008
        },
        {
          book_id: 3,
          title: 'Test-Driven Development By Example',
          author: 'Kent Beck',
          year_published: 2003
        }
      ];
    }

    function getAllReaders() {
      return [
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
    }
  }

  dataService.$inject = ['logger'];
}());