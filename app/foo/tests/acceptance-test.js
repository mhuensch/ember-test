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

test('visiting /foo/1', function(assert) {
	visit('/foo/1');

	andThen(function() {
		assert.equal(currentURL(), '/foo/1');
	});
});
