import React from "react";
import TimelineItem from "./TimelineItem";
import Resume from "../../resume.json";
import Theme from "../../theme.json"

function Timeline() {
  return (
    <div className={"timeline is-centered is-"+Theme.icon.color}>
      <header className="timeline-header">
        <span className={"tag is-medium is-"+Theme.experience.textColor}>
          {new Date().getFullYear()}
        </span>
      </header>
      <div className={"timeline-item is-"+Theme.icon.color}>
        <div className={"timeline-marker is-"+Theme.icon.color}></div>
        <div className="timeline-content"></div>
      </div>
      {Resume.work
        .map(item => {
          return new Date(item.startDate).getFullYear();
        })
        .map((year, i) => {
          let content = [];
          content.push(
            <header key={i} className="timeline-header">
              <span className={"tag is-"+Theme.icon.color}>{year}</span>
            </header>
          );
          content.push(
            Resume.work
              .filter(work => new Date(work.startDate).getFullYear() === year)
              .map((item, j) => {
                return (
                  <TimelineItem
                    key={j}
                    date={new Date(item.startDate).toLocaleString("en-UK", {
                      month: "long",
                      year: "numeric"
                    })}
                    company={item.company}
                    summary={item.summary}
                  />
                );
              })
          );
          return content;
        })}
        <div className={"timeline-item is-small is-"+Theme.icon.color}>
        <div className={"timeline-marker is-"+Theme.icon.color}></div>
        </div>
    </div>
  );
}

export default Timeline;