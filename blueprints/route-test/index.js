/*jshint node:true*/

var testInfo = require('../../node_modules/ember-cli/lib/utilities/test-info');

module.exports = {
	description: 'Generates a route unit test.',
	locals: function(options) {
		return {
			friendlyTestDescription: testInfo.description(options.entity.name, "Unit", "Route")
		};
	},
};
