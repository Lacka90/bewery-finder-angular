import { createAction, props } from '@ngrx/store';
import { Brewery } from './brewery.reducer';

export const getBreweriesListRequest = createAction('[Brewery] Get Breweries List Request');
export const getBreweriesListSuccess = createAction('[Brewery] Get Breweries List Success', props<{ list: Brewery[] }>());
export const getBreweriesListFail = createAction('[Brewery] Get Breweries List Fail', props<{ error: any }>());
export const selectBrewery = createAction('[Brewery] Select Brewery', props<{ id: number }>());
