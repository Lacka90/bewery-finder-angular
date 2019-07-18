import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BreweryDetailService } from "./brewery-detail.service";

@Component({
  selector: "app-brewery-detail",
  templateUrl: "./brewery-detail.component.html",
  styleUrls: ["./brewery-detail.component.scss"]
})
export class BreweryDetailComponent implements OnInit {
  brewery$ = this.breweryDetailService.getBrewery(
    this.route.snapshot.params.breweryId
  );

  constructor(
    private route: ActivatedRoute,
    private breweryDetailService: BreweryDetailService
  ) {}

  ngOnInit() {
    console.log(this.route);
  }
}
