import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BreweryFacade } from '../+state/brewery.facade';
import { Brewery } from '../+state/brewery.reducer';

@Injectable()
export class BreweryListService {
  constructor(private httpClient: HttpClient, private facade: BreweryFacade) {}

  getBreweries() {
    this.httpClient.get<Brewery[]>("https://api.openbrewerydb.org/breweries").subscribe(
      list => this.facade.setBreweriesList(list)
    );
  }
}
