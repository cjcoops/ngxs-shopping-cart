import { Product } from "../products/state/product.model";

export class CreateProduct {
  static type = "CreateProduct";
  constructor(public readonly payload: Product) {}
}

export class LoadProducts {
  static type = "[Products] Load Products";
}

export class LoadProductsSuccess {
  static type = "[API] Load Products Success"
}

export type ProductsActions = LoadProducts | CreateProduct | LoadProductsSuccess;
