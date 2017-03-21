/**
 * Created by koday on 3/21/2017.
 */
/**
 * Created by koday on 3/5/2017.
 */
import { Clubs } from '../../api/clubs/clubs.js';
import { _ } from 'meteor/underscore';

/**
 * A list of contacts to pre-fill the Collection.
 * @type {*[]}
 */
const clubsSeeds = [
  {
    name: 'ICSpace',
    keywords: 'Computer Science, programming, Gaming',
    days: '1st Wednesday of every Month, 16:30',
    registered: 'T',

  },
  {
    name: 'Raiders',
    keywords: 'FreeRunning, Parkour, Fitness',
    days: 'Every Thursday, 15:30',
    registered: 'F',

  },

];

/**
 * Initialize the contacts collection if empty with seed data.
 */
if (Clubs.find().count() === 0) {
  _.each(clubsSeeds, function seedclubs(clubs) {
    Clubs.insert(clubs);
  });
}
