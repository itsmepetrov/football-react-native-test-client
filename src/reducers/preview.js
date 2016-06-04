import {
  PREVIEW_CHANGE_DATE,
  PREVIEW_SHOW_CALENDAR,
  PREVIEW_HIDE_CALENDAR
} from '../constants/ActionTypes';

const initialState = {
  date: 1460494800000, // Date.now(),
  showCalendar: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
  case PREVIEW_CHANGE_DATE:
    return {
      ...state,
      date: payload
    };
  case PREVIEW_SHOW_CALENDAR:
    return {
      ...state,
      showCalendar: true
    };
  case PREVIEW_HIDE_CALENDAR:
    return {
      ...state,
      showCalendar: false
    };
  default:
    return state;
  }
}
