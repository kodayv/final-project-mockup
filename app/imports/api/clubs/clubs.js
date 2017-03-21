import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Clubs = new Mongo.Collection('Clubs');

/**
 * Create the schema for Clubs
 */
export const ClubsSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 200,
  },
  keywords: {
    label: 'Keywords',
    type: String,
    optional: false,
    max: 20,
  },
  days: {
    label: 'Days',
    type: String,
    optional: false,
    max: 20,
  },
  registered: {
    label: 'Registered',
    type: Boolean,
    optional: false,
  },
});

Clubs.attachSchema(ClubsSchema);
