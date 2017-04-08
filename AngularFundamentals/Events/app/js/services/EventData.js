/**
 * Created by Rich Hopkins on 4/4/2017.
 */
eventsApp.factory('eventData', function($http){
  return {
    getEvent: function(){
      return $http({method: 'GET', url: '/data/event/1'});
    }
  };
});