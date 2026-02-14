import {ChangeDetectionStrategy, Component, effect, signal, WritableSignal} from '@angular/core';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-demo-5',
  imports: [
    MatButton
  ],
  templateUrl: './demo-5.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Demo5Component {
  protected readonly $count = signal(1);
  protected readonly $multiplier = signal(1);
  protected readonly $result = signal(0);

  constructor() {
    effect(() => {
      if (this.$multiplier()) {
        this.$result.set(this.$count() * this.$multiplier());
        // this.$count.update(x => x + 1);
      }
      console.log("Effect run")
    })
  }

  increment(signal: WritableSignal<number>): void {
    signal.update(x => x + 1);
  }
}
