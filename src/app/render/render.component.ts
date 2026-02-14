import {ChangeDetectionStrategy, Component, DoCheck, input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-render',
  imports: [],
  templateUrl: './render.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderComponent implements DoCheck, OnChanges {
  public readonly value = input.required<number>();

  public ngOnChanges(): void {
    console.log("RenderComponent Changed");
  }

  public ngDoCheck(): void {
    console.log("RenderComponent Checked");
  }
}
