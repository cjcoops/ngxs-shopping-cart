import { ProductsQuery } from "./products.query";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, mapTo, delay } from "rxjs/operators";
import { Product } from "./product.model";
import { ProductsStore } from "./products.store";
import { ID, noop } from "@datorama/akita";
import { timer } from "rxjs";

@Injectable()
export class ProductsService {
  constructor(
    private http: HttpClient,
    private productsStore: ProductsStore,
    private productsQuery: ProductsQuery
  ) {}

  get() {
    const request = this.http.get<Product[]>(`/api/products`).pipe(
      delay(750),
      tap(response => {
        this.productsStore.set(response);
      })
    );

    return this.productsQuery.isPristine ? request : noop();
  }

  getProduct(id: ID) {
    const request = this.http.get<Product>(`/api/products/${id}`).pipe(
      tap(response => {
        this.productsStore.add(response);
      })
    );
    return this.productsQuery.isPristine ? request : noop();
  }
}
