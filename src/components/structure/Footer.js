import React from "react"

function Footer(){
	return(
		<footer className="footer has-background-black">
			<div className="content has-text-centered has-text-white">
				<p>
				 Built By 
				 <a href="https://github.com/apoorvyadav1111" className="has-text-white">
				 	<strong> Apoorv Yadav</strong>
				 </a>
				</p>
				<p>
					<span>
					<a href="https://bulma.io">
					<img src="https://bulma.io/images/made-with-bulma--dark.png" alt="Made with Bulma" width="128" height="40"/>
					</a>
					</span>
					<span className="icon">
						<i className="fab fa-react"></i>
					</span>
					<span className="icon">
						<i className="fab fa-google"></i>
					</span>
					<span className="icon">
						<i className="fab fa-stack-overflow"></i>
					</span>
					<span className="icon">
						<i className="fab fa-github-alt"></i>
					</span>
				</p>
			</div>
		</footer>
		)
}

export default Footer;