import React from "react"
import TimelineEducation from "../elements/TimelineEducation"
import Theme from "../../theme.json"

function Education(){
	return (
		<section className={"section has-background-"+Theme.education.background} id="education">
			<div className={"container has-text-"+Theme.education.textColor}>
				<h1 className={"title has-text-"+Theme.education.textColor}>Education</h1>
				<TimelineEducation />
			</div>
		</section>
		)
}

export default Education;