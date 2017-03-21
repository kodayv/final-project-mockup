import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Clubs = new Mongo.Collection('Clubs');

/**
 * Create the schema for Clubs
 */
export const ClubsSchema = new SimpleSchema({
  name: {
    label: 'name',
    type: String,
    optional: false,
    max: 200,
  },
  keywords: {
    label: 'keywords',
    type: String,
    optional: false,
    max: 20,
  },
  days: {
    label: 'days',
    type: String,
    optional: false,
    max: 20,
  },
  registered: {
    label: 'registered',
    type: String,
    optional: false,
    max: 20,
  },
});

Clubs.attachSchema(ClubsSchema);
