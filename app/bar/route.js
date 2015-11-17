import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return $.ajax({
			url: "/api/bars/" + params.id
		});
	}
});
