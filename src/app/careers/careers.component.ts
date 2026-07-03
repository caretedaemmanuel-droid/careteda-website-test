import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="min-h-screen bg-black text-white pt-28 pb-20 px-4 md:px-8">
      <div class="text-center w-full max-w-[900px] mx-auto">
        <h1
          class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-tr from-white to-[#2563EB] bg-clip-text text-transparent"
        >
          Careers
        </h1>
        <p class="text-white/90 text-base md:text-xl mb-10 max-w-[600px] mx-auto leading-relaxed">
          We're here to prove that bright minds with shared purpose can reshape entire industries.
        </p>

        <!-- Intro paragraph -->
        <div
          class="text-left max-w-[760px] mx-auto mb-16 space-y-4 text-white/85 text-sm md:text-base leading-relaxed"
        >
          <p>
            Semiconductors are becoming the foundation of every major technological leap &#8212;
            from AI to energy to autonomy. The chip design community is standing at a rare
            inflection point, where decades of incremental progress are giving way to a new era
            shaped by AI-native workflows, open ecosystems, and open-source EDA which has matured
            into a powerful force across simulation, logic synthesis, physical design, and
            verification.
          </p>
          <p>
            But the next wave of exponential productivity acceleration won't come from isolated
            tools. It will come from end-to-end, AI-first design systems that learn your flow,
            protect your IP, scale with your team, and continuously accelerate the path from idea to
            silicon. That belief is the North Star behind CaretEDA.
          </p>
          <p>
            We are an Agentic-first organization and full believers in bringing the power of agentic
            AI to EDA. And we measure success in the only way that matters: how many customers we
            make successful. If you are interested in becoming a part of our company, check out open
            roles. If you find no roles, but believe you can contribute, send us your resume with a
            note to
            <a href="mailto:careers@careteda.com" class="text-[#2563EB] hover:underline"
              >careers&#64;careteda.com</a
            >.
          </p>
        </div>

        <!-- Job card -->
        <div
          class="bg-[#0d1f3c] border border-[#2563EB]/50 rounded-2xl p-6 md:p-10 text-left transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]/80 hover:bg-[#112244] hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] backdrop-blur-sm mb-8"
        >
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 class="text-white font-bold text-xl md:text-2xl mb-2">
                Senior Hardware Design &amp; Verification Engineer
              </h3>
              <p class="text-[#2563EB] text-sm font-medium">Bengaluru, India</p>
            </div>
            <a
              [routerLink]="['/careers', 'senior-hardware-engineer']"
              class="inline-flex items-center bg-[#2563EB] text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-full no-underline transition-all duration-300 hover:bg-[#1D4ED8] whitespace-nowrap flex-shrink-0 cursor-pointer"
            >
              View Role →
            </a>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              class="bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full"
              >Customer-Facing</span
            >
            <span
              class="bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full"
              >RTL + Simulation</span
            >
            <span
              class="bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full"
              >AI-Assisted EDA</span
            >
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CareersComponent implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }
}
