'use strict';

eventsApp.filter('durations', function () {
  return function (duration) {
    switch (duration) {
      case 1:
        return "30 minutes";
      case 2:
        return "1 hour";
      case 3:
        return "90 minutes";
      case 4:
        return "2 hours";
    }
  }
});