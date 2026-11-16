import React from "react";
import HomePage from "../components/Body/HomePage";
import Projects from "../components/Body/Projects";
import Education from "../components/Body/Education";
import { profile } from "../consts";

const Home = () => {
  return (
    <>
      <HomePage />

      <main className="career_container">
        <div className="career_container_inner">
          <section className="about" id="about">
            <h2 className="section_title">About</h2>
            <p className="about_text">{profile.about}</p>
          </section>

          <Projects />
          <Education />
        </div>
      </main>
    </>
  );
};

export default Home;
