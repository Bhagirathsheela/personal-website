import React from "react";
import { projectsInfo } from "../../consts";

const Skills = () => {
  return (
    <div className="skills">
      {/*       <div className="title_text font-large text_center">My Skills</div> */}
      <div className="text_center font_medium color_primary padding_20_0">
        <span>Coding Skills</span>
      </div>
      <div className="flex_container">
        {projectsInfo.map((value, index) => (
          <div className="flex_clild" key={index}>
            <span className="box_tag">
              <span className="box_tag_text">{value.language}</span>
            </span>
            <span className="title_txt">{value.title}</span>
            <p className="intro_txt">{value.intro}</p>

            <button
              title={value.link === "" ? "discontinued" : ""}
              className={`link_btn ${value.link === "" ? " disabled" : ""}`}
              onClick={() => {
                value.link !== "" && window.open(value.link, "_blank");
              }}
            >
              {value.linkBtnTxt}
              <span className="right_arrow">
                <svg
                  className="right_arrow_svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                      fill="#fff"
                    ></path>{" "}
                  </g>
                </svg>
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
