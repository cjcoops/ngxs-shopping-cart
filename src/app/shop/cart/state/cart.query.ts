import { ProductsQuery } from "./../../products/state/products.query";
import { State, CartStore } from "./cart.store";
import { CartItem } from "./cart-item.model";
import { QueryEntity } from "@datorama/akita";
import { combineLatest } from "rxjs";
import { map, publishReplay, refCount } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartQuery extends QueryEntity<State, CartItem> {
  constructor(
    protected store: CartStore,
    private productsQuery: ProductsQuery
  ) {
    super(store);
  }

  selectItems$ = combineLatest(
    this.selectAll(),
    this.productsQuery.selectAll({ asObject: true })
  ).pipe(
    map(joinItems),
    publishReplay(),
    refCount()
  );
}

function joinItems([cartItems, products]) {
  return cartItems.map(cartItem => {
    const product = products[cartItem.productId];
    return {
      ...cartItem,
      ...product,
      total: cartItem.quantity * product.price
    };
  });
}
