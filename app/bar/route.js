import Ember from 'ember';
import Api from '../api';

var api = Api.create({url: 'bars'});

export default Ember.Route.extend({
	model: function(params) {
		return api.get(params.id);
	}
});
