export function scrollIntoViews(selectorQuery) {
  const element = document.querySelector(selectorQuery);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}

export const profile = {
  name: "Bhagirath Sheela",
  role: "Full-stack developer",
  tagline: "I build Android apps end to end — app, backend and everything after launch.",
  email: "bhagirathsheela001@gmail.com",
  phone: "+91 96109 28997",
  about:
    "I'm a full-stack developer from Rajasthan. For the last few years I've been building my own Android apps and running them myself: the React Native app, the Node backend behind it, the Play Store listing, and all the unglamorous work that follows a launch. Four of them are live right now. Before that I spent five years on web work — React front ends, Chrome extensions, and sites for small businesses.",
};

export const socialLinks = [
  {
    name: "GitHub",
    label: "GitHub profile",
    href: "https://github.com/Bhagirathsheela",
  },
  {
    name: "LinkedIn",
    label: "LinkedIn profile",
    href: "https://www.linkedin.com/in/bhagirath-sheela-a240b7b3/",
  },
  {
    name: "YouTube",
    label: "Sheela Labs on YouTube",
    href: "https://www.youtube.com/@sheelalabs",
  },
  {
    name: "Twitter",
    label: "Twitter profile",
    href: "https://twitter.com/BHAGIRATHSHEELA",
  },
];

/**
 * Live work — shipped, running, and maintained today.
 * `status` drives the badge on the card: "live" | "testing".
 */
export const liveProjects = [
  {
    language: "Android",
    stack: "React Native · Node · MongoDB · Swiss Ephemeris",
    title: "KundliDost",
    status: "live",
    statusText: "Live on Play Store",
    intro:
      "Vedic astrology for people who never learned to read a chart. It generates a real kundli from Swiss Ephemeris data — not canned text — then explains it conversationally in Hindi or English. The chart engine is tested against reference charts so the maths is right before the AI ever sees it.",
    linkBtnTxt: "Play Store",
    link: "https://play.google.com/store/apps/details?id=com.kundlidost.app",
    secondaryTxt: "kundlidost.in",
    secondaryLink: "https://www.kundlidost.in",
  },
  {
    language: "Android",
    stack: "React Native · Socket.IO · MongoDB · Cloud Run",
    title: "Bakkar",
    status: "live",
    statusText: "Live on Play Store",
    intro:
      "A chat app for meeting people nearby — one-to-one chats, local group rooms called Addas, and an anonymous neighbourhood feed. Messages are stored and paged in on open, and deleting a chat hides it for you until both sides delete, when it's erased for good.",
    linkBtnTxt: "Play Store",
    link: "https://play.google.com/store/apps/details?id=in.bakkar.app",
    secondaryTxt: "bakkar.in",
    secondaryLink: "https://bakkar.in",
  },
  {
    language: "Android",
    stack: "React Native · TypeScript · Express · MongoDB",
    title: "JobCatch",
    status: "live",
    statusText: "Live on Play Store",
    intro:
      "Job alerts that actually arrive early, a tracker for every application you've sent, and a resume builder that passes ATS filters without sounding machine-written. The job-source parsers are shared between the app and the server, so a broken source is caught in one place.",
    linkBtnTxt: "Play Store",
    link: "https://play.google.com/store/apps/details?id=com.careerdost.app",
    secondaryTxt: "jobcatch.in",
    secondaryLink: "https://jobcatch.in",
  },
  {
    language: "Android",
    stack: "React Native · Expo · Firebase",
    title: "RadioDost",
    status: "live",
    statusText: "Live on Play Store",
    intro:
      "Akashvani and free Indian stations behind a tuning dial you turn with your thumb, with proper background playback so it keeps going when the screen locks. Every stream in the catalogue is checked on each build, because dead radio URLs are the whole problem with these apps.",
    linkBtnTxt: "Play Store",
    link: "https://play.google.com/store/apps/details?id=com.bhagirath.radiodost",
    secondaryTxt: "radiodost.web.app",
    secondaryLink: "https://radiodost.web.app",
  },
  {
    language: "YouTube",
    stack: "Remotion · Node · Gemini TTS",
    title: "Sheela Labs",
    status: "live",
    statusText: "Publishing",
    intro:
      "A Hindi explainer channel answering \"how does this actually work?\" about everyday technology. Every video is rendered in code rather than edited by hand — React components for the visuals, synthesised narration and music — so a script change re-renders the whole video.",
    linkBtnTxt: "Watch on YouTube",
    link: "https://www.youtube.com/@sheelalabs",
  },
];

/**
 * Earlier work that is still online and still installable.
 * Anything that went offline has been retired from this list.
 */
export const otherProjects = [
  {
    language: "Extension",
    stack: "JavaScript · Manifest V3",
    title: "Mock Data Generator",
    intro:
      "Generates realistic test data — names, addresses, dates, nested JSON — in the shape you actually need, so you can build a UI before the API exists.",
    linkBtnTxt: "Chrome Web Store",
    link: "https://chromewebstore.google.com/detail/mock-data-generator/dlknohkngfncgickemjlfldifojpehmb",
  },
  {
    language: "Extension",
    stack: "JavaScript · Manifest V3",
    title: "Dark Mode for Websites",
    intro:
      "Turns any site dark, including the ones that never built a dark theme. Useful at night, and a good lesson in how much the web assumes a white background.",
    linkBtnTxt: "Chrome Web Store",
    link: "https://chromewebstore.google.com/detail/dark-mode-night-theme-for/jngldlhjlgcpbohcelbjkmiaocpjdokh",
  },
  {
    language: "Extension",
    stack: "JavaScript · Manifest V3",
    title: "Edit Websites Live",
    intro:
      "Makes any page editable in place, so you can try new copy or a different layout on a real site before asking anyone to build it.",
    linkBtnTxt: "Chrome Web Store",
    link: "https://chromewebstore.google.com/detail/edit-websites-live/dimedmhonbaennlgmfaicibgpoldefcm",
  },
  {
    language: "Extension",
    stack: "JavaScript · Manifest V3",
    title: "Custom Google Logo",
    intro:
      "Swaps the Google logo on the search page for your own text. A small thing, and a stubborn one — the page rewrites itself constantly, so the script has to survive that.",
    linkBtnTxt: "Chrome Web Store",
    link: "https://chromewebstore.google.com/detail/custom-google-logo/bellfmkglhnmefgigmjhkdeodjaajcgh",
  },
  {
    language: "Web App",
    stack: "MongoDB · Express · React · Node",
    title: "Skill Swap",
    intro:
      "A barter marketplace for skills: list what you can teach, find someone who wants it and has something you want back. Built to practise real-time messaging on the MERN stack.",
    linkBtnTxt: "View project",
    link: "https://skill-swap-frontend.vercel.app",
  },
  {
    language: "Web App",
    stack: "MongoDB · Express · React · node-cron",
    title: "Big Win",
    intro:
      "A daily number-draw game with scheduled server-side draws. The interesting part was making the draw run exactly once at a fixed time, whatever the server was doing.",
    linkBtnTxt: "View project",
    link: "https://big-win-frontend.vercel.app",
  },
];

export const educationInfo = [
  {
    uniqueStateClass: "graduation",
    period: "2013 — 2017",
    title: "B.Tech, Computer Science & Engineering — NITK Surathkal",
    expandedInfo: {
      title: "What I built there",
      pointsList: [
        "A travel blogging platform for sharing trip write-ups and photos",
        "Face detection with a neural network, trained from scratch",
        "A multi-threaded web crawler, and the lesson that concurrency is mostly about knowing when to stop",
      ],
    },
  },
  {
    period: "2010 — 2011",
    uniqueStateClass: "higherSecondary",
    title: "Higher Secondary — Shri Shyam Sr. Sec. School, Bhadra",
    expandedInfo: {
      title: "Entrance exams",
      pointsList: [
        "IIT-JEE",
        "ICAR (Indian Council of Agricultural Research)",
        "RPET (Rajasthan Pre-Engineering Test)",
      ],
    },
  },
  {
    period: "2009 — 2010",
    uniqueStateClass: "highSchool",
    title: "High School — Shri Shyam Sr. Sec. School, Bhadra",
    expandedInfo: {
      title: "Seminars I spoke at",
      pointsList: [
        "How to lift the level of education in rural areas",
        "Women's empowerment",
        "Why everyone should plant a tree each year",
      ],
    },
  },
];
