import {Component, DoCheck} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [provideNativeDateAdapter()]
})
export class AppComponent implements DoCheck {
  ngDoCheck(): void {
    console.log("AppComponent Checked")
  }
}
