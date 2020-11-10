import React from "react"

function Badge(props){
	const faIcon = "fas fa-1x "+props.faIcon;
	return(
		<div className="control">
			<div className="tags are-normal has-addons">
				<span className="tag is-light">{props.text}</span>
				<span className="tag is-danger">
					<i className={faIcon}></i>
				</span>
			</div>
		</div>
		)
}

export default Badge