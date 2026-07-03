import {
  Component,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  ChangeDetectorRef,
  NgZone,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  currentSlide = 0;
  readonly slideCount = 4;
  readonly slides = [0, 1, 2, 3];
  readonly slideDurationMs = 5000;
  // Bumped on every slide change so the progress pill restarts its animation.
  cycleId = 0;
  paused = false;
  private timer: any = null;
  private idleTimer: any = null;
  private slideStartedAt = 0;
  private elapsedBeforePause = 0;
  private carouselListener?: (e: Event) => void;

  constructor(
    private scrollService: ScrollService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.scrollService.pendingSlide !== null) {
        this.currentSlide = this.scrollService.pendingSlide;
        this.scrollService.pendingSlide = null;
        this.cdr.detectChanges();
      } else if (this.scrollService.pendingSection) {
        this.scrollService.pendingSection = null;
      }

      this.carouselListener = (e: Event) => {
        this.ngZone.run(() => {
          this.goToSlide((e as CustomEvent).detail);
        });
      };
      window.addEventListener('carousel-goto', this.carouselListener);

      this.scheduleNext();
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
    this.clearIdle();
    if (isPlatformBrowser(this.platformId) && this.carouselListener) {
      window.removeEventListener('carousel-goto', this.carouselListener);
    }
  }

  // Start the countdown for the current slide. Skips the timer while paused
  // (e.g. cursor hovering the carousel); resume() picks it up again.
  private scheduleNext() {
    this.stopAutoplay();
    this.cycleId++;
    this.elapsedBeforePause = 0;
    if (!this.paused) {
      this.slideStartedAt = Date.now();
      this.timer = setTimeout(() => this.advance(), this.slideDurationMs);
    }
  }

  private advance() {
    this.currentSlide = (this.currentSlide + 1) % this.slideCount;
    this.cdr.detectChanges();
    this.scheduleNext();
  }

  stopAutoplay() {
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  // Hovering / moving over a slide's content (text, CTAs like "Schedule a Demo"
  // or "Read Article") holds the carousel so it can be read or clicked.
  // After 3s of no movement we resume anyway, even if the cursor stays put.
  onContentActivity() {
    this.pause();
    this.clearIdle();
    this.idleTimer = setTimeout(() => {
      this.idleTimer = null;
      this.resume();
    }, 3000);
  }

  onContentLeave() {
    this.clearIdle();
    this.resume();
  }

  private clearIdle() {
    if (this.idleTimer !== null) {
      clearTimeout(this.idleTimer);
      this.idleTimer = null;
    }
  }

  // Freeze the timer and the progress pill where they are.
  private pause() {
    if (this.paused) return;
    if (this.timer !== null) {
      this.elapsedBeforePause += Date.now() - this.slideStartedAt;
      this.stopAutoplay();
    }
    this.paused = true;
    this.cdr.detectChanges();
  }

  // Continue from the remaining time.
  private resume() {
    if (!this.paused) return;
    this.paused = false;
    this.stopAutoplay();
    const remaining = Math.max(0, this.slideDurationMs - this.elapsedBeforePause);
    this.slideStartedAt = Date.now();
    this.timer = setTimeout(() => this.advance(), remaining);
    this.cdr.detectChanges();
  }

  private touchStartX = 0;

  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0].screenX;
    this.stopAutoplay();
  }

  onTouchEnd(e: TouchEvent) {
    const deltaX = e.changedTouches[0].screenX - this.touchStartX;
    const threshold = 50;
    if (deltaX <= -threshold) {
      this.nextSlide();
    } else if (deltaX >= threshold) {
      this.prevSlide();
    } else {
      this.scheduleNext();
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.cdr.detectChanges();
    this.scheduleNext();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
    this.cdr.detectChanges();
    this.scheduleNext();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slideCount;
    this.cdr.detectChanges();
    this.scheduleNext();
  }
}
