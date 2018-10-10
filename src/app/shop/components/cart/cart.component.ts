import { Component, OnInit } from "@angular/core";
import { CartItem } from "../../models/cart-item.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart: CartItem[];
  totalPrice: number;

  constructor() {}

  ngOnInit() {
    this.cart = [
      {
        productId: 1,
        quantity: 1,
        name: "Red Apple",
        emoji: "🍎",
        price: 0.4
      },
      {
        productId: 2,
        quantity: 3,
        name: "Grapes",
        price: 0.9,
        emoji: "🍇"
      }
    ];

    this.totalPrice = this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
