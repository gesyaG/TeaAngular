import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {RegexValidatorDirective} from "./directives/regex-validator.directive";
import {ShortDescriptionPipe} from "./pipes/short-description.pipe";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RegexValidatorDirective,
    ShortDescriptionPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RegexValidatorDirective,
    ShortDescriptionPipe,
  ]
})
export class SharedModule {
}
