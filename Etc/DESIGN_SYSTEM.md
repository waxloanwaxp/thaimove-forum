# ThaiMove Forum — Design System

**Subject:** Thai vehicle transport marketplace — connects customers needing transport with providers who own vehicles (pickups, vans, trucks, tow, crane). Two-sided: customers post jobs, providers bid. Thai language, mobile-first, real-time bidding.

**Audience:** Thai users (customers: individuals moving house, businesses shipping goods; providers: truck owners, transport companies). High mobile usage, practical/utilitarian mindset.

**Primary Job:** Reduce friction from "I need a truck" to "job confirmed with provider contact info."

---

## 1. Color — Core Palette (6 named tokens)

| Token | Hex | Role | Rationale |
|-------|-----|------|-----------|
| `bg-base` | `#F8FAFC` | Page background | Cool slate-white — cleaner than warm cream, feels "logistics/tech" not "lifestyle" |
| `fg-base` | `#0F172A` | Primary text | Near-black slate — high contrast on bg-base, readable Thai glyphs |
| `fg-muted` | `#475569` | Secondary text | Slate-600 — distinct from fg-base, not grey |
| `brand` | `#0EA5E9` | Primary action, links, focus | Sky-500 — "open road/sky" blue, not corporate blue-600; works on light & dark |
| `brand-strong` | `#0284C7` | Hover/active brand | Sky-600 — perceptible shift |
| `accent` | `#F59E0B` | Customer CTAs, warnings, "open for bidding" | Amber-500 — Thai gold/orange cultural resonance; distinct from brand |
| `accent-strong` | `#D97706` | Hover accent | Amber-600 |
| `success` | `#10B981` | Provider CTAs, confirmed, "job done" | Emerald-500 — "go/green light" for providers; distinct from brand/accent |
| `success-strong` | `#059669` | Hover success | Emerald-600 |
| `danger` | `#EF4444` | Errors, destructive | Red-500 — standard |
| `border` | `#E2E8F0` | Dividers, input borders | Slate-200 — subtle structure |
| `border-strong` | `#CBD5E1` | Focused inputs, active tabs | Slate-300 |
| `surface` | `#FFFFFF` | Cards, modals, dropdowns | Pure white — crisp on bg-base |
| `surface-elevated` | `#FFFFFF` | Modals, toasts (with shadow) | Same, elevation via shadow |
| `overlay` | `#0F172A99` | Modal backdrop | 60% near-black |

**No warm cream, no terracotta, no acid green, no near-black tinted backgrounds.** This palette is logistics/transport: sky, gold, emerald, slate.

---

## 2. Typography — One Family, Clear Scale

**Family:** `Prompt` (already in use) — Thai-first, geometric humanist, 7 weights (300–700). No second family needed.

**Scale (clamp fluid, mobile → desktop):**

| Token | Size (clamp) | Weight | Line-height | Use |
|-------|--------------|--------|-------------|-----|
| `text-display` | `clamp(1.75rem, 4vw, 2.5rem)` | 700 | 1.15 | Page hero, modal titles |
| `text-h1` | `clamp(1.5rem, 3vw, 2rem)` | 700 | 1.2 | Section headers |
| `text-h2` | `clamp(1.25rem, 2.5vw, 1.5rem)` | 600 | 1.3 | Card titles, thread titles |
| `text-h3` | `clamp(1.125rem, 2vw, 1.25rem)` | 600 | 1.35 | Sub-sections |
| `text-body` | `clamp(0.9375rem, 1.5vw, 1rem)` | 400 | 1.6 | Body copy, descriptions |
| `text-body-sm` | `clamp(0.8125rem, 1.25vw, 0.875rem)` | 400 | 1.55 | Meta, timestamps |
| `text-caption` | `clamp(0.75rem, 1vw, 0.8125rem)` | 500 | 1.5 | Labels, badges, form hints |
| `text-button` | `clamp(0.875rem, 1.25vw, 0.9375rem)` | 600 | 1 | Buttons, CTAs |

**No all-caps labels. No single-word italic/bold in headlines. No monospace for UI labels.**

---

## 3. Spacing — 4px Base, Named Tokens

| Token | Value | Use |
|-------|-------|-----|
| `space-1` | 4px | Icon gaps, inline gaps |
| `space-2` | 8px | Stack small elements |
| `space-3` | 12px | Form field gaps |
| `space-4` | 16px | Card padding, section gaps |
| `space-5` | 20px | Modal padding |
| `space-6` | 24px | Section gaps, card gaps |
| `space-8` | 32px | Major section gaps |
| `space-10` | 40px | Page margins |
| `space-12` | 48px | Hero vertical |

**Container max-width:** `72rem` (1152px) — `max-w-6xl` in Tailwind. Content centered.

---

## 4. Radius — Three Levels Only

| Token | Value | Use |
|-------|-------|-----|
| `radius-sm` | 6px | Badges, pills, small chips |
| `radius-md` | 10px | Buttons, inputs, cards |
| `radius-lg` | 16px | Modals, hero banner, major containers |

**No `rounded-full` on everything. No single radius everywhere.**

---

## 5. Shadow — Two Elevation Levels

| Token | Value | Use |
|-------|-------|-----|
| `shadow-low` | `0 1px 2px rgb(15 23 42 / 0.06), 0 1px 3px rgb(15 23 42 / 0.1)` | Cards, dropdowns |
| `shadow-high` | `0 10px 25px -5px rgb(15 23 42 / 0.15), 0 8px 10px -6px rgb(15 23 42 / 0.1)` | Modals, toasts, elevated surfaces |

**No soft grey shadow on every card. Shadow = elevation meaning.**

---

## 6. Layout Principles

1. **Left-aligned by default** — Thai reads LTR; forms, lists, cards left-aligned. Center only for: hero CTA, empty states, modal actions.
2. **Grid-first thread list** — Mobile: 1 col. ≥640px: 2-col option for thread cards with image. ≥1024px: sidebar + main.
3. **Sticky nav + sticky filter bar** — Both collapse on scroll down, reveal on scroll up (mobile).
4. **Modal = full-screen on mobile ≤480px** — Side-sheet on tablet, centered on desktop.
5. **Touch targets ≥44×44px** — All interactive elements.

---

## 7. Motion — One Orchestrated Moment

- **Page load:** Single fade-in (200ms) on hero + thread list staggered (50ms/item, max 300ms total).
- **Modal open:** Fade backdrop + scale(0.98→1) 150ms.
- **No hover transitions on every card.** Only: buttons (color shift), thread card image (subtle scale 1.02), tab underline slide.
- **Reduced motion respected:** `prefers-reduced-motion` disables all.

---

## 8. Component-Specific Rules

### Thread Card
- **Image:** Aspect-ratio 4:3, object-cover, radius-md top corners only (card radius-lg).
- **Badges:** Category (brand bg), Status (accent/open, success/confirmed) — pill radius-sm.
- **Actions:** Provider sees "Bid" (success), Customer sees "View" (brand). One primary action.
- **Confirmed state:** Emerald border + winner summary card inside (not separate modal).

### Post Composer (New Thread Modal)
- **Steps:** Single scroll (not wizard). Required fields marked with asterisk.
- **Image upload:** Dropzone with preview grid (4 max), aspect-square thumbnails.
- **Primary CTA:** Accent (customer posts job). Sticky footer on mobile.

### Nav Bar
- **Logo:** Icon + "ThaiMove Forum" — brand color icon, fg-base text.
- **Search:** Inline on desktop, expandable on mobile (tap icon → full-width).
- **User avatar:** Role-colored ring (brand=customer, success=provider).
- **No hamburger on desktop.** Drawer only mobile.

### Profile Card
- **Avatar:** 40px, role ring.
- **Stats:** 3 inline (Threads, Bids, Confirmed) — caption weight, fg-muted labels.
- **Badge:** Role pill (Customer/Provider) — brand/success bg.

---

## 9. What This Is NOT (Anti-Patterns)

- ❌ Warm cream bg + terracotta accent
- ❌ Near-black bg + acid green
- ❌ Broadsheet newspaper columns
- ❌ Identical rounded cards with soft grey shadows
- ❌ ALL-CAPS eyebrow labels
- ❌ Middle-dot meta strings (`A · B · C`)
- ❌ `WORD — fragment` spaced em-dash labels
- ❌ Monospace for small labels
- ❌ `→` appended to every button/link

---

## 10. Implementation Notes

- **Tailwind config:** Extend theme with tokens above. No `@apply` — use utility classes directly for clarity.
- **CSS variables:** Define palette as `:root` vars for dynamic theming (future dark mode).
- **Thai line-height:** Prompt needs slightly taller line-height (1.6 body) for Thai glyphs.
- **Font loading:** `font-display: swap` on Prompt; fallback `system-ui, sans-serif`.