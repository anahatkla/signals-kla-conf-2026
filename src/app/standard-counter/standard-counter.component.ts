import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {BehaviorSubject, map} from 'rxjs';
import {AsyncPipe, NgTemplateOutlet} from '@angular/common';
import {RenderComponent} from '../render/render.component';

@Component({
  selector: 'app-standard-counter',
  imports: [
    MatButton,
    AsyncPipe,
    NgTemplateOutlet,
    RenderComponent
  ],
  templateUrl: './standard-counter.component.html'
})
export class StandardCounterComponent {
  protected readonly count$ = new BehaviorSubject(0);
  protected count = 0;
  protected doubleCount = 0;
  protected readonly doubleCount$ = this.count$.pipe(
    map(c => c * 2)
  );

  increment() {
    this.count$.next(this.count$.value + 1);
    this.count++;
    this.doubleCount = this.count * 2;
  }
}
