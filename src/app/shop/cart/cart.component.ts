import { CartQuery } from "./state/cart.query";
import { Component, OnInit } from "@angular/core";
import { CartItem } from "./state/cart-item.model";
import { Observable } from "rxjs";
import { Product } from "../products/state/product.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart$: Observable<(CartItem & Product)[]>;
  totalPrice: number;

  constructor(private cartQuery: CartQuery) {}

  ngOnInit() {
    this.cart$ = this.cartQuery.selectItems$;
  }

  getCartItems() {
    // this.shopService.getCartItems().subscribe(cart => {
    //   console.log(cart);
    //   this.cart = cart;
    //   this.totalPrice = this.cart.reduce(
    //     (total, item) => total + item.price * item.quantity,
    //     0
    //   );
    // });
  }

  onDelete(cartItem: CartItem) {
    // this.shopService
    //   .removeFromCart(cartItem)
    //   .subscribe(() => this.getCartItems());
  }
}
