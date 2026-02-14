import {ChangeDetectionStrategy, Component, computed, inject, Signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {CounterStore} from '../counter.store';
import {MatButton} from '@angular/material/button';
import {combineLatest, map, Observable, startWith} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-standard-form-with-signal-counter',
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatButton,
    AsyncPipe
  ],
  templateUrl: './standard-form-with-signal-counter.component.html',
  providers: [CounterStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandardFormWithSignalCounterComponent {
  protected readonly form = new FormGroup({
    multiplier: new FormControl(1)
  })
  protected readonly multiplier: Signal<number>;
  protected readonly counterStore = inject(CounterStore);
  protected readonly multipliedResult = computed(() => this.counterStore.count() * this.multiplier());
  protected readonly multipliedResult$: Observable<number>;

  constructor() {
    this.multiplier = toSignal(this.form.controls.multiplier.valueChanges.pipe(startWith(this.form.value.multiplier)))
    this.multipliedResult$ =
      combineLatest([
        toObservable(this.counterStore.count),
        this.form.controls.multiplier.valueChanges
          .pipe(startWith(this.form.value.multiplier))
      ])
        .pipe(map(([count, multiplier]) => count * multiplier));
  }
}
