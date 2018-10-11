import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";
import { catchError, withLatestFrom, map } from "rxjs/operators";
import { CartItem } from "../models/cart-item.model";

@Injectable()
export class ShopService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`api/products`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  getCart(): Observable<CartItem[]> {
    return this.http
      .get<CartItem[]>(`api/cart`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  getCartItems(): Observable<CartItem[]> {
    return this.getCart().pipe(
      withLatestFrom(this.getProducts()),
      map(([cart, products]) => {
        return cart.map(item => {
          return {
            ...item,
            ...products.find(product => product.id === item.productId)
          };
        });
      })
    );
  }
}
