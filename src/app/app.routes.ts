import {Routes} from '@angular/router';
import {Demo1Component} from './demo-1/demo-1.component';
import {Demo2Component} from './demo-2/demo-2.component';
import {Demo3Component} from './demo-3/demo-3.component';
import {Demo4Component} from './demo-4/demo-4.component';
import {Demo5Component} from './demo-5/demo-5.component';

export const routes: Routes = [

  {
    component: Demo1Component,
    path: "demo/1"
  },
  {
    component: Demo2Component,
    path: "demo/2"
  },
  {
    component: Demo3Component,
    path: "demo/3"
  },
  {
    component: Demo4Component,
    path: "demo/4"
  },
  {
    component: Demo5Component,
    path: "demo/5"
  }
];
