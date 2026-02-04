import {Component, computed, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {CounterStore} from '../counter.store';

@Component({
  selector: 'app-signal-counter',
  imports: [
    MatButton
  ],
  templateUrl: './signal-counter.component.html',
  providers: [CounterStore]
})
export class SignalCounterComponent {
  protected readonly count = signal(0);
  protected readonly doubleCount = computed(() => this.count() * 2);

  protected increment(): void {
    this.count.update(c => c + 1);
  }
}
