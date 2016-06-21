import { createSelector } from 'reselect';

// Reselect is a simple library for creating memoized, composable selector functions.
// Reselect selectors can be used to efficiently compute derived data from the Redux store.
// More about selectors you can find here: https://github.com/reactjs/reselect

// Returns container own props
export const containerProps = (state, props) => props;
// Returns entities hash for specific type
export const entitiesSelector = name => state => state.entities[name];
// Returns entities array for specific type
export const entitiesArraySelector = name => createSelector(
  entitiesSelector(name),
  entities => Object.keys(entities).map(id => entities[id])
);
