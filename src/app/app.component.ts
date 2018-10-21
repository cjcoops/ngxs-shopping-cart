import { AuthService } from "./auth/state/auth.service";
import { Component } from "@angular/core";
import { AuthQuery } from "./auth/state/auth.query";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  isLoggedIn$ = this.authQuery.isLoggedIn$;
  isLoggedIn: boolean;

  constructor(
    private authQuery: AuthQuery,
    private authService: AuthService,
    private router: Router
  ) {}

  onLogout() {
    this.authService.logout();
    this.router.navigate(["login"]);
  }
}
