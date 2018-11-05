import { State, Selector, Action, StateContext } from "@ngxs/store";
import * as productActions from "./product.actions";
import { tap } from "rxjs/operators";
import { Product } from "../models/product.model";
import { ProductsService } from "../services/products.service";

export interface ProductStateModel {
  products: Product[];
  loaded: boolean;
  loading: boolean;
  selectedProductId: number;
}

@State<ProductStateModel>({
  name: "productState",
  defaults: {
    products: [],
    loaded: false,
    loading: false,
    selectedProductId: null
  }
})
export class ProductState {
  constructor(private productsService: ProductsService) {}

  @Selector()
  static products(state: ProductStateModel) {
    return state.products;
  }

  @Action(productActions.LoadProducts)
  loadData({ patchState }) {
    patchState({
      loading: true
    });

    return this.productsService.get().pipe(
      tap((payload: Product[]) => {
        patchState({
          products: payload,
          loading: false
        });
      })
    );
  }

  @Action(productActions.CreateProduct)
  createProduct(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload }: productActions.CreateProduct
  ) {
    const state = getState();
    return this.productsService.create(payload).pipe(
      tap((product: Product) => {
        patchState({
          products: [...state.products, product]
        });
      })
    );
  }
}
