import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Floating pill navbar -->
    <header class="fixed top-3 left-4 right-4 md:left-8 md:right-8 z-[100] navbar-pill">
      <div class="h-[68px] flex items-center justify-between px-6 md:px-10 gap-6">
        <!-- Logo -->
        <a (click)="handleLogoClick()" class="cursor-pointer no-underline flex-shrink-0">
          <img src="assets/careteda-logo-hd.png" alt="CaretEDA" class="h-9 w-auto" />
        </a>

        <!-- Desktop Nav Links -->
        <nav class="hidden md:flex items-center flex-1 justify-center">
          <a
            *ngFor="let link of navLinks"
            (click)="handleNav(link)"
            [class.active]="isActive(link)"
            class="nav-bar-link px-5 py-2.5 text-[15px] cursor-pointer no-underline whitespace-nowrap select-none"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Contact Us -->
        <div class="hidden md:flex items-center flex-shrink-0">
          <a
            (click)="handleContactClick()"
            class="inline-flex items-center bg-[#2563EB] text-white text-sm font-semibold px-6 py-2.5 rounded-full no-underline transition-all duration-300 hover:bg-[#1D4ED8] cursor-pointer"
          >
            Contact Us
          </a>
        </div>

        <!-- Mobile Hamburger -->
        <button
          (click)="toggleMobileMenu()"
          class="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] focus:outline-none flex-shrink-0"
        >
          <span class="hamburger-line" [class.open-top]="isMobileMenuOpen"></span>
          <span class="hamburger-line" [class.open-mid]="isMobileMenuOpen"></span>
          <span class="hamburger-line" [class.open-bot]="isMobileMenuOpen"></span>
        </button>
      </div>
    </header>

    <!-- Mobile Menu -->
    <div
      class="mobile-menu-overlay fixed inset-0 z-[90] flex flex-col items-center justify-center gap-8 md:hidden"
      [class.active]="isMobileMenuOpen"
    >
      <a
        *ngFor="let link of navLinks"
        (click)="handleNav(link)"
        class="mobile-nav-link"
        [class.active]="isActive(link)"
      >
        {{ link.label }}
      </a>
    </div>
  `,
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMobileMenuOpen = false;
  activeSection = 'home';
  isHomePage = true;
  indicatorStyle: { [key: string]: string } = { left: '0px', width: '0px', opacity: '0' };

  private routerSub?: Subscription;
  private scrollFn?: () => void;

  navLinks: { id: string; label: string; route: string | null }[] = [
    { id: 'home', label: 'Home', route: null },
    { id: 'team', label: 'Team', route: '/team' },
    { id: 'blog', label: 'Blog', route: '/blogs' },
    { id: 'ifaq', label: 'IFAQ', route: '/ifaq' },
    { id: 'news', label: 'News', route: '/news' },
    { id: 'careers', label: 'Careers', route: '/careers' },
    { id: 'about', label: 'About', route: '/about' },
  ];

  constructor(
    private router: Router,
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    this.checkIsHome(this.router.url);

    this.routerSub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.checkIsHome(e.urlAfterRedirects);
        if (!this.isHomePage) this.activeSection = '';
        setTimeout(() => this.updateIndicator(), 150);
      });

    if (isPlatformBrowser(this.platformId)) {
      this.scrollFn = () => this.onScroll();
      window.addEventListener('scroll', this.scrollFn, { passive: true });
      setTimeout(() => this.updateIndicator(), 200);
    }
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    if (isPlatformBrowser(this.platformId) && this.scrollFn) {
      window.removeEventListener('scroll', this.scrollFn);
    }
  }

  private checkIsHome(url: string) {
    this.isHomePage = url === '/' || url === '' || url === '/index.html';
  }

  onScroll() {
    if (!this.isHomePage || !isPlatformBrowser(this.platformId)) return;
    const scrollY = window.scrollY + window.innerHeight * 0.4;
    for (const id of ['home']) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        if (this.activeSection !== id) {
          this.activeSection = id;
          this.updateIndicator();
        }
        return;
      }
    }
  }

  updateIndicator() {
    if (!isPlatformBrowser(this.platformId)) return;
    const nav = document.querySelector('.pill-nav-container');
    if (!nav) return;
    const items = nav.querySelectorAll('.nav-pill-item');
    const idx = this.navLinks.findIndex((l) => this.isActive(l));
    if (idx >= 0 && items[idx]) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = (items[idx] as HTMLElement).getBoundingClientRect();
      this.indicatorStyle = {
        left: itemRect.left - navRect.left + 'px',
        width: itemRect.width + 'px',
        opacity: '1',
      };
    } else {
      this.indicatorStyle = { left: '0px', width: '0px', opacity: '0' };
    }
  }

  isActive(link: { id: string; route: string | null }): boolean {
    if (link.route) return this.router.url.startsWith(link.route);
    return this.isHomePage && this.activeSection === link.id;
  }

  private readonly slideMap: Record<string, number> = { home: 0 };

  handleNav(link: { id: string; route: string | null }) {
    this.isMobileMenuOpen = false;
    if (link.route) {
      this.router.navigate([link.route]);
    } else if (this.isHomePage && isPlatformBrowser(this.platformId)) {
      const slideIndex = this.slideMap[link.id];
      if (slideIndex !== undefined) {
        this.scrollService.pendingSlide = slideIndex;
        window.dispatchEvent(new CustomEvent('carousel-goto', { detail: slideIndex }));
      } else {
        const el = document.getElementById(link.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      this.activeSection = link.id;
      setTimeout(() => this.updateIndicator(), 0);
    } else {
      this.scrollService.pendingSlide = this.slideMap[link.id] ?? null;
      this.scrollService.pendingSection = link.id;
      this.router.navigate(['/']);
    }
  }

  handleLogoClick() {
    if (this.isHomePage && isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/']);
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  handleContactClick() {
    this.isMobileMenuOpen = false;
    if (this.isHomePage && isPlatformBrowser(this.platformId)) {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const el = document.getElementById('contact');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      });
    }
  }
}
