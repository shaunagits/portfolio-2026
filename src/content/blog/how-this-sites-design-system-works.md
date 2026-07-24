---
title: "How This Site's Design System Works"
category: "Process"
description: "Black, white, and one teal. The palette sounds simple. This is the system underneath it: three color literals, two teals for a reason, and components that cannot drift."
readTime: "5 min read"
publishedDate: 2026-07-24
---

This site looks simple on purpose: white paper, near-black ink, one teal accent. People assume simple means easy. It is the opposite. When a design has three colors and two typefaces, every decision is load-bearing, and there is nowhere for a lazy choice to hide.

So here is the system underneath the simplicity, and the reasoning behind the parts of it I fought with.

---

## Three numbers drive every color

The entire palette derives from three RGB triplets in one token block: the primary teal, the ink, and the paper. Every line, shadow, tint, and hover state on this site is computed from those three values. They are the only color literals in the stylesheet.

That constraint is not aesthetic minimalism. It is drift prevention. The moment a stylesheet accumulates one-off hex values, the palette stops being a decision and becomes an archaeology project. With three literals, retheming this entire site is a one-line change, and I know that because I retheme it every time I second-guess the accent. Which is often.

---

## The black is not black

The ink color is #0B1416, not #000000. To the eye it reads as black, at an 18.65 to 1 contrast ratio against the paper. But it is pulled toward the same hue family as the teal, around 192 degrees.

The earlier version used pure black with neutral greys, and something felt off that took me a while to name: the teal read as applied, like a sticker on top of the design, rather than native to it. Pure black and neutral grey share no hue with the accent, so the accent never looked like it belonged. Shifting the neutrals toward the brand hue fixed it. Nobody will ever consciously notice, which is the point.

---

## Why there are two teals

The accent is #2C8C99. It is a good teal. It also fails accessibility standards in a specific, sneaky way: on white, it measures 3.95 to 1, which passes WCAG AA for large text and fails it for small text.

A lot of sites ship that failure. The fix here is a second, darker teal, #1F6A75, at 6.2 to 1, used exclusively for small teal text: labels, meta lines, inline links. The bright teal handles fills, underlines, and large type. The rule is encoded in the tokens themselves, so the wrong shade in the wrong role looks wrong in code review, not just in an audit.

This is my favorite kind of design decision, where the accessibility constraint made the design better. The two shades give the accent a quiet hierarchy it did not have before.

---

## Buttons that cannot come apart

The buttons share one gesture: an outlined pill with a solid shape of the same silhouette offset up and to the right, and on hover the shape slides home and fills the button.

The obvious implementation is a pseudo-element. I rejected it, because a pseudo-element is a second element, and two elements can disagree: border radius changes on one and not the other, and the shape drifts from the button by a pixel. Instead the shape is a zero-blur box-shadow. A box-shadow inherits the element's border radius by definition, so the silhouette literally cannot drift. There is no stacking-context management, no z-index, nothing to maintain.

I also tested the inverse animation, where the button travels to the shape. It flickers: if the button moves out from under a fast-moving cursor, hover ends, the button moves back, hover begins, forever. The shape travels instead. Flicker-proof by construction.

---

## One component, one truth

Every project on this site renders its media through a single component, whether it appears as a card on the homepage or as the hero of its case study. Both consumers call the same code with the same data.

That means the homepage and the case study cannot show different screenshots of the same project. Not "should not." Cannot. And because the work section is data-driven, adding a project to this site is one JSON entry: the card and the full case-study page generate from it automatically.

The general principle: wherever two parts of a site must agree, do not write a guideline asking them to agree. Make disagreement impossible.

---

## What got rejected

Systems are defined by their refusals, so, honestly:

A hollow teal ring for the secondary button. It needed a paper-colored knockout to fake the ring, which only worked on white backgrounds. A component that silently requires a specific background is a trap for future me. Cut.

A nav that flips color over every dark section. It flipped mid-page at About and flipped back, and it read as a glitch, not a feature. Now it flips exactly once, when the footer enters view. One flip is intentional. Two is a bug you shipped on purpose.

---

## Why I work this way

I design and build these things as one person, and that changed how I think about both halves. When the same head holds the data model and the UI, the design decisions and the implementation decisions turn out to be the same decisions. The screens told me what the schema wanted to be. The box-shadow told me what the hover gesture could be.

A design system for one is still a design system. The discipline is the same at any scale: fewer decisions, held longer, enforced by the code instead of by memory.

If you want to see the system rather than read about it, the source for this site is public on my GitHub, reasoning documents included.
