import {ChangeDetectionStrategy, Component, DoCheck} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {AutoCounterComponent} from './auto-counter/auto-counter.component';

@Component({
  selector: 'app-root',
  imports: [
    AutoCounterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements DoCheck {
  ngDoCheck(): void {
    console.log("AppComponent DoCheck")
  }
}
