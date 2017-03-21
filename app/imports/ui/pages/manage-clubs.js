import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { Clubs, ClubsSchema } from '../../api/clubs/clubs.js';
import { FlowRouter } from 'meteor/kadira:flow-router';


/* eslint-disable no-param-reassign */

const displayErrorMessages = 'displayErrorMessages';


Template.Manage_Clubs.onCreated(function onCreated() {
  this.subscribe('Clubs');
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = ClubsSchema.namedContext('Manage_Clubs');
});

Template.Manage_Clubs.helpers({
  clubsDataField(fieldName) {
    const clubsData = Clubs.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return clubsData && clubsData[fieldName];
  },
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
  },
});


Template.Manage_Clubs.events({
  'submit .contact-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const name = event.target.Name.value;
    const keywords = event.target.Keywords.value;
    const days = event.target.Days.value;
    const registered = event.target.Registered.value;

    const newClubsData = { name, keywords, days, registered };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newContactData reflects what will be inserted.
    ClubsSchema.clean(newClubsData);
    // Determine validity.
    instance.context.validate(newClubsData);
    if (instance.context.isValid()) {
      Clubs.update(FlowRouter.getParam('_id'), { $set: newClubsData });
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Home_Page');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});