import {ChangeDetectionStrategy, Component, computed, effect, signal} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LowerCasePipe} from '@angular/common';
import {MatFormField, MatInput, MatLabel, MatSuffix} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {form, FormField} from '@angular/forms/signals';
import {DateUtility} from '../date.utility';
import {DataService} from '../data.service';

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
    FormField
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
    breed: ""
  });
  protected readonly form = form(this.formDataModel);
  protected readonly age = computed(() => DateUtility.calculateAge(this.form.dateOfBirth().value()))

  constructor() {
    effect(() => {
      this.form.species().value();
      this.form.breed().setControlValue("");
    });
  }
}
