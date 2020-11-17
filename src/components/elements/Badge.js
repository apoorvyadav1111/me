import React from "react"
import Theme from "../../theme.json"

function Badge(props){
	const faIcon = "fas fa-1x "+props.faIcon;
	return(
		<div className="control">
			<div className="tags are-normal has-addons">
				<span className={"tag "+Theme.aboutme.badge}>{props.text}</span>
				<span className={"tag is-"+Theme.icon.color}>
					<i className={faIcon}></i>
				</span>
			</div>
		</div>
		)
}

export default Badge