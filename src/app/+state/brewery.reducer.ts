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
  loading: boolean;
  list: Brewery[];
}

export const initialState: BreweryStore = {
  loading: false,
  list: []
};

const scoreboardReducer = createReducer(
  initialState,
  on(breweriesActions.getBreweriesListRequest, (state) => ({ ...state, loading: true, list: [] })),
  on(breweriesActions.getBreweriesListSuccess, (state, { list }) => ({ ...state, list, loading: false })),
  on(breweriesActions.getBreweriesListFail, (state) => ({ ...state, loading: false })),
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
