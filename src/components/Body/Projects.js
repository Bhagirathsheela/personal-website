import React from "react";
import { liveProjects, otherProjects } from "../../consts";

const ArrowIcon = () => (
  <svg
    className="right_arrow_svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
      fill="currentColor"
    />
  </svg>
);

const ProjectCard = ({ project, featured }) => (
  <article className={`flex_clild${featured ? " flex_clild_featured" : ""}`}>
    <span className="box_tag">
      <span className="box_tag_text">{project.language}</span>
    </span>

    <div className="card_body">
      <h3 className="title_txt">{project.title}</h3>

      {project.statusText && (
        <span className={`status_pill status_${project.status}`}>
          <span className="status_dot" aria-hidden="true" />
          {project.statusText}
        </span>
      )}

      <p className="intro_txt">{project.intro}</p>

      {project.stack && <p className="stack_txt">{project.stack}</p>}
    </div>

    <div className="card_actions">
      <a
        className="link_btn"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.linkBtnTxt}
        <ArrowIcon />
      </a>

      {project.secondaryLink && (
        <a
          className="link_btn_ghost"
          href={project.secondaryLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.secondaryTxt}
        </a>
      )}
    </div>
  </article>
);

const Projects = () => {
  return (
    <section className="projects skills" id="projects">
      <div className="section_head">
        <h2 className="section_title">Things I've shipped</h2>
        <p className="section_sub">
          Four apps on the Play Store and a YouTube channel, all of them built
          and maintained on my own.
        </p>
      </div>

      <div className="flex_container">
        {liveProjects.map((project) => (
          <ProjectCard key={project.title} project={project} featured />
        ))}
      </div>

      <div className="section_head section_head_minor">
        <h2 className="section_title">Earlier work, still online</h2>
        <p className="section_sub">
          Browser extensions and side projects from before the apps. Everything
          listed here still works — the rest has been retired.
        </p>
      </div>

      <div className="flex_container flex_container_compact">
        {otherProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
