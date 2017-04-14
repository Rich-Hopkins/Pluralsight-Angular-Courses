/**
 * Created by Rich Hopkins on 4/14/2017.
 */
'use strict';

eventsApp.directive('voting', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/directives/voting.html',
    scope: {
      upvote: "&",
      downvote: "&",
      count: "="
    }
  }
});