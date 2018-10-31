export class AddProductToCart {
  static type = "[Products] Add To Cart";
  constructor(public readonly payload: number) {}
}

export type CartActions = AddProductToCart;
