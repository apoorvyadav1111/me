import React from 'react'

var progress ={
	Expert:100,
	Proficient:70,
	Familiar:50
}


function ProgressBar(props){
	return (
	<div>
		<span className="title is-5 is-spaced">{props.text}</span>
		<span className="subtitle is-6 skill-percentage">{props.level}</span>
	<progress 
		id = "progress-bar"
		className="progress is-dark"
		value={progress[props.level]}
		max="100"
	>
	{progress[props.level]}%
	</progress>
	</div>
	)
}

export default ProgressBar