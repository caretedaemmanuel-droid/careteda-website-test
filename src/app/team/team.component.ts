import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="min-h-screen bg-black text-white pt-28 pb-20 px-4 md:px-8">
      <div class="text-center w-full max-w-[1200px] mx-auto">
        <h1
          class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-tr from-white to-[#2563EB] bg-clip-text text-transparent"
        >
          Team
        </h1>
        <p class="text-white/90 text-base md:text-xl mb-16 max-w-[600px] mx-auto leading-relaxed">
          The people building the future of AI-native chip design.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-center items-start">
          <!-- Sashi -->
          <div class="group relative flex flex-col items-center">
            <div
              class="relative w-28 h-28 md:w-36 md:h-36 mb-6 rounded-full overflow-hidden border-4 border-[#2563EB]/20 transition-all duration-500 group-hover:border-[#2563EB] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            >
              <img
                src="assets/team-sashi.jpg"
                alt="CEO"
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Sashi Obilisetty</h3>
            <p class="text-[#2563EB] uppercase tracking-widest text-xs font-semibold mb-3">
              Co-Founder & CEO
            </p>
            <a
              href="https://www.linkedin.com/in/sashi-obilisetty-009720/"
              target="_blank"
              rel="noopener noreferrer"
              class="mb-4 inline-flex items-center gap-1.5 text-white/70 hover:text-[#2563EB] transition-colors duration-300 no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              <span class="text-xs">LinkedIn</span>
            </a>
            <div class="text-white/90 text-sm max-w-[320px] leading-relaxed text-left space-y-3">
              <p>
                Sashi Obilisetty is an EDA technologist with extensive entrepreneurial experience.
                She served as Executive Director of R&D at Synopsys, leading AI organisations and
                verification teams across a 15+ year tenure.
              </p>
              <div *ngIf="expandedBios['sashi']" class="space-y-3">
                <p>
                  From 2020 to 2021, Sashi was the Chief Architect for Silicon Solutions at Google
                  Cloud. She previously founded two EDA startups. She is the 2024 Marie Pistilli
                  Women in EDA Award recipient and holds multiple patents in EDA and AI.
                </p>
              </div>
              <button
                (click)="toggleBio('sashi')"
                class="text-[#2563EB] hover:text-white text-xs font-bold uppercase tracking-widest mt-2 focus:outline-none transition-colors"
              >
                {{ expandedBios['sashi'] ? 'Read Less' : 'Read More' }}
              </button>
            </div>
          </div>

          <!-- Radha -->
          <div class="group relative flex flex-col items-center">
            <div
              class="relative w-28 h-28 md:w-36 md:h-36 mb-6 rounded-full overflow-hidden border-4 border-[#2563EB]/20 transition-all duration-500 group-hover:border-[#2563EB] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            >
              <img
                src="assets/team-radha.png"
                alt="CTO"
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Radha Srinivasan</h3>
            <p class="text-[#2563EB] uppercase tracking-widest text-xs font-semibold mb-3">
              Co-Founder & VP Engineering
            </p>
            <a
              href="https://www.linkedin.com/in/srinivasradha/"
              target="_blank"
              rel="noopener noreferrer"
              class="mb-4 inline-flex items-center gap-1.5 text-white/70 hover:text-[#2563EB] transition-colors duration-300 no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              <span class="text-xs">LinkedIn</span>
            </a>
            <div class="text-white/90 text-sm max-w-[320px] leading-relaxed text-left space-y-3">
              <p>
                Radha is a co-founder of CaretEDA focused on AI, cloud workflows, and open-source
                tools for chip design. She spent almost 20 years at Synopsys across platform
                engineering, AI, and Silicon Lifecycle Management.
              </p>
              <div *ngIf="expandedBios['radha']" class="space-y-3">
                <p>
                  Her technical range spans distributed systems, cloud orchestration, and autonomous
                  design agents. She is an IEEE Senior Member and has chaired the Technical Program
                  Committee for IEEE WINTECHCON.
                </p>
              </div>
              <button
                (click)="toggleBio('radha')"
                class="text-[#2563EB] hover:text-white text-xs font-bold uppercase tracking-widest mt-2 focus:outline-none transition-colors"
              >
                {{ expandedBios['radha'] ? 'Read Less' : 'Read More' }}
              </button>
            </div>
          </div>

          <!-- Surajprakash -->
          <div class="group relative flex flex-col items-center">
            <div
              class="relative w-28 h-28 md:w-36 md:h-36 mb-6 rounded-full overflow-hidden border-4 border-[#2563EB]/20 transition-all duration-500 group-hover:border-[#2563EB] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            >
              <img
                src="assets/team-surajprakash.png"
                alt="Chief Architect"
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Surajprakash Ankush</h3>
            <p class="text-[#2563EB] uppercase tracking-widest text-xs font-semibold mb-3">
              Co-Founder & Chief Architect
            </p>
            <a
              href="https://www.linkedin.com/in/surajprakash-ankush-02aa0829/"
              target="_blank"
              rel="noopener noreferrer"
              class="mb-4 inline-flex items-center gap-1.5 text-white/70 hover:text-[#2563EB] transition-colors duration-300 no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              <span class="text-xs">LinkedIn</span>
            </a>
            <div class="text-white/90 text-sm max-w-[320px] leading-relaxed text-left space-y-3">
              <p>
                Surajprakash brings 14 years of engineering experience, specialising in AI-native
                systems, cloud architecture (Azure & AWS), and DevOps. He has led multiple projects
                end-to-end with a strong startup mindset.
              </p>
              <div *ngIf="expandedBios['surajprakash']" class="space-y-3">
                <p>
                  Deep expertise in Java and Python, Kubernetes/Docker orchestration, and datastores
                  including PostgreSQL, Elasticsearch, and Redis. He combines AI-driven tools with
                  robust cloud infrastructure.
                </p>
              </div>
              <button
                (click)="toggleBio('surajprakash')"
                class="text-[#2563EB] hover:text-white text-xs font-bold uppercase tracking-widest mt-2 focus:outline-none transition-colors"
              >
                {{ expandedBios['surajprakash'] ? 'Read Less' : 'Read More' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Technical Advisors -->
        <div class="mt-24 md:mt-32">
          <h3
            class="text-xl md:text-2xl font-semibold mb-12 text-white/90 uppercase tracking-widest"
          >
            Technical Advisors
          </h3>
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-center items-start max-w-[860px] mx-auto"
          >
            <div class="group relative flex flex-col items-center">
              <div
                class="relative w-28 h-28 md:w-36 md:h-36 mb-6 rounded-full overflow-hidden border-4 border-[#2563EB]/20 transition-all duration-500 group-hover:border-[#2563EB] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
              >
                <img
                  src="assets/team-nithya.jpg"
                  alt="Nithya Raghavan"
                  class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Nithya Raghavan</h3>
              <p class="text-[#2563EB] uppercase tracking-widest text-xs font-semibold mb-1">
                Technical Advisor
              </p>
              <a
                href="https://www.linkedin.com/in/nithyaraghavan/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-white/70 hover:text-[#2563EB] transition-colors no-underline text-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
                LinkedIn
              </a>
            </div>

            <div class="group relative flex flex-col items-center">
              <div
                class="relative w-28 h-28 md:w-36 md:h-36 mb-6 rounded-full overflow-hidden border-4 border-[#2563EB]/20 transition-all duration-500 group-hover:border-[#2563EB] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
              >
                <img
                  src="assets/team-sridhar.jpg"
                  alt="Sridhar Narayanan"
                  class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Sridhar Narayanan</h3>
              <p class="text-[#2563EB] uppercase tracking-widest text-xs font-semibold mb-1">
                Technical Advisor
              </p>
              <a
                href="https://www.linkedin.com/in/sridhar-narayanan-53517b1/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-white/70 hover:text-[#2563EB] transition-colors no-underline text-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TeamComponent implements OnInit {
  expandedBios: { [key: string]: boolean } = {};
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }
  toggleBio(id: string) {
    this.expandedBios[id] = !this.expandedBios[id];
  }
}
