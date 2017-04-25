/**
 * Created by Rich Hopkins on 4/24/2017.
 */
'use strict';

describe('durations', function() {

  beforeEach(module('eventsApp'));

  it('should return 30 minutes when passed a 1',
    inject(function(durationsFilter){
      expect(durationsFilter(1)).toBe('30 minutes');
    }));

  it('should return 1 hour when passed a 2',
    inject(function(durationsFilter){
      expect(durationsFilter(2)).toBe('1 hour');
    }));

  it('should return 90 minutes when passed a 3',
    inject(function(durationsFilter){
      expect(durationsFilter(3)).toBe('90 minutes');
    }));

  it('should return 2 hours when passed a 4',
    inject(function(durationsFilter){
      expect(durationsFilter(4)).toBe('2 hours');
    }));
});