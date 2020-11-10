import React from "react"

function Article(props){
	return (
		<div className="card">
			<div className="card-header">
				<a href={props.url} target="blank">
					<p className="card-header-title is-uppercase">{props.title}</p>
				</a>
				<a 
					href={props.url}
					target="blank"
					className="card-header-icon"
					aria-label="Medium Articles"
				>
					<span className="icon has-text-danger">
						<i className="fab fa-2x fa-medium-m"></i>
					</span>
				</a>
			</div>
			<div className="card-image">
				<figure className="image">
					<img width="1000" height="420" src={props.image} alt="" />
				</figure>
			</div>
			<div className="card-content">
				<h1 className="heading">Medium.com</h1>
			        <div className="tags">
			        {props.categories
			          .map((item) => {
			            return(
			                <div className="tag is-dark" style={{ maxWidth: "25em" }}>{item}</div>
			              )}
			            )}
			        </div>
				<a href={props.url} target="blank">
					Read the full article
				</a>
			</div>
		</div>
		)	
}

export default Article;