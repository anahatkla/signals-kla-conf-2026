import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {StandardFormWithSignalCounterComponent} from './standard-form-with-signal-counter/standard-form-with-signal-counter.component';

@Component({
  selector: 'app-root',
  imports: [StandardFormWithSignalCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'signals-kla-conf-2026';
}
