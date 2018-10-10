import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";

export const ROUTES: Routes = [
  { path: "", pathMatch: "full", redirectTo: "shop" },
  {
    path: "shop",
    loadChildren: "./shop/shop.module#ShopModule"
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
