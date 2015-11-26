import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-test/tests/helpers/start-app';

module('Acceptance | application', {
	beforeEach: function() {
		this.application = startApp();
	},

	afterEach: function() {
		Ember.run(this.application, 'destroy');
	}
});

test('visiting /', function(assert) {
	visit('/');

	andThen(function() {
		assert.equal(currentURL(), '/');
	});
});
