import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-test/tests/helpers/start-app';

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
		assert.equal(currentURL(), '/bars/1');

		var input = find('#bar-name');
		assert.equal(input.val(), 'barbell');
	});
});

test('creating and deleting a bar', function(assert) {
	visit('/bars/new');

	andThen(function() {
		var saveBtn = find('#save-bar');
		assert.equal(saveBtn.hasClass('invisible'), true);

		var deleteBtn = find('#delete-bar');
		assert.equal(deleteBtn.hasClass('invisible'), true);

		var input = find('#bar-name');
		input.val('Foo Fighters');
		input.trigger("change");

		andThen(function() {
			var saveBtn2 = find('#save-bar');
			assert.equal(saveBtn2.hasClass('invisible'), false);

			click('#save-bar');
			andThen(function() {
				assert.equal(currentURL(), '/bars');

				var bars = find('.bar-list .bar-list-item');
				assert.equal(bars.length, 3);

				visit('/bars/3');

				andThen(function() {
					var input = find('#bar-name');
					assert.equal(input.val(), 'Foo Fighters');

					click('#delete-bar');
				});
			});
		});
	});


	// click('#delete-bar');
	// andThen(function() {
	// 	assert.equal(currentURL(), '/bars');

	// 	var bars = find('.bar-list .bar-list-item');
	// 	assert.equal(bars.length, 1);
	// });
});
