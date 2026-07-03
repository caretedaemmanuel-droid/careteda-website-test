import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-careers-detail',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="min-h-screen bg-black text-white pt-28 pb-20 px-4 md:px-8">
      <div class="w-full max-w-[900px] mx-auto">
        <!-- Back link -->
        <div class="mb-10">
          <a
            [routerLink]="['/careers']"
            class="inline-flex items-center gap-2 text-white/70 hover:text-[#2563EB] text-sm no-underline transition-colors"
          >
            ← Back to Careers
          </a>
        </div>

        <!-- Job header card -->
        <div
          class="bg-[#0d1f3c] border border-[#2563EB]/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/80 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] p-6 md:p-8 mb-6"
        >
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 class="text-white font-bold text-xl md:text-2xl mb-2">
                Senior Hardware Design &amp; Verification Engineer
              </h1>
              <p class="text-[#2563EB] text-sm font-medium">Bengaluru, India</p>
            </div>
            <a
              href="mailto:careers@careteda.com?subject=Application%20-%20Senior%20Hardware%20Design%20%26%20Verification%20Engineer"
              class="inline-flex items-center bg-[#2563EB] text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-full no-underline transition-all duration-300 hover:bg-[#1D4ED8] whitespace-nowrap flex-shrink-0 cursor-pointer"
            >
              Apply Now
            </a>
          </div>
          <div class="flex flex-wrap gap-2 mt-4">
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

        <!-- About the Company -->
        <div
          class="bg-[#0d1f3c] border border-[#2563EB]/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/80 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] p-6 md:p-8 mb-6"
        >
          <h2 class="text-[#2563EB] text-xl font-bold mb-4">About the Company</h2>
          <div class="space-y-4 text-white/95 text-base leading-relaxed">
            <p>
              Semiconductors are becoming the foundation of every major technological leap — from AI
              to energy to autonomy. The chip design community is standing at a rare inflection
              point, where decades of incremental progress are giving way to a new era shaped by
              AI-native workflows, open ecosystems, and open-source EDA which has matured into a
              powerful force across simulation, logic synthesis, physical design, and verification.
            </p>
            <p>
              But the next wave of exponential productivity acceleration won't come from isolated
              tools. It will come from end-to-end, AI-first design systems that learn your flow,
              protect your IP, scale with your team, and continuously accelerate the path from idea
              to silicon. That belief is the North Star behind CaretEDA.
            </p>
            <p>
              We are an Agentic-first organization and full believers in bringing the power of
              agentic AI to EDA. We are 100% hands-on. And we measure success in the only way that
              matters: how many customers we make successful.
            </p>
          </div>
        </div>

        <!-- About the Role -->
        <div
          class="bg-[#0d1f3c] border border-[#2563EB]/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/80 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] p-6 md:p-8 mb-6"
        >
          <h2 class="text-[#2563EB] text-xl font-bold mb-4">About the Role</h2>
          <div class="space-y-4 text-white/95 text-base leading-relaxed">
            <p>
              CaretEDA is seeking Senior Hardware Design &amp; Verification Engineers in Bengaluru
              who will work directly with customers adopting our Spec-to-Netlist™ AI-native design
              platform.
            </p>
            <p>
              This role blends deep technical understanding (RTL, simulation, chip development) with
              customer-facing clarity, helping engineering teams integrate, validate, and scale
              AI-assisted design workflows inside their existing environments.
            </p>
            <p>
              You will collaborate with global engineering, product, and customer teams to ensure
              smooth deployments, build reproducible debug scenarios, and help customers get the
              most out of CaretEDA's multi-agent, AI-driven design flows.
            </p>
          </div>
        </div>

        <!-- Key Responsibilities -->
        <div
          class="bg-[#0d1f3c] border border-[#2563EB]/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/80 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] p-6 md:p-8 mb-6"
        >
          <h2 class="text-[#2563EB] text-xl font-bold mb-6">Key Responsibilities</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-white font-semibold text-base mb-3">
                Customer Deployment &amp; Technical Guidance
              </h3>
              <ul class="space-y-2 text-white/90 text-sm leading-relaxed">
                <li class="flex gap-2">
                  <span class="text-[#2563EB] mt-1">•</span> Work closely with customer design and
                  DV teams to integrate Spec-to-Netlist™ into their existing flows.
                </li>
                <li class="flex gap-2">
                  <span class="text-[#2563EB] mt-1">•</span> Understand customer architecture specs,
                  RTL conventions, verification environments, and toolchains.
                </li>
                <li class="flex gap-2">
                  <span class="text-[#2563EB] mt-1">•</span> Help customers structure their inputs
                  (specs, constraints, design intent) for optimal AI-assisted generation.
                </li>
                <li class="flex gap-2">
                  <span class="text-[#2563EB] mt-1">•</span> Provide hands-on support during
                  onboarding, pilot projects, and production rollouts.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-white font-semibold text-base mb-3">
                Simulation &amp; Debug Expertise
              </h3>
              <ul class="space-y-2 text-white/90 text-sm leading-relaxed">
                <li class="flex gap-2">
                  <span class="text-[#2563EB] mt-1">•</span> Reproduce customer issues using
                  event-driven/cycle-based simulators and synthesis tools.
                </li>
                <li class="flex gap-2">
                  <span class="text-[#2563EB] mt-1">•</span> Build minimal, shareable testcases to
                  isolate tool behavior or AI-generated RTL issues.
                </li>
                <li class="flex gap-2">
                  <span class="text-[#2563EB] mt-1">•</span> Analyze waveforms, debug corner cases,
                  and validate correctness of tool behavior.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-white font-semibold text-base mb-3">
                Champion AI-Assisted EDA Workflows
              </h3>
              <ul class="space-y-2 text-white/90 text-sm leading-relaxed">
                <li class="flex gap-2">
                  <span class="text-[#2563EB] mt-1">•</span> Use AI-based tools to accelerate RTL
                  review, testbench generation, debug and root-cause analysis, and coverage
                  exploration.
                </li>
                <li class="flex gap-2">
                  <span class="text-[#2563EB] mt-1">•</span> Provide structured feedback to improve
                  AI-assisted flows and automation quality.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-white font-semibold text-base mb-3">Open-Source Ecosystem Fluency</h3>
              <ul class="space-y-2 text-white/90 text-sm leading-relaxed">
                <li class="flex gap-2">
                  <span class="text-[#2563EB] mt-1">•</span> Navigate and understand large public
                  SystemVerilog codebases such as OpenTitan, Ibex, SweRV, etc.
                </li>
                <li class="flex gap-2">
                  <span class="text-[#2563EB] mt-1">•</span> Build clean, shareable debug
                  environments.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-white font-semibold text-base mb-3">
                Customer Collaboration &amp; Communication
              </h3>
              <ul class="space-y-2 text-white/90 text-sm leading-relaxed">
                <li class="flex gap-2">
                  <span class="text-[#2563EB] mt-1">•</span> Work directly with customers to
                  understand their design and verification challenges.
                </li>
                <li class="flex gap-2">
                  <span class="text-[#2563EB] mt-1">•</span> Provide clear, structured guidance and
                  help them adopt AI-assisted workflows.
                </li>
                <li class="flex gap-2">
                  <span class="text-[#2563EB] mt-1">•</span> Communicate technical findings
                  effectively to both engineers and managers.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Qualifications side by side -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div
            class="bg-[#0d1f3c] border border-[#2563EB]/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/80 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] p-6 md:p-8"
          >
            <h2 class="text-[#2563EB] text-xl font-bold mb-4">Required Qualifications</h2>
            <ul class="space-y-3 text-white/90 text-sm leading-relaxed">
              <li class="flex gap-2">
                <span class="text-[#2563EB] mt-1">•</span> BTech / MTech / MS in EE, CE, CS or
                related field.
              </li>
              <li class="flex gap-2">
                <span class="text-[#2563EB] mt-1">•</span> 5–10 years of experience in RTL design,
                simulation, or mixed design-DV roles.
              </li>
              <li class="flex gap-2">
                <span class="text-[#2563EB] mt-1">•</span> Strong SystemVerilog skills (design +
                testbench familiarity).
              </li>
              <li class="flex gap-2">
                <span class="text-[#2563EB] mt-1">•</span> Hands-on experience with at least one
                major commercial simulator.
              </li>
              <li class="flex gap-2">
                <span class="text-[#2563EB] mt-1">•</span> Solid understanding of the full chip
                development process.
              </li>
              <li class="flex gap-2">
                <span class="text-[#2563EB] mt-1">•</span> Excellent communication skills and
                ability to work with global teams.
              </li>
            </ul>
          </div>

          <div
            class="bg-[#0d1f3c] border border-[#2563EB]/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/80 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] p-6 md:p-8"
          >
            <h2 class="text-[#2563EB] text-xl font-bold mb-4">Preferred Qualifications</h2>
            <ul class="space-y-3 text-white/90 text-sm leading-relaxed">
              <li class="flex gap-2">
                <span class="text-[#2563EB] mt-1">•</span> Experience with RISC-V or open-source
                silicon projects.
              </li>
              <li class="flex gap-2">
                <span class="text-[#2563EB] mt-1">•</span> Understanding of GenAI and Agentic flows;
                hands-on experience a big advantage.
              </li>
              <li class="flex gap-2">
                <span class="text-[#2563EB] mt-1">•</span> Exposure to linting, synthesis, or formal
                verification.
              </li>
              <li class="flex gap-2">
                <span class="text-[#2563EB] mt-1">•</span> Experience with AI-assisted EDA tools or
                automation frameworks.
              </li>
              <li class="flex gap-2">
                <span class="text-[#2563EB] mt-1">•</span> Ability to create clean, reproducible
                testcases and debug environments.
              </li>
              <li class="flex gap-2">
                <span class="text-[#2563EB] mt-1">•</span> Prior customer-facing or cross-functional
                experience.
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div
          class="bg-[#0d1f3c] border border-[#2563EB]/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/80 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] p-8 text-center"
        >
          <p class="text-white text-base md:text-lg font-medium mb-6">
            Ready to make a real impact in the semiconductor industry?
          </p>
          <a
            href="mailto:careers@careteda.com?subject=Application%20-%20Senior%20Hardware%20Design%20%26%20Verification%20Engineer"
            class="inline-flex items-center justify-center bg-[#2563EB] text-white font-bold text-sm px-8 py-4 rounded-full no-underline transition-all duration-300 hover:bg-[#1D4ED8] cursor-pointer"
          >
            Send your resume to careers&#64;careteda.com
          </a>
        </div>
      </div>
    </section>
  `,
})
export class CareersDetailComponent implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }
}
