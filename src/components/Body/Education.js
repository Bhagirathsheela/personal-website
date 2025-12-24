import React, { useState } from "react";
import { educationInfo } from "../../consts";
import Skills from "./Skills";

const Education = () => {
  const [showList, setShowList] = useState({
    graduation: false,
    higherSecondary: false,
    highSchool: false,
  });
  function updateListClass(value) {
    if (value === "graduation") {
      setShowList({ ...showList, graduation: !showList.graduation });
    } else if (value === "higherSecondary") {
      setShowList({ ...showList, higherSecondary: !showList.higherSecondary });
    } else {
      setShowList({ ...showList, highSchool: !showList.highSchool });
    }
    //console.log(showList, "show list");
  }
  return (
    <div className="career_container">
      <div className="career_container_inner">
        <div className="career_container_inner">
          <Skills />
        </div>
        {/* <div className="career_head text_center font_large">
          <span>Education and work experience</span>
        </div> */}
        <div className="text_center font_medium color_primary padding_20_0">
          <span>Education</span>
        </div>
        <div className="education_conatiner">
          <div className="education_rows_wrap">
            {educationInfo.map((val, index) => (
              <div className="education_rows" key={index}>
                <h5
                  onClick={() => {
                    updateListClass(val.uniqueStateClass);
                  }}
                >
                  <a className="education_rows_title">
                    <span>{val.period}</span>
                    {val.title}
                    <i className="expand_collepse_arrow">
                      {!showList[val.uniqueStateClass] && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1.25em"
                          viewBox="0 0 512 512"
                        >
                          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                      )}
                      {showList[val.uniqueStateClass] && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1.25em"
                          viewBox="0 0 512 512"
                        >
                          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                        </svg>
                      )}
                    </i>
                  </a>
                </h5>
                <div
                  className={`education_rows_content ${
                    showList[val.uniqueStateClass] ? "show" : ""
                  }`}
                >
                  <h6>{val.expandedInfo.title}</h6>
                  <ul>
                    {val.expandedInfo.pointsList.map((value, index) => (
                      <li key={index}>
                        <svg
                          width="20px"
                          height="18px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="arrow_in_edu"
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
                              fill="#000"
                            ></path>{" "}
                          </g>
                        </svg>

                        <a href="#">{value}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* //education */}
      </div>
    </div>
  );
};

export default Education;
