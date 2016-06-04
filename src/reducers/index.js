import { combineReducers } from 'redux';
import entities from './entities';
import preview from './preview';

export default combineReducers({
  entities,
  preview
});
