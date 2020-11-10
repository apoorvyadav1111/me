import React from "react"
import Menu from "./Menu"
import Resume from "../../resume.json"

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
			<nav className="navbar has-background-grey-dark is-fixed-top" style={{opacity:.7}}>
				<div className="container">
					<div className="navbar-brand">
						<a href="/" className="navbar-item title has-text-light is-unselectable my-name has-text-weight-bold" style={{ textDecoration:'none' }}>
						{Resume.basics.name}
						</a>
					<span
						className="navbar-burger burger is-"
						onClick={this.handleMenuClick}
					>
						<span className="has-background-light"></span>
						<span className="has-background-light"></span>
						<span className="has-background-light"></span>
					</span>
				</div>
				<div  className={ "navbar-menu nav-menu " + (this.state.showMenu ? "is-active" : null)} >
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