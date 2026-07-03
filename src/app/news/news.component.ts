import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="glow-bg min-h-screen bg-black text-white pt-28 pb-40 px-4 md:px-8">
      <div class="max-w-[1000px] mx-auto">
        <h1
          class="text-4xl md:text-6xl font-bold mb-4 pb-2 bg-gradient-to-tr from-white to-[#2563EB] bg-clip-text text-transparent"
        >
          News
        </h1>
        <p class="text-white/90 text-base md:text-lg mb-12">
          The latest announcements from CaretEDA.
        </p>

        <div class="flex flex-col gap-6">
          <!-- LinkedIn launch post (Feb 2026) -->
          <a
            *ngFor="let item of news"
            [href]="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="order-2 group block no-underline bg-[#0d1f3c] border border-[#2563EB]/50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-[#112244] hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] backdrop-blur-sm"
          >
            <p class="text-[#2563EB] text-xs uppercase tracking-widest font-semibold mb-3">
              {{ item.date }}
            </p>
            <h2
              class="text-white font-bold text-lg md:text-2xl leading-snug mb-3 group-hover:text-[#2563EB] transition-colors duration-300"
            >
              {{ item.title }}
            </h2>
            <p class="text-white/90 text-sm md:text-base leading-relaxed mb-4">
              {{ item.summary }}
            </p>
            <span
              class="inline-flex items-center gap-1.5 text-[#2563EB] text-xs font-bold uppercase tracking-widest"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              Read on LinkedIn →
            </span>
          </a>

          <!-- Press release — new Technical Advisors (June 2026) -->
          <a
            [routerLink]="['/news', 'technical-advisors']"
            class="order-1 group block no-underline bg-[#0d1f3c] border border-[#2563EB]/50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-[#112244] hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] backdrop-blur-sm"
          >
            <p class="text-[#2563EB] text-xs uppercase tracking-widest font-semibold mb-3">
              June 22, 2026
            </p>
            <h2
              class="text-white font-bold text-lg md:text-2xl leading-snug mb-3 group-hover:text-[#2563EB] transition-colors duration-300"
            >
              CaretEDA Adds Two Semiconductor Veterans to Technical Advisory Board
            </h2>
            <p class="text-white/90 text-sm md:text-base leading-relaxed mb-4">
              Nithya Raghavan and Sridhar Narayanan join as Technical Advisors, bringing deep EDA
              knowledge and extensive chip design expertise to CaretEDA&#8217;s agentic chip design
              platform.
            </p>
            <span class="text-[#2563EB] text-xs font-bold uppercase tracking-widest"
              >Read More →</span
            >
          </a>
        </div>
      </div>
    </section>
  `,
})
export class NewsComponent implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }

  news: { date: string; title: string; summary: string; link?: string }[] = [
    {
      date: 'February 2026',
      title: 'Announcing the launch of CaretEDA',
      summary:
        'Co-founder & CEO Sashi Obilisetty shares the vision behind CaretEDA — end-to-end, AI-first design systems that learn your flow, protect your IP, scale with your team, and continuously accelerate the path from idea to silicon.',
      link: 'https://www.linkedin.com/posts/sashi-obilisetty-009720_semiconductors-chipdesign-eda-share-7423916221449936896-aNY6/',
    },
  ];
}
