import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SignalCounterWithStoreComponent} from '../signal-counter-with-store/signal-counter-with-store.component';

@Component({
  selector: 'app-demo-4',
  imports: [
    SignalCounterWithStoreComponent
  ],
  templateUrl: './demo-4.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Demo4Component {

}
