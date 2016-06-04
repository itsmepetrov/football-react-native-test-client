import {
  FETCH_MATCHES_FOR_DATE,
  FETCH_MATCHES_FOR_DATE_SUCCESS,
  FETCH_MATCHES_FOR_DATE_ERROR,
  FETCH_MATCH_INFO,
  FETCH_MATCH_INFO_SUCCESS,
  FETCH_MATCH_INFO_ERROR
} from '../constants/ActionTypes';
import { schemas, queries, apiRequest } from '../api';
import { formatDate } from '../utils/date';
import { normalize } from 'normalizr';

export function fetchMatchesForDate(date) {
  return (dispatch) => {
    dispatch({
      type: FETCH_MATCHES_FOR_DATE,
      payload: { date }
    });

    return apiRequest(queries.MATCHES_FOR_DATE, { date: formatDate(date, 'DD/MM/YYYY') })
      .then(json => dispatch({
        type: FETCH_MATCHES_FOR_DATE_SUCCESS,
        payload: normalize(json.data.matches, schemas.MATCHES)
      }))
      .catch(error => dispatch({
        type: FETCH_MATCHES_FOR_DATE_ERROR,
        error
      }));
  }
}

export function fetchMatchInfo(matchId) {
  return (dispatch) => {
    dispatch({
      type: FETCH_MATCH_INFO,
      payload: { matchId }
    });

    return apiRequest(queries.MATCH_INFO, { id: matchId })
      .then(json => dispatch({
        type: FETCH_MATCH_INFO_SUCCESS,
        payload: normalize(json.data.match, schemas.MATCH)
      }))
      .catch(error => dispatch({
        type: FETCH_MATCH_INFO_ERROR,
        error
      }));
  }
}
