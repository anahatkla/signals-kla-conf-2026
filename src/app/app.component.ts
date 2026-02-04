import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {SignalCounterWithStoreComponent} from './signal-counter-with-store/signal-counter-with-store.component';

@Component({
  selector: 'app-root',
  imports: [SignalCounterWithStoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'signals-kla-conf-2026';
}
