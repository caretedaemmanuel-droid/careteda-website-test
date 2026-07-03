import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="min-h-screen bg-black text-white pt-28 pb-32 px-4 md:px-8">
      <article class="max-w-[820px] mx-auto">
        <a
          [routerLink]="['/news']"
          class="inline-flex items-center gap-2 text-[#2563EB] text-sm font-semibold hover:underline no-underline mb-10"
        >
          ← Back to News
        </a>

        <p class="text-[#2563EB] text-xs uppercase tracking-widest font-semibold mb-3">
          For Immediate Release · June 22, 2026
        </p>
        <h1
          class="text-3xl md:text-5xl font-bold leading-tight mb-5 bg-gradient-to-tr from-white to-[#2563EB] bg-clip-text text-transparent"
        >
          CaretEDA Adds Two Semiconductor Veterans to Technical Advisory Board
        </h1>
        <p class="text-white/70 text-base md:text-lg italic leading-relaxed mb-10">
          Nithya Raghavan and Sridhar Narayanan join as Technical Advisors, bringing deep EDA
          knowledge and extensive chip design expertise to CaretEDA&#8217;s agentic chip design
          platform.
        </p>

        <p class="text-white/90 text-base leading-relaxed mb-6">
          <span class="font-semibold">CAMPBELL, CA AND BENGALURU, INDIA</span> &#8212; CaretEDA,
          Inc., the AI-native Electronic Design Automation company pioneering the
          Spec-to-Netlist&#8482; platform for agentic chip design automation, today announced the
          appointment of Nithya Raghavan and Sridhar Narayanan to its Technical Advisory Board. Both
          advisors bring decades of hands-on experience spanning EDA tooling, hardware verification,
          and semiconductor design flows &#8212; expertise that directly reinforces CaretEDA&#8217;s
          mission to transform how engineering teams move from specification to verified silicon.
        </p>

        <blockquote
          class="border-l-2 border-[#2563EB] pl-5 my-8 text-white/85 text-base md:text-lg italic leading-relaxed"
        >
          &#8220;We are building the next generation of agentic EDA infrastructure, and having
          advisors who have been at the forefront of industry-defining technologies &#8212; from
          low-power simulation to formal verification standards &#8212; is invaluable. Nithya and
          Sridhar bring both technical depth and real-world deployment perspective that will
          accelerate CaretEDA&#8217;s product roadmap.&#8221;
          <span class="block mt-3 not-italic text-[#2563EB] text-sm font-semibold"
            >&#8212; Sashi Obilisetty, Co-founder and CEO, CaretEDA, Inc.</span
          >
        </blockquote>

        <div class="flex items-center gap-4 mt-12 mb-4">
          <img
            src="assets/team-nithya.jpg"
            alt="Nithya Raghavan"
            class="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover object-top border-2 border-[#2563EB]/40 flex-shrink-0"
          />
          <div>
            <h2 class="text-white font-bold text-xl md:text-2xl">Nithya Raghavan</h2>
            <p class="text-[#2563EB] text-xs uppercase tracking-widest font-semibold">
              Technical Advisor, CaretEDA, Inc.
            </p>
          </div>
        </div>
        <p class="text-white/90 text-base leading-relaxed mb-4">
          Nithya Raghavan is a seasoned EDA and semiconductor engineering leader with over two
          decades of experience in hardware verification, low-power design, and applications
          engineering. She is currently on the advisory board for RELSYM Solutions, and an executive
          at SemiX, the academic center for semiconductor education and research in IIT Bombay.
        </p>
        <p class="text-white/90 text-base leading-relaxed mb-4">
          Previously, as Executive Director of Applications Engineering at Synopsys, Nithya led
          teams focused on hardware-assisted verification &#8212; spanning emulation and
          prototyping, and the full spectrum of low-power technologies including simulation, static
          analysis, and assertion-based verification. Prior to Synopsys, Nithya held product and
          application engineering roles at ArchPro Design Automation &#8212; an EDA startup &#8212;
          and chip design roles at Cisco Systems and Procket Networks, contributing to VLSI design
          and software development for high-performance networking platforms.
        </p>
        <p class="text-white/90 text-base leading-relaxed mb-4">
          Nithya holds a B.Tech in Electrical Engineering from IIT, Madras and a Master&#8217;s
          degree in Electrical and Computer Engineering from the University of California, Davis. As
          a Technical Advisor to CaretEDA, Nithya will provide strategic guidance on verification
          methodology integration within agentic design flows and LLM-driven EDA toolchains.
        </p>
        <blockquote
          class="border-l-2 border-[#2563EB] pl-5 my-8 text-white/85 text-base md:text-lg italic leading-relaxed"
        >
          &#8220;The convergence of AI and EDA is redefining how chips are designed and verified.
          CaretEDA&#8217;s agentic approach to the Spec-to-Netlist&#8482; flow is exactly the kind
          of innovation the industry needs, and I look forward to contributing to that
          journey.&#8221;
          <span class="block mt-3 not-italic text-[#2563EB] text-sm font-semibold"
            >&#8212; Nithya Raghavan</span
          >
        </blockquote>

        <div class="flex items-center gap-4 mt-12 mb-4">
          <img
            src="assets/team-sridhar.jpg"
            alt="Sridhar Narayanan"
            class="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover object-top border-2 border-[#2563EB]/40 flex-shrink-0"
          />
          <div>
            <h2 class="text-white font-bold text-xl md:text-2xl">Sridhar Narayanan</h2>
            <p class="text-[#2563EB] text-xs uppercase tracking-widest font-semibold">
              Technical Advisor, CaretEDA, Inc.
            </p>
          </div>
        </div>
        <p class="text-white/90 text-base leading-relaxed mb-4">
          Sridhar Narayanan is a seasoned semiconductor technologist, entrepreneur, and educator
          with deep roots in chip design and EDA. He was the founder of PwrLite, Inc., a startup
          focused on intelligent power optimization for ASICs and FPGAs that was acquired by Xilinx
          in 2009. The underlying technology was integrated into Xilinx&#8217;s Vivado&#8482; design
          suite &#8212; enabling automatic dynamic power reduction across its FPGA product families.
        </p>
        <p class="text-white/90 text-base leading-relaxed mb-4">
          Sridhar was with Apple for seven years, working on multiple generations of Apple SoCs for
          the iPhone, iPad and Apple Watch. Beyond his entrepreneurial track record, Sridhar brings
          a strong commitment to education and community. He serves as an Adjunct Professor in
          Electrical and Systems Engineering at the University of Southern California (USC) Viterbi
          School of Engineering, where he co-teaches a graduate-level course on VLSI design, helping
          shape the next generation of chip designers.
        </p>
        <p class="text-white/90 text-base leading-relaxed mb-4">
          At CaretEDA, Sridhar will advise on ASIC design flows, power optimization strategies,
          design-for-test methodologies and the integration of agentic AI toolchains into real-world
          semiconductor workflows. Sridhar has a B.Tech from the Indian Institute of Technology
          (IIT) Madras, and a Ph.D. in Computer Engineering from USC.
        </p>
        <blockquote
          class="border-l-2 border-[#2563EB] pl-5 my-8 text-white/85 text-base md:text-lg italic leading-relaxed"
        >
          &#8220;Building PwrLite and seeing the technology get absorbed into Xilinx&#8217;s design
          flow taught me how transformative the right EDA innovation can be. CaretEDA is bringing
          that same level of foundational disruption to the full chip design flow with AI, and
          I&#8217;m excited to be part of that effort.&#8221;
          <span class="block mt-3 not-italic text-[#2563EB] text-sm font-semibold"
            >&#8212; Sridhar Narayanan</span
          >
        </blockquote>

        <hr class="border-white/10 my-12" />

        <h2 class="text-white font-bold text-lg md:text-xl mb-3">About CaretEDA</h2>
        <p class="text-white/80 text-base leading-relaxed mb-6">
          CaretEDA builds AI-native design systems for modern semiconductor teams, with its
          Spec-to-Netlist&#8482; platform serving as a powerful force multiplier across the entire
          engineering workflow. The platform also ships with an extensive library of Agentic
          Building Blocks (ABBs): pre-built, composable agents purpose-built for the rigor and
          complexity of chip design. ABBs enable chip design teams to deploy best-in-class agentic
          flows from day one. CaretEDA&#8217;s commercially supported open-source EDA stack makes it
          seamless for chip design teams to combine open-source EDA tools with third-party
          commercial tools within a single agentic workflow.
        </p>
        <p class="text-white/70 text-sm leading-relaxed">
          <span class="font-semibold text-white/90">Media contact:</span> Sashi Obilisetty,
          Co-founder &amp; CEO &#183;
          <a href="mailto:sashi@careteda.com" class="text-[#2563EB] hover:underline"
            >sashi&#64;careteda.com</a
          ><br />
          Request a demo at
          <a
            href="https://www.careteda.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#2563EB] hover:underline"
            >www.CaretEDA.com</a
          >
        </p>
      </article>
    </section>
  `,
})
export class NewsDetailComponent implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }
}
