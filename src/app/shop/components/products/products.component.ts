import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product.model";
import { ShopService } from "../../services/shop.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: "Red Apple",
      price: 0.4,
      emoji: "🍎"
    },
    {
      id: 2,
      name: "Grapes",
      price: 0.9,
      emoji: "🍇"
    },
    {
      id: 3,
      name: "Tangerine",
      price: 0.6,
      emoji: "🍊"
    },
    {
      id: 4,
      name: "Watermelon",
      price: 1.5,
      emoji: "🍉"
    },
    {
      id: 5,
      name: "Eggplant",
      price: 1.5,
      emoji: "🍆"
    }
  ];

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.shopService.getProducts().subscribe((p) => {
      console.log(p);  
    })
  }

  onAddToCart(id: string): void {
    console.log(id);
  }
}
