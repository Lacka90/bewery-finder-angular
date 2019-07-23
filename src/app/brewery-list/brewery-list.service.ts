import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Brewery } from '../+state/brewery.reducer';

@Injectable()
export class BreweryListService {
  constructor(private httpClient: HttpClient) {}

  getBreweries() {
    return this.httpClient.get<Brewery[]>("https://api.openbrewerydb.org/breweries");
  }
}
