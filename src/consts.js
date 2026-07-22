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

  {
    slug: "darkify-universal-dark-mode-css-filter",
    title: "Darkify: How a Two-Line CSS Filter Turns Any Website Dark",
    excerpt:
      "A dark-mode extension can't know a site's colors in advance. Instead of restyling thousands of unknown elements, Darkify inverts the whole page — and then un-inverts the images. Here's why that works.",
    content: `
Darkify is a Chrome extension that turns any website dark with one click. The hard part of "dark mode for *any* site" is that you have no idea what the site looks like. You cannot ship a stylesheet for every website on the internet. So Darkify does not try to. It uses a trick that treats the page as an image to be processed rather than a structure to be restyled.

## The core idea: invert everything, then fix the media

When Darkify is switched on, it injects a single \`<style>\` element that does essentially this:

\`\`\`css
html { filter: invert(1) hue-rotate(180deg); background: #121212; }
img, video { filter: invert(1) hue-rotate(180deg); }
\`\`\`

Two rules. The first inverts the **entire page**. Inversion flips brightness: white backgrounds become near-black, black text becomes near-white. Overnight, a bright site is dark. But raw inversion also mangles color — a blue button becomes orange, a red heart becomes cyan. That is what \`hue-rotate(180deg)\` corrects: rotating the hue wheel by 180 degrees after inverting brings colors back close to where they started, so brand colors still look roughly right, just on a dark canvas.

## The clever part: double inversion for images

If you stopped there, every photo and video on the page would look like a photographic negative — faces in eerie inverted colors. That is unacceptable. So the second rule inverts images and videos **again**.

Two inversions cancel out. \`invert(1)\` applied by the \`html\` rule, then \`invert(1) hue-rotate(180deg)\` applied to the image itself, returns the image to (very nearly) its original appearance. The net effect: the *chrome* of the page goes dark, but photos, videos, and other media stay looking normal. This is the whole reason the approach is usable rather than a novelty — it darkens the interface without ruining the content.

## Why solve it at the filter layer

The instinct of most developers is to walk the DOM and restyle elements: find every element with a light background, override it; find every dark text node, lighten it. That approach is enormous, brittle, and slow — it breaks the moment a site uses a color you did not anticipate, and it has to re-run every time the page changes.

The CSS-filter approach sidesteps all of that. It does not care what the page contains. It applies one transformation to the rendered output, the same way an image editor applies a filter to a photo. One rule covers every element that will ever exist on any site. This is a good lesson in general: sometimes the right place to solve a problem is a layer down from where it appears. The problem *looks* like "restyle thousands of elements"; it is actually "apply one transform to the final image."

## The state, and the toggle

The on/off preference lives in \`chrome.storage\`, so the choice persists between visits and across tabs. Flipping the toggle adds or removes that single style element — enabling dark mode is injecting the rule, disabling it is deleting it. There is no cleanup of scattered overrides because there were never any scattered overrides to begin with.

## The honest trade-offs

This technique is not perfect, and it is worth knowing where it strains:

- **Nested media and backgrounds** — an element that is both a container and shows an image can occasionally need a second look, because "what counts as media to un-invert" is a judgment call.
- **Sites with their own dark mode** — inverting an already-dark site makes it light, the opposite of what you want. A universal inverter has no way to know a site is already dark without inspecting it.
- **Fixed overlays and shadows** — very heavy visual effects can look slightly off after a global invert.

But for the enormous majority of bright, default-light websites, two CSS rules deliver a genuinely comfortable dark mode instantly. Darkify is my favorite example of how a small, well-chosen idea beats a large, brute-force one.
`,
  },

  {
    slug: "how-manifest-v3-ad-blocking-works",
    title: "How Ad Blocking Actually Works in Manifest V3: Two Engines, Two Problems",
    excerpt:
      "\"Ad blocker\" is one label hiding two completely different engineering problems. Building Ad Cleaner meant a declarative network filter AND a main-world script that edits YouTube's player data before YouTube reads it.",
    content: `
Ad Cleaner is a Chrome extension I built to block YouTube video ads, Shorts ads, and promoted thumbnails, with optional cosmetic cleaning across the rest of the web. Building it taught me that "ad blocker" is a single label stretched over **two entirely different technical problems**, each needing its own mechanism. This post is about both.

## Problem one: block ad *requests* on the network

Most web ads are separate network requests — a script from an ad server, a tracking pixel, an iframe of creative. The clean way to stop those is to never let them load.

In Manifest V3, that job belongs to **declarativeNetRequest**. Instead of an extension inspecting your traffic in JavaScript, it ships a static JSON rulebook and the browser enforces it directly. Ad Cleaner's \`rules.json\` is a list like this:

\`\`\`json
{
  "id": 1,
  "action": { "type": "block" },
  "condition": {
    "urlFilter": "||doubleclick.net^",
    "resourceTypes": ["script", "xmlhttprequest", "image", "sub_frame", "media", "ping", "websocket"]
  }
}
\`\`\`

Rules like this block known ad and tracking hosts — \`doubleclick.net\`, \`googlesyndication.com\`, \`googleadservices.com\`, and so on — across the listed resource types. The key MV3 point: the extension never sees your browsing. It hands Chrome a set of rules once, and Chrome does the blocking itself. That is both **faster** (no JavaScript in the request path) and **more private** (the extension is not a middleman watching every request) than the old \`webRequest\` interception model. This privacy-and-performance shift is the main reason MV3 changed how blockers are built.

## Problem two: YouTube ads are not requests, they are *data*

Here is where a network filter is not enough. YouTube's video ads are not a separate resource you can block by URL — the instruction to play an ad is embedded **inside the player's own data**, delivered in the same response as the video you want to watch. Block the response and you block the video too.

So on YouTube, Ad Cleaner injects a script into the page's **main world** — the same JavaScript context YouTube's own code runs in — and edits the player data *before YouTube reads it*. It hooks the points where that data arrives:

1. **\`JSON.parse\`** — wrap it so any parsed player response has its ad-related fields stripped out before it is returned.
2. **\`Response.prototype.json\`** — the same idea for fetch responses that do not pass through \`JSON.parse\`.
3. **The \`ytInitialPlayerResponse\` setter** — catch the cold-load case where the very first player data is assigned as a global on page load.

By the time YouTube's player looks for ad instructions, they are gone. The video plays; the ad never had data to render from.

## The anti-adblock cat-and-mouse

YouTube actively fights blockers, and one of its tactics is a **honeypot**: serve decoy data shaped to look like the real player response, so a naive blocker that mangles *everything* corrupts playback and reveals itself. Ad Cleaner guards against this by **shape-checking** what it modifies — it only strips fields from objects that genuinely look like a player response, and it skips \`data:\` and \`blob:\` URLs that are the classic honeypot channel. Being surgical, not indiscriminate, is what keeps the video working while the ads do not.

## Why the split matters

The takeaway generalizes well beyond ad blocking. When one user-facing feature quietly contains two different problems — here, "requests on the wire" versus "data inside the app" — trying to solve both with one tool produces something that half-works. Ad Cleaner uses **declarative rules** for the network layer, where the browser is the right enforcer, and **careful main-world interception** for the application layer, where the ad lives inside the data. Recognizing that a single label hid two problems was the entire design.
`,
  },

  {
    slug: "content-script-vs-changing-dom-custom-google-logo",
    title: "A Content Script vs. a Page That Fights Back: Lessons From Custom Google Logo",
    excerpt:
      "Replacing the Google logo sounds trivial until the page rewrites itself, comes in a dozen regional flavors, and your own fix triggers an infinite loop. A debugging story about content scripts.",
    content: `
Custom Google Logo is a Chrome extension that replaces the Google homepage logo with your own text or image. It sounds like a five-minute project — find the logo, swap it. In reality it is a small masterclass in the hard parts of writing **content scripts** against a page that is actively working against you. Three problems made it interesting.

## Problem 1: the page rewrites itself

Google's homepage is a single-page app. Navigate to search results and back, and Google re-renders the homepage, throwing away whatever the extension injected. A one-time "replace on load" swap flickers back to the real logo the moment the user interacts with the page.

The fix is a **MutationObserver** — a browser API that watches the DOM for changes and runs a callback when they happen. Custom Google Logo targets \`#lga\` (the stable logo container Google has used for years), replaces its contents with the custom logo, and then keeps an observer attached. If Google re-renders and the logo comes back, the observer fires and re-applies the custom one automatically. The mental shift here is important: with a modern web app you cannot treat the DOM as something you edit once. You edit it, then you *defend* your edit.

## Problem 2: my own fix caused an infinite loop

This is the bug I am proudest of finding. To size the custom text logo, an early version measured its width with SVG \`getBBox()\`. But \`getBBox()\` only returns a real measurement once the element is actually in the document — so the code inserted the SVG into \`document.body\` to measure it.

That insertion was itself a DOM mutation. The MutationObserver watching the page saw it, fired, re-ran the inject function, which measured again, which inserted again, which fired the observer again… an **infinite loop** that pegged the CPU.

The fix was to measure text **without touching the DOM** at all, using the canvas \`measureText()\` API, which computes text width off-screen with no insertion and therefore no mutation. The lesson burned itself in: when you both **observe** and **modify** the DOM, every modification you make is a change your own observer will react to. You have to make sure your writes cannot feed back into your watcher — either by measuring without mutating, or by pausing the observer around your own edits.

## Problem 3: Google is not one website

Google runs on dozens of regional domains — \`google.com\`, \`google.co.in\`, \`google.co.uk\`, \`google.de\`, \`google.com.br\`, and many more. A user in India expects the extension to work on \`google.co.in\`, not just \`.com\`. So the manifest declares host permissions and content-script matches for each regional domain, and the extension only acts on the homepage paths (\`/\` and \`/webhp\`) so it never interferes with search results. There is no clever trick here — just the discipline of remembering that "Google" is a family of sites, and a browser extension has to enumerate them explicitly.

## The finishing touches

On top of the core swap, the extension adds things that make it feel finished: colored palettes for the text logo (classic Google colors, monochrome, and themed sets), an override of the new-tab page, an optional rewrite of the browser tab title, and a keyboard shortcut (\`Ctrl+Shift+L\`) to toggle the effect. Settings persist through \`chrome.storage\`.

## What it taught me

A content script lives in someone else's house. The page can re-render at any moment, exists in many regional variants, and — as the \`getBBox\` loop proved — will happily turn your own good intentions into a runaway loop. Writing robust content scripts is less about the swap itself and more about coexisting with a document that does not know you are there and would rewrite you if it did.
`,
  },

  {
    slug: "edit-any-website-live-designmode-injected-runtime",
    title: "Edit Any Website Live: The Browser's Hidden Editor and an Idempotent Injected Runtime",
    excerpt:
      "The browser already ships a full in-place text editor — designMode. The interesting engineering is wrapping it in a runtime you can inject repeatedly without breaking anything.",
    content: `
Edit Any Website Live is a Chrome extension that lets you edit the text of any web page in place — change a headline, fix a price, tweak a paragraph — right in the browser, then save or copy the modified HTML. It is genuinely useful for mockups, screenshots, and demos. And most of its "hard part" is a capability the browser has shipped for years that almost nobody uses directly.

## designMode: the editor that was already there

Browsers have a built-in editing mode. Setting a document into **design mode** (the same machinery behind \`contentEditable\`) makes the entire page's text editable — click into any heading or paragraph and type, like a word processor. The browser handles cursor placement, selection, and text input for you.

So the core feature is not "build a rich text editor." It is "flip the switch the browser already has, and build a good workflow around it." The extension toggles editing on the current tab via a popup button and a \`Ctrl+Shift+E\` shortcut. That reframing — recognizing the platform already contains the expensive part — is the whole reason a one-person project can ship a credible live-editing tool.

## The real engineering: an injectable runtime that is safe to re-inject

The subtler problem is *how* the extension's code lives on the page. Edit Any Website Live injects a runtime that exposes a small API on \`window.__ewl\` — functions like \`apply\`, \`savePage\`, \`copyHTML\`, \`getHTML\`, and \`undoAll\`. But an extension might inject that runtime more than once: the user clicks the button twice, or navigates, or a newer version of the extension runs on an already-injected page.

If injection were naive, re-injecting would stack duplicate event handlers, double-install styles, and generally corrupt the page. So the runtime is built to be **idempotent**. It carries a version, and on load it checks: if the same version of \`window.__ewl\` is already present, it does nothing; if an older version is there, it cleanly overwrites the handlers rather than piling new ones on top. Re-running the script is always safe. This is a pattern worth internalizing for any injected script — assume you will be injected again, and make the second injection a no-op or a clean replacement, never an accumulation.

## Undo, save, and copy

On top of editing, the extension gives the workflow teeth:

- **Undo** — \`undoAll\` reverts the changes, so experimenting is consequence-free.
- **Save / copy HTML** — \`savePage\`, \`getHTML\`, and \`copyHTML\` let you extract the edited markup, so a live tweak becomes something you can keep or hand to someone.
- **A floating badge** — a small on-page indicator (with its own injected styles and a very high \`z-index\` so no site can cover it) tells you edit mode is active, animated in so it is obvious.

These turn "the page is temporarily editable" into "I made a change, checked it, and saved the result."

## Why this project is a good teacher

Edit Any Website Live is two lessons in one. First: know your platform. The browser is far more capable than most extensions use — design mode is a full editor hiding behind a single property. Second: injected code has a lifecycle you do not fully control, so write it to tolerate being run again. An idempotent, versioned runtime on \`window.__ewl\` is what separates a tool that works once from a tool that works every time, on every page, no matter how many times the user pokes it.
`,
  },

  {
    slug: "swift-chat-connect-realtime-ephemeral-chat-postgres-drizzle",
    title: "Swift Chat Connect: Proximity-Based Ephemeral Chat on WebSockets, Drizzle and Postgres",
    excerpt:
      "A location-aware chat where messages are meant to disappear. Building it meant WebSockets for live delivery, sessions for auth, and a typed Postgres schema through Drizzle ORM — a very different stack from my MERN chats.",
    content: `
Swift Chat Connect is a real-time, location-aware chat app: users discover people nearby, swipe to connect, and exchange **ephemeral messages** meant to disappear rather than live forever. I built it on a deliberately different stack from my MongoDB-based projects — TypeScript end to end, **PostgreSQL** through **Drizzle ORM**, WebSockets for delivery, and React on the front. This post is about the pieces that make a live, disposable chat work.

## A typed schema as the source of truth

With Drizzle, the database schema is TypeScript. The tables read almost like documentation:

\`\`\`ts
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  latitude: real("latitude").default(0),
  longitude: real("longitude").default(0),
  isAnonymous: boolean("is_anonymous").default(false),
  lastActive: timestamp("last_active").defaultNow(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  senderId: integer("sender_id").notNull(),
  receiverId: integer("receiver_id").notNull(),
  content: text("content").notNull(),
  timestamp: timestamp("timestamp").defaultNow(),
});
\`\`\`

There are also \`swipes\` (a row per right/left action between two users). The payoff of defining tables this way is that Drizzle **infers the TypeScript types** from the schema, and \`drizzle-zod\` generates matching validation schemas. One definition gives me the database structure, the compile-time types, and the runtime validators — they cannot drift apart because they all come from the same source. Compared to hand-writing types that mirror a database, this eliminates a whole category of "the code and the table disagree" bugs.

## Why WebSockets, not request/response

Chat is the canonical case where plain HTTP is the wrong shape. HTTP is a client asking and a server answering; chat needs the **server** to push a message to a recipient the instant it arrives, with no request to answer. So Swift Chat Connect runs a WebSocket server (via the \`ws\` library) alongside Express. A message sent by one user is written and then pushed over the live socket to the other, who sees it appear without polling or refreshing. The HTTP side still handles the ordinary things — logging in, loading profiles — while the socket handles the real-time flow.

## Sessions for auth, with a pruning store

Authentication uses **express-session**: on login the server stores the user's id in a session, and a \`requireAuth\` middleware rejects any request whose session has no user. In development the session store is an in-memory store (\`memorystore\`) configured to **prune expired entries every 24 hours**, so stale sessions do not accumulate. Cookies are marked secure in production. It is a pragmatic auth setup — simple to reason about, with the session as the single thing that says "this request is really you."

## "Ephemeral" is a design stance, not a feature you bolt on

The interesting product decision is that messages are meant to be **temporary** — the schema and app treat chat as disposable, cleared rather than archived. Designing for ephemerality changes how you think: you are not building a permanent record you must protect forever, you are building a live conversation that is expected to vanish. That informs storage, retention, and even the emotional tone of the product. It is the opposite of most chat apps, and building it made me appreciate that *deletion* can be a first-class feature rather than an afterthought.

## The contrast that taught me the most

My SkillSwap chat runs on MongoDB and Socket.IO; Swift Chat Connect runs on Postgres, Drizzle, and raw \`ws\`. Building both showed me the trade-offs directly: the SQL-and-Drizzle path gives you a rigid, typed schema and relational guarantees that catch mistakes at compile time, at the cost of defining structure up front. For a chat with clear relations — users, swipes, messages between them — that structure was a good fit, and having the types flow from the schema made the whole app safer to change.
`,
  },

  {
    slug: "what-machine-coding-react-interview-projects-teach",
    title: "What Building 'Interview' React Apps Actually Teaches You",
    excerpt:
      "Machine-coding rounds ask for a users page with search, a service layer, and an editable table. Small on the surface — but they drill the patterns that real React apps are made of.",
    content: `
react-interview-projects is a small React + Vite app I built to practice the kind of tasks that come up in front-end machine-coding rounds: build a searchable list, wire it to an API, make a table you can edit inline. They look trivial next to a full product, but they concentrate the exact patterns you reach for constantly in real work. Here is what these deceptively small builds drill.

## A service layer, even for one endpoint

The project keeps API calls in a \`userService\` (using \`axios\`) rather than scattering \`fetch\` calls inside components. That separation seems like overkill for a demo, but it is the single habit that most improves a React codebase. Components should render; a service should know *how* to talk to the backend. When the endpoint changes, or you add caching, or you need to mock the API in a test, there is exactly one place to touch. Practicing this on a toy project makes it automatic on a real one.

## Search that does not hammer the server

A \`SearchBar\` filtering a \`UserList\` is the classic exercise, and the classic mistake is firing a request on every keystroke. The pattern the exercise teaches is **debouncing** — waiting until the user pauses typing before searching — or filtering an already-loaded list in memory when the dataset is small. Deciding *which* is right is the actual skill: client-side filtering for a small fixed list, debounced server queries for a large one. That judgment is what interviewers are really probing, and it comes up in every search box you will ever build.

## Component decomposition

The users feature is split into a \`UsersPage\`, a \`UserList\`, and a \`UserCard\`. Breaking a screen into a page (data and state), a list (iteration and layout), and a card (presentation of one item) is the bread-and-butter of React structure. Get the boundaries right and props flow cleanly downward; get them wrong and you end up with one giant component holding everything. Doing this repeatedly on small tasks builds the instinct for where the seams belong.

## Editable tables: local state meets "save"

The \`EditableTable\` page is the trickiest of the set, because inline editing forces you to think about **state ownership**. While a user is typing in a cell, where does that value live? Usually in local component state, kept separate from the "saved" data, so an edit can be committed or cancelled. This tension — draft state versus persisted state — is at the heart of every form, every settings page, every editable anything. An editable table is a compact way to practice it.

## Routing as structure

With \`react-router-dom\`, the app splits into a \`/users\` route and a \`/tables\` route behind a shared nav using \`NavLink\` (which knows which link is active). Routing is not just navigation — it is how you decompose an app into independent, bookmarkable, lazy-loadable screens. Even a two-route demo reinforces thinking of features as routes rather than a monolith.

## Why "small" practice is not small

It is tempting to dismiss machine-coding drills as artificial. They are not. Strip any large React application down and it is made of these exact atoms: a service layer, a debounced search, well-decomposed components, draft-versus-saved state, and route-based structure. Practicing them in isolation — where nothing else distracts — is how the patterns become reflexes. When I build something real like SkillSwap or a dashboard, I am not inventing these approaches under pressure; I am reusing muscle memory built on projects exactly like this one.
`,
  },

  {
    slug: "building-react-sites-for-clients-and-causes",
    title: "Building React Sites for Real Clients and Real Causes",
    excerpt:
      "A consultancy that needed customers to find them, and a COVID-era effort to get face shields to frontline workers. Side projects are fun, but building for someone else's actual need is a different discipline.",
    content: `
Most of my projects start from curiosity. Two did not: **Balaji Consultancy**, a live website for a consultancy service business in Hisar, Haryana, and **Indore Cares**, a site built during COVID-19 to help frontline workers request face shields. Building for a real client and a real cause is a different discipline from building for yourself, and these two taught me things a personal side project never could.

## Balaji Consultancy: the site is a business tool, not a portfolio piece

For a consultancy, a website exists to do one job — help potential customers find the business, understand what it offers, and get in touch. That reframes every decision. Nobody visiting cares which framework I used or how clever the code is. They care whether the services are clear and whether they can reach the business.

So the priorities were different from a hobby build: clarity of information over visual flourish, a structure that maps to how a customer thinks ("what do they do, can they help me, how do I contact them"), and reliability, because a business site that is down is a business losing leads. React gave me a clean, componentized way to build and launch it, but the engineering was in service of the business goal, not the other way around. The discipline I took away: when you build for a client, success is measured by *their* outcome — enquiries, calls, customers — not by your technical satisfaction.

## Indore Cares: constraints and urgency for a cause

Indore Cares came out of the pandemic. Frontline workers needed face shields as protection against exposure, and the site's job was to let them request those shields — connecting a need to the people who could fill it. Building something people rely on during a crisis sharpens your sense of what matters.

Here the pressure was different again. It had to be **simple enough that a stressed, non-technical frontline worker could use it** without a manual. It had to work on whatever phone someone happened to have. And it had to be built quickly, because the need was immediate. That environment strips away gold-plating fast — there is no time to polish an animation when the point is to get protective equipment to someone who needs it today. The lesson was about ruthless prioritization: figure out the one action the user must complete, make that path effortless, and let everything else wait.

## What client and cause work share

Both projects taught the same underlying thing from opposite directions: **the technology is not the point**. For the consultancy, the point was leads. For Indore Cares, the point was getting face shields to people. React, hosting, components — all of it was plumbing in service of a human outcome.

That is a genuinely different mindset from a curiosity project, where the outcome *is* the learning. When you build for someone else:

- **You inherit their definition of done.** It is finished when it serves their need, not when the code is elegant.
- **You design for their user, who is not you.** A frontline worker and a consultancy's prospective client have nothing in common with a developer, and the interface has to meet them where they are.
- **Reliability outranks cleverness.** A live site people depend on cannot be a place to experiment.

## Why I value these two most

My extensions and apps are where I learn techniques. Balaji Consultancy and Indore Cares are where I learned that software is a means to an end that belongs to someone else. A consultancy got a working storefront on the web; frontline workers got a simple way to ask for protection when it mattered. Those outcomes, not the stacks behind them, are what make these the projects I am most glad I built.
`,
  },

  {
    slug: "publishing-to-the-chrome-web-store-lessons",
    title: "Shipping to the Chrome Web Store: The Part That Isn't Code",
    excerpt:
      "Writing an extension is half the work. Getting it published — permission justifications, review, a listing that survives scrutiny — is the other half. Lessons from getting several extensions live.",
    content: `
I have several extensions live on the Chrome Web Store, and the thing nobody warns you about is that **writing the extension is only half the job**. The other half is getting it *approved and kept* on the store, which is its own skill with its own rules. This post is about that half — the part that is not code.

## Least privilege is not optional

The single biggest factor in a smooth review is permissions. Chrome's review process scrutinizes what an extension asks for, and every permission you request must be **justified by a visible feature**. An extension that requests broad host access "just in case" is asking for trouble.

Building my extensions taught me to request the *narrowest* permission that does the job. Custom Google Logo only lists the specific Google regional domains it modifies, not \`<all_urls>\`. Ad Cleaner uses \`declarativeNetRequest\` — which lets the browser do the blocking from a static rulebook — specifically because it avoids the more invasive "read all your traffic" model. When your permissions map one-to-one to features a reviewer can see and try, review is straightforward. When they do not, you get rejected and asked to explain yourself.

## Manifest V3 is the price of admission

The store now requires **Manifest V3**, and MV3 removes things MV2 developers leaned on: no persistent background page (you get a service worker that the browser can kill at any time), no arbitrary remote code execution, a stricter Content Security Policy. If your extension depends on old patterns, it will not ship. All my extensions are MV3 from the start — background logic in service workers, no inline scripts, bundlers configured to be CSP-safe. Getting this right up front is far easier than retrofitting it after a rejection.

## The listing is part of the product

A store listing is not paperwork you fill out at the end; it is what determines whether anyone installs the extension and whether the review passes. It needs an honest, specific description of what the extension does, screenshots and promo images at the required dimensions, and — crucially — a **privacy disclosure** that matches the extension's actual behavior. If your listing claims one thing and your code does another, that mismatch is exactly what review catches.

I keep the description concrete and truthful: what it does, in plain language, matching the permissions requested. "Blocks YouTube video ads and promoted thumbnails" is a claim a reviewer can verify by installing it. Vague or exaggerated claims invite scrutiny.

## Updates go through review too

Publishing once is not the finish line. Every update is re-reviewed, and store policies change over time — an extension that was fine last year can need adjustments to stay compliant. Versioning matters (the manifest version drives updates that push to every user), and so does keeping an eye on policy changes. Shipping to the store is an ongoing relationship, not a one-time submission.

## What the store taught me about building

Knowing the store's rules changed how I *build*, not just how I submit. I now think about permissions while designing a feature, not after. I reach for approaches like declarative rules that are both better engineering and easier to justify. I write honest descriptions because the code has to back them up. The constraints the Chrome Web Store imposes — least privilege, MV3, truthful disclosure — are, it turns out, mostly just good software practices with a review process attached. Building to pass review made my extensions better, not just publishable.
`,
  },

  {
    slug: "react-native-expo-lessons-from-shipping-mobile-apps",
    title: "React Native and Expo: Hard-Won Lessons From Shipping Real Mobile Apps",
    excerpt:
      "Expo makes React Native approachable until the physical world interferes — networking across devices, SDK version traps, and native modules. Notes from building KundliDost, TrustPe mobile, and more.",
    content: `
I have built several mobile apps with React Native and Expo — the KundliDost astrology app, the TrustPe lending app's mobile client, a TicTacToe game, and others. Expo makes getting started genuinely easy, but the moment your app has to talk to a real backend on a real device, a set of very physical problems appears that no amount of JavaScript knowledge prepares you for. These are the lessons that cost me real time.

## localhost means something different on every target

The first wall everyone hits: your backend runs on \`localhost:5000\`, and the app cannot reach it. Why? Because "localhost" is relative to the device the code runs on.

- On the **Android emulator**, \`localhost\` is the emulator itself. To reach your development machine you use the special alias \`10.0.2.2\`, which the emulator maps back to the host.
- On a **physical phone**, neither \`localhost\` nor \`10.0.2.2\` works — the phone must call your computer's **LAN IP** (like \`192.168.1.4\`), and both devices have to be on the same Wi-Fi.

In KundliDost I put the API base in an \`EXPO_PUBLIC_API_URL\` environment variable precisely so switching between emulator and phone is a one-line change rather than a code edit. Understanding *why* the URL differs per target — rather than memorizing magic numbers — is what makes this stop being mysterious.

## The QR code can point at the wrong network

Expo starts a dev server and gives you a QR code to open the app in Expo Go. On a machine with several network adapters — VirtualBox, WSL, a VPN, plus real Wi-Fi — Expo sometimes bakes the *wrong* adapter's IP into that QR code. You scan it, and the app tries to reach an address that does not exist on your Wi-Fi, and nothing happens with no useful error.

The fix is pinning \`REACT_NATIVE_PACKAGER_HOSTNAME\` to your actual Wi-Fi IP so the QR always encodes a reachable address. This is the kind of environmental gotcha that has nothing to do with your code and everything to do with the machine you develop on — and it will waste an afternoon if you do not know it exists.

## SDK version is a compatibility contract, not a number to maximize

The instinct with dependencies is to stay on the latest version. With Expo that instinct can lock users out. Expo Go — the app most people use to open your project during development — only supports specific SDK versions, because the store version of Expo Go is frozen at a particular point. KundliDost is deliberately pinned to **Expo SDK 54** for exactly this reason: chasing a newer SDK would mean testers literally could not open the app in Expo Go. With React Native, the version is a compatibility contract between your code, Expo Go, and the native runtime — not a bragging point.

## Native modules are where "managed" ends

Expo's managed workflow is wonderful until you need a native SDK it does not bundle — Google Sign-In, a payment provider, and the like. At that point Expo Go is not enough; you need a custom **dev client** or a cloud build (Expo's EAS). This is a planned transition, not a surprise, but it defines the ceiling of the easy path. Knowing where that ceiling is lets you architect for it — keep the JavaScript app clean and defer the native-module work until you genuinely need those SDKs, then move to EAS builds for it.

## The meta-lesson

React Native's cross-platform promise is real, and Expo makes the on-ramp gentle. But mobile development drags you back into the physical world in a way web development rarely does: which network an IP belongs to, which SDK a store app supports, which capabilities need native code. None of these are hard once you know them, and none are discoverable by reading about React. Shipping actual apps — and losing time to each of these at least once — is the only way I learned them. Now they are a checklist instead of a mystery.
`,
  },

  {
    slug: "mongodb-vs-postgres-across-my-projects",
    title: "MongoDB or Postgres? What I Actually Reach For, and Why",
    excerpt:
      "I've shipped projects on both. The choice isn't about which database is 'better' — it's about whether your data has a fixed shape and real relationships. Here's the decision as I actually make it.",
    content: `
Across my projects I have used both MongoDB and PostgreSQL, and the question I get asked most is which one is "better." That framing is wrong. Having built real apps on each, I have a concrete decision rule, and it comes down to one question: **does your data have a fixed shape and real relationships, or not?**

## Where I reach for MongoDB

Several of my projects use MongoDB with Mongoose: SkillSwap, Big Win, KundliDost, TrustPe. What they share is either a fast-moving, evolving data shape or documents that are naturally self-contained.

MongoDB stores documents — flexible, JSON-like records — and does not force you to define a rigid schema up front (Mongoose adds an optional schema layer on top when you want structure). That flexibility is a genuine advantage when a project is young and the model is still changing, or when a record is a natural whole you fetch together. In KundliDost, a computed chart is a self-contained document; in early-stage building, not having to write and run a migration every time a field changes keeps iteration fast. When you are still discovering what your data looks like, MongoDB lets the schema follow the code instead of the code waiting on the schema.

## Where I reach for Postgres

Swift Chat Connect uses PostgreSQL through Drizzle ORM; the Pharmacy College app uses Supabase, which is Postgres underneath. I chose SQL for these because the data has **clear structure and relationships** that I *want* enforced.

Postgres is relational: you define tables and columns with real types, and the database guarantees that structure. In Swift Chat Connect there are users, swipes, and messages between users — entities with defined relations. Making those relationships explicit in the schema means the database itself refuses to store nonsense, and with Drizzle the TypeScript types are generated *from* that schema, so the code and the database cannot disagree. When the shape is known and the relationships matter, that rigidity is not a constraint — it is a safety net.

## The trade-off in one sentence

MongoDB asks less of you up front and lets the model flex; Postgres asks you to define structure first and then enforces it for you. Flexibility versus guarantees. Neither is free: MongoDB's flexibility means *your application* has to be disciplined about shape, because the database will not be; Postgres's guarantees mean you pay the cost of defining and migrating a schema.

## How I actually decide

My practical rule after building on both:

- **Reach for MongoDB when** the data model is still moving, records are naturally self-contained documents, or I want to iterate fast without migrations. Good for early-stage projects and document-shaped data.
- **Reach for Postgres when** the data has clear entities and relationships I want enforced, when correctness of structure matters, and especially when I am using a typed layer like Drizzle that turns the schema into compile-time safety.

## The thing nobody tells beginners

Both databases will happily run any project. You *can* build a chat app on either; I effectively did (SkillSwap on Mongo, Swift Chat Connect on Postgres). The difference is not capability, it is **where the discipline lives** — in your application code, or in the database schema. Deciding that consciously, instead of defaulting to whichever you learned first, is the actual skill. I do not have a favorite database. I have a favorite question to ask before I pick one.
`,
  },

  {
    slug: "deploying-side-projects-vercel-render",
    title: "How I Deploy Side Projects: Vercel for the Front, Render for the Back",
    excerpt:
      "A side project that only runs on your laptop isn't finished. Here's the split I use — static front-ends on Vercel, always-on backends on Render — and the config that makes deploys boring.",
    content: `
A project that only runs on your machine is a demo, not a product. Getting my side projects actually *live* — this website, Big Win, SkillSwap, KundliDost, the Pharmacy College app — settled into a repeatable split: **front-ends on Vercel, backends on Render.** Here is the reasoning and the setup that makes deploying uneventful.

## Why the split exists

A React front-end and a Node backend are fundamentally different things to host.

A React app, once built, is **static files** — HTML, JS, CSS. It does not "run"; it is served. That is exactly what Vercel is built for: connect the repo, it builds on every push and serves the output on a global CDN. My personal website and the Pharmacy College app are static builds that Vercel hosts and redeploys automatically whenever I push.

A Node/Express backend is a **long-running process** — it has to stay up, hold connections, run scheduled jobs, talk to a database. That is a server, and Render hosts exactly that: a persistent Node service with environment variables and a real runtime. Big Win's lottery backend has to stay running to fire its scheduled draws; that cannot live on static hosting.

Matching each half of the app to the hosting model built for it is the whole idea. Do not try to run a persistent server on static hosting, and do not spin up a full server to hand out static files.

## Configuration as code

The deploys are boring — which is the goal — because the configuration lives in the repo. KundliDost and TrustPe carry a \`render.yaml\` that describes their backend service to Render: what to build, what to run, which environment it needs. The Pharmacy College app has a \`vercel.json\` that tells Vercel how to handle the build and routing (important for a single-page app, where every route must fall back to \`index.html\` so client-side routing works). Because these files are committed, the deployment is reproducible and reviewable — the hosting setup is versioned alongside the code instead of living as clicks in a dashboard someone has to remember.

## Environment variables are the seam

The one thing that must *not* be in the repo is secrets — database URLs, API keys, session secrets. Those live in the hosting platform's environment settings. This forces a good habit: the code reads configuration from the environment (\`process.env\`), and the same build runs locally, in staging, and in production with only the environment changing. In KundliDost the API base URL, the database connection, and the AI key are all environment-driven, which is why the app can run against an in-memory database locally and a real one in production without a code change.

## The single-page-app routing gotcha

The most common deploy bug for a React site is refreshing on a route like \`/blog\` and getting a 404. That happens because the server looks for a file at that path and there is not one — the route only exists inside the client-side router. The fix is telling the host to serve \`index.html\` for unknown paths so the React router can take over. On Vercel that is a rewrite rule; getting it right is the difference between an app that only works if you start at the home page and one where every URL is shareable.

## Why this matters more than it seems

Deployment is where a lot of side projects quietly die — they work locally, the last mile feels like a chore, and they never go live. Turning it into a **known, config-in-repo routine** removes that friction. Vercel builds my front-ends on push; Render keeps my backends running; secrets live in the environment; SPA routing is handled once. Because the setup is boring and repeatable, shipping a new project is no longer a special event — it is just \`git push\`.
`,
  },

  {
    slug: "one-schema-client-and-server-zod-typescript",
    title: "One Schema for Client and Server: Schema-First TypeScript With Zod",
    excerpt:
      "Defining what a 'user' or a 'loan' looks like twice — once on the server, once on the client — is how they drift apart. Defining it once, with Zod, and deriving everything from it is the fix.",
    content: `
The most avoidable class of bug in a full-stack app is the two halves disagreeing about the shape of the data. The server expects a field the client does not send; the client renders a property the server renamed. In TrustPe and Swift Chat Connect I built specifically to make that impossible, using a **schema-first** approach with Zod. The principle: define each data shape **once**, and derive everything else — types, validation, forms — from that single definition.

## The problem: the same shape, defined twice

In a naive full-stack app, a "loan" or a "user" gets defined several times: a TypeScript \`interface\` on the client, a validation check on the server, maybe a database model, maybe a form's expectations. Each is a hand-written copy of the same idea. The moment one changes and the others do not, you have a bug that the compiler cannot see, because each copy is internally consistent — they are just inconsistent with *each other*.

## The fix: one Zod schema as the source

**Zod** is a validation library with a special property: a Zod schema both **validates data at runtime** and lets TypeScript **infer a static type** from it. So a single schema gives you two things that normally have to be kept in sync by hand — the runtime guard and the compile-time type.

In TrustPe, the Zod schemas for the domain live in a **shared package** (\`shared/\`), imported by the backend, the admin panel, and the mobile app alike as \`@shared/*\`. The shape of a loan is written **once**, in one file, and:

- the **backend** validates incoming requests against it,
- the **client** gets the TypeScript type inferred from it, for free,
- and every app reads the *same* definition, so there is nothing to keep in sync.

Change the schema, and TypeScript immediately flags every place across all four apps that no longer matches. The inconsistency becomes a compile error instead of a production surprise.

## Deriving the schema from the database

Swift Chat Connect takes the same idea from the other direction. There, the database schema is defined in Drizzle, and \`drizzle-zod\` **generates** the Zod validation schemas from the table definitions. So the flow is: define the table once, get the database structure, the inferred TypeScript types, *and* the runtime validators — all from that one definition. The database, the types, and the validation cannot drift because two of them are generated from the third.

Both projects reach the same destination by different roads: **one definition, many derived artifacts.** TrustPe starts from a shared Zod schema; Swift Chat Connect starts from a Drizzle table and generates the Zod. Either way, nothing is hand-copied.

## Why this is worth the setup

Schema-first has a small up-front cost — you have to structure the project so the schema is shared, and you have to define it deliberately. The payoff is that an entire category of bug disappears:

- **No drift.** Client and server literally cannot disagree about a shape they both import from one source.
- **Validation is not optional or forgotten.** The same schema that types the data also validates it, so untrusted input is checked at the boundary as a matter of course.
- **Refactoring is safe.** Rename or retype a field, and the type system marches you through every consumer that needs updating.

## The principle underneath

This is really an application of "single source of truth" to data shape. The reason the two halves of an app drift is that the shape was written down in more than one place. Write it down once — as a Zod schema, or a Drizzle table that generates one — and derive the types, the validators, and the forms from it. In a monorepo like TrustPe, where a backend, an admin panel, and a mobile app all handle the same loan, that single shared definition is not a nicety. It is what lets four apps evolve together without falling out of sync.
`,
  },
];
