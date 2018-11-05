import { ProductsService } from "./services/products.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./cart/cart.component";
import { SingleProductComponent } from "./products/single-product/single-product.component";
import { CreateProductComponent } from "./products/create-product/create-product.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "../auth/auth.guard";
import { NgxsModule } from "@ngxs/store";
import { ShopState } from "./store";

export const ROUTES: Routes = [
  {
    path: "",
    redirectTo: "products",
    pathMatch: "full"
  },
  {
    path: "cart",
    component: CartComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "products",
    component: ProductsComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "products/:id",
    component: SingleProductComponent
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature(ShopState)
  ],
  providers: [ProductsService],
  declarations: [
    CartComponent,
    ProductsComponent,
    SingleProductComponent,
    CreateProductComponent
  ],
  entryComponents: [CreateProductComponent]
})
export class ShopModule {}
