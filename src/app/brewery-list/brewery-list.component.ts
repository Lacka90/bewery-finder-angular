import { Component, OnInit } from "@angular/core";
import { BreweryFacade } from '../+state/brewery.facade';

@Component({
  selector: "app-brewery-list",
  templateUrl: "./brewery-list.component.html",
  styleUrls: ["./brewery-list.component.scss"]
})
export class BreweryListComponent implements OnInit {
  breweries$ = this.facade.breweriesList$;
  loading$ = this.facade.breweriesLoading$;

  constructor(private facade: BreweryFacade) {}

  ngOnInit() {
    this.facade.getBreweriesList();
  }
}
