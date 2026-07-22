export function scrollIntoViews(selectorQuery) {
    //console.log(selectorQuery);

  const _elm = document.querySelector(selectorQuery);
  if (_elm) {
    _elm.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}

export const educationInfo = [
  {
    uniqueStateClass: "graduation",
    period: "2013 - 2017",
    title: "Graduation in Computer Science & Engineering From NITK, Surathkal",
    expandedInfo: {
      title: "Projects",
      pointsList: [
        "Trip Story Blog to share awesome trip experience",
        "Face detection using neural Network",
        "Web Crawler using threads count",
      ],
    },
  },
  {
    period: "2010 - 2011",
    uniqueStateClass: "higherSecondary",
    title: "Higher Secondary School from Shri Shyam Sr. Sec.School Bhadra",
    expandedInfo: {
      title: "Competitions",
      pointsList: [
        "IIT-JEE Examination",
        "ICAR(Indian Council of Agricultural Research) Examination",
        "RPET(Rajasthan Pre-Engineering Test) Examination",
      ],
    },
  },
  {
    period: "2009 - 2010",
    uniqueStateClass: "highSchool",
    title: "High School from Shri Shyam Sr. Sec.School Bhadra",
    expandedInfo: {
      title: "Seminars",
      pointsList: [
        "How to uplift level of education in rural areas?",
        "Women's empowerment",
        "Why everyone should plant a tree in a year",
      ],
    },
  },
];

export const projectsInfo = [
  {
    language: "MERN",
    title: "Big Win",
    intro:
      "Big win a platform to choose the lucky numbers and bet on it. lucky numbers are drawn every day and winners are rewarded accordingly.",
    linkBtnTxt: "View Project",
    link: "https://big-win-frontend.vercel.app",
  },
  {
    language: "MERN",
    title: "Skill Swap",
    intro:
      "Skill Swap is a platform to exchange skills with other users. Users can create profiles, list their skills, and find others to trade skills with.",
    linkBtnTxt: "View Project",
    link: "https://skill-swap-frontend.vercel.app",
  },
  {
    language: "JavaScript",
    title: "Custom Google Logo",
    intro:
      "Replace the default Google logo with your own custom text. Personalize the search page with ease",
    linkBtnTxt: "View Project",
    link: "https://chromewebstore.google.com/detail/custom-google-logo/bellfmkglhnmefgigmjhkdeodjaajcgh",
  },
  {
    language: "JavaScript",
    title: "Edit Websites Live",
    intro:
      "Edit any website live in your browser. Make temporary changes to text, images, and styles for testing or fun.",
    linkBtnTxt: "View Project",
    link: "https://chromewebstore.google.com/detail/edit-websites-live/dimedmhonbaennlgmfaicibgpoldefcm?authuser=0&hl=en&pli=1",
  },
  {
    language: "JavaScript",
    title: "Mock Data Generator",
    intro:"Generate realistic mock data for testing and development. Customize fields, formats, and data types to suit your needs.",
    linkBtnTxt: "View Project",
    link: "https://chromewebstore.google.com/detail/mock-data-generator/dlknohkngfncgickemjlfldifojpehmb?authuser=0&hl=en",
  },
  {
    language: "JavaScript",
    title: "Dark Mode for Websites",
    intro:
      "Enable dark mode on any website you visit. Reduce eye strain and improve readability with a single click.",
    linkBtnTxt: "View Project",
    link: "https://chromewebstore.google.com/detail/dark-mode-night-theme-for/jngldlhjlgcpbohcelbjkmiaocpjdokh?authuser=0&hl=en",
  },
  {
    language: "ReactJS",
    title: "Balaji Consultancy",
    intro:
      "Designed and launched a dynamic website to serve the needs of consultancy service providers, based in Hisar, Haryana.",
    linkBtnTxt: "Know More",
    link: "https://www.balajiconsultancy13333.com/",
  },
  {
    language: "JavaScript",
    title: "Indore Cares",
    intro:
      "Crafted an impactful website dedicated to frontline workers, facilitating their requests for essential face shields as a defense against COVID-19 exposure.",
    linkBtnTxt: "Indore Cares",
    link: "",
  },
  {
    language: "React Native",
    title: "TicTacToe",
    intro:
      "Developed a foundational tic-tac-toe game using React Native, providing a hands-on learning experience with this technology.",
    linkBtnTxt: "TicTacToe",
    link: "",
  },
  //https://play.google.com/store/apps/details?id=com.TicTocToe.myapp&pcampaignid=web_share
  {
    language: "Android, Java",
    title: "Knowledge Stuff",
    intro:
      "Designed and developed a fundamental Android application for sharing inspirational stories, jokes, and educational content, fostering a platform for engaging and informative experiences",
    linkBtnTxt: "Knowledge Stuff",
    link: "",
  },
  {
    language: "Android, Java",
    title: "Opin Network",
    intro:
      "Collaboratively designed and developed an Android app alongside friends, providing a platform to generate, submit, and interact with polls. This app also facilitates connections among individuals who share similar interests, reflecting our joint efforts.",
    linkBtnTxt: "Opin Network",
    link: "",
  },
];


export const posts = [
  {
    slug: "kundlidost-ai-vedic-astrology-app",
    title: "KundliDost: Building an AI Vedic Astrology App With a Real Swiss Ephemeris Kundli Engine",
    excerpt:
      "How I built a Hindi-first astrology app that generates astronomically accurate kundlis and layers Gemini AI on top — the architecture, the accuracy testing, and the mobile-dev landmines.",
    content: `
KundliDost is an AI-powered Vedic astrology app I built for the Indian market. It does three things: it generates a **kundli** (a Vedic birth chart), it writes **AI daily horoscopes**, and it lets a user have a **conversational astrology reading** — all in Hindi and English.

The interesting part of this project is not the astrology. It is that a kundli is, underneath the tradition, a precise astronomical calculation. If the planetary positions are even slightly wrong, everything computed on top of them is wrong too. So the whole project hinges on getting the math right and then making it feel friendly.

## The stack, and why each piece is there

- **Frontend:** Expo (React Native, TypeScript). One codebase that runs on a real Android phone through the Expo Go app.
- **Backend:** Node.js + Express + TypeScript in a classic MVC layout — controllers stay thin, the real work lives in services.
- **Database:** MongoDB (Atlas in production).
- **The astronomy:** a Swiss Ephemeris–based kundli engine.
- **The AI:** Google's Gemini models, via the free AI Studio API, for horoscopes and chat.

## What a kundli engine actually computes

To draw a birth chart you need the exact positions of the planets at a specific **moment** and **place** on Earth. That means taking a date, a time, and a latitude/longitude, converting them into a precise instant of astronomical time, and then asking an ephemeris — a high-precision model of solar-system motion — where each body was in the sky.

The **Swiss Ephemeris** is the reference-grade library for this; it is what serious astrology software uses. From those raw positions the engine derives the things Vedic astrology cares about: the ascendant (lagna), the twelve houses, the sign each planet sits in, and the retrograde state.

The moment you build something like this, one question matters more than any other: *is it correct?*

## Testing correctness against a known source

You cannot eyeball a birth chart and know it is right. So the engine ships with an automated test suite that checks its output against **five reference charts from AstroSage**, a well-known astrology site. \`npm test\` runs the engine for those five birth details and asserts that the planetary placements match.

This is the single most valuable design decision in the project. It turns a fuzzy, faith-based domain into something with a green/red signal. If I refactor the time-conversion code and a planet lands in the wrong sign, a test goes red immediately instead of a user quietly getting a wrong reading.

## Making the backend runnable by anyone, instantly

A backend that needs a database before it will even boot is painful to hand off or demo. So KundliDost's backend has two modes:

\`\`\`bash
npm run dev          # real MongoDB Atlas, data persists
npm run dev:memory   # in-memory MongoDB, wiped on exit, zero setup
\`\`\`

The \`dev:memory\` mode spins up an ephemeral MongoDB in the process itself. Clone, install, run — the app works with no credentials. That lowers the barrier to contributing or testing to almost nothing.

There is a matching shortcut for auth. In development, a header like \`Authorization: Bearer dev:me@example.com\` authenticates as that email and auto-creates the user. No login flow to click through while you are testing an API. In production this bypass is off; real users get email OTP (and if SMTP is not configured in dev, the OTP is printed to the server console instead of emailed).

These are small touches, but together they mean the difference between "I'll set it up later" and "it's running."

## The mobile-development landmines

React Native with Expo is smooth until the physical world interferes. Two problems ate real time:

**1. The QR code pointed at the wrong network.** Expo prints a QR code you scan with Expo Go to open the app. My development PC has several network adapters — VirtualBox, WSL, the real Wi-Fi — and Expo sometimes baked a virtual adapter's IP into the QR. The phone then tried to reach an address that does not exist on the Wi-Fi. The fix was pinning \`REACT_NATIVE_PACKAGER_HOSTNAME\` to the actual Wi-Fi IP so the QR always points at the reachable address.

**2. The API base URL differs per target.** A physical phone on the same Wi-Fi must call the PC's LAN IP. An Android emulator cannot use \`localhost\` — it needs the special \`10.0.2.2\` alias that maps back to the host machine. This lives in an \`EXPO_PUBLIC_API_URL\` env var so it is one line to switch.

**3. SDK pinning.** The project is pinned to **Expo SDK 54**, because that is the version the Play Store's Expo Go supports. Chasing the newest SDK would have meant users could not open the app in Expo Go at all.

## Where the AI fits

The astronomy is deterministic; the AI is the layer that makes it feel human. Once the engine produces a structured chart, that chart becomes context for Gemini, which turns dry placements into a readable daily horoscope or answers a user's question conversationally. The key discipline is keeping the two separate: the **facts** come from the ephemeris, the **phrasing** comes from the model. The AI never invents planetary positions — it only narrates the ones the engine computed.

## What I took away

The lesson that generalizes beyond astrology: when your product sits on top of a calculation people will trust, invest first in a way to **prove the calculation is correct** — reference data and automated tests — and only then in the experience around it. Everything else in KundliDost, from the friendly Hindi copy to the AI chat, is only as trustworthy as those five passing tests.
`,
  },

  {
    slug: "trustpe-p2p-lending-bun-monorepo-architecture",
    title: "TrustPe: Architecting a Trust-Based P2P Lending Marketplace as a Bun Monorepo",
    excerpt:
      "A backend, an admin panel, a mobile app, and a shared types package — four apps, one repo, one source of truth. Here's how the architecture holds together and why lending forced every decision.",
    content: `
TrustPe is a trust-based peer-to-peer lending marketplace for India. In plain terms: it lets people in a trusted circle lend to and borrow from each other, with the platform handling identity, agreements, and the money rails. Phase 1 is a closed friends-and-family pilot.

Lending software is unforgiving. A bug in a to-do app annoys someone; a bug in a lending flow moves real money to the wrong person or lets an unverified user borrow. That reality shaped every architectural choice, so this post is about the **structure** more than any single feature.

## Four apps, one repository

TrustPe is a **monorepo** with four packages managed by **Bun workspaces**:

\`\`\`
trustpe/
├── backend/   Express + TypeScript API (MVC)
├── mobile/    React Native (Expo) Android user app
├── admin/     Next.js admin panel
└── shared/    Zod schemas, TS types, constants — imported as @shared/*
\`\`\`

The \`shared\` package is the keystone. It holds the **Zod schemas** that define what a loan, a user, or a KYC record looks like. Both the backend and the mobile app import those same schemas. That means the shape of a loan is defined **once**. The server validates incoming requests against it; the client builds forms and types against it; and because Zod both validates at runtime and infers static TypeScript types, a single schema gives you both a guard and a type.

This is the core benefit of a typed monorepo: when I change what a loan requires, TypeScript immediately flags every place in all four apps that no longer matches. There is no drift between "what the API expects" and "what the app sends," because they read from the same file.

## Why Bun, and one root install

The whole workspace installs with a single \`bun install\` at the root. Bun's workspaces link the four packages together, and a \`postinstall\` step builds \`shared\` first so the other apps have something to import. Bun is also the test and script runner across every package, which keeps the command surface uniform — \`bun run dev:backend\`, \`bun run dev:admin\`, \`bun run typecheck\` fanning out to all four packages.

## The backend: thin controllers, real services

The backend follows a deliberate MVC discipline:

- **models/** — Mongoose schemas (MongoDB is the store)
- **controllers/** — request handlers, kept thin
- **services/** — the actual business logic and external API calls
- **routes/** — Express routers
- **middleware/** — auth, validation, error handling
- **jobs/** — BullMQ background workers
- **socket/** — Socket.io real-time layer

The "thin controllers, fat services" split matters here because lending logic is where correctness lives. A controller should do almost nothing: parse the request, call a service, shape the response. The service is where "can this user take this loan" is decided, and that is the code you want isolated, testable, and free of HTTP concerns.

## Redis, queues, and why lending needs background jobs

TrustPe runs **MongoDB + Redis** locally via Docker Compose. Redis is not just a cache here — it backs **BullMQ**, a job-queue library. Anything that should not happen inside a user's request-response cycle becomes a job: sending notifications, processing agreements, anything slow or retryable.

Why does this matter for lending specifically? Because some steps must happen reliably even if they fail the first time. A queue gives you retries, delays, and a record that the work is pending. Doing that work synchronously inside an API call would mean a network blip loses it. Pushing it onto a durable queue means it survives and retries.

**Socket.io** handles the real-time side — the moment a loan offer arrives or a status changes, the other party sees it without refreshing.

## KYC and UPI: the flow that defines the product

The onboarding decision I am most deliberate about: KYC (identity verification) and the UPI payment binding happen in a **single step**, with the UPI ID bound *inside* the KYC process. In a lending app you cannot let someone participate before they are verified and before there is a known payout rail attached to them. Folding those into one gate removes the window where a half-onboarded user exists in an ambiguous state.

## Documentation as a first-class artifact

Because this is a regulated, money-moving domain, TrustPe carries a \`docs/\` folder that is as important as the code: an architecture document recording decisions and Phase 1 scope, an onboarding-flow spec, a document on Indian P2P regulation and monetization, a testing strategy, a six-sprint build plan, and runbooks. There is also a \`CLAUDE.md\` with guidance for LLM-assisted development and a \`.cursorrules\` for the editor.

For a solo or small pilot this can feel like overhead. It is not. When a domain has legal constraints, the reasoning behind a decision is as valuable as the decision, because six months later you need to know *why* KYC and UPI were merged before you dare to split them.

## The takeaway

TrustPe's real lesson is about **the shape of a project, not its features**. A shared, schema-first package eliminates an entire class of bugs across a mobile app, a web admin, and a server. A queue turns fragile synchronous steps into reliable ones. And in a domain where mistakes move money, writing down *why* you built it this way is part of building it correctly.
`,
  },

  {
    slug: "mock-json-generator-chrome-extension-cloudflare-worker",
    title: "Mock JSON Generator: A Chrome Extension That Publishes Live REST APIs on Cloudflare Workers",
    excerpt:
      "Generate fake JSON from a template, then publish it as a real, shareable CRUD endpoint — no login, no database to manage. Here's the MV3 + Cloudflare Worker + KV architecture behind it.",
    content: `
Every frontend developer hits the same wall: you are building a UI, the backend does not exist yet, and you need an API to talk to. The usual answer is a local mock server you have to run, or a hosted mock service you have to log into and configure. Mock JSON Generator is my answer — a Chrome extension that generates realistic mock JSON **and publishes it as a live, shareable REST API with full CRUD**, backed by a single Cloudflare Worker.

The design goal was: no login, no database to provision, no tokens to copy between dashboards. Generate data, click publish, get a URL your app can immediately read and write.

## Two halves: the extension and the Worker

**The extension** is built with React + Tailwind, bundled by **Vite + CRXJS**. It is a Manifest V3 extension with a popup (generate, preview, publish) and an options page ("My Endpoints" and settings).

**The backend** is one **Cloudflare Worker** that stores collections in **Workers KV**. That is the entire server. No container, no database instance, no ORM — a Worker is a function that runs on Cloudflare's edge, and KV is a globally distributed key-value store. A published mock collection lives under a key like \`mock:<id>\`.

Choosing this backend is the whole trick. A traditional mock-API service needs a database and a server you keep alive. A Worker + KV has no server to keep alive and no database to manage; it scales to zero when idle and costs nothing at rest. For a tool whose job is to spin up throwaway endpoints, that is the perfect fit.

## The CSP problem, and how CRXJS solves it

Chrome extensions run under a strict **Content Security Policy**. You cannot use inline scripts or \`eval\`. This trips up a lot of bundlers, because many inject inline bootstrapping code.

**CRXJS** is a Vite plugin built specifically for extensions. It references every script through a \`<script src=…>\` tag rather than inlining anything, so the output is CSP-safe by construction. That let me use a modern React + Vite workflow — including hot module reload during development with \`npm run dev\` — without fighting the extension sandbox. This is the kind of problem that is invisible until it blocks you completely, and picking the right bundler makes it disappear.

## The CRUD model: public reads, owned deletes

The published API is deliberately permissive where it helps development and locked where it matters:

| Method | Path | Access |
|--------|------|--------|
| POST | \`/api/mock\` | public — create a collection |
| GET | \`/api/mock/:id\` | public — list records |
| POST | \`/api/mock/:id\` | public — add a record |
| PUT / PATCH | \`/api/mock/:id/:itemId\` | public — update a record |
| DELETE | \`/api/mock/:id/:itemId\` | public — delete a record |
| PUT / DELETE | \`/api/mock/:id\` | **owner** — replace or delete the whole collection |

Item-level CRUD is fully public so the app you are building can freely read and write against it. But the destructive whole-collection operations require a per-collection **edit token**. When you publish, the Worker returns \`{ id, url, editToken }\`, and the extension stores that token for you in \`chrome.storage.local\`. Owner-only calls send it as an \`x-edit-token\` header automatically.

This is a nice authorization pattern for a no-login tool: possession of a secret token *is* the permission. There are no accounts, yet a stranger who finds your URL can use your fake data without being able to nuke the whole collection.

## CORS, done right

The public \`GET\` endpoint returns \`Access-Control-Allow-Origin: *\`, so any app or a plain \`curl\` can call it from anywhere. Meanwhile, the extension's own calls to its API are not subject to CORS at all, because the Worker's host is listed in the extension's \`host_permissions\`. So the same endpoint is both freely reachable from your app-under-development and privileged from the extension.

## The guardrails that keep it free and safe

Because anyone can publish, the Worker enforces two limits that keep the whole thing sustainable: collections **expire 30 days** after their last write, and payloads are **capped at 256 KB**. Expiry means abandoned mock data cleans itself up; the cap means no single collection can bloat KV. These are one-line policies with a big effect — they are what make a public, no-login service viable to run.

## Testing a deployed endpoint

The repo includes a smoke test that runs the full CRUD sequence against a live URL:

\`\`\`bash
node scripts/test-crud.mjs https://<your-worker-url>
\`\`\`

Create, read, update, delete — end to end, against the real deployment. For a tool whose entire value proposition is "this endpoint works," having a one-command proof of that is essential.

## What this project taught me

The biggest lesson was architectural humility: **not every backend needs a server and a database.** A tool that creates disposable endpoints is a perfect match for edge functions and a key-value store, and that choice removed an enormous amount of operational work. The second lesson was that good authorization does not require accounts — a capability token stored client-side gave real ownership semantics with zero login friction.
`,
  },

  {
    slug: "skillswap-realtime-mern-socketio-capacitor",
    title: "SkillSwap: Building a Real-Time Skill-Barter Platform With MERN, Socket.IO and Capacitor",
    excerpt:
      "A platform where people trade skills instead of money — with live chat, notifications, scheduled jobs, and a mobile build from the same React code. Here's how the real-time layer is wired.",
    content: `
SkillSwap is a platform where people exchange **skills** instead of money. You list what you can teach or do, you find someone who has what you need, and you trade. Think of it as bartering, but for abilities — I help you with React, you help me with design.

A barter platform lives or dies on communication. If two people are going to coordinate a trade, they need to talk in real time, get notified when something happens, and trust that the other person is real. So the technically interesting part of SkillSwap is its **real-time layer**.

## The stack

- **Backend:** Node.js + Express, MongoDB via Mongoose, **Socket.IO** for real-time messaging.
- **Auth:** JWT, with \`bcrypt\` for password hashing.
- **Frontend:** React, talking to the backend over both REST and a Socket.IO connection.
- **Mobile:** **Capacitor**, which wraps the same React web app into native Android and iOS builds.
- **Support cast:** \`multer\` for file/image uploads, \`nodemailer\` for email, \`node-cron\` for scheduled tasks.

The backend is organized cleanly into controllers, models, routes, and middleware — separate concerns for users, chat, tasks, and notifications.

## Authenticating a WebSocket, not just an HTTP request

Here is the problem most tutorials skip. Securing a REST route is easy: read the JWT from a header, verify it, attach the user. But a Socket.IO connection is a long-lived socket, not a request with headers you check once per call. You have to authenticate it **at connection time**.

In SkillSwap, when a client opens a socket, the server verifies the user's JWT before accepting the connection — reading the token (including parsing it out of the cookie the browser sends) and validating it with \`jsonwebtoken\`. If the token is bad, the socket never joins. Only an authenticated socket is allowed to send or receive messages. This is the difference between "a chat feature" and "a chat feature that strangers cannot hijack."

## Tracking who is actually online

Real-time presence — the little "online" dot — is trickier than it looks, because **one user can have several sockets open** (a laptop tab and a phone, say). If you naively map one user to one socket, opening a second tab knocks out the first.

SkillSwap models presence as \`userId → Set<socketId>\`. Every connection a user opens adds its socket ID to that user's set; every disconnect removes one. The user is "online" as long as the set is non-empty. This correctly handles the multi-device, multi-tab reality instead of pretending each person has exactly one connection.

## One codebase, three targets, thanks to Capacitor

SkillSwap did not get rewritten for mobile. **Capacitor** takes the built React web app and packages it inside a native shell, producing real Android and iOS apps that can go to the app stores. The same components, the same Socket.IO client, the same screens — now running as a native app with access to native APIs when needed.

This is a pragmatic superpower for a solo developer: you build and maintain **one** UI codebase and ship it to web, Android, and iOS. The trade-off is that it is a web view under the hood, but for a chat-and-coordination app that is exactly the right call — the effort saved is enormous.

## Where node-cron earns its place

\`node-cron\` runs scheduled jobs on the server on a time-based schedule — the same idea as a system cron job, but living inside the Node process. In a platform with pending trades and notifications, plenty of things need to happen "later" or "every so often" without a user triggering them: reminders, cleanup, periodic checks. Cron gives you a clean place for that recurring work.

## The bigger picture

SkillSwap is, on the surface, a CRUD app with a chat feature. But the parts that actually took engineering judgment were the ones that deal with **state that changes without a page reload**: authenticating a persistent socket, tracking presence across multiple devices, and scheduling work that no request kicks off. Those are the problems that separate a real-time product from a static one, and they are the same problems you will meet in any messaging, collaboration, or live-updating app you build next.
`,
  },

  {
    slug: "big-win-scheduled-lottery-draws-node-cron",
    title: "Big Win: Running Scheduled Lottery Draws in Node With node-cron",
    excerpt:
      "A number-betting platform where draws happen automatically on a schedule, winners are settled, and there's still a safe manual trigger. A focused look at building time-driven backends.",
    content: `
Big Win is a MERN platform where users pick lucky numbers and bet on them; numbers are drawn on a schedule and winners are rewarded. Strip away the theme and it is a clean case study in something many backends need but few tutorials cover well: **time-driven logic** — code that runs because the clock said so, not because a user made a request.

## The domain, modelled

The backend's data model maps directly to the concept:

- **user** — accounts, balances, auth
- **place** — a placed bet (which numbers, how much)
- **bet** — the betting activity
- **result** — the outcome of a draw

Everything flows through those: users place bets, a draw produces a result, and the result decides who won and settles balances accordingly.

## The heart of it: two moving parts

The lottery engine is deliberately simple. It has exactly two ways to run:

1. **An automatic schedule**, driven by a \`CRON_SCHEDULES\` environment variable.
2. **A manual trigger** — \`POST /api/lottery/run\` protected by a secret header.

That is the entire control surface. No CLI scripts, no separate runners, no extra configuration files. This restraint is a feature: the fewer ways there are to start a draw, the fewer ways there are to start one *by accident*.

## Cron schedules as configuration

The draw cadence is not hard-coded — it is a cron expression in an env var, interpreted in **Asia/Kolkata** time. Changing how often the lottery runs is a one-line edit and a restart:

\`\`\`
"0 6 * * *"       once a day at 6am IST
"0 6,18 * * *"    twice a day, 6am and 6pm
"0 */6 * * *"     every 6 hours
"*/30 * * * *"    every 30 minutes (for stress-testing)
\`\`\`

A cron expression has five fields — minute, hour, day-of-month, month, day-of-week. Reading them left to right tells you exactly when the job fires. Keeping the schedule in an env var means the same code can run daily draws in production and 30-minute draws in a stress test, with no code change. That is the right place to draw the line between *what the job does* (code) and *when it runs* (config).

## Why the manual trigger needs a secret

Automatic draws are great until you need to run one **right now** — testing, a demo, or recovering from a missed window. Hence \`POST /api/lottery/run\`. But a route that settles a lottery is dangerous if anyone can hit it. So it is gated behind a secret header: without the shared secret, the request is rejected.

This is a small but important security pattern for **privileged operational endpoints**. Not every protected action belongs behind a full user-login system; some are machine-to-machine or admin-only, and a shared secret in a header is a proportionate guard. The key discipline is that the destructive capability is *never* public just because it is convenient.

## The correctness concern nobody sees

The genuinely hard part of a scheduled draw is not scheduling — it is making sure a draw does exactly the right thing exactly once. When the cron fires, the engine has to pick the result, find every bet on the winning numbers, and settle balances. If that logic ran twice, or ran halfway and stopped, users would be paid wrong. So the valuable engineering is in making the settlement step deterministic and self-contained: one draw, one result, one pass over the bets.

## What generalizes

Big Win is themed as a lottery, but the machinery is the machinery of **any** system that does work on a schedule: billing runs, report generation, digest emails, subscription renewals, data cleanup. The pattern is always the same three ingredients — a schedule expressed as configuration, a safe manual override for when you need to run it now, and settlement logic that is careful to act exactly once. Learn it on a lottery and you have learned it for every cron-driven backend you will ever write.
`,
  },

  {
    slug: "shipping-manifest-v3-chrome-extensions-lessons",
    title: "Shipping Chrome Extensions: What I Learned Building Four Manifest V3 Extensions",
    excerpt:
      "Custom Google Logo, Darkify, Edit Websites Live, and Ad Cleaner — four small extensions, four different browser mechanisms. A tour of how MV3 actually lets you reshape the web.",
    content: `
I have shipped four Chrome extensions to the Web Store, and each one taught me a different corner of the **Manifest V3** platform. None is large, but together they are a good map of how much you can do from inside the browser. This post walks through all four and the specific mechanism each relies on.

## The MV3 mental model

Every extension is the same handful of parts: a **manifest** declaring permissions and entry points, an optional **service worker** for background logic, **content scripts** injected into pages, and a **popup** for UI. MV3's rule is least-privilege — you declare exactly which sites you touch and which capabilities you need, and the browser holds you to it. The art is doing what you want with the *narrowest* set of permissions.

## 1. Custom Google Logo — surviving a hostile page

This one replaces the Google logo on the search page with your own text or image. Sounds trivial; it is not, for two reasons.

**Regional domains.** Google is not one site — it is \`google.com\`, \`google.co.in\`, \`google.co.uk\`, \`google.de\`, and dozens more. The extension declares host permissions and content-script matches for each regional domain so the swap works wherever you search.

**Doodle days.** On special occasions Google swaps its own logo for a doodle, which changes the DOM the extension is trying to modify. The extension is built to **survive doodle days** — to still find and replace the logo even when the markup shifts. That robustness against a page that changes underneath you is the real lesson: a content script cannot assume the DOM is stable. It also overrides the new-tab page and registers a keyboard command (\`Ctrl+Shift+L\`) to toggle the effect.

## 2. Darkify — dark mode with a two-line CSS trick

Darkify turns any website dark with one click. The clever part is how little code the core effect needs. Instead of restyling thousands of unknown elements, it injects a single \`<style>\` that inverts the whole page:

\`\`\`css
html { filter: invert(1) hue-rotate(180deg); background: #121212; }
img, video { filter: invert(1) hue-rotate(180deg); }
\`\`\`

Inverting the page flips light backgrounds to dark and dark text to light. \`hue-rotate(180deg)\` corrects colors so they are not garish after the invert. Then — the key move — images and videos are inverted **a second time**, which cancels out the page-level invert and leaves *them* looking normal while everything around them is dark. One CSS rule, applied with a toggle stored in \`chrome.storage\`, gives a universal dark mode. It is a great example of solving a problem at the right layer instead of brute-forcing it.

## 3. Edit Websites Live — the browser's hidden editor

This extension lets you edit the text of any live web page in place — great for mockups, screenshots, or checking how copy fits. It leans on a capability the browser has had for years but few people use: **design mode**, the same mechanism that makes \`contentEditable\` elements editable. Flip the page into an editable state and every bit of text becomes a text field you can type into. The extension adds a toggle (and a \`Ctrl+Shift+E\` shortcut), the ability to save and copy the modified HTML, and an undo. The insight here is that the platform already contained the hard part — I just gave it a switch and a workflow around it.

## 4. Ad Cleaner — two techniques for two problems

The ad blocker is the most technically involved, because blocking ads well needs **two completely different mechanisms**.

**Network blocking with declarativeNetRequest.** MV3's \`declarativeNetRequest\` lets an extension ship a static list of rules that the browser enforces itself — block any request matching \`doubleclick.net\`, \`googlesyndication.com\`, and so on. The extension never sees your traffic; it just hands Chrome a rulebook. That is both faster and more private than the old approach of intercepting every request in JavaScript.

**Player-level blocking with a main-world script.** YouTube's video ads are not just network requests — the ad data is baked into the player's response. So on YouTube, Ad Cleaner injects a script into the page's **main world** (the same context YouTube's own code runs in) that hooks \`JSON.parse\` and the fetch response path, and strips ad-related fields out of the player data *before YouTube's scripts read it*. It even guards against anti-adblock "honeypot" responses by shape-checking what it modifies. Off YouTube, a lighter cosmetic content script cleans up promoted elements.

The lesson: one label — "ad blocker" — hides two entirely different engineering problems, and each needs its own tool. Declarative rules for the network layer; careful main-world interception for the application layer.

## The through-line

Four small extensions, four different mechanisms: robust DOM manipulation against a hostile page, a CSS filter trick, the browser's built-in editable mode, and the two faces of ad blocking. What they share is the MV3 philosophy — declare the minimum, work with the platform's existing capabilities rather than against them, and respect the sandbox. Browser extensions are one of the highest-leverage things a web developer can build: a few hundred lines can change how millions of pages behave.
`,
  },

  {
    slug: "linkedin-job-tracker-mv3-background-scanning",
    title: "LinkedIn Job Tracker: Background Job Scanning With MV3 Service Workers and Offscreen Documents",
    excerpt:
      "A Chrome extension that quietly scans the LinkedIn job feed on a schedule, filters by your criteria, and remembers what you've already seen. A look at the trickier corners of MV3 background work.",
    content: `
Job hunting on LinkedIn is a loop: open the feed, scroll, spot new roles, open the ones that fit, ignore the ones you have already rejected. LinkedIn Job Tracker is a Chrome extension I built to automate the tedious half of that loop — it **scans the job feed in the background on a schedule**, filters by your criteria, and keeps track of what you have already seen, clicked, bookmarked, or rejected.

It is a React + Vite Manifest V3 extension, and it is a good vehicle for talking about the genuinely awkward parts of MV3: doing work when the popup is closed.

## The core idea: a save/reject model

The extension deliberately keeps its model simple. There is no elaborate application-status pipeline — the whole model is **save or reject**. Every job you have interacted with is remembered so it never clutters your view again. All of that state — your keywords, the collected job feed, clicked jobs, bookmarks, and rejected jobs — lives in \`chrome.storage\`, wrapped behind a small storage utility so the UI just calls \`getBookmarks()\` or \`addRejectedJob()\` without touching the storage API directly.

The popup (\`App.jsx\`) is a fairly rich React app: filters for work type (remote/hybrid/onsite), experience level, and posting age (past 24h, past week, and so on), plus a configurable scan interval from every 15 minutes to every 4 hours.

## The hard part: work when nothing is open

Here is the MV3 reality that shapes everything. In Manifest V3 there is **no persistent background page**. The background is a **service worker** that the browser spins up when it is needed and *kills when it is idle*. That is great for memory, but it means you cannot just leave a \`setInterval\` running forever the way old extensions did.

To scan the job feed "every 30 minutes" even while the popup is closed, the extension relies on the service worker being woken on a schedule and doing its scan then. The scan interval the user picks is not a naive timer in the popup — it has to survive the popup being closed and the worker being asleep. Designing around a background that can be terminated at any moment is the single biggest mental shift moving to MV3.

## Why there is an offscreen document

One of the folders in the project is \`offscreen/\`, and it exists because of another MV3 restriction. A service worker has **no DOM**. It cannot parse HTML with the browser's parser, it cannot use APIs that need a document. But scanning a job feed sometimes means working with HTML.

MV3's answer is the **offscreen document** — a hidden page the extension can create to do DOM work that the service worker cannot. The worker delegates the "I need a real DOM for a moment" tasks to the offscreen document and gets the result back. It is a slightly clunky but necessary pattern, and knowing it exists is the difference between "MV3 makes this impossible" and "here is where that work goes."

## Matching cities like a human

A small but genuinely useful piece is the city-matching utility. Location strings on job posts are messy — abbreviations, extra qualifiers, different spellings of the same place. The extension has a \`cities\` helper that **normalizes** a city string and compares two of them so that "same place, written differently" counts as a match. It also suggests cities as you type your filters. This kind of fuzzy, human-friendly matching is what makes a filter feel smart instead of brittle — an exact string compare would miss half the jobs a user actually wants.

## Parsing "3 hours ago"

LinkedIn shows relative timestamps — "2 hours ago," "1 day ago" — not real dates. To filter by "past 24 hours," the extension parses those relative strings back into an age in minutes. It is a small function, but it is the kind of unglamorous parsing that separates a filter that works from one that quietly shows stale results.

## What this project reinforced

LinkedIn Job Tracker is mostly a lesson in **respecting a hostile runtime**. MV3's service worker can die at any moment and has no DOM — constraints that feel like obstacles until you learn the patterns built for exactly them: schedule-driven wake-ups instead of persistent timers, and offscreen documents for DOM work. Add human-friendly touches like city normalization and relative-time parsing, and a pile of restrictions turns into a quiet, useful tool that does its job while you do something else.
`,
  },

  {
    slug: "pharmacy-college-pdf-portal-react-supabase",
    title: "A PDF-First Study Portal on React + Supabase: Building the Pharmacy College App",
    excerpt:
      "Serving study material as smooth, zoomable, in-browser PDFs backed by Supabase — no custom server. How pdf.js, react-pdf, and a backend-as-a-service combine into a real product.",
    content: `
Not every project needs a hand-written backend. The Pharmacy College app is a study-material portal — students browse and read documents in the browser — and I built it as a React single-page app on top of **Supabase**, with in-browser **PDF rendering** as the centerpiece. It is a good example of shipping a real, data-backed product with **no server code of my own**.

## The stack, and the deliberate absence of a server

- **Frontend:** React + Vite.
- **Backend:** **Supabase** (\`@supabase/supabase-js\`) — a backend-as-a-service providing the database, storage, and APIs.
- **PDF rendering:** \`pdfjs-dist\` and \`react-pdf\`.
- **Reading experience:** \`react-zoom-pan-pinch\` for zoom and pan, \`swiper\` for touch-friendly navigation, \`sonner\` for toast notifications.
- **Routing:** \`react-router-dom\`. **Deployment:** Vercel.

The notable thing is what is *missing*: there is no Express app, no server I maintain. Supabase provides the database and file storage behind an API the React app calls directly. For a content-delivery app like this, that is the right amount of infrastructure — I get auth, a database, and storage without operating any of it.

## Why serving PDFs is harder than it sounds

The obvious way to show a PDF on the web is a link that downloads it or an \`<iframe>\` that hands it to the browser's built-in viewer. Both are bad for a study app. A download pulls the reader out of your product; the native viewer looks different in every browser and gives you no control over the experience.

So the app renders PDFs **itself**, in a React component, using **pdf.js** — the same PDF engine that powers Firefox's viewer, exposed to JavaScript through \`pdfjs-dist\`. \`react-pdf\` wraps that engine in React components so a document becomes \`<Document>\` and \`<Page>\` elements I control completely. The PDF is drawn onto the page as part of the app, styled to match, with navigation I design.

The cost of this power is setup: pdf.js needs a separate **worker** file to do its parsing off the main thread, and wiring that worker correctly in a Vite build is the fiddly part everyone hits. Once it is configured, rendering is smooth and the document is truly *inside* the app.

## Making a document feel readable

A PDF you cannot zoom is useless on a phone, and study material is full of small diagrams and dense text. That is where the supporting libraries come in:

- **react-zoom-pan-pinch** adds pinch-to-zoom and drag-to-pan, so a student can zoom into a formula or a chart naturally, the way they expect on a phone.
- **swiper** provides smooth, touch-friendly paging between pages or documents.
- **sonner** surfaces quick, unobtrusive toasts for feedback — "loaded," "error," and so on — without building a notification system.

Individually these are small. Together they turn "a PDF on a web page" into "a document reader that feels like an app."

## What Supabase actually saves you

The value of Supabase here is concentration of effort. In a traditional build I would write a database schema, an API layer to query it, file storage handling, and auth — each a real chunk of work with its own bugs. Supabase gives all of that as a service the frontend talks to directly through \`@supabase/supabase-js\`. My job shrinks to the part that is actually specific to *this* product: the reading experience. The generic backend plumbing is handled.

## The lesson: match the backend to the problem

The through-line of this project is choosing infrastructure that fits the problem instead of reaching for a default. This app's hard problems are all on the **client** — rendering PDFs well, making them zoomable and touch-friendly, keeping the reading experience seamless. Its backend needs — store files, store some metadata, serve them over an API — are completely generic. So the right architecture puts the effort where the product is special (the reader) and buys the rest off the shelf (Supabase). Knowing when *not* to build a server is as valuable a skill as knowing how to build one.
`,
  },
];
