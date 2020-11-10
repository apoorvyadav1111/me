import React from "react"

function Menu(props){
	return (
		<a href={props.href} className="navbar-item is-unselectable has-text-light" style={{ textDecoration:'none' }} >
		{props.text}
		</a>
		)
}

export default Menu