import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogComponent} from "./components/pages/catalog/catalog.component";
import {HomeComponent} from "./components/pages/home/home.component";
import {OrderComponent} from "./components/pages/order/order.component";
import {CardComponent} from "./components/pages/card/card.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'catalog/:id', component: CardComponent },
  {path: "order", component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
