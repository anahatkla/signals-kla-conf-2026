import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal} from '@angular/core';
import {RenderComponent} from '../render/render.component';
import {delay, interval, take, tap} from 'rxjs';

@Component({
  selector: 'app-auto-counter',
  imports: [
    RenderComponent
  ],
  templateUrl: './auto-counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoCounterComponent {
  protected someVariable = 1;
  protected someSignal = signal(1);
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    // interval(1000).pipe(delay(2000), tap(() => this.someVariable++), tap(() => this.cdr.markForCheck()), take(5)).subscribe()
    interval(1000).pipe(delay(2000), tap(() => this.someSignal.update(x => x + 1)), take(5)).subscribe()
    // interval(1000).pipe(tap(() => console.log("tick"))).subscribe();
  }
}
