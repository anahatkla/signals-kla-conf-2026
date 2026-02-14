import {Routes} from '@angular/router';
import {Demo1Component} from './demo-1/demo-1.component';
import {LandingComponent} from './landing/landing.component';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "landing"
  },
  {
    path: "landing",
    component: LandingComponent
  },
  {
    component: Demo1Component,
    path: "demo/1"
  }
];
