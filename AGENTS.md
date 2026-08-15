<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# The GTM Table Agent Guide

## Project

The GTM Table is a curated Bay Area dinner series pairing enterprise-GTM
founders with operators who have run the play, funded by sponsors. The site is
live at `gtmers.co`.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 — design tokens live in `src/app/globals.css` under `@theme`
- Vercel — pushing to `main` builds and promotes to production
- Resend — intake forms, via server actions in `src/app/actions.ts`

## Routes

- `/` — landing page
- `/founder`, `/operator`, `/sponsor` — intake forms

Three roles, three doors. There is deliberately no fourth "keep me posted"
path: the three forms are already expressions of interest, and a lower-effort
option only let people skip qualifying. `/updates` 308s to `/`.

## Design system — retro arcade

The site is an 8-bit CRT arcade design. Recreated from
`design_handoff_gtm_table_arcade/`. The rules:

- **No `border-radius` anywhere.** Borders are 3px.
- Shadows are hard offsets, never blurred: panels `8px 8px 0 #000`, cards
  `5-6px`, buttons `5px` shrinking to `2px` on hover with a
  `translate(3px, 3px)` press.
- Palette (tokens in `globals.css`): page `#0a0a14`, band `#0d0d20`, panel
  `#13132b`, borders `#34346a` / `#2a2a52`.
- Accents are role-coded and consistent everywhere: **gold `#ffd23f`**
  founders/primary, **cyan `#52d8ff`** operators, **magenta `#ff5db1`**
  sponsors, **green `#46f797`** meta/status.
- Type: Press Start 2P for headings, labels and buttons; IBM Plex Mono for
  body. Both via `next/font`.
- Responsive through `repeat(auto-fit, minmax(...))` grids and `clamp()`.
  No media queries.
- The CRT scanline overlay is a flag in `src/lib/theme.ts`, off by default.

## Voice — arcade visuals, straight language

This is the distinction to hold onto. The 8-bit **visuals** carry all the
personality. The **words** stay plain and operator-led.

Do not reintroduce game-mechanic vocabulary. No "INSERT COIN", no player
numbering (P1/P2/P3), no "GAME OVER", "QUEST LOG", "CO-OP MODE", "PRESS
START", "SELECT YOUR PLAYER". It was removed on purpose:

- Numbering ranked operators second behind the paying customer, when they are
  the scarce side of the marketplace.
- Coin-op framing sat badly next to a real paid seat.
- Sponsors have to forward these pages to finance.

Copy should read premium, practical, curated, operator-led. Avoid generic
networking, community, course, or webinar language.

**Say what a thing is, never what it is not.** No "not a booth", "no panels,
no stage", "no portal, no feed", "they do not pitch". Every one of those was
removed on purpose — defining by negation puts the reader's attention on the
thing you are disowning. Write the positive version instead: "they host, and
they listen", "everyone at the table talks".

## Email

Templates live in `actions.ts` and must match the arcade design, but email is
its own medium:

- **Do not use Press Start 2P in email.** Mail clients will not load
  webfonts. Use the `MONO` stack (`'Courier New', Courier, monospace`).
- Table-based layout, inline styles, no `box-shadow` (Outlook drops it).
- `RESEND_FROM` only has to sit on the verified domain — no mailbox needs to
  exist behind `hello@gtmers.co`. Reply-To carries replies somewhere real.
- Contact bucketing is deliberately outside the send `try` block: a duplicate
  applicant must never cost us the confirmation and the notification.

## Product direction

Do not add any of the following unless explicitly requested:

- Authentication
- Database
- Payments
- Member portal
- Event management

Note that Resend contacts store only name and email, so form answers (deal
size, stage, budget) cannot be segmented on. Richer segmentation would need a
store, which is a real feature — ask first.

## Code and content guidelines

- Keep components clean and easy to reason about.
- Keep copy easy to edit — page content sits in arrays at the top of the file.
- Prefer simple, maintainable structure over premature abstraction.
- Do not overbuild.

## Verification

After meaningful code changes, always run lint and build.

Two failure modes worth knowing, both hit in practice:

- **Env vars are baked in at build time.** Saving them in Vercel does nothing
  until a new deployment. `actions.ts` returns success when Resend config is
  missing, so a misconfigured form looks identical to a working one — verify
  a real send, not just the success panel.
- **macOS Chrome will not open a window narrower than ~500px.** Screenshotting
  at `--window-size=390` renders at 500 and crops, which looks exactly like
  mobile overflow. Test narrow viewports in an iframe, and measure
  `scrollWidth` vs `clientWidth` rather than trusting the image.
