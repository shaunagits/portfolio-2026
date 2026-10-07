// The five rules `npm run check:ui` enforces (scripts/check-ui.mjs prints the same lines).
// Shown on the homepage and the System page.
export const checks = [
  'Text contrast stays at or above 4.5:1, including interactive states',
  'Colour, typography, and spacing come from shared tokens',
  'Buttons use consistent casing and language',
  'Images include alternative text and controls have accessible labels',
  'Motion follows one system and respects reduced-motion preferences',
];
