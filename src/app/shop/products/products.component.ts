import { ProductsActions, LoadProducts } from './../store/product.actions';
import { Observable, of } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Product } from "./state/product.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateProductComponent } from "./create-product/create-product.component";
import { Select, Store } from "@ngxs/store";
import { ProductState } from '../store';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  
  @Select(ProductState.products)
  products$: Observable<Product[]>;
  
  @Select(state => state.productState.loading)
  loading$: Observable<boolean>;

  constructor(private modalService: NgbModal, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new LoadProducts());
  }

  onAddToCart({ id }: Product): void {
    // this.cartService.addProductToCart(id);
  }

  onClickNew() {
    this.modalService.open(CreateProductComponent);
  }
}
