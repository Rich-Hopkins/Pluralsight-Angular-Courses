/**
 * Created by Rich Hopkins on 5/25/2017.
 */
(function(){
  angular.module('app')
    .factory('currentUser', currentUser);

  function currentUser() {
    var lastBookEdited = {};
    return {
      lastBookEdited:lastBookEdited
    };
  }
}());