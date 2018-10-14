import { ProductsStore, ProductsState } from "./products.store";
import { QueryEntity } from "@datorama/akita";
import { Product } from "./product.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductsQuery extends QueryEntity<ProductsState, Product> {
  constructor(protected store: ProductsStore) {
    super(store);
  }

  getProducts() {
    return this.selectAll({
      //   sortBy,
      //   filterBy: entity => entity.title.toLowerCase().includes(term)
    });
  }
}
