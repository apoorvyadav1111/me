import React from "react"
import AboutMe from "../sections/AboutMe"
import Skills from "../sections/Skills"
import Experience from "../sections/Experience"
import Articles from "../sections/Articles"
import Education from "../sections/Education" 

import Structure from "../../structure.json"

function Content() {
	return (
		<main>
			{Boolean(Structure.content.AboutMe) ? ( <AboutMe /> ):null}
			{Boolean(Structure.content.Skills) ? ( <Skills /> ):null}
			{Boolean(Structure.content.Experience) ? ( <Experience /> ):null}
			{Boolean(Structure.content.Education) ? ( <Education /> ):null}
			{Boolean(Structure.content.Articles) ? ( <Articles /> ):null}
		</main>
		)
}

export default Content