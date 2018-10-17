import { CartQuery } from "./state/cart.query";
import { Component, OnInit } from "@angular/core";
import { CartItem } from "./state/cart-item.model";
import { Observable } from "rxjs";
import { Product } from "../products/state/product.model";
import { CartService } from "./state/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart$: Observable<(CartItem & Product)[]>;
  total$: Observable<number>;

  constructor(private cartQuery: CartQuery, private cartService: CartService) {}

  ngOnInit() {
    this.cart$ = this.cartQuery.selectItems$;
    this.total$ = this.cartQuery.selectTotal$;
  }

  onDelete({ productId }: CartItem) {
    this.cartService.remove(productId);
  }
}
