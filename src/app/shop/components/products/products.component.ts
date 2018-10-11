import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product.model";
import { ShopService } from "../../services/shop.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.shopService.getProducts().subscribe((products) => {
      this.products = products;  
    })
  }

  onAddToCart(id: string): void {
    console.log(id);
  }
}
