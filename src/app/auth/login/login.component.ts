import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { Creds } from "../state/auth.model";
import { AuthService } from "../state/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.login = this.fb.group({
      email: this.fb.control(""),
      password: this.fb.control("")
    });
  }

  submit() {
    this.authService.login(this.login.value as Creds).subscribe(() => {
      this.router.navigate(["shop/"]);
    });
  }
}
