import { CartItem } from "../models/cart-item.model";
import { Component, OnInit } from "@angular/core";
import { Product } from "./state/product.model";
import { ShopService } from "../services/shop.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.shopService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  onAddToCart(productId: number): void {
    console.log(productId);
    const cartItem: CartItem = { quantity: 1, productId };
    this.shopService.addItemToCart(cartItem).subscribe(res => {
      console.log(res);
    });
  }
}
