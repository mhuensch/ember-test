import Ember from 'ember';
import MockApiMixin from './mock-api';
import { module, test } from 'qunit';

module('Unit | Mixin | mock api');

// Replace this with your real tests.
test('it works', function(assert) {
  var MockApiObject = Ember.Object.extend(MockApiMixin);
  var subject = MockApiObject.create();
  assert.ok(subject);
});
