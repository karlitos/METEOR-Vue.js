<template>
	<div>
		{{text}} {{count}}
		<button class="delete" @click="clearAll">Clear all tasks</button>
	</div>
</template>

<script>
	// import the collection from main
	import CollectionOfTasks from './main.js';
    
	export default {
		name: 'VueDemo',
		props: ['text'],
		meteor: {
			// Subscriptions
			$subscribe: {
				// We subscribe to the 'tasks' publication without arguments
				'tasks': []
			},
            count() {
				return CollectionOfTasks.find({}).count({});
            }
		},
		methods: {
			clearAll: () => {
				// We added 'removeAll' on server
				Meteor.call('removeAll');
			},
		},
		data() {
			return {}
		},
	}
</script>

<style scoped>
    
</style>
