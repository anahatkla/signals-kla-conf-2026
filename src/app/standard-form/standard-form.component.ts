import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-standard-form',
  imports: [],
  templateUrl: './standard-form.component.html',
  styleUrl: './standard-form.component.css'
})
export class StandardFormComponent {
  private readonly species = ["Dog", "Cat"];
  private readonly breeds = {
    "Dog": ["Lab", "Beagle", "Great Dane"],
    "Cat": ["Sphynx", "American Shorthair", "American Wirehair"]
  };
  private readonly form = new FormGroup({
    name: new FormControl(""),
    species: new FormControl(""),
    breed: new FormControl(""),
  })

  constructor() {
    this.form.controls["species"].valueChanges
  }
}
