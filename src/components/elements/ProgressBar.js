import React from 'react'
import Theme from "../../theme.json"

var progress ={
	Expert:100,
	Proficient:70,
	Familiar:50
}


function ProgressBar(props){
	return (
	<div>
		<span className={"title is-5 is-spaced has-text-"+Theme.skills.textColor}>{props.text}</span>
		<span className={"subtitle is-6 skill-percentage has-text-"+Theme.skills.secondaryTextColor}>{props.level}</span>
	<progress 
		id = "progress-bar"
		className={"progress is-"+Theme.skills.barColor}
		value={progress[props.level]}
		max="100"
	>
	{progress[props.level]}%
	</progress>
	</div>
	)
}

export default ProgressBar