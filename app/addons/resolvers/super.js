// This resolver has no affect at the moment and is primarily and illustration on
// how to override the default ember cli resolver.

import Resolver from 'ember/resolver';

export default Resolver.extend({
	resolveTemplate: function (parsedName) {
		return this._super(parsedName);
	},

	resolveOther : function (parsedName) {
		return this._super(parsedName);
	},
});
