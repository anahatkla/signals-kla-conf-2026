import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SignalCounterComponent} from '../signal-counter/signal-counter.component';
import {StandardCounterComponent} from '../standard-counter/standard-counter.component';
import {AutoCounterComponent} from '../auto-counter/auto-counter.component';

@Component({
  selector: 'app-demo-2',
  imports: [
    SignalCounterComponent,
    StandardCounterComponent,
    AutoCounterComponent
  ],
  templateUrl: './demo-2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Demo2Component {

}
