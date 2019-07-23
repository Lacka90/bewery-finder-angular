import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom, filter, mapTo } from 'rxjs/operators';
import { BreweryListService } from '../brewery-list/brewery-list.service';
import * as breweriesActions from './brewery.actions';
import { BreweryFacade } from './brewery.facade';

@Injectable()
export class AppEffects {
  getBreweries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(breweriesActions.getBreweriesListRequest),
      switchMap(_ =>
        this.breweryListService.getBreweries().pipe(
          map(list => breweriesActions.getBreweriesListSuccess({ list })),
          catchError(error => of(breweriesActions.getBreweriesListFail({ error })))
        )
      )
    ),
  );

  selectBrewery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(breweriesActions.selectBrewery),
      withLatestFrom(this.facade.breweriesList$),
      filter(([_, list]) => !list || list.length === 0),
      mapTo(breweriesActions.getBreweriesListRequest())
    ),
  );

  constructor(private actions$: Actions, private breweryListService: BreweryListService, private facade: BreweryFacade) {}
}
