import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CounterStore} from '../counter.store';

@Component({
  selector: 'app-counter-store-display',
  imports: [],
  templateUrl: './counter-store-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterStoreDisplayComponent {
  protected readonly counterStore = inject(CounterStore);
}
