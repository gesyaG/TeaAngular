import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, timer } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('slider') sliderRef!: ElementRef;
  @ViewChild('accordion') accordionRef!: ElementRef;
  @ViewChild('popup') popupRef!: ElementRef;

  private popupSubscription!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.popupSubscription = timer(10000).subscribe(() => {
      this.openPopup();
    });
  }

  ngAfterViewInit(): void {
    if (this.sliderRef?.nativeElement) {
      $(this.sliderRef.nativeElement).slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
      });
    }

    if (this.accordionRef?.nativeElement) {
      $(this.accordionRef.nativeElement).accordion({
        heightStyle: 'content',
        collapsible: true,
        active: 0,
        icons: false
      });
    }
  }

  ngOnDestroy(): void {
    this.closePopup();
    if (this.popupSubscription) {
      this.popupSubscription.unsubscribe();
    }
  }

  openPopup(): void {
    if (this.popupRef?.nativeElement) {
      $(this.popupRef.nativeElement).modal('show');
    }
  }

  closePopup(): void {
    if (this.popupRef?.nativeElement) {
      $(this.popupRef.nativeElement).modal('hide');
    }
  }
}
