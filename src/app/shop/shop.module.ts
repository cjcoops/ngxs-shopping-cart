import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartComponent } from "./cart/cart.component";
import { ProductsComponent } from "./products/products.component";
import { Routes, RouterModule } from "@angular/router";

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
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [CartComponent, ProductsComponent]
})
export class ShopModule {}
