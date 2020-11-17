import React from "react"
import Timeline from "../elements/Timeline"
import Theme from "../../theme.json"

function Experience(){
	return (
		<section className={"section has-background-"+Theme.experience.background} id="experience">
			<div className="container">
				<h1 className={"title has-text-"+Theme.experience.textColor}>Experience</h1>
				<Timeline />
			</div>
		</section>
		)
}

export default Experience;