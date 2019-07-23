import { createAction, props } from '@ngrx/store';
import { Brewery } from './brewery.reducer';

export const setBreweriesList = createAction('[Brewery] Set Breweries List', props<{ list: Brewery[] }>());
