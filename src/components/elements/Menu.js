import React from "react"
import Theme from "../../theme.json"

function Menu(props){
	return (
		<a href={props.href} className={"navbar-item is-unselectable has-text-"+Theme.nav.textColor} style={{ textDecoration:'none' }} >
		{props.text}
		</a>
		)
}

export default Menu