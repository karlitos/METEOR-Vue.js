import { Template } from 'meteor/templating';

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
