import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {tap} from 'rxjs';
import {LowerCasePipe} from '@angular/common';
import {MatError, MatFormField, MatInput, MatLabel, MatSuffix} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {DateUtility} from '../date.utility';
import {FormErrorsComponent} from '../form-errors/form-errors.component';
import {DataService} from '../data.service';

@Component({
  selector: 'app-standard-form',
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
    FormErrorsComponent,
    MatError
  ],
  templateUrl: './standard-form.component.html'
})
export class StandardFormComponent {
  protected breedOptions: string[] = [];
  protected readonly form = new FormGroup({
    name: new FormControl(""),
    dateOfBirth: new FormControl(new Date()),
    species: new FormControl(""),
    breed: new FormControl(""),
  })
  protected age = 0;
  protected readonly species = DataService.species;
  private readonly breeds = DataService.breeds;

  constructor() {
    this.form.controls.species.valueChanges
      .pipe(
        tap(x => {
          this.breedOptions = this.breeds[x];
          this.form.controls.breed.reset();
        })
      )
      .subscribe()

    this.form.controls.dateOfBirth.valueChanges.pipe(tap(x => this.age = DateUtility.calculateAge(x))).subscribe();
  }
}
