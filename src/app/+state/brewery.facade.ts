import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Brewery } from './brewery.reducer';
import * as breweriesActions from './brewery.actions';
import * as breweriesSelectors from './brewery.selectors';

@Injectable({ providedIn: 'root' })
export class BreweryFacade {
  breweriesList$ = this.store.pipe(select(breweriesSelectors.selectBreweriesList));
  breweriesLoading$ = this.store.pipe(select(breweriesSelectors.selectBreweriesLoading));

  constructor(private store: Store<any>) { }

  getBreweriesList() {
    this.store.dispatch(breweriesActions.getBreweriesListRequest());
  }
}
