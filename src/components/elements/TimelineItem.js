import React from "react"
import Theme from "../../theme.json"

function TimelineItem(props) {
  return (
    <div className={"timeline-item is-"+Theme.icon.color}>
      <div className="timeline-marker is-icon is-32x32">
      	<span className="icon has-text-grey-light">
        <i className="fa fa-1x fa-briefcase"></i>
        </span>
      </div>
      <div className={"timeline-content has-text-"+Theme.experience.textColor}>
        <p className={"heading has-text-"+Theme.experience.textColor}>{props.date}</p>
        <h1 className={"title is-4 has-text-"+Theme.experience.textColor}>{props.company}</h1>
        <p style={{ maxWidth: "25em" }}>{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem;