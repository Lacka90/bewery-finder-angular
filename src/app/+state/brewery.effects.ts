import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BreweryListService } from '../brewery-list/brewery-list.service';
import * as breweriesActions from './brewery.actions';

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

  constructor(private actions$: Actions, private breweryListService: BreweryListService) {}
}
