import {ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-render',
  imports: [],
  templateUrl: './render.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderComponent implements DoCheck, OnChanges {
  @Input() public value: number;

  public ngOnChanges(): void {
    console.log("RenderComponent Changed");
  }

  public ngDoCheck(): void {
    console.log("RenderComponent Checked");
  }
}
