import {ChangeDetectionStrategy, Component} from '@angular/core';
import {StandardFormComponent} from '../standard-form/standard-form.component';
import {SignalFormComponent} from '../signal-form/signal-form.component';

@Component({
  selector: 'app-demo-3',
  imports: [
    StandardFormComponent,
    SignalFormComponent
  ],
  templateUrl: './demo-3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Demo3Component {

}
