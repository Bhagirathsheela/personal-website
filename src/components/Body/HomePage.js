import React from "react";
import { profile } from "../../consts";

const HomePage = () => {
  return (
    <header className="banner_new home">
      <div className="banner-col-wrapper">
        <div className="banner-colms banner-right">
          <h1 className="name-text">{profile.name}</h1>
          <p className="name-intro">{profile.tagline}</p>
          <a
            className="banner-cta"
            href="#projects"
            onClick={(event) => {
              event.preventDefault();
              document
                .querySelector(".projects")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            See the work
          </a>
        </div>
      </div>
    </header>
  );
};

export default HomePage;
