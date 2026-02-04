import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {CounterStore} from '../counter.store';

@Component({
  selector: 'app-signal-counter-with-store',
  imports: [
    MatButton
  ],
  templateUrl: './signal-counter-with-store.component.html',
  providers: [CounterStore]
})
export class SignalCounterWithStoreComponent {
  protected readonly counterStore = inject(CounterStore);
}
