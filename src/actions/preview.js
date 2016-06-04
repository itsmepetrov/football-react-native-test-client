import {
  PREVIEW_CHANGE_DATE,
  PREVIEW_SHOW_CALENDAR,
  PREVIEW_HIDE_CALENDAR
} from '../constants/ActionTypes';
import { schemas, queries, apiRequest } from '../api';
import { normalize } from 'normalizr';

export function previewChangeDate(date) {
  return {
    type: PREVIEW_CHANGE_DATE,
    payload: date
  };
}

export function previewShowCalendar() {
  return {
    type: PREVIEW_SHOW_CALENDAR,
    payload: true
  };
}

export function previewHideCalendar() {
  return {
    type: PREVIEW_HIDE_CALENDAR,
    payload: false
  };
}
