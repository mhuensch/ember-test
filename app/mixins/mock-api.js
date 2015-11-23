/* exported EXPORTED_LIB */

import Ember from 'ember';

export default Ember.Mixin.create({
	get: function(url) {
		var self = this;
		var urlParts = url.split('/');
		var id = parseInt(urlParts[urlParts.length-1]);
		var index = self.data
			.map(function(item) { return item.id; })
			.indexOf(id);

		if (index === -1) {
			return new Ember.RSVP.Promise(function(resolve) {
				resolve(self.data);
			});
		}

		return new Ember.RSVP.Promise(function(resolve) {
			resolve(self.data[index]);
		});
	},

	post:function(url, model) {
		var self = this;
		var urlParts = url.split('/');
		var id = parseInt(urlParts[urlParts.length-1]);
		var index = self.data
			.map(function(item) { return item.id; })
			.indexOf(id);

		if (index === -1) {
			self.data[self.data.length] = model;
			return new Ember.RSVP.Promise(function(resolve) {
				resolve();
			});
		}

		self.data[index] = model;
		return new Ember.RSVP.Promise(function(resolve) {
			resolve();
		});
	},

	delete: function(url) {
		var urlParts = url.split('/');
		var id = parseInt(urlParts[urlParts.length-1]);

		this.data = this.data.filter(function(item) {
			return item.id !== id;
		});

		return new Ember.RSVP.Promise(function(resolve) {
			resolve();
		});
	}

});
