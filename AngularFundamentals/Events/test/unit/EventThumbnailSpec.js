/**
 * Created by Rich Hopkins on 4/24/2017.
 */
'use strict';

describe('eventThumbnail', function() {
  var el;
  beforeEach(module('eventsApp'));
  beforeEach(module('/templates/directives/eventThumbnail.html'));

  beforeEach(inject(function($compile, $rootScope){
    var scope = $rootScope.$new();
    scope.event = {name: 'Angular Expo', date: '10/21/1967', time: '20:34',
    location: {address: '1090 N Lincoln St', city: 'Hobart', state: 'IN',
    id: 1}};

    el = angular.element('<event-thumbnail event="event"/>');
    $compile(el)(scope);
    scope.$digest();
  }));

  it('should bind the data event.name', function(){
    expect(el.text()).toContain('Angular Expo');
  });
});