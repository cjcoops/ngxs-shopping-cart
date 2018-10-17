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

  // getProducts(): Observable<Product[]> {
  //   return this.http
  //     .get<Product[]>(`/api/products`)
  //     .pipe(catchError((error: any) => Observable.throw(error.json())));
  // }

  // getCart(): Observable<CartItem[]> {
  //   return this.http
  //     .get<CartItem[]>(`/api/cart`)
  //     .pipe(catchError((error: any) => Observable.throw(error.json())));
  // }

  // getCartItems(): Observable<CartItem[]> {
  //   return forkJoin(this.getCart(), this.getProducts()).pipe(
  //     map(([cart, products]) => {
  //       return cart.map(item => {
  //         return {
  //           ...products.find(product => product.id === item.productId),
  //           ...item
  //         };
  //       });
  //     })
  //   );
  // }

  // addItemToCart(payload: CartItem): Observable<CartItem> {
  //   const headers = new HttpHeaders({ "Content-Type": "application/json" });
  //   const options = { headers };

  //   return this.http
  //     .post<CartItem>(`/api/cart`, payload, options)
  //     .pipe(catchError((error: any) => Observable.throw(error.json())));
  // }

  // removeFromCart(payload: CartItem): Observable<CartItem> {
  //   const headers = new HttpHeaders({ "Content-Type": "application/json" });
  //   const options = { headers };

  //   return this.http
  //     .delete<CartItem>(`/api/cart/${payload.id}`, options)
  //     .pipe(catchError((error: any) => Observable.throw(error.json())));
  // }
}
