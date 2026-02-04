import {ChangeDetectionStrategy, Component, computed, effect, signal} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LowerCasePipe} from '@angular/common';
import {MatError, MatFormField, MatInput, MatLabel, MatSuffix} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {form, FormField, required} from '@angular/forms/signals';
import {DateUtility} from '../date.utility';
import {DataService} from '../data.service';
import {FormErrorsComponent} from '../form-errors/form-errors.component';

@Component({
  selector: 'app-signal-form',
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatSelect,
    MatOption,
    MatFormField,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatLabel,
    MatSuffix,
    LowerCasePipe,
    FormField,
    MatError,
    FormErrorsComponent
  ],
  templateUrl: './signal-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalFormComponent {
  protected readonly DataService = DataService;
  protected readonly age = computed(() => DateUtility.calculateAge(this.form.dateOfBirth().value()))
  private readonly formDataModel = signal({
    name: "",
    dateOfBirth: new Date(),
    species: "",
    breed: ""
  });
  protected readonly form = form(this.formDataModel, schemaPath => {
    required(schemaPath.name, {message: "Name is required"});
    required(schemaPath.dateOfBirth, {message: "Date of Birth is required"});
  });
  protected readonly breedOptions = computed(() => DataService.breeds[this.form.species().value()]);

  constructor() {
    effect(() => {
      this.form.species().value();
      this.form.breed().setControlValue("");
    });
  }
}
