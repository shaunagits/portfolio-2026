---
title: "Do you actually need an app? Web apps vs. native apps explained"
category: "Resources"
description: "The question I get asked more than any other is \"can you build me an app?\" Here's what you actually need to know before you answer that."
readTime: "6 min read"
publishedDate: 2025-11-14
---

The question I get asked more than almost any other:

**"Can you build me an app?"**

The answer is almost always yes. But before we talk about building, there is a more important question to answer first. **What kind of app do you actually need?**

Because "app" means different things, and the difference matters a lot for your budget, your timeline, and how your users will actually experience it.

---

## There Are Two Kinds of "App"

When most people say they want an app, they picture something you download from the App Store. That is one kind. But there is another kind, a web app, that runs in a browser, can live on your phone's home screen, and for most business needs works just as well. Sometimes better.

Here is the plain-English breakdown.

---

## The Native App

A native app is what you download from the Apple App Store or Google Play. Instagram, Uber, Apple Maps: those are native apps. They are built specifically for iOS or Android and live on your device.

**The upside:** They are fast, they work well offline, they can send push notifications, and they have reliable access to your phone's camera, GPS, and sensors.

**The downside:** They are expensive to build, slow to update, and subject to App Store rules you do not control. Building a quality native app typically starts around $20,000 to $30,000, and that is before ongoing maintenance. Every update you make has to be submitted to Apple or Google for review, which can take days. And Apple can reject your update for reasons that have nothing to do with your business.

If you need it on both iPhone and Android, you are essentially building two separate products.

---

## The Web App

A web app runs in a browser, but it does not feel like a website. It looks and behaves like an app: full-screen, fast, with its own icon on your home screen. The technical term is Progressive Web App (PWA).

Think of tools like Notion, Figma, or even Gmail in your mobile browser. Those are web apps. You access them via a URL, but they are fully functional products.

**The upside:** They are faster and more affordable to build, work on every device with a single codebase, and can be updated instantly. If I find a bug on a Monday morning, I can fix it and have the update live before noon. No App Store review, no waiting, no asking your users to update.

**The downside:** Offline support requires extra engineering, push notifications are limited on iPhone, and there is no App Store listing (which means no App Store discovery). For camera and GPS access, web apps work well, but native apps handle them more reliably.

---

## A Real Example: Kahu for Aloha Animal Outreach

One of the apps I built is Kahu, a field management tool for <a href="https://alohaanimaloutreach.org" target="_blank" rel="noopener noreferrer">Aloha Animal Outreach</a>, a nonprofit that runs monthly outreach events to unhoused communities on Oahu.

Volunteers use Kahu in the field to log animals, track owners, record medical history, and capture GPS locations in real time. It replaced paper records entirely.

**Kahu is a web app**, and for good reason. Here is why that was the right call:

- **Instant updates matter.** AAO runs lean. When a volunteer finds a bug or needs a new feature before the next outreach event, I can ship a fix the same day. With a native app, that fix would sit in App Store review for up to a week.
- **No install friction.** A new volunteer can be in the app in under a minute. Charlotte texts them a link, they tap it, they are in. No App Store, no download, no account creation flow.
- **It runs everywhere.** Volunteers use iPhones, Androids, and old tablets. One web app works on all of them.
- **Cost.** AAO is a nonprofit running on donations. Kahu runs on free-tier infrastructure. The total annual cost of the entire digital stack (app, website, and merch store) is about $12 a year. That is the domain name. Everything else is free. A comparable native app would have cost tens of thousands of dollars to build and thousands more to maintain every year.

The limitations of a web app, including better offline sync, push notifications, and smoother barcode scanning, are all on the roadmap. But none of them were blockers for getting a production-quality tool into volunteers' hands quickly.

---

## So Which One Do You Need?

Here is a simple way to think about it.

**You probably want a web app if:**
- You need to move quickly and keep costs manageable
- Your users are on mixed devices (iPhone, Android, desktop)
- You will need to update and iterate frequently
- You do not need App Store discoverability
- Your use case does not require background GPS or offline-first reliability

**You might need a native app if:**
- You need push notifications reliably on iPhone
- Your users will be frequently offline (no signal, airplane mode)
- Background location tracking is core to the product
- App Store visibility and credibility is essential to your distribution strategy
- You have the budget and timeline for a larger build

**The honest truth most developers will not tell you:** For the vast majority of small business and startup use cases, a well-built web app will serve your users just as well as a native app, and often better. It is faster to ship, easier to update, and works on every device without friction.

---

## What I Build

The apps I build are web apps: fast, modern, built on React and TypeScript, and designed to feel native without the cost and constraints of the App Store. They are built to grow with your business, not box you into a platform you do not control.

If you are trying to figure out what kind of app makes sense for your idea, I am happy to talk it through.
