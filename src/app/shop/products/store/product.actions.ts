import { Product } from "../state/product.model";

export class CreateProduct {
  static type = "CreateProduct";
  constructor(public readonly payload: Product) {}
}

export class LoadData {
  static type = "LoadData";
}
