import { Component, OnInit } from "@angular/core";
import { BreweryListService } from "./brewery-list.service";

@Component({
  selector: "app-brewery-list",
  templateUrl: "./brewery-list.component.html",
  styleUrls: ["./brewery-list.component.scss"]
})
export class BreweryListComponent implements OnInit {
  breweries$ = this.breweryListService.getBreweries();

  constructor(private breweryListService: BreweryListService) {}

  ngOnInit() {}
}
