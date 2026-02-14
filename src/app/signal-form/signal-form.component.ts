import {ChangeDetectionStrategy, Component, computed, effect, signal} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LowerCasePipe} from '@angular/common';
import {MatError, MatFormField, MatInput, MatLabel, MatSuffix} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {form, FormField, max, min, required} from '@angular/forms/signals';
import {DateUtility} from '../date.utility';
import {DataService} from '../data.service';
import {FormErrorsComponent} from '../form-errors/form-errors.component';
import {toObservable} from '@angular/core/rxjs-interop';
import {tap} from 'rxjs';

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
  protected readonly breedOptions = computed(() => DataService.breeds[this.form.species().value()]);
  private readonly formDataModel = signal({
    name: "",
    dateOfBirth: new Date(),
    species: "",
    breed: "",
    minimumTreats: 1,
    maximumTreats: 3
  });
  protected readonly form = form(this.formDataModel, schemaPath => {
    required(schemaPath.name, {message: "Name is required"});
    required(schemaPath.dateOfBirth, {message: "Date of Birth is required"});
    max(schemaPath.minimumTreats, context => context.valueOf(schemaPath.maximumTreats), {message: "Minimum Treats must be less than Maximum Treats"});
    min(schemaPath.maximumTreats, context => context.valueOf(schemaPath.minimumTreats), {message: "Maximum Treats must be greater than Minimum Treats"});
  });
  protected readonly age = computed(() => DateUtility.calculateAge(this.form.dateOfBirth().value()))

  constructor() {
    toObservable(this.form.species().value)
      .pipe(
        tap(() => this.form.breed().setControlValue(""))
      )
      .subscribe();
  }
}
