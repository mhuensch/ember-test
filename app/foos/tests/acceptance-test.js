import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-test/tests/helpers/start-app';

module('Acceptance | foos', {
	beforeEach: function() {
		this.application = startApp();
	},

	afterEach: function() {
		Ember.run(this.application, 'destroy');
	}
});

test('visiting /foos', function(assert) {
	visit('/foos');

	andThen(function() {
		assert.equal(currentURL(), '/foos');
	});
});
