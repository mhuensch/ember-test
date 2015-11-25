import Ember from 'ember';
import PropertyWatcher from '../mixins/property-watcher';

export default Ember.Controller.extend(PropertyWatcher, {

	onModelChanged: function() {
		var model = this.get('model');
		if (!model) { return; }

		// Here we are watching the properties on the object explicitly.
		// If we wanted notifications per property [propertyChanged(name, current, previous)] or observe isDirty.
		this.watch(model, [
			'name'
		]);

	}.observes('model').on('init')


});
