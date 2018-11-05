import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product.model";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-product",
  templateUrl: "./single-product.component.html",
  styleUrls: ["./single-product.component.css"]
})
export class SingleProductComponent implements OnInit {
  product$: Observable<Product>;

  // constructor(
  //   private productsQuery: ProductsQuery,
  //   // private productsService: ProductsService,
  //   private route: ActivatedRoute,
  //   private productsStore: ProductsStore
  // ) {}

  ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     const id = +params["id"];
  //     this.productsStore.setPristine();
  //     // this.productsService.getProduct(id).subscribe();
  //     this.product$ = this.productsQuery.selectEntity(id);
  //   });
  }
}
