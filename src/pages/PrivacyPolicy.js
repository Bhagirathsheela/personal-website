import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { profile } from "../consts";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="privacy-page">
      <div className="privacy-wrapper">
        <Link to="/" className="privacy-back">
          ← Back to home
        </Link>

        <h1>Privacy Policy</h1>
        <p className="privacy-lede">
          This is a personal portfolio site. It has no accounts, no comments, no
          contact form and no advertising, so there is very little to say here —
          but here it is in full.
        </p>

        <div className="privacy-section">
          <h2>What this site collects</h2>
          <p>
            Nothing. There is no analytics script, no advertising, no tracking
            pixel and no cookie set by this site. Nothing you do here is recorded
            or stored.
          </p>
        </div>

        <div className="privacy-section">
          <h2>What your browser sends anyway</h2>
          <p>
            Like any website, the server hosting these files receives a standard
            web request when you open a page — your IP address, browser and the
            page you asked for. That is handled by the hosting provider as part
            of serving the site, and it isn't used to build any profile of you.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Links to other places</h2>
          <p>
            This site links out to the Google Play Store, the Chrome Web Store,
            YouTube, GitHub, LinkedIn and the individual app websites. Once you
            follow one of those links you are on someone else's site, under their
            privacy policy, not this one.
          </p>
          <p>
            My apps — KundliDost, Bakkar, JobCatch and RadioDost — each have their
            own privacy policy, because unlike this site they really do handle
            your data. Those policies live on each app's own website and in its
            Play Store listing.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Changes</h2>
          <p>
            If this ever changes — if I add analytics, for example — I'll update
            this page to say so rather than quietly leave it out of date.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Questions</h2>
          <p>
            Email me at{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a> and I'll
            answer.
          </p>
        </div>
      </div>
    </main>
  );
}
