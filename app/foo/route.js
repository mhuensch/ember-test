import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
	model: function(params) {
		return $.ajax({
			url: config.apiURL + 'foos/' + params.id
		});
	}
});
