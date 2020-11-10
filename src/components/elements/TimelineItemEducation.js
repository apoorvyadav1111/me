import React from "react";

function TimelineItemEducation(props) {
  return (
    <div className="timeline-item is-danger">
      <div className="timeline-marker is-icon is-32x32">
      	<span className="icon has-text-grey-light">
        <i className="fa fa-1x fa-university"></i>
        </span>
      </div>
      <div className="timeline-content">
        <p className="heading">{props.startDate} - {props.endDate}</p>
        <h1 className="title is-4">{props.institution}</h1>
        <span></span>
        <p className="subtitle is-uppercase has-text-weight-medium has-text-grey is-6">Grade: {props.score}</p>
        <div className="tags">
        {props.courses
          .map((item) => {
            return(
                <div className="tag is-dark" style={{ maxWidth: "25em" }}>{item}</div>
              )}
            )}
        </div>
      </div>
    </div>
  );
}

export default TimelineItemEducation;