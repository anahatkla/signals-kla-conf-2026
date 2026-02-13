import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-signal-counter',
  imports: [
    MatButton
  ],
  templateUrl: './signal-counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalCounterComponent {
  protected readonly count = signal(0);
  protected readonly doubleCount = computed(() => this.count() * 2);

  protected increment(): void {
    this.count.update(c => c + 1);
  }
}
