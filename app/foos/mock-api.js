import MockApi from '../mixins/mock-api';

export default Ember.Object.extend(MockApi, {
	data: [
		{
			id: 1
			,name: 'kung-fu'
		}
		,{
			id: 2
			,name: 'tofu'
		}
	]
});
