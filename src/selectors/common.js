import { createSelector } from 'reselect';

export const containerProps = (state, props) => props;
export const entitiesSelector = name => state => state.entities[name];
export const entitiesArraySelector = name => createSelector(
  entitiesSelector(name),
  entities => Object.keys(entities).map(id => entities[id])
);
