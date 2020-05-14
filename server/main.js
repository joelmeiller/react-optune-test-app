import { Meteor } from 'meteor/meteor';
import { Events } from '../imports/api/db/Events';

// Test data
const events = [{
  title: "80's Party",
  date: new Date('2021-01-01'),
}, {
  title: "Tomorrow Land",
  date: new Date('2021-06-12'),
}, {
  title: "Garbage Festival",
  date: new Date('2021-07-03'),
},{
  title: "Burning Man",
  date: new Date('2021-08-21'),
}]

Meteor.startup(() => {
  // If the events collection is empty, add some data.
  if (Events.find().count() === 0) {
    events.forEach(event => Events.insert(event))
  }
});
