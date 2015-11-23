import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-test/tests/helpers/start-app';

module('Acceptance | bars', {
	beforeEach: function() {
		this.application = startApp();
	},

	afterEach: function() {
		Ember.run(this.application, 'destroy');
	}
});

test('visiting /bars', function(assert) {
	assert.expect(4);
	visit('/bars');

	andThen(function() {
		assert.equal(currentURL(), '/bars');

		var bars = find('.bar-list .bar-list-item');
		assert.equal(bars.length, 2);

		var bar = find('.bar-list .bar-list-item:eq(0) .bar-list-item-name');
		assert.equal(bar.text().trim(), 'barbell');
	});

	click('.bar-list .bar-list-item:eq(0) .bar-list-item-name');
	andThen(function() {
		assert.equal(currentURL(), '/bars/1');
	});
});
