import {
  PREVIEW_CHANGE_DATE,
  PREVIEW_SHOW_CALENDAR,
  PREVIEW_HIDE_CALENDAR
} from '../constants/ActionTypes';
import { schemas, queries, apiRequest } from '../api';
import { normalize } from 'normalizr';

// Actions creators for manipulate with selected date and calendar
// More info about Redux actions you can find here: http://redux.js.org/docs/basics/Actions.html

// Change selected date
export function previewChangeDate(date) {
  return {
    type: PREVIEW_CHANGE_DATE,
    payload: date
  };
}

// Show calendar
export function previewShowCalendar() {
  return {
    type: PREVIEW_SHOW_CALENDAR,
    payload: true
  };
}

// Hide calendar
export function previewHideCalendar() {
  return {
    type: PREVIEW_HIDE_CALENDAR,
    payload: false
  };
}
