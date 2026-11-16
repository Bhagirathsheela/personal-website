# bhagirathsheela.com

Personal site — a single page listing the apps I've shipped, plus a privacy
policy. React (Create React App), hand-written CSS, no UI library, no tracking
and no ads.

## Run it

```bash
npm install
npm start      # http://localhost:3000
npm run build  # production build into build/
```

## Where things live

| Path | What it is |
|---|---|
| `src/consts.js` | **All the content.** Projects, education, contact details, social links. Edit this, not the components. |
| `src/components/Body/HomePage.js` | Hero |
| `src/components/Body/Projects.js` | Project cards (live work, then earlier work) |
| `src/components/Body/Education.js` | Education accordion |
| `src/components/Header`, `src/components/Footer` | Nav and footer |
| `src/pages/Home.js`, `src/pages/PrivacyPolicy.js` | The two routes |
| `public/css/styles.css` | Every style on the site, one file |
| `public/images/` | Hero (webp + jpg fallback) and logo |

## Adding a project

Add an object to `liveProjects` (shipped and maintained) or `otherProjects`
(older, still online) in `src/consts.js`:

```js
{
  language: "Android",          // short label for the corner ribbon — keep it under ~10 chars
  stack: "React Native · Node", // full stack, shown as a line under the description
  title: "App name",
  status: "live",               // "live" | "testing" — drives the badge colour
  statusText: "Live on Play Store",
  intro: "What it does and one thing that was actually hard about it.",
  linkBtnTxt: "Play Store",
  link: "https://...",
  secondaryTxt: "example.in",   // optional second link
  secondaryLink: "https://...",
}
```

If a project goes offline, remove it. The page only lists things that still
work — there is no "discontinued" state any more.

## Notes

- The hero image is served as WebP with a JPEG fallback via `image-set()`, and
  preloaded in `public/index.html`. Phones get a smaller file
  (`hero-mobile.webp`). If you replace it, regenerate all three sizes.
- There is no analytics and no AdSense. `public/index.html` is deliberately
  free of third-party scripts — adding one means updating the privacy policy.
- Set `homepage` in `package.json` if the site is ever served from a subpath.
