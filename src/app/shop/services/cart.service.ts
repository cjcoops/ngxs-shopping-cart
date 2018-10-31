import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CartService {
  constructor() {}

  // addProductToCart(productId: Product["id"]) {
  //   const findItem = this.cartQuery.getEntity(productId);
  //   if (toBoolean(findItem)) {
  //     return this.cartStore.updateQuantity(productId);
  //   }

  //   const item = createCartItem({
  //     productId
  //   });

  //   return this.cartStore.add(item);
  // }

  // remove(productId: ID) {
  //   this.cartStore.remove(productId);
  // }
}
