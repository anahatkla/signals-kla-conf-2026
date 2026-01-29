import {ChangeDetectionStrategy, Component} from '@angular/core';
import {StandardFormComponent} from './standard-form/standard-form.component';
import {provideNativeDateAdapter} from '@angular/material/core';
import {SignalFormComponent} from './signal-form/signal-form.component';

@Component({
  selector: 'app-root',
  imports: [StandardFormComponent, SignalFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'signals-kla-conf-2026';
}
