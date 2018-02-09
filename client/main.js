import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
const CollectionOfTasks = new Mongo.Collection('tasks');

/* ## --- --- Container --- --- ## */

// Meteor.startup(() => { ... }) can be used for that as well
Template.container.onCreated(() => {
	Meteor.subscribe('tasks');
});

Template.container.helpers(
	{
		heading: () => {
			return 'My awesome todo list';
		},
	}
);

Template.container.events({
	// keys == CSS selectors
	'submit .new-task': (event) => {
		// Prevent default browser form submit
		event.preventDefault();

		// Get value from form element
		const target = event.target;
		const text = target.text.value;

		// Insert a task into the collection
		Meteor.call('insertTask', text);

		// Clear form
		target.text.value = '';
	},
});

/* ##------------------------## */


/* ## --- --- Tasks --- --- ## */

Template.tasks.helpers(
	{
		tasks: () => {
      // this returns cursor => iterrable
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

/* ##------------------------## */
