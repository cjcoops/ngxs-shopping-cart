import { CartQuery } from "./cart.query";
import { CartStore } from "./cart.store";
import { CartItem, createCartItem } from "./cart-item.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../../products/state/product.model";
import { toBoolean, ID } from "@datorama/akita";

@Injectable()
export class CartService {
  constructor(private cartStore: CartStore, private cartQuery: CartQuery) {}

  addProductToCart(productId: Product["id"]) {
    const findItem = this.cartQuery.getEntity(productId);
    if (toBoolean(findItem)) {
      return this.cartStore.updateQuantity(productId);
    }

    const item = createCartItem({
      productId
    });

    return this.cartStore.add(item);
  }

  remove(productId: ID) {
    this.cartStore.remove(productId);
  }
}
