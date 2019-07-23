import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { AppEffects } from "./+state/brewery.effects";
import { metaReducers, reducers } from "./+state/brewery.reducer";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BreweryDetailComponent } from "./brewery-detail/brewery-detail.component";
import { BreweryDetailService } from "./brewery-detail/brewery-detail.service";
import { BreweryListComponent } from "./brewery-list/brewery-list.component";
import { BreweryListService } from "./brewery-list/brewery-list.service";

@NgModule({
  declarations: [AppComponent, BreweryListComponent, BreweryDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [BreweryListService, BreweryDetailService],
  bootstrap: [AppComponent]
})
export class AppModule {}
