/**
 * Created by Rich Hopkins on 4/25/2017.
 */
'use strict';

describe('event registration app', function(){
  describe('events page', function() {
    beforeEach(function() {
      browser.get('http://localhost/events/');
    });

    it('should have correct title and first event', function() {
      var list = element.all(by.repeater('event in events'));
      expect(list.count()).toEqual(4);
      var titleElement = element(by.binding('event.name'));
      expect(titleElement.getText()).toEqual('Angular Boot Camp');
    })
  });

  describe('event details page', function(){
    beforeEach(function(){
      browser.get('http://localhost/event/1');
    });

    it('should sort by name', function(){
      var list = element.all(by.repeater('session in event.sessions'));
      expect(list.count()).toEqual(3);
      var titleElement = list.first().element(by.binding('title'));
      expect(titleElement.getText()).toEqual('Directives Masterclass');
    });

    it('should have 1 session when introductory is chosen', function() {
      var selectEl = element(by.model('query.level'));
      selectEl.element(by.cssContainingText('option', 'Introductory')).click();
      var list = element.all(by.repeater('session in event.sessions'));
      expect(list.count()).toEqual(1);
    });

    it('should have Scopes for fun adn profit first when sorting by Level', function() {
      var selectEl = element(by.model('sortorder'));
      selectEl.element(by.cssContainingText('option', 'Level')).click();
      var firstSession = element.all(by.repeater('session in event.sessions')).first();
      var firstSessionName = firstSession.element(by.binding('title')).getText();
      expect(firstSessionName).toEqual('Scopes for fun and profit');
    });

    it('should increment vote count when upvoted', function() {
      element.all(by.deepCss('div.votingButton')).first().click();
      var firstVoteCount = element.all(by.binding('count')).first();
      expect(firstVoteCount.getText()).toEqual('1');
    });

  });
});