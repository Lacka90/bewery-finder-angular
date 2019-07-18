import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BreweryListService {
  constructor(private httpClient: HttpClient) {}

  getBreweries() {
    return this.httpClient.get("https://api.openbrewerydb.org/breweries");
  }
}
