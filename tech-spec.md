# HostItWise — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.0.0 | UI framework |
| react-dom | ^19.0.0 | DOM renderer |
| react-router-dom | ^7.0.0 | Multi-page routing |
| framer-motion | ^12.0.0 | Scroll-triggered animations, page transitions, FAQ accordion |
| lucide-react | ^0.460.0 | Icon library |
| tailwindcss | ^3.4.0 | Utility CSS (pre-installed) |
| clsx | ^2.1.0 | Conditional class joining |
| tailwind-merge | ^2.6.0 | Tailwind class deduplication |

---

## Component Inventory

### shadcn/ui (Built-in — already available)

| Component | Usage |
|-----------|-------|
| Button | CTAs, form submit, outline buttons (override colors to match design tokens) |
| Input | Contact form fields |
| Textarea | Contact form message field |
| Select | Contact form industry dropdown |
| Card | Service cards, pricing cards, result cards, problem cards |
| Sheet | Mobile navigation drawer |
| Accordion | FAQ section on Packages page |

### Custom Components

| Component | Description | Reused On |
|-----------|-------------|-----------|
| ScrollReveal | IntersectionObserver wrapper that triggers Framer Motion fade-in | All sections on all pages |
| StaggerContainer | Parent wrapper for staggered child animations | Card grids, timeline steps, FAQ items |
| StaggerItem | Child element that animates with stagger delay | Inside StaggerContainer |
| NavHeader | Fixed navigation with scroll-aware background | All pages |
| MobileNav | Sheet-based mobile menu | All pages |
| Footer | Site footer with 4-column layout | All pages |
| PageLayout | Wrapper: NavHeader + main + Footer + scroll-to-top on route change | All pages |
| SectionHeader | Reusable eyebrow + headline + subtext pattern | Multiple sections |
| ServiceCard | Compact service card for Home preview | Home Section 3 |
| ServiceDetailCard | Full-width detailed service card | Services page |
| PricingCard | Pricing card with optional featured state | Home Section 4, Packages page |
| ProblemCard | Icon + title + description card | Home Section 2 |
| IndustryCard | Icon + title + industry list | Home Section 7 |
| ResultCard | Image + category + title + metrics | Home Section 6, Results page |
| ResultItemCard | Extended result card for Results page | Results page |
| TimelineStep | Circle number + title in horizontal flow | Home Section 5 |
| ContactForm | Form with validation and state | Contact page |
| FAQItem | Self-contained accordion item | Packages page FAQ |
| StatCounter | Animated number counter | About page stats |

---

## Animation Implementation Table

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Page load hero stagger (caption→headline→sub→CTA→trust→visual) | Framer Motion | motion.div with initial/animate, staggerChildren on parent | Low |
| Scroll-triggered section reveals | Framer Motion | whileInView + viewport={{ once: true, amount: 0.1 }} | Low |
| Card grid stagger | Framer Motion | staggerChildren on parent container, each child uses variants | Low |
| Card hover (shadow + translateY) | Tailwind CSS | group-hover classes, transition-all duration-300 | Low |
| Button hover (bg + translateY) | Tailwind CSS | hover:bg-teal-hover hover:-translate-y-0.5 | Low |
| Nav scroll background transition | React state + CSS | useScroll hook toggles class, transition-all duration-300 | Low |
| FAQ accordion expand/collapse | Framer Motion | AnimatePresence + motion.div with height auto animation | Medium |
| Timeline step stagger | Framer Motion | staggerChildren with translateX variant | Low |
| Stat counter (0→final) | Custom hook | useCountUp with IntersectionObserver trigger, requestAnimationFrame | Medium |
| Mobile nav sheet | shadcn Sheet | Built-in slide animation | Low |
| Smooth scroll | CSS + JS | scroll-behavior: smooth on html, scrollIntoView for nav | Low |
| Page transition | Framer Motion | AnimatePresence wrapping Routes with fade | Low |

---

## State & Logic Plan

### Scroll-Triggered Nav

```
useScrollPosition() → returns scrollY
NavHeader reads scrollY
if scrollY > 50: apply scrolled classes (bg-white/95, shadow, backdrop-blur)
else: apply transparent classes
```

### FAQ Accordion (Custom — no external lib)

```
FAQItem state: isOpen (boolean)
Toggle: setIsOpen(!isOpen)
Render: question row + conditional answer div
Animate: CSS max-height transition (300ms) or Framer Motion AnimatePresence for height auto
```

### Stat Counter

```
StatCounter receives: target number (string like "200+" or "Zero")
If numeric: useCountUp(target, duration=1500ms)
  - IntersectionObserver triggers start
  - requestAnimationFrame with eased interpolation
  - Display formatted number + suffix
If "Zero": static display
```

### Mobile Navigation

```
MobileNav state: isOpen (boolean)
Trigger: hamburger icon click
Sheet slides from right with nav links
Links close sheet on click + navigate
```

### Active Nav Link

```
Use react-router-dom useLocation()
Compare pathname to each link's path
Apply active styles (text-teal font-semibold) when matched
```

---

## Project File Structure

```
/mnt/agents/output/app/
├── public/
│   └── images/
│       ├── hero-mockup.png
│       ├── result-website.png
│       ├── result-reviews.png
│       ├── result-calls.png
│       ├── result-ads.png
│       ├── result-local.png
│       ├── result-followup.png
│       ├── about-visual.png
│       ├── service-website.png
│       ├── service-hosting.png
│       ├── service-lead.png
│       ├── service-reputation.png
│       ├── service-visibility.png
│       ├── service-ads.png
│       ├── service-followup.png
│       └── service-content.png
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── components/
│   │   ├── ui/               # shadcn components (auto-generated)
│   │   ├── NavHeader.tsx
│   │   ├── MobileNav.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ServiceDetailCard.tsx
│   │   ├── PricingCard.tsx
│   │   ├── ProblemCard.tsx
│   │   ├── IndustryCard.tsx
│   │   ├── ResultCard.tsx
│   │   ├── ResultItemCard.tsx
│   │   ├── TimelineStep.tsx
│   │   ├── ContactForm.tsx
│   │   ├── FAQItem.tsx
│   │   └── StatCounter.tsx
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useCountUp.ts
│   ├── lib/
│   │   └── utils.ts
│   └── pages/
│       ├── Home.tsx
│       ├── Services.tsx
│       ├── Packages.tsx
│       ├── Results.tsx
│       ├── About.tsx
│       └── Contact.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Tailwind Configuration Notes

### Custom Colors (extend in tailwind.config.js)

```js
colors: {
  teal: {
    DEFAULT: '#2BADAD',
    hover: '#249898',
    light: '#E8F8F8',
  },
  gunmetal: '#0E1E20',
  'dark-footer': '#081214',
  'primary-text': '#0E1E20',
  'secondary-text': '#4B5B5D',
  'muted-text': '#6B7A7C',
  'soft-section': '#F7FAFA',
  'borders': '#DCEAEA',
}
```

### Custom Font

```js
fontFamily: {
  inter: ['Inter', 'sans-serif'],
}
```

---

## Routing Plan

```
/           → Home
/services   → Services
/packages   → Packages
/results    → Results
/about      → About
/contact    → Contact
```

BrowserRouter in App.tsx with Routes and Route elements. Nav links use react-router-dom `<Link>` components.

---

## Key Implementation Notes

1. **No AI buzzwords anywhere** — strictly business/operations language.
2. **No fake testimonials** — Results page uses only before/after metrics and dashboard screenshots.
3. **Scroll to top on route change** — useEffect in PageLayout or App.tsx that calls window.scrollTo(0,0) when pathname changes.
4. **All CTAs lead to /contact** or scroll to relevant section.
5. **Form is presentational** — no backend integration, just UI with success state.
6. **Images are AI-generated** — save to public/images/ and reference via `/images/filename.png`.
7. **shadcn components override styles** — modify in `components/ui/button.tsx` etc. to match design tokens (teal instead of default zinc).
