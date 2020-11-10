import React,{Component} from "react"
import axios from "axios"
import Article from "../elements/Article"

async function getMediumFeed(){

		try {
			const medium = "https://medium.com/feed/@apoorvyadav1111";
			const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
			const data = {params: {rss_url:medium}} ;
			//console.log(axios.get(rssToJsonApi,data))
			return  await axios.get(rssToJsonApi,data);
		}
		catch(error){
			console.error(error);
		}
}

class Articles extends Component{
	constructor(props9){
		super()
		this.state = {articles:[]};
	}

	componentDidMount(){
		getMediumFeed()
		try {
			const medium = "https://medium.com/feed/@apoorvyadav1111";
			const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
			const data = {params: {rss_url:medium}} ;
			axios.get(rssToJsonApi,data)
			    .then(response => {
        				return response.data.items;
      			})
				.then(data => {
				        let articles = [];
				        data = data.filter(data => (data.categories.length)>0)
				        data = data.slice(0,4);
				        data.forEach((element, index) => {
				          articles.push(
				            <div className="column" key={index}>
				              <Article
				                key={index}
				                title={element.title}
				                url={element.link}
				                image={element.thumbnail}
				                categories={element.categories}
				              />
				            </div>
				          );
				        });
				        var offset = 4 - data.length;
				        for (var i = 0; i < offset; i++) {
				          articles.push(<div className="column"></div>);
				        }
				        this.setState({ articles: articles });
				      });
		}
		catch(error){
			console.error(error);
		}
	}
	render(){
		return(
			<section className="section" id="articles">
				<div className="container">
					<h1 className="title">Latest Articles</h1>
					<div className="columns">{this.state.articles}</div>
				</div>
			</section>
			)
	}
}

export default Articles;