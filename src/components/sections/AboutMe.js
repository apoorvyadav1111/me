import React from "react"
import moment from "moment"
import Badge from "../elements/Badge"
import Resume from "../../resume.json"

function timeDiff(date){
	var dy = moment().format("YYYY") - new Date(date).getFullYear();
	var dm = moment().format("MM") - new Date(date).getMonth();
	if (dm>0){
		return dy+(dm/12);
	}
	if (dm<0){
		dm = (12 + parseInt(moment().format("M"))) - new Date(date).getMonth();
		return (dy-1)+parseFloat((dm/12).toFixed(2));
	}
}

function AboutMe(){
	return (
		<section className="section has-background-black-ter" id="aboutMe">
			<div className="container has-text-centered">
				<figure className="image container is-180x180">
					<img 
						width="180px"
						height="180px"
						src={Resume.basics.picture}
						alt={Resume.basics.name}
						className="is-rounded"
						onError={(e) => {e.target.onerror = null; e.target.src=Resume.basics.x_pictureFallback}}
					/>
				</figure>
				<p className="subtitle is-4 has-text-grey-light has-text-weight-normal">
					{Resume.basics.x_title}
				</p>
				<p className="subtitle is-5 has-text-white has-text-weight-light" style={{marginLeft:"auto",marginRight:"auto",maxWidth:"36em"}} >
					{Resume.basics.summary_pre}
					{timeDiff(new Date(Resume.basics.startDate))}
					{Resume.basics.summary_post}
				</p>

				<div className="container" style={{display:"flex",justifyContent:"center"}}>
					<div className="field is-grouped is-grouped-multiline has-text-centered">
						{Resume.interests.map((value,index)=>{
							return(
								<Badge key={index} text={value.name} faIcon={value.x_icon} />
								)
						})}
				</div>
				</div>
			</div>
		</section>
		)
}

export default AboutMe