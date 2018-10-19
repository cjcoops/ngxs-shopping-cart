import { ProductsService } from "./products/state/products.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./cart/cart.component";
import { CartService } from "./cart/state/cart.service";
import { SingleProductComponent } from "./products/single-product/single-product.component";
import { CreateProductComponent } from "./products/create-product/create-product.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

export const ROUTES: Routes = [
  {
    path: "",
    redirectTo: "products",
    pathMatch: "full"
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "products/:id",
    component: SingleProductComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CartService, ProductsService],
  declarations: [
    CartComponent,
    ProductsComponent,
    SingleProductComponent,
    CreateProductComponent
  ],
  entryComponents: [CreateProductComponent]
})
export class ShopModule {}
