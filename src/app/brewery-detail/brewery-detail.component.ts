import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BreweryFacade } from '../+state/brewery.facade';

@Component({
  selector: "app-brewery-detail",
  templateUrl: "./brewery-detail.component.html",
  styleUrls: ["./brewery-detail.component.scss"]
})
export class BreweryDetailComponent implements OnInit {
  brewery$ = this.facade.selectedBrewery$;

  constructor(
    private route: ActivatedRoute,
    private facade: BreweryFacade
  ) {}

  ngOnInit() {
    this.facade.selectBrewery(+this.route.snapshot.params.breweryId);
  }
}
