import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return $.ajax({
			url: "/api/v1/bars",
		});
	}
});
