import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';

const CollectionOfTasks = new Mongo.Collection('tasks');

Template.tasks.onCreated(() => {
	Meteor.subscribe('tasks');
});

Template.tasks.helpers(
	{
		tasks: () => {
			return CollectionOfTasks.find({});
		},
	}
);

Template.tasks.events(
	{
		'click .delete': (event) => {

			// Get value from form element
			const target = event.target;
			const _id = target.value;

			Meteor.call('removeTask', _id);
		},
	}
);