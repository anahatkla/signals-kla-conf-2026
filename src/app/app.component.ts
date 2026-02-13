import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {SignalFormComponent} from './signal-form/signal-form.component';
import {StandardFormComponent} from './standard-form/standard-form.component';

@Component({
  selector: 'app-root',
  imports: [SignalFormComponent, StandardFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'signals-kla-conf-2026';
}
