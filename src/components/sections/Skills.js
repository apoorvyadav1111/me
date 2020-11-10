import React from "react"
import SkillsList from "../elements/SkillsList"
import Resume from "../../resume.json"

function Skills(){
	return (
		<section className="section has-background-grey-lighter" id="skills">
			<div className="container">
				<h1 className="title">Skills</h1>
				<div className="columns">

					<div className="column is-6">
						<div className="has-text-centered">	
						<span className="icon has-text-danger">
							<i className="fas fa-3x fa-laptop-code"></i>
						</span>
						<h2 className="title is-5">Programming Languages</h2>
						</div>
						<SkillsList 
							skills={Resume.skills
								.filter(skill => skill.keywords.includes("Languages"))
								.reduce((obj,item) => {
									obj[item.name] = item.level
									return obj
								},{})}
						/>
					</div>

					<div className="column is-6">
						<div className="has-text-centered">	
						<span className="icon has-text-danger">
							<i className="fas fa-3x fa-database"></i>
						</span>
						<h2 className="title is-5">Big Data</h2>
						</div>
						<SkillsList 
							skills={Resume.skills
								.filter(skill => skill.keywords.includes("Big Data"))
								.reduce((obj,item) => {
									obj[item.name] = item.level
									return obj
								},{})}
						/>
					</div>

				</div>

				<div className="columns">

					<div className="column is-6">
						<div className="has-text-centered">	
						<span className="icon has-text-danger">
							<i className="fas fa-3x fa-chart-line"></i>
						</span>
						<h2 className="title is-5">Data Viz & Analysis</h2>
						</div>
						<SkillsList 
							skills={Resume.skills
								.filter(skill => skill.keywords.includes("Data Viz & Analytics"))
								.reduce((obj,item) => {
									obj[item.name] = item.level
									return obj
								},{})}
						/>
					</div>

					<div className="column is-6">
						<div className="has-text-centered">	
						<span className="icon has-text-danger">
							<i className="fas fa-3x fa-robot"></i>
						</span>
						<h2 className="title is-5">Machine Learning</h2>
						</div>
						<SkillsList 
							skills={Resume.skills
								.filter(skill => skill.keywords.includes("Machine Learning"))
								.reduce((obj,item) => {
									obj[item.name] = item.level
									return obj
								},{})}
						/>
					</div>
				</div>
			</div>
		</section>






		)
}

export default Skills