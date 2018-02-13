// add blaze-integration package with:
// "meteor add vuejs:blaze-integration"

import {Vue} from 'meteor/akryum:vue';

import VueMeteorTracker from 'vue-meteor-tracker';
Vue.use(VueMeteorTracker);

import App from './App.vue';

Meteor.startup(() => {
	new Vue({
		render: h => h(App),
	}).$mount('app');
});