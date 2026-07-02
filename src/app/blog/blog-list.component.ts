import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="glow-bg min-h-screen bg-black text-white pt-24 pb-40 px-4 md:px-8">
      <div class="max-w-[1200px] mx-auto">

        <h1 class="text-4xl md:text-6xl font-bold mb-4 pb-2 bg-gradient-to-tr from-white to-[#2563EB] bg-clip-text text-transparent">Blog</h1>
        <p class="text-white/90 text-base md:text-lg mb-8">Insights on AI-native chip design, EDA, and semiconductor engineering from the CaretEDA team.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <a *ngFor="let post of posts"
             [routerLink]="['/blogs', post.slug]"
             class="group no-underline block bg-[#0d1f3c] border border-[#2563EB]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]/50 hover:bg-[#112244] hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] backdrop-blur-sm">

            <!-- Thumbnail -->
            <div class="w-full h-36 bg-[#0d1f3c] overflow-hidden" *ngIf="post.image">
              <img [src]="post.image" [alt]="post.title"
                   class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            </div>
            <div class="w-full h-36 bg-[#0d1f3c] flex items-center justify-center" *ngIf="!post.image">
              <span class="text-[#2563EB]/30 text-4xl font-bold">EDA</span>
            </div>

            <!-- Content -->
            <div class="p-5 md:p-6">
              <p class="text-[#2563EB] text-xs uppercase tracking-widest font-semibold mb-3">{{ post.date }} · {{ post.readTime }}</p>
              <h3 class="text-white font-bold text-lg md:text-xl leading-snug mb-3 group-hover:text-[#2563EB] transition-colors duration-300">{{ post.title }}</h3>
              <p class="text-white/90 text-sm leading-relaxed mb-4 line-clamp-3">{{ post.summary }}</p>
              <span class="text-[#2563EB] text-xs font-bold uppercase tracking-widest">Read Article →</span>
            </div>

          </a>
        </div>

      </div>
    </section>
  `
})
export class BlogListComponent implements OnInit {
  ngOnInit() { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); }
  posts = [
    {
      slug: 'spec-bottleneck',
      image: 'assets/blogs/spec-bottleneck-hero.png',
      date: 'July 2026',
      readTime: '7 min read',
      title: 'The Spec Is the Bottleneck, Not the Silicon',
      summary: 'Why agentic chip design breaks when ambiguous specs are silently resolved, and why formalization has to sit before RTL generation.'
    },
    {
      slug: 'verilator',
      image: 'assets/blogs/verilator-image1.jpg',
      date: 'May 2026',
      readTime: '5 min read',
      title: 'Verilator: The Open-Source Simulator Reshaping Chip Design',
      summary: 'How a tool born at Digital Equipment Corporation in 1994 ended up at the center of chip verification for Tesla, Google, AMD, and NVIDIA.'
    },
    {
      slug: 'code-generation',
      image: 'assets/blogs/code-generation-perspective.png',
      date: 'April 2026',
      readTime: '5 min read',
      title: 'Generating SystemVerilog Is Easy. Generating Hardware Is Not.',
      summary: 'LLMs can produce RTL that compiles and simulates — but hardware is a contract with physics, and physics does not accept plausible drafts.'
    },
    {
      slug: 'silicon-imperative',
      image: 'assets/blogs/silicon-imperative.png',
      date: 'March 2026',
      readTime: '5 min read',
      title: 'The Silicon Imperative',
      summary: 'Rising chip design complexity, shrinking tapeout cycles, and why the $775B semiconductor market is making AI-driven design a strategic necessity.'
    },
  ];
}
