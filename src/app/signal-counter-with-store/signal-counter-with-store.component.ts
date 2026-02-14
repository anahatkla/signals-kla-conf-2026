import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {CounterStore} from '../counter.store';
import {CounterStoreDisplayComponent} from '../counter-store-display/counter-store-display.component';

@Component({
  selector: 'app-signal-counter-with-store',
  imports: [
    MatButton,
    CounterStoreDisplayComponent
  ],
  templateUrl: './signal-counter-with-store.component.html',
  providers: [CounterStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalCounterWithStoreComponent {
  protected readonly counterStore = inject(CounterStore);
}
