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
  },
{
  slug: "react-design-patterns-that-helped-me",
  title: "React Design Patterns That Helped Me Build Better Apps",
  excerpt: "Clean React code is not about writing less code — it’s about writing predictable, scalable and maintainable components…",
  content: `
When I started building large scale React apps, my code worked… but maintaining it was painful.

As projects grew, files became messy, components became confusing, and every new feature felt risky. I slowly realized that React is not just about hooks and components, it is about **architecture and patterns**.

Here are React design patterns that genuinely helped me in real production projects.

---

## 1️⃣ Container & Presentational Pattern

React components often become bloated because we mix UI and logic together.

A better approach:
- Presentational Component → only UI
- Container Component → handles logic, API, state and passes data via props

This improves readability, testing, and maintainability. When UI changes, logic stays safe.

---

## 2️⃣ Custom Hooks Pattern

If you repeat logic across components like:
- API handling
- authentication
- scroll listener
- form handling

Create a custom hook.

Example:
useAuth()
useFetch()
usePagination()

Custom hooks **reduce code duplication** and keep components clean. This also makes your code reusable across the entire application.

---

## 3️⃣ Compound Component Pattern

If you build reusable UI libraries (modal, dropdown, tabs), this pattern feels magical.

Instead of passing too many props, you allow users to compose UI naturally.

For example:
<Modal>
 <Modal.Header />
 <Modal.Body />
 <Modal.Footer />
</Modal>

This gives flexibility, cleaner API, and better control.

---

## 4️⃣ Controlled vs Uncontrolled Components

Forms are complex. React gives you two ways:
Controlled → React manages state
Uncontrolled → DOM manages state

Controlled components give better validation and tracking.
Uncontrolled is lighter and simpler.

Choose wisely based on requirements.

---

## 5️⃣ Code Splitting & Lazy Loading Pattern

Big bundles = slow website.
Slow websites = bad user experience + SEO issues.

React.lazy + Suspense helps load code only when needed.
Users only load what they use.

---

## Final Thought

These patterns actually changed how I build React apps.
My code became more predictable,
new developers understood structure easily,
and scaling became smooth.

Good architecture is an investment.
Future you will be thankful 🙂
`
},

{
  slug: "complete-guide-to-react-forms",
  title: "A Complete Practical Guide To Handling Forms in React",
  excerpt: "Forms look simple but can easily become the most painful part of a frontend app. Here is how I handle them like a pro…",
  content: `
Forms are everywhere — login, signup, checkout, dashboards, admin panels — and in React, they can quickly become messy if not handled properly.

Let’s go through everything from basics to best practices I actually follow in real projects.

---

![React Forms](https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200)

---

## 1️⃣ Controlled Components

In React, input values are usually controlled using state.
This gives full control over data, validations, and UI behavior.

Example workflow:
- store each field in state
- update state onChange
- submit form by reading state

This is perfect for most real-world apps.

---

## 2️⃣ Uncontrolled Components

If performance matters or form is simple,
you can let DOM handle values using 'ref'.

This reduces re-renders but sacrifices full control.

I mainly use this for simple search bars or one-field forms.

---

## 3️⃣ Form Validation Strategy

Validation matters more than UI.
I prefer:
- required checks
- email format
- password strength
- realtime feedback

For complex apps, libraries like:
Formik
React Hook Form
Yup

make life easier.

---

## 4️⃣ UX Improvements That Users Love

Small UX improvements improve conversion:

✔ Show validation messages instantly  
✔ Disable submit until valid  
✔ Show loaders when submitting  
✔ Prevent duplicate submissions  
✔ Provide helpful error messages  

Users feel confident when forms talk to them.

---

## 5️⃣ Handle API Responses Correctly

Always handle:
- success state
- validation errors
- server failure
- network failure

Show proper feedback like:
✓ Success: redirect or success message  
✗ Failure: explain problem clearly  

---

## Final Thought

Forms are not just inputs.
They are user experience + trust + business conversion.

Once you master React forms,
your applications instantly feel more professional and reliable.
`
},

{
  slug: "mongodb-performance-deep-dive",
  title: "Deep Dive: How I Improved MongoDB Performance in Real Projects",
  excerpt: "Indexes, schema decisions, aggregate pipeline, and lessons I learned while scaling apps to real users…",
  content: `
MongoDB is powerful, flexible and developer friendly.
But used wrong — it becomes slow, expensive and frustrating.

Here are performance lessons I learned the hard way.

---

![MongoDB Performance](https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200)

---

## 1️⃣ Schema Designed Based on Queries

Relational mindset does NOT work in MongoDB.
Instead of designing schema around data structure,
design it around how you query it.

Ask:
What data do I access most?
Do I need joins frequently?
Do I need nested documents?

Good schema = instant performance boost.

---

## 2️⃣ Indexes Are Game Changers

Without indexes,
MongoDB scans entire collection.
With indexes,
MongoDB jumps straight to required data.

Always index:
fields used in search
fields used in sorting
fields used in filter queries

But do not over-index.
Every index consumes memory.

---

## 3️⃣ Avoid Deeply Nested Data

Over nested data makes updating harder
and increases document size.

Prefer flatter structures with referencing when needed.

---

## 4️⃣ Use Aggregation Smartly

Mongo aggregate pipeline is powerful.
You can:
filter
group
transform
calculate

But heavy aggregation without indexes = slow.

---

## 5️⃣ Monitor & Optimize

Use:
Mongo Compass
Performance profiler
Explain() queries

Real performance work = measuring + improving.

---

## Final Thought

MongoDB is amazing when planned right.
Think before designing.
Index smartly.
Test performance.

Your database will thank you 🙂
`
},

{
  slug: "jwt-complete-explained",
  title: "JWT Authentication Explained Simply With Real World Practices",
  excerpt: "JWT is everywhere — but most developers only know the basics. Here is everything you must actually understand…",
  content: `
JWT sounds simple:
user logs in → server generates token → frontend stores token → user authenticated.

But real world authentication is more complex.

Let’s understand it deeply.

---

## 1️⃣ What Actually is JWT?

JWT = JSON Web Token.
It is basically:
Header + Payload + Signature

Payload contains:
user id
email
role
expiry
NOT passwords!

Signature ensures integrity.
If someone changes token data,
signature breaks.

---

## 2️⃣ Where To Store JWT?

This is one of the biggest mistakes developers make.

❌ localStorage — vulnerable to XSS  
❌ sessionStorage — same issue  
✔ httpOnly cookies — safer  

httpOnly cookie cannot be accessed by JavaScript,
reducing attack risk.

---

## 3️⃣ Token Expiry Matters

Never keep tokens forever.
Short expiry = safer.

Use:
access token → short life
refresh token → longer life

This gives best security + usability balance.

---

## 4️⃣ Always Validate On Backend

Never trust frontend data.
Even if token is valid,
check:
user exists?
account active?
role allowed?

Security must live server-side.

---

## 5️⃣ Logout Strategy

Invalidate tokens properly.
Either maintain token blacklist
or rotate tokens securely.

---

## Final Thought

JWT is simple but security is not.
Use best practices.
Think like a hacker.
Protect your users.

Good authentication builds trust.
`
},

{
  slug: "why-frontend-matters-more-than-people-think",
  title: "Why Frontend Development Matters More Than People Think",
  excerpt: "Frontend is not just UI — it is performance, accessibility, UX, business growth and user emotion…",
  content: `
For years people said:
“Frontend is just buttons and colors.”

But the truth?
Frontend is one of the most critical parts of any product.

Here’s why.

---

## 1️⃣ First Impression = Frontend

Users do not see backend.
Users do not see database.
Users do not see infrastructure.

They see:
UI
Design
Speed
Animations
Usability

If frontend fails,
product fails.

---

## 2️⃣ Frontend Directly Impacts Business

Slow website?
Users leave.

Confusing UI?
Users quit.

Bad mobile experience?
Users uninstall.

Good frontend:
✔ improves conversions
✔ builds trust
✔ creates emotional connection

---

## 3️⃣ Frontend = Performance

Frontend developers handle:
bundling
lazy loading
image optimization
render performance

Bad performance = bad SEO + low ranking.

---

## 4️⃣ Frontend = Accessibility

Millions of users need:
screen readers
keyboard navigation
proper color contrast

Good frontend includes everyone.

---

## Final Thought

Frontend is not decoration.
Frontend is product experience.

Respect it.
Learn it deeply.
Build meaningful experiences.
`
},

{
  slug: "how-learning-ai-helped-my-dev-career",
  title: "How Learning AI Tools Actually Helped My Development Career",
  excerpt: "AI will not replace developers, but it will massively change how we work. Here’s my honest experience using it daily…",
  content: `
AI is everywhere now.
Some fear it.
Some ignore it.
Some embrace it.

Here is how AI practically changed my development workflow.

---

## 1️⃣ AI Made Me Faster

AI helps me:
debug faster
generate boilerplate
understand legacy code
write documentation
brainstorm architecture ideas

Not replacing thinking,
just accelerating it.

---

## 2️⃣ AI Improved My Learning

Instead of only googling,
I ask AI:
Explain this concept
Compare solutions
Generate examples

Learning becomes interactive.

---

## 3️⃣ AI is a Partner, Not a Replacement

AI cannot:
understand business deeply
talk to stakeholders
design systems emotionally
make product decisions

Developers still matter.
AI just upgrades us.

---

## Final Thought

Developers using AI
will simply build faster,
learn faster,
and deliver better.

Adapt early.
Future belongs to those who evolve.
`
}

];


