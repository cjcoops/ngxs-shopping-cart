import { ProdService } from "./products.service";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Product } from "../state/product.model";
import { LoadData, CreateProduct } from "./product.actions";
import { tap } from "rxjs/operators";

@State<Product[]>({
  name: "products",
  defaults: []
})
export class ProductState {
  constructor(private productsService: ProdService) {}

  @Action(LoadData)
  loadData({ setState }) {
    return this.productsService.get().pipe(
      tap((payload: Product[]) => {
        setState([...payload]);
      })
    );
  }

  @Action(CreateProduct)
  createProduct(
    { getState, setState }: StateContext<Product[]>,
    { payload }: CreateProduct
  ) {
    return this.productsService.create(payload).pipe(
      tap((product: Product) => {
        setState([...getState(), product]);
      })
    );
  }
}
