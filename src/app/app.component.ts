import {Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {AutoCounterComponent} from './auto-counter/auto-counter.component';

@Component({
  selector: 'app-root',
  imports: [
    AutoCounterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [provideNativeDateAdapter()]
})
export class AppComponent {
  title = 'signals-kla-conf-2026';


}
