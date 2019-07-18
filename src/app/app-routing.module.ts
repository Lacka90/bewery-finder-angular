import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BreweryListComponent } from "./brewery-list/brewery-list.component";
import { BreweryDetailComponent } from "./brewery-detail/brewery-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/list", pathMatch: "full" },
  { path: "list", component: BreweryListComponent },
  { path: ":breweryId", component: BreweryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
