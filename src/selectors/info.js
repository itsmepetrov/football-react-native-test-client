import { createSelector } from 'reselect';
import { entitiesSelector, containerProps } from './common';
import moment from 'moment';

// Returns selected match info
export const infoContainerSelector = createSelector(
  entitiesSelector('matches'),
  containerProps,
  (matches, props) => {
    const match = matches[props.matchId];

    return {
      match
    };
  }
);
