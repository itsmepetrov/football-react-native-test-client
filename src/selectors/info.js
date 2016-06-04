import { createSelector } from 'reselect';
import { entitiesSelector, containerProps } from './common';
import moment from 'moment';

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
