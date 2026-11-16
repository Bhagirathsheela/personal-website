import React, { useState } from "react";
import { educationInfo } from "../../consts";

const ChevronIcon = ({ open }) => (
  <svg
    className={`expand_icon${open ? " expand_icon_open" : ""}`}
    width="16"
    height="16"
    viewBox="0 0 512 512"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
    />
  </svg>
);

const Education = () => {
  const [openRow, setOpenRow] = useState(null);

  const toggle = (key) => setOpenRow((current) => (current === key ? null : key));

  return (
    <section className="education" id="education">
      <div className="section_head">
        <h2 className="section_title">Education</h2>
      </div>

      <div className="education_conatiner">
        <div className="education_rows_wrap">
          {educationInfo.map((item) => {
            const isOpen = openRow === item.uniqueStateClass;
            const panelId = `edu-panel-${item.uniqueStateClass}`;

            return (
              <div className="education_rows" key={item.uniqueStateClass}>
                <h3>
                  <button
                    type="button"
                    className="education_rows_title"
                    onClick={() => toggle(item.uniqueStateClass)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="education_period">{item.period}</span>
                    <span className="education_name">{item.title}</span>
                    <ChevronIcon open={isOpen} />
                  </button>
                </h3>

                <div
                  id={panelId}
                  className={`education_rows_content${isOpen ? " show" : ""}`}
                  hidden={!isOpen}
                >
                  <h4>{item.expandedInfo.title}</h4>
                  <ul>
                    {item.expandedInfo.pointsList.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
