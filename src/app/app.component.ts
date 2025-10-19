import {Component, AfterViewInit} from '@angular/core';

declare var WOW: any; // не знаю какой можно тип использовать для библиотеки

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 0,
      mobile: true,
      live: true
    });
    wow.init();
  }
}
