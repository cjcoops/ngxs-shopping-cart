import { ProductsService } from "./../state/products.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "../state/product.model";
import { Observable } from "rxjs";
import { ProductsQuery } from "../state/products.query";
import { ActivatedRoute } from "@angular/router";
import { ProductsStore } from "../state/products.store";

@Component({
  selector: "app-single-product",
  templateUrl: "./single-product.component.html",
  styleUrls: ["./single-product.component.css"]
})
export class SingleProductComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private productsQuery: ProductsQuery,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private productsStore: ProductsStore
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params["id"];
      this.productsStore.setPristine();
      this.productsService.getProduct(id).subscribe();
      this.product$ = this.productsQuery.selectEntity(id);
    });
  }
}
