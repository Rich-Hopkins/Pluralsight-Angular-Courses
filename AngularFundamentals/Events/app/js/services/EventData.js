/**
 * Created by Rich Hopkins on 4/4/2017.
 */
eventsApp.factory('eventData', function($resource){
  return {
    getEvent: function(){
      return $resource('/data/event/:id', {id:'@id'}).get({id:1});
    }
  };
});