import {Component, DoCheck, Input} from '@angular/core';

@Component({
  selector: 'app-do-check',
  imports: [],
  templateUrl: './do-check.component.html'
})
export class DoCheckComponent implements DoCheck {
  @Input() public variable: string;

  public ngDoCheck(): void {
    console.log("Checked");
  }
}
