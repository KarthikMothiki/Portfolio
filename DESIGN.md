# Portfolio Master Design System & Architectural Blueprint

This document defines the complete visual identity, design system, component hierarchy, layout constraints, interactive mechanics, and architectural guidelines for **Karthik Mothiki's Senior Robotics Engineering Portfolio**.

This file serves as an exhaustive, deterministic specification. If provided to an AI agent or front-end developer with alternative texts/placeholders, it provides all rules required to replicate the exact structure, layout boundaries, design tokens, and user experience of this portfolio site.

---

## 1. Core Philosophy & Ideology

### 1.1 Technical Blueprint vs. Decorative Clutter
- **Substance Over Flash**: The primary goal is to demonstrate platform leadership, architectural rigor, and senior-level hardware/software integration capability. Decorative 3D background clutter, generic AI animations, and superficial eye-candy are deliberately excluded in favor of high-information-density technical layouts.
- **Engineering Blueprint Aesthetic**: Inspired by CAD software, system block diagrams, and hardware specification sheets. Clean grid lines, precise typography, structured data badges, and deterministic status indicators signal technical clarity.
- **Empirical Ground Truth**: Resume claims are backed by quantitative trial metrics (e.g., *78/100 docking trials*, *< 2.5 ms HAL latency*, *1.0 Gbps IPC throughput*, *97.5% workflow acceleration*), field failure recovery analyses, and concrete architectural trade-off breakdowns.

### 1.2 Dual-Persona Audience Optimization Strategy
The site is built to cater to two distinct hiring personas simultaneously without friction:
1. **Recruiter Mode (3-Second Fast Scan)**:
   - Punchy, high-contrast titles & uppercase role badges.
   - Capped 2-line project summaries.
   - Capped top 3 highlight chips with green checkmarks.
   - Capped top 5 primary tech stack pills.
2. **Staff Engineer & Engineering Director Mode (Deep Inspection)**:
   - On-demand interactive specification modal (`max-h-[82vh]`).
   - Structured 10-point technical audit sections (Problem Statement, Constraints, Alternatives Considered, System Boundaries, Key Decisions, Failure Modes, Hard Ground-Truth Metrics, Business Impact, and V2 Roadmap).
   - Tabbed navigation inside the modal to view deep technical specs without long scrolling fatigue.

---

## 2. Color Palette & Token System (`index.css`)

The design system uses CSS Custom Properties to provide a seamless transition between **Light Blueprint** (Day) and **Deep Cybernetic Slate** (Night/Dark Mode).

| CSS Token | Light Mode Value | Dark Mode Value | Usage Context |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#F0F4F8` (Slate Canvas) | `#040814` (Abyssal Dark Slate) | Main document background |
| `--bg-secondary` | `#E2E8F0` | `#0A1024` | Secondary section background |
| `--card-bg` | `rgba(255, 255, 255, 0.85)` | `rgba(6, 12, 28, 0.75)` | Glassmorphic card container |
| `--card-bg-hover` | `rgba(255, 255, 255, 0.98)` | `rgba(10, 20, 45, 0.85)` | Card hover background |
| `--text-main` | `#0F172A` (Slate 900) | `#F1F5F9` (Slate 100) | Primary headers & body text |
| `--text-muted` | `#475569` (Slate 600) | `#94A3B8` (Slate 400) | Captions, subtitles & metadata |
| `--border-color` | `rgba(0, 136, 176, 0.25)` | `rgba(0, 240, 255, 0.2)` | Card, section & grid borders |
| `--card-border-hover` | `rgba(0, 150, 200, 0.5)` | `rgba(0, 240, 255, 0.6)` | Interactive hover state border |
| `--tech-cyan` | `#007799` | `#00F0FF` (Electric Cyan) | Primary tech accents, buttons, HUD brackets |
| `--tech-cyan-glow` | `#0099B8` | `#00F0FF` | Text shadow & glow effects |
| `--tech-blue` | `#2563EB` | `#3B82F6` | Secondary links & badges |
| `--tech-amber` | `#D97706` | `#FFB800` (Cyber Amber) | Warnings, constraints & failure modes |
| `--tech-emerald` | `#059669` | `#00FF9D` (Neon Emerald) | Validation metrics, read indicators, success icons |
| `--tech-magenta` | `#C026D3` | `#FF007F` | High-priority callouts |
| `--grid-line` | `rgba(0, 136, 176, 0.12)` | `rgba(0, 240, 255, 0.07)` | Blueprint background grid lines |
| `--inner-box-bg` | `rgba(226, 232, 240, 0.7)` | `rgba(0, 0, 0, 0.6)` | Sub-box & code container fill |
| `--inner-box-border` | `rgba(0, 136, 176, 0.3)` | `rgba(0, 240, 255, 0.2)` | Code & sub-box borders |

---

## 3. Typography & Font System

The design system pairs technical monospace with modern sans-serif fonts:

1. **`Orbitron` (`.font-orbitron`)**:
   - Applied to: Primary section titles (`H2`), project titles (`H3`), modal headers, and main CTAs.
   - Style: All-caps, geometric, futuristic, `letter-spacing: 0.05em`.
2. **`Google Sans` / `Plus Jakarta Sans` / `Inter` (`.font-google-sans`)**:
   - Applied to: Body text, summaries, descriptions, and structural content.
   - Style: Clean, high legibility at small sizes, `leading-relaxed`.
3. **`Rajdhani` (`.font-rajdhani`)**:
   - Applied to: Subtitles, section indicators, and secondary navigation elements.
4. **`Share Tech Mono` / `JetBrains Mono` (`.font-tech`)**:
   - Applied to: Data badges, category labels, code snippets, timestamps, metric values, and tab labels.

---

## 4. Custom CSS Layout Utilities (`index.css`)

### 4.1 Faint Blueprint CAD Grid (`.grid-blueprint`)
- **Pattern**: `background-size: 50px 50px` with 1px linear gradients along `var(--grid-line)`.
- **Center Glow**: Radial gradient at `50% 30%` (`rgba(0, 240, 255, 0.08)` to transparent).
- **Purpose**: Simulates CAD viewport grid lines without visual clutter.

### 4.2 Cyber Glass Card (`.clean-card`)
- **Background**: `var(--card-bg)` with `backdrop-filter: blur(16px)`.
- **Border**: `1px solid var(--border-color)`, `border-radius: 1rem` (`16px`).
- **Top Shimmer**: `::after` pseudo-element with horizontal cyan laser gradient (`opacity: 0.3` default, `opacity: 1` on hover).
- **Hover Motion**: `transform: translateY(-4px) scale(1.01)` over `0.35s cubic-bezier(0.16, 1, 0.3, 1)`.

### 4.3 Cyber HUD Corner Brackets (`.cyber-bracket`)
- **Corner Brackets**: `::before` (top-left) and `::after` (bottom-right) absolute elements.
- **Dimensions**: `8px x 8px` with `2px solid var(--tech-cyan)`.
- **Effect**: Gives cards and modals a high-tech tactical HUD frame.

### 4.4 CRT Scanlines Effect (`.scanlines`)
- **Overlay**: Applied to `.dark .scanlines::after` as a repeating horizontal bar gradient (`background-size: 100% 4px`, `opacity: 0.4`).

---

## 5. Global Layout & Container Architecture (`SciFiContainer.tsx`)

All content sections must be wrapped inside `SciFiContainer`:

```tsx
<SciFiContainer className="py-12 md:py-16">
  {/* Section Content */}
</SciFiContainer>
```

### 5.1 Container Specifications:
- **Max Width Boundary**: `max-w-[1600px]` (Widescreen optimized: `mx-auto px-4 sm:px-8 lg:px-12`).
- **Reading Verification Engine (`hasBeenRead`)**:
  - Monitors viewport visibility using `framer-motion`'s `useInView(containerRef, { amount: 0.3 })`.
  - **Reading Timer**: If the user stays on a section for **1.8 seconds**, the container automatically triggers a "READ VERIFIED" state change:
    - Border transitions to Neon Emerald (`border border-[#00FF9D]/30`).
    - Subtle background tint (`bg-[#00FF9D]/5 shadow-[0_0_20px_rgba(0,255,157,0.1)]`).
    - Audio confirmation chime via Web Audio API (`soundFx.playBeep(1050, 0.03)`).
- **Hover Micro-Interaction**:
  - On cursor enter: `bg-[#00F0FF]/10 border border-[#00F0FF] shadow-[0_0_40px_rgba(0,240,255,0.25)] scale-[1.005]`.
  - Triggers audio hover feedback (`soundFx.playHover()`).

---

## 6. Page Structure & Component Breakdown

The page follows a single-page scrolling layout with persistent top navigation and bottom floating dock:

```
+-------------------------------------------------------------------------+
|                        Navbar Component (Fixed)                         |
| [KM] KARTHIK MOTHIKI · OVERVIEW  PRINCIPLES  CASE STUDIES ... · [🔊] [🌙] [RESUME] |
+-------------------------------------------------------------------------+
|                         01. HeroSection                                 |
| STATUS BADGE · NAME · ROLE · 1-SENTENCE VALUE PROP · METRICS BAR        |
+-------------------------------------------------------------------------+
|                    02. InteractiveArchitecture                          |
| INTERACTIVE SYSTEM STACK SELECTOR (HAL, SAFETY/IPC, ROS2, AI ORCHESTRATOR)|
+-------------------------------------------------------------------------+
|                     03. EngineeringPrinciples                           |
| 5 NUMBERED CAD CARDS (01-05): DETERMINISM, RELIABILITY, GROUND TRUTH   |
+-------------------------------------------------------------------------+
|                      04. LeadershipSection                              |
| PLATFORM LEADERSHIP MATRIX · CROSS-DISCIPLINARY EXECUTION               |
+-------------------------------------------------------------------------+
|                      05. CaseStudiesSection                             |
| CATEGORY FILTER TABS · DECLUTTERED 3-COL GRID · TABBED 82VH SPEC MODAL  |
+-------------------------------------------------------------------------+
|                      06. CapabilitiesSection                            |
| CATEGORIZED SKILL MATRIX (ROBOTICS, EMBEDDED, AI/ORCHESTRATION, TOOLS)   |
+-------------------------------------------------------------------------+
|                      07. ExperienceTimeline                             |
| CHRONOLOGICAL CAREER MILESTONES & SYSTEM ACHIEVEMENTS                   |
+-------------------------------------------------------------------------+
|                       08. ContactSection                                |
| TERMINAL HUB · 1-CLICK EMAIL COPY · SOCIAL CTAs                         |
+-------------------------------------------------------------------------+
|                       MagneticDock (Floating)                           |
| PHYSICS SPRING PROFILE DOCK (LINKEDIN, GITHUB, MEDIUM)                   |
+-------------------------------------------------------------------------+
|                        Footer Component                                 |
| COPYRIGHT · QUICK NAVIGATION LINKS                                      |
+-------------------------------------------------------------------------+
```

---

## 7. Deep-Dive Section Specifications

### 7.1 Navbar Component (`Navbar.tsx`)
- **Container**: Fixed top glassmorphic bar (`fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-[var(--navbar-bg)]`).
- **Inner Content Width**: `max-w-[1600px] mx-auto px-4 sm:px-8`.
- **Brand Element**: Logo `KM` inside a cyan glow square with an active green status indicator dot (`SYSTEM ONLINE`).
- **Nav Links**: `OVERVIEW`, `PRINCIPLES`, `LEADERSHIP`, `CASE STUDIES`, `CAPABILITIES`, `TIMELINE`, `CONNECT`.
  - Active section highlighted with electric cyan underline and text shadow (`text-glow-cyan`).
- **Right Utilities**:
  - `Sound Toggle`: Mute/unmute Web Audio synthesizer effects.
  - `Theme Toggle`: Cycles Light Mode ↔ Dark Mode with smooth CSS variable transition.
  - `RESUME PDF CTA`: High-visibility button (`bg-[#00F0FF] text-black font-orbitron font-bold`).

### 7.2 Hero Section (`HeroSection.tsx`)
- **Badge**: Monospace pill `[ STATUS: AVAILABLE FOR LEADERSHIP ROLES ]`.
- **Headline**: `KARTHIK MOTHIKI` rendered with Orbitron font, glitch hover effect, and cyan gradient.
- **Role Statement**: `Senior Robotics Systems Engineer & AI Orchestrator`.
- **Value Proposition**: 1-sentence statement highlighting full platform ownership from C++ HAL firmware to ROS2 middleware and multi-agent AI.
- **Metrics Bar (4-Column Grid)**:
  1. `78/100` — Autonomous Vision Docking Success Rate
  2. `<2.5 ms` — Real-Time HAL Control Loop Latency
  3. `1.0 Gbps` — ZeroMQ Inter-Process Telemetry Throughput
  4. `97.5%` — Multi-Agent AI Workflow Time Reduction

### 7.3 Interactive Architecture Section (`InteractiveArchitecture.tsx`)
- **Purpose**: Allows recruiters and engineers to inspect system architecture layers interactively.
- **Layer Tabs**:
  - `LAYER 01: C++17 HAL & FIRMWARE` (ESP32-S3, FreeRTOS, Thread-safe queues)
  - `LAYER 02: SAFETY QUEUES & IPC` (ZeroMQ 1Gbps telemetry, Emergency stop priority)
  - `LAYER 03: ROS2 & VISION PERCEPTION` (Fiducial marker docking, Nav2, MoveIt)
  - `LAYER 04: AI & MULTI-AGENT ORCHESTRATION` (Google ADK, Gemini 2.0, MCP, FastAPI)
- **Active Viewport**: Renders interactive block diagram + embedded source code/spec box (`.spec-box`) detailing real memory structures and socket configs.

### 7.4 Engineering Principles Section (`EngineeringPrinciples.tsx`)
- **Layout**: 5 CAD-styled numbered cards (`01` to `05`):
  1. `01. RELIABILITY OVER NOVELTY`: Production stability takes precedence over complex unproven architectures.
  2. `02. DETERMINISM WHERE IT MATTERS`: Strict real-time execution bounds for motor HAL loops & safety overrides.
  3. `03. HARDWARE-SOFTWARE CO-DESIGN`: Joint optimization across mechanical constraints, MCU timing, and host ROS nodes.
  4. `04. EMPIRICAL GROUND TRUTH`: Reliance on quantitative trial data over ideal simulations.
  5. `05. PLATFORM SCALABILITY`: Enforcing standard C++ HAL and MCP interfaces to reduce integration overhead.

### 7.5 Case Studies & Systems Gallery (`CaseStudiesSection.tsx`)
- **Category Filter Tabs**: `ALL PROJECTS`, `ROBOTICS & ROS`, `AI & ORCHESTRATION`, `C++ & EMBEDDED`.
- **3-Column Project Grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`)**:
  - **Card Header**: Image banner (`h-40`) + Category badge + Quick inspect button (`Maximize2`).
  - **Card Body**: Role badge (uppercase) + Title + 2-line summary (`line-clamp-2`).
  - **Card Highlights**: Top 3 quantitative bullet chips with green checkmarks (`CheckCircle2`).
  - **Card Tags**: Top 5 tech stack pills (`C++17`, `ROS2`, `Python`, `Google ADK`, etc.).
  - **Card Footer**: `Tech Breakdown →` button + `GitHub` link.

- **Interactive Specification Modal (Screen-Bounded `max-h-[82vh]`)**:
  - Opens on clicking `Tech Breakdown` or `Maximize2`.
  - **Overlay**: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md`.
  - **Modal Container**: `clean-card w-full max-w-4xl max-h-[82vh] flex flex-col cyber-bracket bg-[var(--bg-primary)] border-[var(--tech-cyan)] p-5 sm:p-6 shadow-[0_0_40px_rgba(0,240,255,0.3)] relative overflow-hidden`.
  - **3-Tab Navigation Bar**:
    - `01. ARCHITECTURE & BOUNDARIES` (Core Problem Statement, Key Decisions, System Boundaries Topology).
    - `02. RELIABILITY & METRICS` (Engineering Constraints, Failure Modes & Resilience, Hard Ground-Truth Metrics).
    - `03. IMPACT & V2 ROADMAP` (Alternatives Rejected, Organizational Impact, V2 Evolution Roadmap).
  - **Modal Body**: `flex-1 overflow-y-auto pr-1 font-tech text-xs` to keep all information scrollable within the viewport without breaking modal boundaries.

### 7.6 Capabilities & Skill Matrix (`CapabilitiesSection.tsx`)
- **4 Categorized Technical Columns**:
  - **Robotics & ROS**: ROS/ROS2, MoveIt, Nav2, Gazebo, CoppeliaSim, Vision Docking.
  - **Embedded & C++**: C++17, FreeRTOS, ESP32-S3, ZeroMQ, POSIX Threads, UART/SPI/I2C.
  - **AI & Multi-Agent**: Google ADK, Gemini 2.0/2.5, MCP, FastAPI, WebSockets, Async SQLAlchemy.
  - **Infrastructure & Tools**: Docker, GCP Cloud Run, Git CI/CD, Linux Kernel/POSIX, CMake.

### 7.7 Experience Timeline (`ExperienceTimeline.tsx`)
- **Vertical Blueprint Timeline**: Chronological nodes with date badges, role titles, company names, key achievements, and metric tags.

### 7.8 Contact Section (`ContactSection.tsx`)
- **Terminal Hub Box**: Displays email address with a 1-click clipboard copy button (`soundFx.playClick()`, visual checkmark toast `Email Copied!`).
- **Social Triggers**: Direct links to GitHub, LinkedIn, and PDF resume.

### 7.9 Magnetic Dock (`MagneticDock.tsx`)
- **Position**: Floating physics dock centered at viewport bottom (`fixed bottom-4 left-1/2 -translate-x-1/2 z-40`).
- **Motion**: Powered by `framer-motion` spring physics (`mass: 0.12`, `stiffness: 220`, `damping: 18`) for smooth icon magnification on mouse proximity.

---

## 8. Sound Effects System (`src/lib/sound.ts`)

The portfolio uses an active Web Audio API synthesizer (no external MP3 downloads required):
- **Hover Sound (`playHover`)**: Short sine wave sweep from 800Hz to 1200Hz over 0.04s.
- **Click Sound (`playClick`)**: Crisp triangle wave tap at 1400Hz over 0.05s.
- **Read Confirmation Chime (`playBeep`)**: Dual sine chime at 1050Hz over 0.03s when a section is verified.
- **Mute Control**: Persisted in application state via Navbar toggle button.

---

## 9. Replication Instructions for AI Agents

To recreate this exact portfolio layout with new content or placeholders:

1. **Setup Core Stack**: Vite + React + TypeScript + Tailwind CSS v4 + `framer-motion` + `lucide-react`.
2. **Apply Design Tokens**: Copy `src/index.css` root variables, `.grid-blueprint`, `.clean-card`, `.cyber-bracket`, and font imports (`Orbitron`, `Share Tech Mono`, `Google Sans`).
3. **Set Container Max Width**: Use `SciFiContainer.tsx` with `max-w-[1600px]` width constraint and 1.8s reading verification timer.
4. **Build Decluttered Project Cards**: Limit summary to 2 lines, highlights to top 3 bullets, tags to top 5 pills.
5. **Implement 82vh Tabbed Modal**: Restrict modal container height to `max-h-[82vh]` with `flex flex-col` and 3 tab switchers (`01. ARCHITECTURE & BOUNDARIES`, `02. RELIABILITY & METRICS`, `03. IMPACT & V2 ROADMAP`).
6. **Verify Build & Responsiveness**: Test build using `npm run build` and verify that all modal screens fit comfortably within viewport bounds on widescreen, laptop, and tablet displays.
