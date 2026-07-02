// Post-build step: generate a real static HTML file per route with route-specific
// Open Graph / Twitter meta tags, so social crawlers (LinkedIn, etc.) can show a
// proper preview card for deep links on a static GitHub Pages SPA.
//
// Run AFTER `ng build` and BEFORE publishing dist to gh-pages.

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist', 'corporate-website', 'browser');
const BASE = 'https://caretedaemmanuel-droid.github.io/careteda-website-test';
const DEFAULT_IMAGE = 'assets/careteda-logo-hd.png';

const template = readFileSync(join(DIST, 'index.html'), 'utf8');

// Each entry generates dist/<path>/index.html with its own preview metadata.
const routes = [
  // Blog posts — each gets its own image + title (matches careteda.com behaviour)
  {
    path: 'blogs/spec-bottleneck',
    title: 'The Spec Is the Bottleneck, Not the Silicon',
    desc: 'Why agentic chip design breaks when ambiguous specs are silently resolved, and why formalization has to sit before RTL generation.',
    image: 'assets/blogs/spec-bottleneck-hero.png',
  },
  {
    path: 'blogs/verilator',
    title: 'Verilator: The Open-Source Simulator Reshaping Chip Design',
    desc: 'How a tool born at Digital Equipment Corporation in 1994 ended up at the center of chip verification for Tesla, Google, AMD, and NVIDIA.',
    image: 'assets/blogs/verilator-image1.jpg',
  },
  {
    path: 'blogs/code-generation',
    title: 'Generating SystemVerilog Is Easy. Generating Hardware Is Not.',
    desc: 'LLMs can produce RTL that compiles and simulates — but hardware is a contract with physics, and physics does not accept plausible drafts.',
    image: 'assets/blogs/code-generation-perspective.png',
  },
  {
    path: 'blogs/silicon-imperative',
    title: 'The Silicon Imperative',
    desc: 'Rising chip design complexity, shrinking tapeout cycles, and why the $775B semiconductor market is making AI-driven design a strategic necessity.',
    image: 'assets/blogs/silicon-imperative.png',
  },
  // News detail (press release)
  {
    path: 'news/technical-advisors',
    title: 'CaretEDA Adds Two Semiconductor Veterans to Technical Advisory Board',
    desc: 'Nithya Raghavan and Sridhar Narayanan join as Technical Advisors, bringing deep EDA knowledge and extensive chip design expertise to CaretEDA’s agentic chip design platform.',
    image: DEFAULT_IMAGE,
  },
  // Section / landing pages — generic brand image, page-specific title & description
  { path: 'blogs',   title: 'Blog',    desc: 'Insights on AI-native chip design, EDA, and semiconductor engineering from the CaretEDA team.', image: DEFAULT_IMAGE },
  { path: 'news',    title: 'News',    desc: 'The latest announcements from CaretEDA.', image: DEFAULT_IMAGE },
  { path: 'about',   title: 'About CaretEDA', desc: 'CaretEDA automates chip design from natural-language specification to silicon-ready netlist with its AI-native Spec-to-Netlist™ platform.', image: DEFAULT_IMAGE },
  { path: 'team',    title: 'Team',    desc: 'Meet the team building CaretEDA’s AI-native chip design platform.', image: DEFAULT_IMAGE },
  { path: 'careers', title: 'Careers', desc: 'Join CaretEDA and help reshape how chips are designed with AI-native, agentic EDA.', image: DEFAULT_IMAGE },
  { path: 'ifaq',    title: 'IFAQ',    desc: 'Everything you need to know before, during, and after your Spec-to-Netlist™ evaluation.', image: DEFAULT_IMAGE },
  { path: 'demos',   title: 'Demos',   desc: 'Watch Spec-to-Netlist™ in motion — from design intent to silicon-ready output.', image: DEFAULT_IMAGE },
];

const escapeAttr = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function buildHtml(tpl, { title, desc, url, image }) {
  const t = escapeAttr(title);
  const d = escapeAttr(desc);
  return tpl
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t} | CaretEDA</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${image}$2`)
    .replace(/(<meta property="og:image:alt" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${image}$2`);
}

let count = 0;
for (const r of routes) {
  const url = `${BASE}/${r.path}`;
  const image = `${BASE}/${r.image}`;
  const html = buildHtml(template, { title: r.title, desc: r.desc, url, image });
  const dir = join(DIST, r.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
  count++;
  console.log(`  og: /${r.path}`);
}
console.log(`Injected per-route Open Graph tags into ${count} pages.`);
