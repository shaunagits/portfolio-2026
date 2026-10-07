# DESIGN.md · read by people and by Claude

The rules for shauna.dev. Claude reads this before writing any UI here, and
`npm run check:ui` turns the checkable ones into a build failure.
Tokens live in `tokens/tokens.json`; `src/styles/tokens.css` is generated from it.

## Colour
- Text uses `--ink`, `--muted` or `--teal-text` (and `--on-ink` on an ink fill). Never `--reef`:
  it is 3.7:1 on paper, so graphics and large text only.
- Ink, reef and teal-text are shared with shauna.digital. Koa is shauna.dev only,
  for the résumé button shadow and small marks.
- The art palette (sky, lagoon, art-sand, palm) is for the painting and swatches only.
  Never text, buttons or states.
- No raw hex or rgb values in component styles. Add a token instead.

Two themes, day and dusk, from the same roles. Dusk values live in tokens.json -> dusk; the
switch is in the header and the first visit follows the system setting. To stay correct in both:
- Text on a solid --ink fill uses --on-ink (white by day, dark at dusk). Never --white for that.
- Surfaces that stay dark in both themes (footer, terminals, code, phone bodies) use --deep with
  --white or the --term-* colours.
- Shadows use rgba(var(--shadow-rgb), a), never --ink-rgb (ink turns light at dusk).
- Icons draw in currentColor; paper knockouts follow --paper. Never hardcode an icon colour.
- check:ui tests every contrast pair in both themes.

## Type
- Funnel Display for headlines, Archivo for reading, Space Grotesk for labels and data.
- Ten sizes, all tokens (`--text-*`): display-xl 70, display-l 52, heading 46, intro 32,
  title 28, lead 22, body-l 18, body 16, small 14, label 12. Display sizes are fluid.
- Every `font-size` is a `--text-*` token. The only exceptions are print sizes (pt) and
  type inside a scaled illustration (cqw). Need a new size? Add a token, don't type a number.

## Space and layout
- 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Desktop: 12 columns, 32px gutters, 64px margins. Phone: one column, 20px margins.

## Buttons
- Use the `.btn` pill. Never hand-style a link as a button.
- Labels in Title Case. No em dashes anywhere in copy.
- Reef shape for the main action, koa for the résumé, ink for the rest.

## Icons
- 24px grid, 2px padding. Rescue set: 1.8 outline, filled when selected.
  shauna.dev set: solid ink with paper cut-outs.
- One accent per icon, a tile when selected, one small movement.
- Every icon is decorative (`aria-hidden`) unless it is the only label, then `aria-label`.

## Motion
- One curve: `--ease`. Three speeds: fast 120ms (hover, press), base 180ms
  (buttons, toggles, X-ray), slow 320ms (panels, sections).
- Stop every loop when `prefers-reduced-motion` is set. Looping video also gets a pause button.
- Only things you can click move on hover. A card that lifts promises a click; if it
  isn't a link or button, it stays still.

## Accessibility
- Text contrast at or above 4.5:1 in every state.
- Every image has alt text (`alt=""` only when purely decorative).
- Every button and link has a visible label or an `aria-label`.
- Touch targets at least 44px.
