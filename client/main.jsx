import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import Modal from 'react-modal';

Meteor.startup(() => {
  Modal.setAppElement('#react-target')

  render(<App/>, document.getElementById('react-target'));
});
