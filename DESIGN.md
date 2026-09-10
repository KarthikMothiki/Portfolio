# Portfolio Design System & Architecture

This document defines the visual identity, design system, component hierarchy, and architectural guidelines for **Karthik Mothiki's Senior Robotics Engineering Portfolio**.

> **Design Karthik Mothiki's portfolio as a premium engineering artifact rather than a conventional robotics portfolio. Combine Apple's restraint and material quality with aerospace engineering precision and the authenticity of a prototype on an engineer's workbench. Use restrained glassmorphism, sophisticated typography, strong whitespace and subtle physical interactions. Avoid cyberpunk, neon, futuristic UI clichés, generic SaaS layouts and decorative technical elements. The site should communicate that Karthik is a sophisticated robotics builder, systems thinker and technical leader who can take complex systems from the ground up. His personality should emerge through engineering opinions, experiments, decisions and honest project narratives. Every visual element should serve that perception.**

---

## 1. Core Philosophy

### Identity
**Not:** "A futuristic website for a robotics engineer."
**Instead:** "An engineer's body of work, presented as an unboxed, editorial engineering publication."

### Editorial Unboxed Strategy
> **"Remove visual containers until the content starts to breathe. Then add only the containers required to establish hierarchy or interaction."**
> **"If every element looks designed, nothing feels designed."**

- **Open Page Canvas**: Projects, narratives, and metrics live directly on the page without giant outer border boxes.
- **Restrained Blue Accent**: Reserved strictly for active interaction states and key signals (90–95% neutral, 5–10% accent).
- **Quiet 4-Level Typographic Hierarchy**:
  1. *Display*: Section headers (`Selected work`, `Systems`)
  2. *Project*: System names (`ORo Base`, `CppSentry`)
  3. *Body*: Readable engineering prose
  4. *Technical Metadata*: Monospace stack lines (`C++17 / FreeRTOS / ESP32-S3`)
- **No Micro-Text Labels**: Removed explicit form labels like `01 · WHAT IS IT?` to let prose speak naturally.
- **Ultra-Quiet Header**: "Karthik Mothiki" on left, "Work · Thinking · About" center, "Resume ↗" right. Social icons in footer.

### Visual Language
**Apple × Aerospace × Workbench** — weighted roughly:
- **50% premium product design** — Restraint, material quality, whitespace, typographic precision
- **30% aerospace / engineering documentation** — Structured data, monospace technical labels, precise layouts
- **20% physical prototype / workbench** — Warm palette, authentic textures, tangible engineering artifacts

### Dual-Persona Optimization
1. **Recruiter Mode (3-Second Scan)**: Bold headline, concise evidence metrics, clear project titles
2. **Engineering Director Mode (Deep Inspection)**: Editorial case study narratives, systems architecture breakdown, engineering notes with trade-off reasoning

---

## 2. Color Palette — Warm Stone + Steel Blue (`src/index.css`)

| CSS Token | Light Mode | Dark Mode | Usage |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#FAFAF9` (Warm White) | `#0C0A09` (Stone 950) | Main viewport background |
| `--bg-secondary` | `#F5F5F4` (Stone 100) | `#1C1917` (Stone 900) | Secondary backgrounds |
| `--surface` | `rgba(255,255,255,0.72)` | `rgba(255,255,255,0.04)` | Translucent card fills |
| `--surface-solid` | `#FFFFFF` | `#1C1917` | Solid backgrounds |
| `--text-primary` | `#1C1917` (Stone 900) | `#FAFAF9` (Stone 50) | Headlines & body |
| `--text-secondary` | `#57534E` (Stone 600) | `#A8A29E` (Stone 400) | Descriptions & metadata |
| `--text-tertiary` | `#A8A29E` (Stone 400) | `#78716C` (Stone 500) | Labels, timestamps, indices |
| `--border` | `rgba(0,0,0,0.06)` | `rgba(255,255,255,0.08)` | Hairline card borders |
| `--border-strong` | `rgba(0,0,0,0.12)` | `rgba(255,255,255,0.16)` | Hover state borders |
| `--accent` | `#2563EB` (Blue 600) | `#60A5FA` (Blue 400) | Interactive elements, links |
| `--accent-hover` | `#1D4ED8` (Blue 700) | `#93C5FD` (Blue 300) | Hover state accent |
| `--accent-subtle` | `rgba(37,99,235,0.08)` | `rgba(96,165,250,0.1)` | Subtle accent backgrounds |
| `--success` | `#059669` (Emerald) | `#34D399` (Emerald 300) | Success indicators |

---

## 3. Typography — Two Typefaces Only

| Role | Stack | Applied To |
| :--- | :--- | :--- |
| **Heading / Body / Eyebrows** | `'Google Sans', 'Inter', system-ui, sans-serif` | Headlines, section eyebrows (`font-sans font-semibold tracking-widest uppercase`), subtitles, body text, card titles |
| **Monospace / Technical** | `'JetBrains Mono', monospace` | Metrics, tech stack lines, code, timestamps, engineering note indices |

**Retired:** Orbitron, Rajdhani, Share Tech Mono — these pushed the identity toward "futuristic robotics website."

**Rule:** Headlines feel human and confident, not like a spacecraft console. Section eyebrows use clean sans-serif with wide letter-spacing (`font-sans font-semibold tracking-widest uppercase`) to maintain an elegant, premium editorial aesthetic rather than a code-like terminal feel. Technical content uses monospace naturally.

---

## 4. Glassmorphism — Premium Restraint

> **Glass should reveal hierarchy, not create hierarchy.**

### `.glass-card` / `.glass-panel`
- Light: `linear-gradient(135deg, rgba(255,255,255,0.78), rgba(255,255,255,0.48))`
- Dark: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`
- Backdrop blur: `blur(20px)` light / `blur(24px)` dark
- Border: `1px solid var(--border)` — hairline
- Shadow: Extremely soft multi-layer
- Hover: Border strengthens, shadow deepens subtly. **No translateY. No glow.**
- Corner radius: `16px` (`--radius-card`)

### `.glass-pill`
- Full rounded (`border-radius: 9999px`)
- Subtle backdrop blur, hairline border

### What was removed
- `.glass-card-ultra` (merged into `.glass-card`)
- `.grid-blueprint` (CAD grid background)
- Saturate boosts, cyan ambient glow, inset white highlights, CRT scanlines

---

## 5. Motion & Interaction Design — Physical + Editorial (3.5 / 5)

> **Motion is part of the engineering language.**
> It behaves like a physical engineering system: deliberate, responsive, and predictable. Most of the interface remains still. Interaction introduces movement only when it communicates state, hierarchy, physicality, or progression. Large areas of negative space remain intentionally untouched so meaningful motion has room to breathe. **One focal motion at a time.**

### Three-Tiered Motion System

| Tier | Purpose | Applied To | Implementation |
| :--- | :--- | :--- | :--- |
| **01. Ambient Motion** | Subtle physicality | Navbar state, theme toggle, hover highlights, glass surfaces, buttons | CSS transitions `0.15s – 0.2s ease` |
| **02. Content Motion** | Understand state change | Case study expansions, engineering notes focus, modal overlays | `framer-motion` `0.25s – 0.3s easeInOut` |
| **03. Signature Motion** | Storytelling interaction | **Systems Architecture Section** (Scroll-driven system assembly) | `framer-motion` `useScroll` + sticky container |

### Core Motion Rules
1. **Scroll Position Changes the Story**: Never animate something merely because it entered the viewport. Scroll position actively drives systemic progression.
2. **Contextual Hover ("Native to the Object")**: Avoid generic card `translateY` lifts or glowing shadows. Hovering reveals object-native engineering context (e.g. system specs, sensor count, field test overlays).
3. **Negative Space Constraint**: Maintain visual breathing room. Only one focal animation executes at any given moment.
4. **Natural Easing**: Controlled `easeInOut` timing curves. Zero bounce, spring physics, or overshoot.

### Explicit Motion Exclusions
- **No** global scroll fade-up reveal animations
- **No** generic card hover lifts (`translateY(-4px)`) or hover glows
- **No** scanlines, glitch effects, or CRT lines
- **No** magnetic cursors or custom cursor trails
- **No** spring physics or bouncy easing
- **No** audio feedback or sound effects
- **No** perpetual idle loop animations or spinning indicators

---

## 6. Page Architecture (`src/App.tsx`)

```
┌─────────────────────────────────────────────┐
│ NAVBAR (Fixed)                              │
│ Karthik Mothiki    Work · Thinking · About  │
├─────────────────────────────────────────────┤
│                                             │
│ HERO                                        │
│ I build robots                              │
│ from the system level up.                   │
│ C++17 · ROS 2 · Embedded Linux · Autonomy   │
│ 28+ sensors   1 Gbps IPC   78% docking      │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│ SELECTED WORK                               │
│ Editorial 7-system index + unfolded stories │
│ Problem → System → Hard Part → Decision     │
│ → Failure → Result → Engineering Note       │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│ SYSTEMS ARCHITECTURE                        │
│ Hardware → Embedded → Robotics → Intelligence│
│ 4-layer expandable system assembly          │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│ ENGINEERING NOTES                           │
│ Principles · Decisions · Experiments        │
│ 3-column card grid personality layer        │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│ EXPERIENCE                                  │
│ Career chronology (accordion)               │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│ ABOUT & CAPABILITIES                        │
│ 1. Positioning: "I like building systems.." │
│ 2. How I think (4 engineering principles)   │
│ 3. Currently experimenting with (4 projects)│
│ 4. Capabilities (6 technical matrices)      │
│ 5. Compressed Education & Credentials       │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│ CONTACT                                     │
│ Let's build something difficult.            │
│ Primary action: Let's talk →                │
│ Quiet secondary links: GitHub · LinkedIn · PDF│
│                                             │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
│ © 2026 Karthik Mothiki                      │
└─────────────────────────────────────────────┘
```

---

## 7. Component Specifications

### Navbar (`src/components/Navbar.tsx`)
- Fixed top bar with scroll-aware backdrop blur
- Brand: "Karthik Mothiki" in heading font
- Nav: Work · Thinking · About
- Controls: Theme toggle, Résumé PDF

### HeroSection (`src/components/HeroSection.tsx`)
- Bold statement: "I build robots from the system level up."
- Restrained supporting text, monospace tech stack, 3 evidence metrics
- Profile photo with clean border and 1:1 aspect ratio (`aspect-square`, max width `480px`)
- Open canvas — no glass-card wrapper

### CaseStudiesSection (`src/components/CaseStudiesSection.tsx`)
- **Two-Column Editorial Split Layout** (`grid grid-cols-1 lg:grid-cols-12 gap-12`)
- **Left Column (`lg:col-span-4`)**: Sticky project index sidebar (`sticky top-28`) listing all 7 systems with active scroll tracking and smooth jump navigation
- **Right Column (`lg:col-span-8`)**: Fully unfolded engineering story blocks (no accordions, zero collapse/expand clicks needed)
- Each story block presents: Title, timeline, tech stack line, large editorial media asset, Problem & System Architecture prose, Key Results bar, and deep-dive specification modal button

### InteractiveArchitecture (`src/components/InteractiveArchitecture.tsx`)
- 4-layer system stack: Hardware → Real-Time/Embedded → Robotics Software → Intelligence
- Expandable accordion with responsibilities, interfaces, key decisions
- Clean glass-panel styling, no grid background

### EngineeringNotes (`src/components/EngineeringNotes.tsx`)
- Personality layer rendered as a responsive **3-column card grid** (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`)
- 3 note types: `NOTE` (Principle), `DECISION` (System Trade-off), `EXPERIMENT` (Benchmark Project)
- Distinct badge tokens and hairline borders with subtle accent hover reactions
- GitHub repository links attached to benchmark experiment cards

### Experience (`src/components/Experience.tsx`)
- Career chronology in accordion format
- 4 positions with role, company, scope, achievements

### TechnicalDomains / About (`src/components/TechnicalDomains.tsx`)
- **Human-First Identity & Positioning**: Statement *"I like building systems that are difficult to build well."* + 5 core value signals (`System boundaries`, `Real-world reliability`, `Learning by building`, `Simple interfaces`, `Technical ownership`)
- **How I Think**: 4 core engineering principles (*Understand the boundary*, *Make complexity observable*, *Build before I over-theorize*, *Own the whole system*)
- **Currently Experimenting With**: 4 active exploration projects (`CppSentry`, `Sūtradhāra`, `ROS 2 Internals`, `Real-Time Systems`)
- **Technical Capabilities Grid**: 6 categorized tech stack matrices
- **Compressed Credentials**: Minimal 2-column footer layout for Education (SASTRA, Örebro) and Selected Credentials (HBS ASPIRE, Udacity Nanodegrees)

### ContactSection (`src/components/ContactSection.tsx`)
- Title: *"Let's build something difficult."*
- Subtitle: *"Robotics systems, embedded platforms, autonomy, or something that doesn't have a clean solution yet."*
- Primary action: Single **`Let's talk →`** button (`mailto:karthik1111mothiki@gmail.com`)
- Quiet text links: `GitHub ↗` · `LinkedIn ↗` · `Résumé PDF ↗`

### Footer (`src/components/Footer.tsx`)
- Restrained copyright line (`© 2026 Karthik Mothiki. All rights reserved.`)
- Zero self-declaratory or boastful design taglines
- Quiet text links: `GitHub ↗` · `LinkedIn ↗` · `Email ↗` · `Résumé PDF ↗`

---

## 8. Technical Stack

- **Build**: Vite + React + TypeScript + Tailwind CSS v4
- **Motion**: framer-motion (accordion + modal animations only)
- **Icons**: lucide-react
- **Theme**: CSS custom properties with `.dark` class toggle, persisted to localStorage
- **Fonts**: Inter (Google Fonts) + JetBrains Mono (Google Fonts), Google Sans as first-preference when available
- **Container**: `max-w-7xl` (1280px) center-aligned

---

## 9. Design Principles — What to Avoid

| Avoid | Instead |
| :--- | :--- |
| Neon colors (#00F0FF, #00FF9D) | Warm stone palette + steel blue accent |
| Orbitron / futuristic fonts | Inter (contemporary grotesk) |
| HUD brackets, scanlines, grid backgrounds | Clean whitespace and hairline borders |
| Sound effects | Silence |
| Hover lift (translateY) | Subtle border/shadow change |
| Multiple glass tiers (card vs ultra) | One consistent glass material |
| Category filter tabs on 7 items | Simple vertical list |
| Dashboard metric widgets | Evidence attached to the person |
| Different visual device per section | Same material, different engineering objects |
