# ZENITH'26 Symposium Website – AI Build Specification

## Project Overview
Create a cinematic, high-impact, responsive symposium website for a college technical symposium using a **Warrior × Dragon fusion theme**, powered by **canvas-based interactive background animation**, scroll pinning, and immersive motion design inspired by modern festival websites.

---

## College Name
**JEPPIAAR ENGINEERING COLLEGE**

---

## Symposium Name
**ZENITH'26**

_Tagline (optional): Rise of the Warrior Dragon_

---

## Core Theme & Visual Identity

### Concept
A **fusion of Warrior and Dragon** representing:
- Strength
- Intelligence
- Fearlessness
- Technological dominance

The UI should feel **mythical, battle-ready, and cinematic**, not minimal.

---

### Color Palette (Blood Moon Theme)
- **Blood Moon Red:** `#D73A2D`
- **Inferno Orange:** `#FF6A2A`
- **Shadow Black:** `#0F0F14`
- **Accent Glow:** Ember gradients (red → orange)

Usage:
- Backgrounds: Shadow Black
- Headings & accents: Blood Moon Red
- CTAs & highlights: Inferno Orange
- Hover states: Ember glow + brightness shift

---

### Typography
- Primary: Inter / Space Grotesk
- Display Headings: Extra-bold, wide tracking
- Large-scale motion typography allowed in hero section

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** lucide-react
- **Animation Engine:**  
  - Canvas API (primary)  
  - requestAnimationFrame loop  
  - Optional Three.js for enhanced depth
- **Scroll Control:** Scroll pinning (GSAP-style behavior or custom)
- **Deployment-ready:** Yes

---

## Global Requirements

- Fully responsive (mobile / tablet / desktop)
- Dark-mode only (cinematic experience)
- GPU-accelerated animations
- Reusable layout (Navbar + Footer)
- No autoplay audio
- Optimized canvas rendering (no dropped frames)

---

## Advanced Animated Background System (CORE FEATURE)

> This animation system is **canvas-driven**, not CSS-based.

### Structural Model
- A **full-screen fixed `<canvas>`** is rendered behind content
- Canvas stays pinned during scroll (200vh section)
- DOM content scrolls over the canvas
- Animation progress is driven by:
  - Scroll position
  - Mouse movement
  - Time (idle motion)

---

### Canvas Behavior
- Renders an **abstract Warrior–Dragon fusion visual**
- Uses a pseudo-3D camera effect (no DOM transforms)
- Background image/texture is:
  - Warped
  - Slightly rotated
  - Depth-shifted based on interaction

Canvas properties:
- `position: fixed`
- `width: 100vw; height: 100vh`
- `will-change: transform`
- Transparent background (scene drawn manually)

---

### Scroll Interaction (Pinning System)
- Hero section height: `200vh`
- Canvas remains fixed while scrolling
- Scroll position controls:
  - Camera depth (slow push-in / pull-out)
  - Intensity of distortion
  - Transition between Dragon ↔ Warrior dominance

Effect:
- Creates illusion of entering a scene
- Background feels alive while content moves

---

### Mouse Interaction (Hover Illusion)
Mouse movement does NOT rotate DOM elements.

Instead:
- Mouse position is captured via JS
- Values mapped to canvas camera rotation

Behavior:
- Horizontal mouse move → subtle Y-axis rotation
- Vertical mouse move → subtle X-axis rotation
- Hover increases animation intensity
- Cursor proximity increases glow / contrast

Result:
- Background appears to “flip” or “tilt”
- Effect feels 3D without actual 3D DOM transforms

---

### Visual Layers (Depth System)
1. **Background:** Canvas (Warrior × Dragon scene)
2. **Midground:** Oversized animated typography (marquee-style)
3. **Foreground:** Hero card, CTAs, interactive UI

All layers move at different speeds to simulate depth.

---

### Motion Typography
- Giant repeating text (e.g., ZENITH RISE REIGN)
- Moves horizontally while scrolling vertically
- Speed varies per row to enhance parallax

---

### Performance Rules
- No video backgrounds
- Canvas redraw via `requestAnimationFrame`
- Throttled mouse input
- Low-poly or flat-shaded visuals preferred

---

## Pages & Features

---

## 1. Home Page (`/`)

### Hero Section
- Animated ZENITH'26 title reveal
- College Name
- Optional tagline
- CTA Buttons:
  - Register Now
  - View Events

Background:
- Full-screen pinned canvas animation
- Mouse-reactive pseudo-3D motion
- Scroll-controlled depth shift

---

### About Symposium
- Narrative-driven description
- Animated divider (flame / claw / slash motif)

---

### Event Categories
- Technical Events
- Non-Technical Events
- Cards with glow, lift, and tilt on hover

---

## 2. Technical Events Page (`/technical-events`)
- Event card grid
- Each card:
  - Event Name
  - Description
  - Register Button
- Hover:
  - Card tilt
  - Ember border glow

---

## 3. Non-Technical Events Page (`/non-technical-events`)
- Same structure as technical events
- Slightly lighter animation tone

---

## 4. Staff Coordinators Page (`/staff-coordinators`)
- Faculty cards styled like engraved metal plates
- Name, Department, Role, Contact

---

## 5. Student Coordinators Page (`/student-coordinators`)
- Student cards
- Consistent animation language

---

## 6. Contact Page (`/contact`)
- Address
- Email
- Phone
- Optional UI-only contact form
- Subtle ember motion in background

---

## Navigation Bar
- Transparent over hero canvas
- Solid background after scroll
- Items:
  - Home
  - Technical Events
  - Non-Technical Events
  - Staff Coordinators
  - Student Coordinators
  - Contact
- Hover underline: animated ember stroke

---

## Footer
- ZENITH'26
- JEPPIAAR ENGINEERING COLLEGE
- Contact Info
- Quick Links
- Animated ember divider line

---

## Suggested Folder Structure

/app
  /page.tsx
  /technical-events
  /non-technical-events
  /staff-coordinators
  /student-coordinators
  /contact

/components
  Navbar.tsx
  Footer.tsx
  CanvasBackground.tsx
  EventCard.tsx

/lib
  animation-utils.ts
  canvas-engine.ts

/styles
  globals.css
  animations.css

---

## Final Instruction to AI / Developer

Build this project using **Next.js App Router + Tailwind + shadcn/ui**, implementing:

- Canvas-based pinned background animation
- Scroll-driven depth transitions
- Mouse-reactive pseudo-3D camera motion
- Warrior × Dragon fusion visuals
- Blood Moon color palette
- Cinematic, high-performance UI

The site should feel like **stepping into a living battlefield of innovation**, not a static website.