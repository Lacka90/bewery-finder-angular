import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action,
  createReducer,
  on
} from '@ngrx/store';
import * as breweriesActions from './brewery.actions';
import { environment } from '../../environments/environment';

export interface Brewery {
  id: number,
  name: string,
  brewery_type: string,
  street: string,
  city: string,
  state: string,
  postal_code: string,
  country: string,
  longitude: string,
  latitude: string,
  phone: string,
  website_url: string,
  updated_at: string,
  tag_list: string[]
}

export interface BreweryStore {
  list: Brewery[];
}

export const initialState: BreweryStore = {
  list: []
};

const scoreboardReducer = createReducer(
  initialState,
  on(breweriesActions.setBreweriesList, (state, { list }) => ({ ...state, list })),
);

export function breweriesReducer(state: BreweryStore | undefined, action: Action) {
  return scoreboardReducer(state, action);
}

export interface State {
  breweries: BreweryStore;
}

export const reducers: ActionReducerMap<State> = {
  breweries: breweriesReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
