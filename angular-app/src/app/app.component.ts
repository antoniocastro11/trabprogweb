import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  shouldShowBarranav(): boolean {
    const hiddenRoutes = ['/login', '/'];
    return !hiddenRoutes.includes(this.router.url);
  }
}
