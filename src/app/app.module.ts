import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { OrderComponent } from './components/pages/order/order.component';
import { CardComponent } from './components/pages/card/card.component';
import {HttpClientModule} from "@angular/common/http";
import { CatalogCardComponent } from './components/pages/catalog/catalog-card/catalog-card.component';
import { ShortDescriptionPipe } from './pipes/short-description.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import { RegexValidatorDirective } from './directives/regex-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CatalogComponent,
    OrderComponent,
    CardComponent,
    CatalogCardComponent,
    ShortDescriptionPipe,
    RegexValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
