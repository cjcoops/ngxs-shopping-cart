import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"]
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    emoji: new FormControl("", Validators.required)
  });

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}

  onSave() {
    const { value, valid } = this.form;
    if (valid) {
      console.log(value);
    }
  }
}
