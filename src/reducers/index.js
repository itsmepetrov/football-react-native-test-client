import { combineReducers } from 'redux';
import entities from './entities';
import preview from './preview';

// The combineReducers helper function turns an object whose values are different
// reducing functions into a single reducing function you can pass to createStore.
// More info about combineReducers you can find here: http://redux.js.org/docs/api/combineReducers.html
export default combineReducers({
  entities,
  preview
});
