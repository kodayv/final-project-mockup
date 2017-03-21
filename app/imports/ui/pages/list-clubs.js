import { Template } from 'meteor/templating';
import { Clubs } from '../../api/clubs/clubs.js';

Template.List_Clubs.helpers({

  /**
   * @returns {*} All of the clubs documents.
   */
  clubsList() {
    return Clubs.find();
  },
});

Template.Home_Page.onCreated(function onCreated() {
  this.subscribe('Clubs');
});