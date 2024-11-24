import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-barranav',
  templateUrl: './barranav.component.html',
  styleUrls: ['./barranav.component.css']
})
export class BarranavComponent {
  private breakpointObserver = inject(BreakpointObserver);
  constructor(private router: Router) {}

  logout(): void {
    // Redireciona para a rota inicial usando RouterLink
    this.router.navigate(['/']).then(() => {
      // Recarrega a página
      window.location.reload();
    });
  }
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}



export class AppComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
