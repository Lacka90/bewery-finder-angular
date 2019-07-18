import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay } from "rxjs/operators";

@Injectable()
export class BreweryDetailService {
  constructor(private httpClient: HttpClient) {}

  getBrewery(breweryId: string) {
    return this.httpClient
      .get(`https://api.openbrewerydb.org/breweries/${breweryId}`)
      .pipe(delay(2000));
  }
}
