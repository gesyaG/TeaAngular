import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Subscription, timer} from 'rxjs';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('accordion') accordionRef!: ElementRef;
  @ViewChild('popup') popup!: TemplateRef<ElementRef>;

  private popupSubscription!: Subscription;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.popupSubscription = timer(10000).subscribe(() => {
      this.openPopup();
    });

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
    this.modalService.open(this.popup, {});
  }

  closePopup(): void {
    this.modalService.dismissAll();
  }
}
