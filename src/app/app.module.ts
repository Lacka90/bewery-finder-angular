import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BreweryListComponent } from "./brewery-list/brewery-list.component";
import { BreweryDetailComponent } from "./brewery-detail/brewery-detail.component";
import { BreweryListService } from "./brewery-list/brewery-list.service";
import { HttpClientModule } from "@angular/common/http";
import { BreweryDetailService } from "./brewery-detail/brewery-detail.service";

@NgModule({
  declarations: [AppComponent, BreweryListComponent, BreweryDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [BreweryListService, BreweryDetailService],
  bootstrap: [AppComponent]
})
export class AppModule {}
