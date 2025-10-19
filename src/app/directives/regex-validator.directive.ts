import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";

export function regexValidatorDirective(pattern: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const result = new RegExp(pattern).test(control.value);
    return result ? null : { pattern: { value: control.value } };
  }
}

@Directive({
  selector: '[regexValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: RegexValidatorDirective, multi: true}
  ]
})
export class RegexValidatorDirective implements Validator{

  @Input('passwordValidator') pattern = '';
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return regexValidatorDirective(this.pattern)(control);
  }
}
