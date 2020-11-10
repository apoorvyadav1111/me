import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-danger">
      <div className="timeline-marker is-icon is-32x32">
      	<span className="icon has-text-grey-light">
        <i className="fa fa-1x fa-briefcase"></i>
        </span>
      </div>
      <div className="timeline-content">
        <p className="heading">{props.date}</p>
        <h1 className="title is-4">{props.company}</h1>
        <p style={{ maxWidth: "25em" }}>{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem;