import { StoreConfig, EntityState, EntityStore } from "@datorama/akita";
import { Product } from "./product.model";
import { Injectable } from "@angular/core";
export interface ProductsState extends EntityState<Product> {}

@Injectable({
  providedIn: "root"
})
@StoreConfig({ name: "products" })
export class ProductsStore extends EntityStore<ProductsState, Product> {
  constructor() {
    super();
  }
}
