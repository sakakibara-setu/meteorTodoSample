import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.js'
import './body.html';

Template.body.helpers({
  tasks() {
    return Tasks.find({}, { sort: { createAt: -1 } });
  },
});

Template.body.events({
  'submit .new-task'(event) {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
      text,
      createAt: new Date(),
    });

    target.text.value = '';
  },
})