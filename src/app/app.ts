import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './shared/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './app.html',
})
export class App implements OnInit {
  title = 'CaretEDA';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      history.scrollRestoration = 'manual';
      this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
        const resetScroll = () => {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        };
        resetScroll();
        setTimeout(resetScroll, 0);
        setTimeout(resetScroll, 100);
      });
    }
  }
}
