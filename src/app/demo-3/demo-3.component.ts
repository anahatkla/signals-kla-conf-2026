import {ChangeDetectionStrategy, Component} from '@angular/core';
import {StandardFormComponent} from '../standard-form/standard-form.component';
import {SignalFormComponent} from '../signal-form/signal-form.component';
import {StandardFormWithSignalCounterComponent} from '../standard-form-with-signal-counter/standard-form-with-signal-counter.component';

@Component({
  selector: 'app-demo-3',
  imports: [
    StandardFormComponent,
    SignalFormComponent,
    StandardFormWithSignalCounterComponent
  ],
  templateUrl: './demo-3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Demo3Component {

}
