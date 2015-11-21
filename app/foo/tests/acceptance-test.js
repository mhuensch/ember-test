import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-test/tests/helpers/start-app';

module('Acceptance | foo', {
	beforeEach: function() {
		this.application = startApp();
	},

	afterEach: function() {
		Ember.run(this.application, 'destroy');
	}
});

test('visiting /foos/1', function(assert) {
	visit('/foos/1');

	andThen(function() {
		assert.equal(currentURL(), '/foos/1');
	});
});
