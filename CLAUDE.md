# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page, static portfolio site for **Karthik Mothiki — Senior Robotics Engineer**, styled as a cyber/neon "HUD telemetry" dashboard (cyan `#00F0FF` accents, CRT scanlines, blueprint grids, monospace tech labels). No router — one long page whose fixed `Navbar` anchors to section IDs. Content is largely hard-coded resume material (ROS2/C++17 HAL, autonomous docking metrics, project case studies).

## Commands

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) then production build to `dist/` |
| `npm run lint` | `oxlint` (Rust-based linter) |
| `npm run preview` | Serve the production build locally |

There is no test framework or test suite.

## Tech stack

- **React 19 + TypeScript**, built with **Vite 8**
- **Tailwind CSS 4** via the `@tailwindcss/postcss` plugin (`@import "tailwindcss"` in `src/index.css`); `tailwind.config.js` is a leftover and does not drive v4 theming
- **framer-motion** (spring/motion animations), **three + @react-three/fiber + @react-three/drei** (WebGL robot arm), **canvas-confetti**, **lucide-react** (icons), **clsx / tailwind-merge**

## Architecture

- `index.html` → `src/main.tsx` → `src/App.tsx`. `App` wraps everything in `ThemeProvider` and composes the sections in render order inside a `<main>`: Hero → InteractiveArchitecture → EngineeringPrinciples → LeadershipSection → CaseStudiesSection → CapabilitiesSection → ExperienceTimeline → ContactSection, plus `ParticleBackground`, `CustomCursor`, `Navbar`, `Footer`.
- **Sections** live in `src/components/`. Most are wrapped in the `SciFiContainer` layout shell. Two are "living" interactive demos rather than prose:
  - `HeroSection` embeds `Robotics3DCanvas` (interactive 3D robotic arm with HUD telemetry overlay) and `CyberTerminal` (a fake CLI whose commands hard-code resume metrics — commands defined in a switch in that file).
  - `ContactSection` embeds the accessible `MagneticDock` (framer-motion magnification dock; renders `<a>` or `<button>` per item).
- **Shared libs** in `src/lib/`:
  - `theme.tsx` — `ThemeProvider`/`useTheme`; light/dark/system, persisted to `localStorage['theme']`, toggles the `.dark` class on `<html>`. `index.html` runs an inline script before paint to apply the saved theme and avoid a flash.
  - `sound.ts` — `soundFx` singleton, a Web Audio API synthesizer with `playClick()` / `playHover()` / `playBeep()`. Interactive elements call these on click/hover; the Navbar has a mute toggle.
  - `utils.ts` — `cn()` class-name joiner (plain `filter(Boolean).join(' ')`, **not** tailwind-merge despite the dependency).
- **Theming/styling**: design tokens are CSS custom properties (`--tech-cyan`, `--bg-primary`, `--card-bg`, …) in `src/index.css`, overridden under `.dark`. Custom utility classes (`.grid-blueprint`, `.scanlines`, `.clean-card`, `.cyber-bracket`, `.spec-box`, glow/animations) are also defined there — the visual identity depends on these, so new styling should use the tokens rather than hard-coding colors.
- **Static assets**: everything under `public/` is served at the site root. `public/assets/img/` still holds many images left over from the pre-React Bootstrap template (testimonial/portfolio/detail shots) — most are unreferenced by current components. Resume PDF is `public/Karthik_Mothiki_Resume.pdf` and linked from the Navbar.
- `DESIGN.md` documents the design philosophy and component hierarchy but is **out of date**: it describes a light-blueprint "clean-card" theme, while the shipped implementation is the dark cyber/neon theme. Trust `src/index.css` over `DESIGN.md` for actual values.

## Gotchas

- `tsconfig.app.json` enforces `verbatimModuleSyntax` (use `import type` for type-only imports), `erasableSyntaxOnly` (no enums/namespaces/parameter properties), `noUnusedLocals` / `noUnusedParameters`, and `allowImportingTsExtensions` (extensioned imports like `./App.tsx` are the norm).
- **Orphaned components**: `SkillMatrix.tsx`, `ExperienceSection.tsx`, and `ProjectsSection.tsx` are not imported anywhere (legacy from an earlier design iteration). Edits to them have no visible effect on the site.
- Code style is inconsistent across files (semicolons, `import React` vs `import * as React`, `React.FC` annotations). Match the style of the file being edited; most components use semicolons.
- The git working tree is mid-transition: the old Bootstrap site's `assets/` files show as deleted and the current branch is `hifi-cyber-robotics`. The active app lives entirely in `src/` + `public/` + `index.html`.
