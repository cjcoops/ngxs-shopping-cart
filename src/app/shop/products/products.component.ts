import { Observable, of } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Product } from "./state/product.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateProductComponent } from "./create-product/create-product.component";
import { ProductState } from "./store/product.state";
import { Select, Store } from "@ngxs/store";
import { LoadData, CreateProduct } from "./store/product.actions";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  loading$: Observable<boolean>;
  
  @Select(ProductState) 
  products$: Observable<Product[]>;

  constructor(private modalService: NgbModal, private store: Store) {}

  ngOnInit() {
    this.loading$ = of(false);
    this.store.dispatch(new LoadData());
  }

  onAddToCart({ id }: Product): void {
    // this.cartService.addProductToCart(id);
  }

  onClickNew() {
    this.modalService.open(CreateProductComponent);
  }
}
