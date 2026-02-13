import {Component, computed, input} from '@angular/core';
import {ValidationError} from '@angular/forms/signals';
import {ValidationErrors} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-form-errors',
  imports: [
    JsonPipe
  ],
  templateUrl: './form-errors.component.html',
})
export class FormErrorsComponent {
  public readonly signalErrors = input<ValidationError.WithField[]>();
  public readonly normalErrors = input<ValidationErrors>();
  protected errors = computed(() => this.signalErrors() ?? Object.keys(this.normalErrors())?.reduce((acc, curr) => {
    acc.push({message: this.normalErrors()[curr].message});
    return acc;
  }, []))

}
