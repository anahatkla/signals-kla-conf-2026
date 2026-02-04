import {ChangeDetectionStrategy, Component, computed, inject, Signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {toSignal} from '@angular/core/rxjs-interop';
import {CounterStore} from '../counter.store';
import {MatButton} from '@angular/material/button';
import {startWith} from 'rxjs';

@Component({
  selector: 'app-standard-form-with-signal-counter',
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatButton
  ],
  templateUrl: './standard-form-with-signal-counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CounterStore]
})
export class StandardFormWithSignalCounterComponent {
  protected readonly form = new FormGroup({
    multiplier: new FormControl(1)
  })
  protected readonly multiplier: Signal<number>;
  protected readonly counterStore = inject(CounterStore);
  protected readonly multipliedResult = computed(() => this.counterStore.count() * this.multiplier());

  constructor() {
    this.multiplier = toSignal(this.form.controls.multiplier.valueChanges.pipe(startWith(this.form.value.multiplier)))
  }
}
