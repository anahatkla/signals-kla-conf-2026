import {Component} from '@angular/core';
import {delay, interval, take, tap} from 'rxjs';

@Component({
  selector: 'app-auto-counter',
  imports: [],
  templateUrl: './auto-counter.component.html'
})
export class AutoCounterComponent {
  protected someVariable = 1;

  constructor() {
    interval(1000).pipe(delay(2000), tap(() => this.someVariable++), take(5)).subscribe()
  }
}
