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
    link: "https://play.google.com/store/apps/details?id=com.TicTocToe.myapp&pcampaignid=web_share",
  },
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
    slug: "fix-react-performance-issues",
    title: "Top React Performance Problems & Real World Fixes",
    excerpt: "Developers unknowingly kill React performance. Here is how I avoid it in production apps…",
    content: `
Improving React performance is NOT about using fancy tricks.
It is mostly about avoiding mistakes.

Here are fixes I ACTUALLY use 👇

⚡ Avoid Unnecessary Re-renders
Use React.memo for components receiving same props
Use useCallback when passing functions
Use useMemo for heavy computations

⚡ Avoid Keeping Everything in State
Do not store everything in useState.
Do not put derived values inside state.

⚡ Lazy Load Heavy Components
const Page = React.lazy(() => import("./BigComponent"));

⚡ Virtualize Long Lists
Use react-window or react-virtualized

⚡ Pagination ALWAYS Wins Over Infinite Data

⚡ Avoid Inline Functions in Loops

These changes actually reduced load time and improved Lighthouse scores in my projects.
And yes, performance matters 🙂
`
  },

  {
    slug: "nodejs-express-best-practices",
    title: "Node + Express Best Practices for Production",
    excerpt: "Security, logging, MVC structure and things I always implement before deploying…",
    content: `
When I deploy Express apps, these are non-negotiable 👇

✔ Helmet – protects from common attacks  
✔ Rate Limiting – stops abuse  
✔ Winston Logger – logs matter in production  
✔ Centralized Error Handling  
✔ MVC Folder Structure  
✔ Async Handling Wrapper  

Bonus Tip:
Never expose secrets in code.
.env exists for a reason 🙂

These practices have personally saved me time,
bugs and unexpected crashes in production.
`
  },

  {
    slug: "frontend-security-checklist",
    title: "Frontend Security Checklist Every Developer Must Know",
    excerpt: "People think security = backend only. BIG mistake. Here’s what I follow…",
    content: `
Security is everyone's responsibility,
even frontend developers.

Here are REAL risks 👇

🚨 Do not trust JWT stored in localStorage
Prefer httpOnly cookies

🚨 Always sanitize user inputs
Especially forms & text editors

🚨 Never expose API keys in frontend
Use a backend proxy

🚨 Avoid eval()
Please. Just avoid.

🚨 Use HTTPS Always
Even during staging

Believe me,
these small things save huge headaches later.
`
  },

  {
    slug: "mongodb-best-practices",
    title: "MongoDB Best Practices I Learned from Real Projects",
    excerpt: "Indexes, schema design, performance tuning & habits that helped me build scalable apps…",
    content: `
MongoDB is powerful,
but only if used correctly 👇

✔ Always design schema based on queries
✔ Use indexes wisely
✔ Avoid too many nested objects
✔ Enable validation
✔ Backup strategy is important
✔ Use aggregate when required

MongoDB performance totally depends on how you THINK
before you code.
`
  },

  {
    slug: "jwt-security-guide",
    title: "JWT Security: Things Nobody Told Me Initially",
    excerpt: "JWT is not just about signing and verifying. Here is what truly matters…",
    content: `
If you're using JWT, read this carefully 👇

❌ Do NOT store JWT in localStorage
✔ Prefer httpOnly cookies

❌ Never make token expiry too long
✔ Refresh tokens exist for a reason

❌ Never trust frontend claims
✔ Always verify role server side

JWT done wrong = disaster.
JWT done right = smooth authentication.
`
  },

  {
    slug: "mern-architecture-guide",
    title: "How I Structure My MERN Projects",
    excerpt: "Clean structure = easier scaling, fewer bugs, happy future you…",
    content: `
My go-to MERN structure 👇

backend/
 controllers
 routes
 models
 middlewares
 utils

frontend/
 components
 pages
 hooks
 services
 store

Why?
Because maintainability beats hacky shortcuts.
`
  },

  {
    slug: "ai-agents-dev-future",
    title: "AI Agents Are The Future — Here Is How They Change Development",
    excerpt: "AI won’t replace developers, but developers using AI WILL replace developers not using AI…",
    content: `
AI Agents are NOT hype anymore.

They can:
🤖 Debug
🤖 Generate code
🤖 Run workflows
🤖 Automate tasks

But they cannot replace:
Creativity
System design thinking
Problem solving
Product mindset

Developers who learn to use AI
will simply move faster.
`
  },

  {
    slug: "react-problems-i-faced",
    title: "Real React Problems I Actually Faced and Solved",
    excerpt: "Not theory. Real developer pains with real fixes...",
    content: `
I faced these React issues personally 👇

❌ State chaos
✔ Fixed with Redux Toolkit

❌ Performance issues
✔ Memoization and splitting components

❌ API Handling Messy
✔ Custom hooks + axios interceptors

❌ UI not scalable
✔ Component driven architecture

We grow by building and breaking 🙂
`
  },

  {
    slug: "ladakh-travel-story",
    title: "My Ladakh Travel Experience",
    excerpt: "Mountains that stay in your heart forever…",
    content: `
Ladakh changed something inside me.

❄ Cold deserts
🏍️ Bike rides
🏔️ Snow mountains
🙏 Peaceful monasteries

If you love travelling,
Ladakh MUST be in your life list.
`
  }
];


