import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { regexValidatorDirective } from "../../shared/directives/regex-validator.directive";
import { HttpClient } from "@angular/common/http";
import { CardService } from "../../shared/services/card.service";
import {DataType} from "../../../types/data.type";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @ViewChild('formElement') formElementRef!: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpClient,
    private cardService: CardService
  ) {}

  formValues = this.fb.group({
    name: ['', [Validators.required, regexValidatorDirective('^[ A-Za-zА-Яа-яЁё]+$')]],
    last_name: ['', [Validators.required, regexValidatorDirective('^[ A-Za-zА-Яа-яЁё]+$')]],
    phone: ['', [Validators.required, regexValidatorDirective('^\\+?\\d{11}$')]],
    country: ['', [Validators.required, regexValidatorDirective('^[A-Za-zА-Яа-яЁё -]+$')]],
    zip: ['', [Validators.required, regexValidatorDirective('^\\d{6}$')]],
    product: [{ value: '', disabled: true }],
    address: ['', [Validators.required, regexValidatorDirective('^[A-Za-zА-Яа-яЁё0-9 /-]+$')]],
    comment: [''],
  });

  showPopup = false;
  submitError = false;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['product']) {
        this.formValues.patchValue({ product: params['product'] });
      }
    });
  }

  get name() { return this.formValues.get('name'); }
  get last_name() { return this.formValues.get('last_name'); }
  get phone() { return this.formValues.get('phone'); }
  get country() { return this.formValues.get('country'); }
  get zip() { return this.formValues.get('zip'); }
  get address() { return this.formValues.get('address'); }

  send(): void {
    if (this.formValues.invalid) {
      this.formValues.markAllAsTouched();
      return;
    }

    this.submitError = false;

    const formData = this.formValues.getRawValue() as DataType;

    this.cardService.createOrder(formData).subscribe({
      next: (response) => {
        if (response.success === 1 && !response.message) {
          this.showPopup = true;
          this.formElementRef.nativeElement.style.display = 'none';
        } else {
          this.submitError = true;
        }
      },
      error: () => {
        this.submitError = true;
      },
    });
  }
}
