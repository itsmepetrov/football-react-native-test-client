import { Schema, arrayOf } from 'normalizr';

// Define a schema for our entities.
// More info about normalizr Schemas you can find here: https://github.com/paularmstrong/normalizr
const match = new Schema('matches');

export default {
  MATCH: match,
  MATCHES: arrayOf(match)
};
