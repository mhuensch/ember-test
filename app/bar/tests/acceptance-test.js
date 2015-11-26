import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-test/tests/helpers/start-app';

// http://guides.emberjs.com/v2.1.0/testing/acceptance/

module('Acceptance | bar', {
	beforeEach: function() {
		this.application = startApp();
	},

	afterEach: function() {
		Ember.run(this.application, 'destroy');
		delete this.application;
	}
});

test('visiting /bars/:id should show bar', function(assert) {
	visit('/bars/1');

	andThen(function() {
		assert.equal(currentURL(), '/bars/1', 'url for bars is hackable');
		assert.equal(find('#bar-name').val(), 'barbell', 'first item is a barbell');
	});
});

test('creating and deleting a bar', function(assert) {
	visit('/bars/new');

	andThen(function() {
		assert.equal(find('#save-bar').hasClass('invisible'), true, 'save button starts invisible');
		assert.equal(find('#delete-bar').hasClass('invisible'), true, 'delete button starts invisible');
	});

	fillIn('#bar-name', 'Foo Fighters');

	andThen(function() {
		assert.ok(find('#save-bar').hasClass('invisible') === false, 'save button is visible after text input');
	});

	click('#save-bar');

	andThen(function() {
		assert.equal(currentURL(), '/bars', 'list of bars are shown after save');
		assert.equal(find('.bar-list .bar-list-item').length, 3, 'new bar is added to list');
	});

	visit('/bars/3');

	andThen(function() {
		var input = find('#bar-name');
		assert.equal(input.val(), 'Foo Fighters');

		click('#delete-bar');
	});

});
