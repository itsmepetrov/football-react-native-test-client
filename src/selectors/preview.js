import { createSelector } from 'reselect';
import { entitiesArraySelector } from './common';
import moment from 'moment';

export const previewSelector = state => state.preview;

// Returns matches for scpecific date
export const previewContainerSelector = createSelector(
  entitiesArraySelector('matches'),
  previewSelector,
  (matches, preview) => {
    const selectedDate = moment(new Date(preview.date)).format('DD/MM/YYYY');
    const matchesForDate = matches.filter(match => match.date === selectedDate);

    return {
      matches: matchesForDate,
      ...preview
    };
  }
);
