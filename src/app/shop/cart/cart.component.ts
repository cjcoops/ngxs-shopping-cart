import { ShopService } from "../services/shop.service";
import { Component, OnInit } from "@angular/core";
import { CartItem } from "../models/cart-item.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart: CartItem[];
  totalPrice: number;

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this.shopService.getCartItems().subscribe(cart => {
      console.log(cart);
      this.cart = cart;
      this.totalPrice = this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    });
  }

  onDelete(cartItem: CartItem) {
    this.shopService
      .removeFromCart(cartItem)
      .subscribe(() => this.getCartItems());
  }
}
