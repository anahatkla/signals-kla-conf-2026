import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal} from '@angular/core';
import {RenderComponent} from '../render/render.component';
import {delay, interval, map, Observable, startWith, take, tap} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-auto-counter',
  imports: [
    RenderComponent,
    AsyncPipe
  ],
  templateUrl: './auto-counter.component.html'
})
export class AutoCounterComponent {
  protected count = 1;
  protected $count = signal(1);
  protected count$: Observable<number>;
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    interval(1000).pipe(delay(2000), tap(() => this.count++), take(5)).subscribe();
    // interval(1000).pipe(delay(2000), tap(() => this.count++), tap(() => this.cdr.markForCheck()), take(5)).subscribe();
    // this.count$ = interval(1000).pipe(delay(2000), map(() => ++this.count), take(5), startWith(this.count));
    // interval(1000).pipe(delay(2000), tap(() => this.$count.update(x => x + 1)), take(5)).subscribe();
  }
}
