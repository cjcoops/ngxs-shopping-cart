import { AuthModule } from "./auth/auth.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { LoginComponent } from "./auth/login/login.component";

import { NgxsModule } from "@ngxs/store";
import {
  NgxsRouterPluginModule,
  RouterStateSerializer
} from "@ngxs/router-plugin";
import { CustomRouterStateSerializer } from "./store/router.state";

export const ROUTES: Routes = [
  { path: "", pathMatch: "full", redirectTo: "shop" },
  {
    path: "shop",
    loadChildren: "./shop/shop.module#ShopModule"
    // canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NgxsRouterPluginModule.forRoot(),
    NgbModule,
    NgxsModule.forRoot(),
    AuthModule
  ],
  providers: [
    AuthGuard,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
