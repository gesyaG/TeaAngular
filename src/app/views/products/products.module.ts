import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {CardComponent} from "./product/card.component";
import {CatalogCardComponent} from "./products/products-card/catalog-card.component";
import {CatalogComponent} from "./products/catalog.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    CardComponent,
    CatalogCardComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule {
}
