import {ChangeDetectionStrategy, Component} from '@angular/core';
import {StandardCounterComponent} from '../standard-counter/standard-counter.component';
import {AutoCounterComponent} from '../auto-counter/auto-counter.component';

@Component({
  selector: 'app-demo-1',
  imports: [
    StandardCounterComponent,
    AutoCounterComponent
  ],
  templateUrl: './demo-1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Demo1Component {

}
