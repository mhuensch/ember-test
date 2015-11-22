import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
	model: function(params) {
		return $.get(config.apiURL + 'bars/' + params.id);
	}
});
