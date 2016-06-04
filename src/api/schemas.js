import { Schema, arrayOf } from 'normalizr';

const match = new Schema('matches')

export default {
  MATCH: match,
  MATCHES: arrayOf(match)
};
