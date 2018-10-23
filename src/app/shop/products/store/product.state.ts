import { ProdService } from "./products.service";
import { State, Selector, Action } from "@ngxs/store";
import { Product } from "../state/product.model";
import { LoadData } from "./product.actions";
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
}
