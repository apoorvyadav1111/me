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
      {
        Resume.work
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
                highlights={item.highlights}
              />
            );
          })
        })}
        <div className={"timeline-item is-small is-"+Theme.icon.color}>
        <div className={"timeline-marker is-"+Theme.icon.color}></div>
        </div>
    </div>
  );
}

export default Timeline;