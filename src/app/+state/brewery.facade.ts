import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Brewery } from './brewery.reducer';
import { setBreweriesList } from './brewery.actions';
import * as breweriesSelectors from './brewery.selectors';

@Injectable({ providedIn: 'root' })
export class BreweryFacade {
  breweriesList$ = this.store.pipe(select(breweriesSelectors.selectBreweriesList));

  constructor(private store: Store<any>) { }

  setBreweriesList(list: Brewery[]) {
    this.store.dispatch(setBreweriesList({ list }));
  }
}
