import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const CollectionOfTasks = new Mongo.Collection('tasks');

// Publish function returns a Collection.cursor
Meteor.publish('tasks', () => {
	return CollectionOfTasks.find();
});

Meteor.methods({
	insertTask: (text) => {
		CollectionOfTasks.insert({
			text,
			createdAt: new Date(),

		});
	},
	removeTask: (taskId) => {
		CollectionOfTasks.remove(taskId);
	},
	removeAll: () => {
		CollectionOfTasks.remove({});
	},
});