import Ember from 'ember';
import api from '../api';

export default Ember.Route.extend({
	model: function(params) {
		return api.get('foos/' + params.id);
	}
});
