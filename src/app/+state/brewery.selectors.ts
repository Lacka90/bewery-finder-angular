import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BreweryStore } from './brewery.reducer';

const getBreweriesState = createFeatureSelector<BreweryStore>('breweries');

export const selectBreweriesList = createSelector(
  getBreweriesState,
  state => state.list
);
