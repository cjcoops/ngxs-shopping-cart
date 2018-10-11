import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./components/products/products.component";
import { CartComponent } from "./components/cart/cart.component";
import { ShopService } from "./services/shop.service";

export const ROUTES: Routes = [
  {
    path: "",
    component: ProductsComponent
  },
  {
    path: "cart",
    component: CartComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), HttpClientModule],
  providers: [ShopService],
  declarations: [CartComponent, ProductsComponent]
})
export class ShopModule {}
