/**
 * Created by Rich Hopkins on 4/17/2017.
 */
eventsApp.directive('datePicker', function(){
  return {
    restrict: 'A',
    link: function(scope, element){
      element.datepicker();
    }
  }
});