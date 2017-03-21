import { Template } from 'meteor/templating';
import { Clubs } from '../../api/clubs/clubs.js';

Template.List_Clubs.helpers({

  /**
   * @returns {*} All of the Clubs documents.
   */
  clubsList() {
    return Clubs.find();
  },
});
