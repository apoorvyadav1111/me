import React from "react";
import TimelineItemEducation from "./TimelineItemEducation";
import Resume from "../../resume.json";

function TimelineEducation() {
  return (
    <div className="timeline is-centered is-danger">
      <header className="timeline-header">
        <span className="tag is-medium is-danger">
          May 2019
        </span>
      </header>
      <div className="timeline-item is-danger">
        <div className="timeline-marker is-danger"></div>
        <div className="timeline-content"></div>
      </div>
      {Resume.education
        .map(item => {
          return item.degree;
        })
        .map((degree, i) => {
          let content = [];
          content.push(
            <header key={i} className="timeline-header">
              <span className="tag is-danger">{degree}</span>
            </header>
          );
          content.push(
            Resume.education
              .filter(work => work.degree === degree)
              .map((item, j) => {
                return (
                  <TimelineItemEducation
                    key={j}
                    startDate={new Date(item.startDate).toLocaleString("en-UK", {
                      month: "long",
                      year: "numeric"
                    })}
                    endDate={new Date(item.endDate).toLocaleString("en-UK", {
                      month: "long",
                      year: "numeric"
                    })}
                    institution={item.institution}
                    score={item.score}
                    courses={item.courses}
                  />
                );
              })
          );
          return content;
        })}
        <div className="timeline-item is-danger is-small">
        <div className="timeline-marker is-danger"></div>
        </div>
    </div>
  );
}

export default TimelineEducation;