import React from 'react'
import Navigation from './Navigation'
import Resume from '../../resume.json'
import Theme from "../../theme.json"

// Hero image is the big background image on the webpage
// For more details, Head here: https://www.w3schools.com/howto/howto_css_hero_image.asp

function Hero(){
	return (
		<section className={ "hero is-fullheight-with-navbar has-bg-image " + Theme.hero.color}>
			<div className='hero-head'>
				<Navigation />
			</div>

			<div className="hero-body">
				<div className="container">
					<p className="subtitle is-5 has-text-weight-light">Hello, I'm a</p>
					<h1 className="title">{Resume.basics.role}</h1>
					<h2 className="subtitle">{Resume.basics.location.city}, {Resume.basics.location.country}</h2>
				</div>
			</div>
			<div className="hero-foot" style={{ paddingBottom:"20px" }}>
				<div className="columns is-mobile">
					<div className="column"></div>
					{Resume.basics.profiles.map((value,index) => {
						return (
							<div key={index} className="column has-text-centered">
								<a
								  href={value.url}
								  target="blank"
								  className="is-hovered"
								  title={value.network}
								>
									<span className={ "icon is-medium " + Theme.hero.iconColor}>
										<i className={value.x_icon} ></i>
									</span>
								</a>
							</div>
							)
					})}
					<div className="column"></div>
				</div>
			</div>
		</section>
		)
}

export default Hero