import { Component, OnInit } from "@angular/core";
import { BreweryListService } from "./brewery-list.service";
import { BreweryFacade } from '../+state/brewery.facade';

@Component({
  selector: "app-brewery-list",
  templateUrl: "./brewery-list.component.html",
  styleUrls: ["./brewery-list.component.scss"]
})
export class BreweryListComponent implements OnInit {
  breweries$ = this.facade.breweriesList$;

  constructor(private breweryListService: BreweryListService, private facade: BreweryFacade) {}

  ngOnInit() {
    this.breweryListService.getBreweries();
  }
}
