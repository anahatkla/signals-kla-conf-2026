import {Component} from '@angular/core';
import {NavigationEnd, RouterLink, RouterLinkActive} from "@angular/router";
import {MatButton} from '@angular/material/button';
import {NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    MatButton,
    RouterLinkActive,
    NgTemplateOutlet
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  protected readonly demos = [].constructor(5);
}
