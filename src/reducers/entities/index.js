import { combineEntitiesReducers } from 'redux-entities';
import matches from './matches';

// Higher-order reducer for store entities received from normalizr
// and makes it easy to handle them.
// More about normalizr and combineEntitiesReducers you can find here:
// - https://github.com/paularmstrong/normalizr
// - https://github.com/itsmepetrov/redux-entities

export default combineEntitiesReducers({
  matches
});
