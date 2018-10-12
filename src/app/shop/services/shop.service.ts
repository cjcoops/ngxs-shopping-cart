import { CartItem } from "./../models/cart-item.model";
import { Injectable } from "@angular/core";
import { HttpClient, RequestOptions, HttpHeaders } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { Product } from "../models/product.model";
import { catchError, withLatestFrom, map } from "rxjs/operators";
import { CartItem } from "../models/cart-item.model";

@Injectable()
export class ShopService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`/api/products`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  getCart(): Observable<CartItem[]> {
    return this.http
      .get<CartItem[]>(`/api/cart`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  getCartItems(): Observable<CartItem[]> {
    return forkJoin(this.getCart(), this.getProducts()).pipe(
      map(([cart, products]) => {
        return cart.map(item => {
          return {
            ...products.find(product => product.id === item.productId),
            ...item
          };
        });
      })
    );
  }

  addItemToCart(payload: CartItem): Observable<CartItem> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const options = { headers };

    return this.http
      .post<CartItem>(`/api/cart`, payload, options)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeFromCart(payload: CartItem): Observable<CartItem> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const options = { headers };

    return this.http
      .delete<CartItem>(`/api/cart/${payload.id}`, options)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
