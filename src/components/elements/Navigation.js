import React from "react"
import Menu from "./Menu"
import Resume from "../../resume.json"
import Theme from "../../theme.json"

class Navigation extends React.Component {
	constructor(props){
		super(props)
		this.state = { showMenu: false }
		this.handleMenuClick = this.handleMenuClick.bind(this)
	}

	handleMenuClick(e){
		const currentState = this.state.showMenu
		this.setState({ showMenu: !currentState })
	}

	componentDidMount(){
		window.addEventListener('scroll',this.listenScrollEvent)
	}

	render(){
		return (
			<nav className={"navbar has-background-"+Theme.nav.accent+" "+ Theme.nav.Fixed} style={{opacity:Theme.nav.opacity}}>
				<div className="container">
					<div className="navbar-brand">
						<a href="/" className={"navbar-item title is-unselectable my-name has-text-weight-bold has-text-"+Theme.nav.textColor} style={{ textDecoration:'none' }}>
						{Resume.basics.name}
						</a>
					<span
						className={"navbar-burger burger has-background-"+Theme.nav.accent}
						onClick={this.handleMenuClick}
					>

						<span className={"has-background-"+Theme.nav.textColor}></span>
						<span className={"has-background-"+Theme.nav.textColor}></span>
						<span className={"has-background-"+Theme.nav.textColor}></span>
					</span>
				</div>
				<div  className={ "navbar-menu nav-menu " + (this.state.showMenu ? "is-active" : null) +" has-background-"+Theme.nav.accent} >
					<div className="navbar-end" onClick={this.handleMenuClick}>
						<Menu text="About Me" href="#aboutMe" />
						<Menu text="Skills" href="#skills" />
						<Menu text="Experience" href="#experience" />
						<Menu text="Education" href="#education" />	
						<Menu text="Articles" href="#articles" />
					</div>
				</div>
			</div>
			</nav>
			)
	}
}

export default Navigation