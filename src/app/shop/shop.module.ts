import { ProductsService } from './products/state/products.service';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./cart/cart.component";
import { ShopService } from "./services/shop.service";
import { SingleProductComponent } from "./products/single-product/single-product.component";

export const ROUTES: Routes = [
  {
    path: "",
    redirectTo: "products",
    pathMatch: 'full' 
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
  imports: [CommonModule, RouterModule.forChild(ROUTES), HttpClientModule],
  providers: [ShopService, ProductsService],
  declarations: [CartComponent, ProductsComponent, SingleProductComponent]
})
export class ShopModule {}
