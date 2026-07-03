import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="min-h-screen bg-black text-white pt-28 pb-20 px-4 md:px-8">
      <div class="max-w-[800px] mx-auto">
        <h1
          class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-tr from-white to-[#2563EB] bg-clip-text text-transparent"
        >
          About CaretEDA
        </h1>

        <div class="space-y-8 text-white/95 text-sm md:text-base leading-relaxed">
          <p>
            CaretEDA automates chip design from natural-language specification to silicon-ready
            netlist. Built for semiconductor engineering teams who need to compress tapeout
            timelines, our Spec-to-Netlist™ flow integrates open-source and commercial EDA tools
            without locking you into a proprietary stack.
          </p>

          <div class="w-16 h-px bg-[#2563EB]/40 my-10"></div>

          <p>
            The semiconductor industry is at an inflection point. Design complexity has outpaced the
            ability of engineering teams to scale. Tapeout cycles that once stretched months are now
            expected to compress — while first-pass success rates must simultaneously improve.
          </p>

          <p>
            CaretEDA was founded by a team with deep roots in EDA, AI, and silicon engineering. Our
            platform delivers an AI-native design environment that acts as a force multiplier for
            scarce engineering talent — handling specification interpretation, RTL generation,
            verification planning, and netlist refinement within a single, auditable flow.
          </p>

          <p>
            Our <strong class="text-white">Tool Optionality</strong> pillar means we integrate with
            the tools your team already uses — whether open-source (Verilator, OpenROAD, Yosys) or
            commercial — rather than forcing a proprietary lock-in. CaretEDA sits on top of your
            existing toolchain and makes it dramatically more productive.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div class="bg-[#0d1f3c] border border-[#2563EB]/50 rounded-2xl p-6">
              <p class="text-[#2563EB] text-3xl font-bold mb-2">40%</p>
              <p class="text-white/90 text-sm">
                Design cycle compression seen in early evaluations
              </p>
            </div>
            <div class="bg-[#0d1f3c] border border-[#2563EB]/50 rounded-2xl p-6">
              <p class="text-[#2563EB] text-3xl font-bold mb-2">$775B</p>
              <p class="text-white/90 text-sm">
                Global semiconductor market driving AI-native design
              </p>
            </div>
            <div class="bg-[#0d1f3c] border border-[#2563EB]/50 rounded-2xl p-6">
              <p class="text-[#2563EB] text-3xl font-bold mb-2">6–8 wks</p>
              <p class="text-white/90 text-sm">Typical evaluation-to-results timeline</p>
            </div>
          </div>

          <p>
            We are headquartered in Campbell, California, with engineering talent distributed
            globally. CaretEDA is backed by decades of combined EDA experience and is a member of
            several startup and partner programs at leading cloud and AI companies.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }
}
