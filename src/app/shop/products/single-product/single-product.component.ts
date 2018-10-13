import { Component, OnInit } from "@angular/core";
import { Product } from "../state/product.model";

@Component({
  selector: "app-single-product",
  templateUrl: "./single-product.component.html",
  styleUrls: ["./single-product.component.css"]
})
export class SingleProductComponent implements OnInit {
  product: Product = {
    id: 1,
    name: "Red Apple",
    price: 0.4,
    emoji: "🍎"
  };

  constructor() {}

  ngOnInit() {}
}
