import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BreweryStore } from './brewery.reducer';

const getBreweriesState = createFeatureSelector<BreweryStore>('breweries');

export const selectBreweriesList = createSelector(
  getBreweriesState,
  state => state.list
);

export const selectBreweriesLoading = createSelector(
  getBreweriesState,
  state => state.loading
);

export const selectSelectedBrewery = createSelector(
  getBreweriesState,
  state => state.selected > 0 ? state.list.find(elem => elem.id === state.selected) : {}
);
