import { createSelector } from 'reselect';
import { entitiesArraySelector } from './common';
import moment from 'moment';

export const previewSelector = state => state.preview;

export const previewContainerSelector = createSelector(
  entitiesArraySelector('matches'),
  previewSelector,
  (matches, preview) => {
    const selectedDate = moment(new Date(preview.date)).format('DD/MM/YYYY');
    const matchesForDate = matches
      .filter(match => match.date === selectedDate);
      // .filter(match => {
      //   console.log(match.date, selectedDate);
      //   return match.date === selectedDate;
      // })

    return {
      matches: matchesForDate,
      ...preview
    };
  }
);
