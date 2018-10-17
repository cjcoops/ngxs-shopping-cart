import { Observable } from "rxjs";
import { CartItem } from "../cart/state/cart-item.model";
import { Component, OnInit } from "@angular/core";
import { Product } from "./state/product.model";
import { CartService } from "../cart/state/cart.service";
import { ProductsService } from "./state/products.service";
import { ProductsQuery } from "./state/products.query";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Product[];

  products$: Observable<Product[]>;
  loading$: Observable<boolean>;

  constructor(
    private productsService: ProductsService,
    private productsQuery: ProductsQuery,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productsService.get().subscribe();

    this.products$ = this.productsQuery.getProducts();

    this.loading$ = this.productsQuery.selectLoading();
  }

  onAddToCart({id}: Product): void {
    this.cartService.addProductToCart(id);
  }
}
