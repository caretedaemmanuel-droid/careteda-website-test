import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ifaq',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="min-h-screen bg-black text-white pt-28 pb-20 px-4 md:px-8">
      <div class="text-center w-full max-w-[900px] mx-auto">
        <h1
          class="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-tr from-white to-[#2563EB] bg-clip-text text-transparent"
        >
          IFAQ
        </h1>
        <p class="text-white/90 text-sm md:text-base mb-4">Infrequently Asked Questions</p>
        <p class="text-white/90 text-sm md:text-base mb-16">
          Everything you need to know before, during, and after your Spec-to-Netlist™ evaluation.
        </p>

        <div class="text-left space-y-4">
          <p class="text-[#2563EB] text-xs uppercase tracking-widest font-semibold mb-2">
            Our Technology
          </p>
          <div
            *ngFor="let faq of technologyFaqs"
            class="border border-[#2563EB]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/80 hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] bg-[#0d1f3c]"
          >
            <button
              (click)="toggle(faq.id)"
              class="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none bg-[#0d1f3c] hover:bg-[#112244] transition-colors duration-200"
            >
              <span class="text-white font-medium text-sm md:text-base pr-4">{{ faq.q }}</span>
              <span
                class="text-[#2563EB] text-xl flex-shrink-0 transition-transform duration-300"
                [class.-rotate-45]="expanded[faq.id]"
                >+</span
              >
            </button>
            <div
              *ngIf="expanded[faq.id]"
              class="px-6 py-4 bg-[#0a1828] text-white/95 text-sm md:text-base leading-relaxed"
            >
              {{ faq.a }}
            </div>
          </div>

          <p class="text-[#2563EB] text-xs uppercase tracking-widest font-semibold mt-8 mb-2">
            The Evaluation
          </p>
          <div
            *ngFor="let faq of evaluationFaqs"
            class="border border-[#2563EB]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/80 hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] bg-[#0d1f3c]"
          >
            <button
              (click)="toggle(faq.id)"
              class="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none bg-[#0d1f3c] hover:bg-[#112244] transition-colors duration-200"
            >
              <span class="text-white font-medium text-sm md:text-base pr-4">{{ faq.q }}</span>
              <span
                class="text-[#2563EB] text-xl flex-shrink-0 transition-transform duration-300"
                [class.-rotate-45]="expanded[faq.id]"
                >+</span
              >
            </button>
            <div
              *ngIf="expanded[faq.id]"
              class="px-6 py-4 bg-[#0a1828] text-white/95 text-sm md:text-base leading-relaxed"
            >
              {{ faq.a }}
            </div>
          </div>

          <p class="text-[#2563EB] text-xs uppercase tracking-widest font-semibold mt-8 mb-2">
            Security & IP Protection
          </p>
          <div
            *ngFor="let faq of securityFaqs"
            class="border border-[#2563EB]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/80 hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] bg-[#0d1f3c]"
          >
            <button
              (click)="toggle(faq.id)"
              class="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none bg-[#0d1f3c] hover:bg-[#112244] transition-colors duration-200"
            >
              <span class="text-white font-medium text-sm md:text-base pr-4">{{ faq.q }}</span>
              <span
                class="text-[#2563EB] text-xl flex-shrink-0 transition-transform duration-300"
                [class.-rotate-45]="expanded[faq.id]"
                >+</span
              >
            </button>
            <div
              *ngIf="expanded[faq.id]"
              class="px-6 py-4 bg-[#0a1828] text-white/95 text-sm md:text-base leading-relaxed"
            >
              {{ faq.a }}
            </div>
          </div>

          <p class="text-[#2563EB] text-xs uppercase tracking-widest font-semibold mt-8 mb-2">
            Next Steps
          </p>
          <div
            *ngFor="let faq of nextStepsFaqs"
            class="border border-[#2563EB]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/80 hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] bg-[#0d1f3c]"
          >
            <button
              (click)="toggle(faq.id)"
              class="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none bg-[#0d1f3c] hover:bg-[#112244] transition-colors duration-200"
            >
              <span class="text-white font-medium text-sm md:text-base pr-4">{{ faq.q }}</span>
              <span
                class="text-[#2563EB] text-xl flex-shrink-0 transition-transform duration-300"
                [class.-rotate-45]="expanded[faq.id]"
                >+</span
              >
            </button>
            <div
              *ngIf="expanded[faq.id]"
              class="px-6 py-4 bg-[#0a1828] text-white/95 text-sm md:text-base leading-relaxed"
            >
              {{ faq.a }}
            </div>
          </div>
        </div>

        <!-- Footer note -->
        <p class="mt-16 text-white/70 text-sm italic text-center">
          Further questions? Reach us at
          <a
            href="mailto:info@careteda.com"
            class="text-white font-bold not-italic hover:text-[#2563EB] transition-colors no-underline"
            >info&#64;careteda.com</a
          >
        </p>
      </div>
    </section>
  `,
})
export class IFAQComponent implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }

  expanded: { [key: string]: boolean } = {};

  toggle(id: string) {
    this.expanded[id] = !this.expanded[id];
  }

  technologyFaqs = [
    {
      id: 't1',
      q: 'What does CaretEDA do?',
      a: 'CaretEDA develops an AI-native chip design platform for semiconductor engineering teams. Our Spec-to-Netlist™ flow takes a design from initial specification through to netlist generation — compressing tapeout timelines, improving first-pass quality, and acting as a force multiplier for scarce engineering talent.',
    },
    {
      id: 't2',
      q: 'Is the Spec-to-Netlist™ platform available to evaluate?',
      a: 'Yes, core functionality is stable and evaluation-ready since April 2026.',
    },
    {
      id: 't3',
      q: 'Which design nodes and tool environments do you support?',
      a: 'CaretEDA is tool-agnostic by design. Our Tool Optionality pillar integrates open-source and commercial EDA tools side by side, so the platform fits into your existing flow regardless of node or toolchain. Specific compatibility questions are best discussed during a discovery call.',
    },
  ];

  evaluationFaqs = [
    {
      id: 'e1',
      q: 'What does a CaretEDA evaluation look like?',
      a: 'A typical evaluation runs 6–8 weeks. We jointly agree to timelines & success criterion, hold weekly check-ins, and define the flows you will use, including what components of the solution you will evaluate. Evaluations are conducted on your premises; you download and install the CaretEDA agentic tool and open-source stack to get access.',
    },
    {
      id: 'e2',
      q: 'What do you need from us to get started?',
      a: 'We ask for representative design workloads, one or two internal champions from your design engineering team, and roughly 4–6 hours per week of engineering engagement. Contacts in IT teams will be required to ensure LLM configuration as needed. CaretEDA will provide technical support on tool-related issues during the evaluation.',
    },
    {
      id: 'e3',
      q: 'Is there a cost to evaluate?',
      a: 'Evaluations are offered at no charge for up to 6 weeks. Our goal is to demonstrate measurable impact — teams using AI-augmented flows have seen design cycle phases compress by up to 40% before any commercial discussion takes place.',
    },
    {
      id: 'e4',
      q: 'How do you measure success?',
      a: 'Success metrics are agreed before the evaluation begins. Common measures include reduction in iteration cycles, improvement in PPA (power-performance-area) outcomes, schedule compression against a baseline, and engineering hours saved. We track and report against these throughout.',
    },
  ];

  securityFaqs = [
    {
      id: 's1',
      q: 'How is our design IP protected during evaluation?',
      a: 'Evaluation data is kept strictly within your environment and is never used for model training or shared with any third party.',
    },
  ];

  nextStepsFaqs = [
    {
      id: 'n1',
      q: 'What does commercial pricing look like?',
      a: 'Pricing is based on team size and deployment scope. Specific details are best discussed in our discovery call.',
    },
    {
      id: 'n2',
      q: 'What happens after the evaluation?',
      a: 'We review the results together and discuss whether commercial deployment makes sense for your organization. There is no obligation to proceed.',
    },
    {
      id: 'n3',
      q: 'How do we get started?',
      a: 'Contact us at info@careteda.com to schedule a 1-hour discovery call. We will qualify the opportunity together and, if there is a fit, agree to evaluation scope and kick off within days.',
    },
  ];
}
