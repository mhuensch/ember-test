import Ember from 'ember';
import Api from '../api';

export default Ember.Route.extend({
	init: function() {
		this.api = Api.create({url: 'bars'});
	}

	,model: function() {
		return this.api.get();
	}

	,actions: {

		create: function() {
			this.transitionTo('bar', {id:'new'});
		}

	}
});
