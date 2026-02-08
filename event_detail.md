# ZENITH'26 Symposium Website – AI Build Specification

## Project Overview
Create a cinematic, high-impact, responsive symposium website for a college technical symposium with an **epic Warrior × Dragon fusion theme**, immersive motion backgrounds, and modern interactive UI.

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
A **fusion of Warrior and Dragon** symbolizing:
- Strength
- Intelligence
- Fearlessness
- Technological dominance

The UI should feel **battle-ready, mythical, and futuristic**.

---

### Color Palette (Blood Moon Theme)
- **Blood Moon Red:** `#D73A2D`
- **Inferno Orange:** `#FF6A2A`
- **Shadow Black:** `#0F0F14`
- **Accent Glow:** Soft ember gradients (red → orange)

Usage:
- Backgrounds: Shadow Black
- Highlights & CTAs: Inferno Orange
- Headings & accents: Blood Moon Red
- Hover / glow effects: Gradient ember glow

---

### Typography
- Primary: Bold, sharp sans-serif (Inter / Space Grotesk)
- Headings: Extra-bold, wide tracking
- Motion text allowed for hero section

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** lucide-react
- **Animation:** Framer Motion + CSS transforms
- **Graphics:** SVG / Canvas / Three.js (optional enhancement)
- **Deployment-ready:** Yes

---

## Global Requirements

- Fully responsive (mobile / tablet / desktop)
- Dark mode only (cinematic experience)
- Smooth page transitions
- Reusable layout with persistent navbar & footer
- Subtle soundless motion (no autoplay audio)
- Performance-optimized animations

---

## Animated Background System (IMPORTANT)

### Background Behavior
- Dynamic **Warrior–Dragon abstract silhouette**
- Parallax depth layers
- Ember particles floating slowly

### Mouse Interaction
- Background **transforms on mouse hover**
  - Rotate slightly on X/Y axis
  - Scale or morph shapes subtly
  - Glow intensity increases near cursor
- Use `onMouseMove` with Framer Motion or CSS variables

### Example Effects
- Dragon outline morphs into warrior armor edges
- Ember sparks follow cursor
- Gradient shifts on hover

_No heavy video backgrounds — must be GPU-efficient_

---

## Pages & Features

---

## 1. Home Page (`/`)

### Hero Section
- ZENITH'26 (animated reveal)
- College Name
- Tagline
- CTA Buttons:
  - Register Now
  - View Events

Background:
- Full-screen animated Warrior × Dragon scene
- Mouse-responsive transformations

---

### About Symposium
- Description with myth-tech narrative
- Animated divider (slash / flame / claw mark)

---

### Event Categories
- Technical Events
- Non-Technical Events
- Cards with hover glow + lift animation

---

## 2. Technical Events Page (`/technical-events`)
- Grid of event cards
- Each card includes:
  - Event Name
  - Short Description
  - Register Button
- Hover effect:
  - Card tilt
  - Ember border glow

---

## 3. Non-Technical Events Page (`/non-technical-events`)
- Same structure as technical events
- Slightly more playful animations

---

## 4. Staff Coordinators Page (`/staff-coordinators`)
- Coordinator cards
- Details:
  - Name
  - Department
  - Role
  - Contact Info
- Cards styled like engraved armor plates

---

## 5. Student Coordinators Page (`/student-coordinators`)
- Student cards
- Animated hover highlights
- Consistent theme

---

## 6. Contact Page (`/contact`)
- College Address
- Email
- Phone
- Optional UI-only contact form
- Background embers subtly animated

---

## Navigation Bar
- Transparent on hero
- Solid on scroll
- Items:
  - Home
  - Technical Events
  - Non-Technical Events
  - Staff Coordinators
  - Student Coordinators
  - Contact
- Hover underline: fiery animated stroke

---

## Footer
- ZENITH'26
- JEPPIAAR ENGINEERING COLLEGE
- Contact Information
- Quick Links
- Subtle animated ember line on top

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
  AnimatedBackground.tsx
  EventCard.tsx

/lib
/styles
  globals.css
  animations.css

---

## Final Instruction to AI / Developer

Build this project using **Next.js App Router + shadcn/ui**, fully implementing:
- Blood Moon color palette
- Warrior × Dragon combined theme
- Mouse-interactive animated background
- Smooth Framer Motion animations
- Dark, cinematic, high-impact UI

The site should feel like **entering a battlefield of innovation**.
