import { Observable } from "rxjs";
import { CartItem } from "../models/cart-item.model";
import { Component, OnInit } from "@angular/core";
import { Product } from "./state/product.model";
import { ShopService } from "../services/shop.service";
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
    private shopService: ShopService,
    private productsService: ProductsService,
    private productsQuery: ProductsQuery
  ) {}

  ngOnInit() {
    this.productsService.get().subscribe();

    this.products$ = this.productsQuery.getProducts();

    this.loading$ = this.productsQuery.selectLoading();
  }

  onAddToCart(productId: number): void {
    const cartItem: CartItem = { quantity: 1, productId };
    this.shopService.addItemToCart(cartItem).subscribe();
  }
}
