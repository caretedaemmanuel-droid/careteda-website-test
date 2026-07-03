import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="min-h-screen bg-black text-white pt-28 pb-20 px-4 md:px-8">
      <div class="max-w-[1200px] mx-auto">
        <h1
          class="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-tr from-white to-[#2563EB] bg-clip-text text-transparent"
        >
          Demos
        </h1>
        <p class="text-white/90 text-base md:text-lg mb-16">
          Watch Spec-to-Netlist™ in motion — from design intent to silicon-ready output.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div
            *ngFor="let demo of demos"
            class="group relative bg-[#0d1f3c] border border-[#2563EB]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]/80 hover:bg-[#112244] hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] backdrop-blur-sm"
          >
            <div class="relative w-full aspect-video bg-black flex items-center justify-center">
              <div
                class="w-14 h-14 rounded-full bg-[#2563EB] flex items-center justify-center group-hover:bg-[#6aa3f9] transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.35)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span
                class="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest text-white/60 border border-white/20 rounded-full px-2.5 py-1 bg-black/80"
                >Coming Soon</span
              >
            </div>
            <div class="p-5 text-left">
              <p class="text-[#2563EB] text-xs uppercase tracking-widest font-semibold mb-2">
                {{ demo.tag }}
              </p>
              <h3 class="text-white font-bold text-base md:text-lg leading-snug mb-2">
                {{ demo.title }}
              </h3>
              <p class="text-white/90 text-sm leading-relaxed">{{ demo.desc }}</p>
            </div>
          </div>
        </div>

        <div
          class="mt-20 bg-[#0d1f3c] border border-[#2563EB]/50 rounded-2xl p-8 md:p-12 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]/80 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)]"
        >
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Want a personalised demo?</h2>
          <p class="text-white/90 text-sm md:text-base mb-8 max-w-[500px] mx-auto">
            Book a live session with our engineering team and see Spec-to-Netlist™ applied to your
            design workload.
          </p>
          <a
            href="mailto:info@careteda.com?subject=Demo Request"
            class="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-full no-underline font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-[#1D4ED8]"
          >
            Request a Demo →
          </a>
        </div>
      </div>
    </section>
  `,
})
export class DemosComponent implements OnInit, AfterViewInit {
  private resetScroll() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  ngOnInit() {
    this.resetScroll();
  }
  ngAfterViewInit() {
    this.resetScroll();
    setTimeout(() => this.resetScroll(), 0);
    setTimeout(() => this.resetScroll(), 100);
  }

  demos = [
    {
      tag: 'Demo · 2 min',
      title: 'Spec to RTL in Minutes',
      desc: 'Watch how a natural-language design spec becomes synthesisable RTL through the Spec-to-Netlist™ flow.',
      delay: '0s',
    },
    {
      tag: 'Demo · 3 min',
      title: 'AI-Assisted Verification Loop',
      desc: 'See the autonomous verification agent catch and close functional bugs across a real design iteration cycle.',
      delay: '0.3s',
    },
    {
      tag: 'Demo · 2 min',
      title: 'Open-Source Tool Integration',
      desc: 'A walkthrough of Verilator, OpenROAD, and other open-source tools running inside a unified CaretEDA cloud flow.',
      delay: '0.6s',
    },
    {
      tag: 'Demo · 4 min',
      title: 'Netlist Optimisation Pass',
      desc: 'See the AI agent iterate over timing closure constraints and produce a clean, synthesis-ready netlist automatically.',
      delay: '0s',
    },
    {
      tag: 'Demo · 3 min',
      title: 'Multi-Tool Orchestration',
      desc: 'CaretEDA orchestrating Yosys, Verilator, and OpenROAD in a single automated pipeline with real-time progress tracking.',
      delay: '0.3s',
    },
    {
      tag: 'Demo · 2 min',
      title: 'Natural Language to Constraints',
      desc: 'Convert a plain-English timing and power specification into SDC constraints ready for synthesis.',
      delay: '0.6s',
    },
  ];
}
