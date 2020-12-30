(this.webpackJsonpmy_portfolio_v1=this.webpackJsonpmy_portfolio_v1||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"hero":{"color":"is-dark","iconColor":"has-text-light"},"nav":{"Fixed":"is-fixed-top","accent":"dark","textColor":"light","opacity":"0.7"},"aboutme":{"background":"dark","textColor":"light","badge":"is-light"},"icon":{"color":"danger"},"skills":{"background":"white","textColor":"dark","secondaryTextColor":"darker","barColor":"dark"},"experience":{"background":"white","textColor":"dark","secondaryTextColor":""},"education":{"background":"light","textColor":"dark"},"articles":{"background":"dark","textColor":"light","cards":{"background":"light","textColor":"dark"}}}')},2:function(e){e.exports=JSON.parse('{"basics":{"name":"Apoorv Yadav","role":"Big Data Engineer","picture":"images/apoorvprofile.jpg","x_pictureFallback":"images/apoorvprofile.jpg","x_title":"Hello! Glad you\'re here ","startDate":"2019-06-03","summary_pre":"Going on ","summary_post":" years of IT Experience. Presently working as a Big Data Developer in Banking and Finance Domain. I\'m interested in Data Analytics, Machine Learning and applications of AI in real world.","location":{"country":"India","countryCode":"IN","state":"Karnataka","city":"Bengaluru"},"profiles":[{"network":"LinkedIn","username":"Apoorv Yadav","url":"https://www.linkedin.com/in/apoorv-yadav-a952ab167/","x_icon":"fab fa-2x fa-linkedin-in"},{"network":"GitHub","username":"apoorvyadav1111","url":"https://github.com/apoorvyadav1111","x_icon":"fab fa-2x fa-github-alt"},{"network":"Medium","username":"apoorvyadav1111","url":"https://medium.com/thenoobengineer","x_icon":"fab fa-2x fa-medium-m"},{"network":"Tableau","username":"apoorv.yadav","url":"https://public.tableau.com/profile/apoorv.yadav#!/","x_icon":"fas fa-2x fa-chart-bar"},{"network":"Mail","username":"apoorvyadav1111","url":"mailto:apoorvyadav1111@gmail.com","x_icon":"fas fa-2x fa-envelope-open"}]},"interests":[{"name":"Animals","x_icon":"fa-paw"},{"name":"Travel","x_icon":"fa-globe-asia"},{"name":"Games","x_icon":"fa-gamepad"},{"name":"Technology","x_icon":"fa-microchip"}],"skills":[{"name":"Python","level":"Expert","keywords":["Languages"]},{"name":"Scala","level":"Familiar","keywords":["Languages"]},{"name":"SQL","level":"Proficient","keywords":["Languages"]},{"name":"Apache Spark","level":"Familiar","keywords":["Big Data"]},{"name":"Apache Hive","level":"Familiar","keywords":["Big Data"]},{"name":"Apache Zeppelin","level":"Familiar","keywords":["Big Data"]},{"name":"Tableau","level":"Proficient","keywords":["Data Viz & Analytics"]},{"name":"Pandas","level":"Proficient","keywords":["Data Viz & Analytics"]},{"name":"Matplotlib","level":"Familiar","keywords":["Data Viz & Analytics"]},{"name":"Numpy","level":"Proficient","keywords":["Machine Learning"]},{"name":"Keras","level":"Proficient","keywords":["Machine Learning"]},{"name":"Tensorflow","level":"Proficient","keywords":["Machine Learning"]}],"work":[{"company":"Tata Consultancy Services","position":"Big Data Developer for BFSI","website":"www.tcs.com","startDate":"2019-06-03","endDate":"","summary":"Joined the CommBank Account, working with the Financial Crime and Reporting team as a Big Data Developer.","highlights":[]},{"company":"Tata Consultancy Services - ILP","position":"System Engineer - Trainee","website":"www.tcs.com","startDate":"2018-12-17","endDate":"2019-06-03","summary":"Started my IT career as a Trainee for a period of six months, had a chance to get fimiliar with all the digital technologies.","highlights":[]}],"education":[{"institution":"Medicaps Institute of Technology and Management, Indore","area":"Computer Science","degree":"Bachelor","startDate":"2015-08-01","endDate":"2019-06-01","score":"CGPA 7.59","courses":["Object Oriented Programming","Database Management System","Software Engineering","Operating Systems and Architecture","Data Structures","Cloud Computing and Big Data"]},{"institution":"Shivpuri Public School, Shivpuri","area":"Mathematics","degree":"Senior Secondary","startDate":"2013-04-01","endDate":"2015-07-01","score":"86.6%","courses":["English","Mathematics","Physics","Chemistry","Physical Education"]},{"institution":"Christ Senior Secondary School, Guna","area":"","degree":"High School","startDate":"2000-04-01","endDate":"2013-03-31","score":"CGPA 10.0","courses":[]}]}')},25:function(e,a,t){e.exports=t(50)},30:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),s=t.n(l),c=(t(30),t(4)),i=t(5),o=t(7),m=t(6),u=t(9),d=t(1);var h=function(e){return r.a.createElement("a",{href:e.href,className:"navbar-item is-unselectable has-text-"+d.nav.textColor,style:{textDecoration:"none"}},e.text)},p=t(2),v=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={showMenu:!1},n.handleMenuClick=n.handleMenuClick.bind(Object(u.a)(n)),n}return Object(i.a)(t,[{key:"handleMenuClick",value:function(e){var a=this.state.showMenu;this.setState({showMenu:!a})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenScrollEvent)}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar has-background-"+d.nav.accent+" "+d.nav.Fixed,style:{opacity:d.nav.opacity}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{href:"/",className:"navbar-item title is-unselectable my-name has-text-weight-bold has-text-"+d.nav.textColor,style:{textDecoration:"none"}},p.basics.name),r.a.createElement("span",{className:"navbar-burger burger has-background-"+d.nav.accent,onClick:this.handleMenuClick},r.a.createElement("span",{className:"has-background-"+d.nav.textColor}),r.a.createElement("span",{className:"has-background-"+d.nav.textColor}),r.a.createElement("span",{className:"has-background-"+d.nav.textColor}))),r.a.createElement("div",{className:"navbar-menu nav-menu "+(this.state.showMenu?"is-active":null)+" has-background-"+d.nav.accent},r.a.createElement("div",{className:"navbar-end",onClick:this.handleMenuClick},r.a.createElement(h,{text:"About Me",href:"#aboutMe"}),r.a.createElement(h,{text:"Skills",href:"#skills"}),r.a.createElement(h,{text:"Experience",href:"#experience"}),r.a.createElement(h,{text:"Education",href:"#education"}),r.a.createElement(h,{text:"Articles",href:"#articles"})))))}}]),t}(r.a.Component);var E=function(){return r.a.createElement("section",{className:"hero is-fullheight-with-navbar has-bg-image "+d.hero.color},r.a.createElement("div",{className:"hero-head"},r.a.createElement(v,null)),r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"subtitle is-5 has-text-weight-light"},"Hello, I'm a"),r.a.createElement("h1",{className:"title"},p.basics.role),r.a.createElement("h2",{className:"subtitle"},p.basics.location.city,", ",p.basics.location.country))),r.a.createElement("div",{className:"hero-foot",style:{paddingBottom:"20px"}},r.a.createElement("div",{className:"columns is-mobile"},r.a.createElement("div",{className:"column"}),p.basics.profiles.map((function(e,a){return r.a.createElement("div",{key:a,className:"column has-text-centered"},r.a.createElement("a",{href:e.url,target:"blank",className:"is-hovered",title:e.network},r.a.createElement("span",{className:"icon is-medium "+d.hero.iconColor},r.a.createElement("i",{className:e.x_icon}))))})),r.a.createElement("div",{className:"column"}))))};var g=function(){return r.a.createElement("header",null,r.a.createElement(E,null))},f=t(10),x=t.n(f);var N=function(e){var a="fas fa-1x "+e.faIcon;return r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"tags are-normal has-addons"},r.a.createElement("span",{className:"tag "+d.aboutme.badge},e.text),r.a.createElement("span",{className:"tag is-"+d.icon.color},r.a.createElement("i",{className:a}))))};var b=function(){return r.a.createElement("section",{className:"section has-background-"+d.aboutme.background,id:"aboutMe"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("figure",{className:"image container is-180x180"},r.a.createElement("img",{width:"180px",height:"180px",src:p.basics.picture,alt:p.basics.name,className:"is-rounded",onError:function(e){e.target.onerror=null,e.target.src=p.basics.x_pictureFallback}})),r.a.createElement("p",{className:"subtitle is-4 has-text-weight-normal has-text-"+d.aboutme.textColor},p.basics.x_title),r.a.createElement("p",{className:"subtitle is-5 has-text-weight-light has-text-"+d.aboutme.textColor,style:{marginLeft:"auto",marginRight:"auto",maxWidth:"36em"}},p.basics.summary_pre,function(e){var a=x()().format("YYYY")-new Date(e).getFullYear(),t=x()().format("MM")-new Date(e).getMonth();return t>0?a+parseFloat((t/12).toFixed(1)):t<0?(console.log("Here"),t=12+parseInt(x()().format("M"))-new Date(e).getMonth(),a-1+parseFloat((t/12).toFixed(1))):void 0}(new Date(p.basics.startDate)),p.basics.summary_post),r.a.createElement("div",{className:"container",style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{className:"field is-grouped is-grouped-multiline has-text-centered"},p.interests.map((function(e,a){return r.a.createElement(N,{key:a,text:e.name,faIcon:e.x_icon})}))))))},k=t(24),y={Expert:100,Proficient:70,Familiar:50};var w=function(e){return r.a.createElement("div",null,r.a.createElement("span",{className:"title is-5 is-spaced has-text-"+d.skills.textColor},e.text),r.a.createElement("span",{className:"subtitle is-6 skill-percentage has-text-"+d.skills.secondaryTextColor},e.level),r.a.createElement("progress",{id:"progress-bar",className:"progress is-"+d.skills.barColor,value:y[e.level],max:"100"},y[e.level],"%"))};var C=function(e){var a=e.skills;return r.a.createElement("ul",{className:"skill-list"},function(e){var a=[],t=0;return Object.entries(e).forEach((function(e){var n=Object(k.a)(e,2),l=n[0],s=n[1];a.push(r.a.createElement("li",{key:t},r.a.createElement(w,{key:t,text:l,level:s}))),t++})),a}(a))};var D=function(){return r.a.createElement("section",{className:"section has-background-"+d.skills.background,id:"skills"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title has-text-"+d.skills.textColor},"Skills"),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-6"},r.a.createElement("div",{className:"has-text-centered"},r.a.createElement("span",{className:"icon has-text-"+d.icon.color},r.a.createElement("i",{className:"fas fa-3x fa-laptop-code"})),r.a.createElement("h2",{className:"title is-5 has-text-"+d.skills.textColor},"Programming Languages")),r.a.createElement(C,{skills:p.skills.filter((function(e){return e.keywords.includes("Languages")})).reduce((function(e,a){return e[a.name]=a.level,e}),{})})),r.a.createElement("div",{className:"column is-6"},r.a.createElement("div",{className:"has-text-centered"},r.a.createElement("span",{className:"icon has-text-"+d.icon.color},r.a.createElement("i",{className:"fas fa-3x fa-database"})),r.a.createElement("h2",{className:"title is-5 has-text-"+d.skills.textColor},"Big Data")),r.a.createElement(C,{skills:p.skills.filter((function(e){return e.keywords.includes("Big Data")})).reduce((function(e,a){return e[a.name]=a.level,e}),{})}))),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-6"},r.a.createElement("div",{className:"has-text-centered"},r.a.createElement("span",{className:"icon has-text-"+d.icon.color},r.a.createElement("i",{className:"fas fa-3x fa-chart-line"})),r.a.createElement("h2",{className:"title is-5 has-text-"+d.skills.textColor},"Data Viz & Analysis")),r.a.createElement(C,{skills:p.skills.filter((function(e){return e.keywords.includes("Data Viz & Analytics")})).reduce((function(e,a){return e[a.name]=a.level,e}),{})})),r.a.createElement("div",{className:"column is-6"},r.a.createElement("div",{className:"has-text-centered"},r.a.createElement("span",{className:"icon has-text-"+d.icon.color},r.a.createElement("i",{className:"fas fa-3x fa-robot"})),r.a.createElement("h2",{className:"title is-5 has-text-"+d.skills.textColor},"Machine Learning")),r.a.createElement(C,{skills:p.skills.filter((function(e){return e.keywords.includes("Machine Learning")})).reduce((function(e,a){return e[a.name]=a.level,e}),{})})))))};var M=function(e){return r.a.createElement("div",{className:"timeline-item is-"+d.icon.color},r.a.createElement("div",{className:"timeline-marker is-icon is-32x32"},r.a.createElement("span",{className:"icon has-text-grey-light"},r.a.createElement("i",{className:"fa fa-1x fa-briefcase"}))),r.a.createElement("div",{className:"timeline-content has-text-"+d.experience.textColor},r.a.createElement("p",{className:"heading has-text-"+d.experience.textColor},e.date),r.a.createElement("h1",{className:"title is-4 has-text-"+d.experience.textColor},e.company),r.a.createElement("p",{style:{maxWidth:"25em"}},e.summary)))};var S=function(){return r.a.createElement("div",{className:"timeline is-centered is-"+d.icon.color},r.a.createElement("header",{className:"timeline-header"},r.a.createElement("span",{className:"tag is-medium is-"+d.experience.textColor},(new Date).getFullYear())),r.a.createElement("div",{className:"timeline-item is-"+d.icon.color},r.a.createElement("div",{className:"timeline-marker is-"+d.icon.color}),r.a.createElement("div",{className:"timeline-content"})),p.work.map((function(e){return new Date(e.startDate).getFullYear()})).map((function(e,a){var t=[];return t.push(r.a.createElement("header",{key:a,className:"timeline-header"},r.a.createElement("span",{className:"tag is-"+d.icon.color},e))),t.push(p.work.filter((function(a){return new Date(a.startDate).getFullYear()===e})).map((function(e,a){return r.a.createElement(M,{key:a,date:new Date(e.startDate).toLocaleString("en-UK",{month:"long",year:"numeric"}),company:e.company,summary:e.summary})}))),t})),r.a.createElement("div",{className:"timeline-item is-small is-"+d.icon.color},r.a.createElement("div",{className:"timeline-marker is-"+d.icon.color})))};var j=function(){return r.a.createElement("section",{className:"section has-background-"+d.experience.background,id:"experience"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title has-text-"+d.experience.textColor},"Experience"),r.a.createElement(S,null)))},A=t(11),B=t.n(A),_=t(23),O=t(12),F=t.n(O);var L=function(e){return r.a.createElement("div",{className:"card has-background-"+d.articles.cards.background+" has-text-"+d.articles.cards.textColor},r.a.createElement("div",{className:"card-header"},r.a.createElement("a",{href:e.url,target:"blank"},r.a.createElement("p",{className:"card-header-title is-uppercase"},e.title)),r.a.createElement("a",{href:e.url,target:"blank",className:"card-header-icon","aria-label":"Medium Articles"},r.a.createElement("span",{className:"icon has-text-"+d.icon.color},r.a.createElement("i",{className:"fab fa-2x fa-medium-m"})))),r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image"},r.a.createElement("img",{width:"1000",height:"420",src:e.image,alt:""}))),r.a.createElement("div",{className:"card-content has-text-"+d.articles.cards.textColor},r.a.createElement("h1",{className:"heading has-text-"+d.articles.cards.textColor},"Medium.com"),r.a.createElement("div",{className:"tags"},e.categories.map((function(e){return r.a.createElement("div",{className:"tag is-dark",style:{maxWidth:"25em"}},e)}))),r.a.createElement("a",{href:e.url,class:"has-text-"+d.articles.cards.textColor,target:"blank"},"Read the full article here")))};function T(){return(T=Object(_.a)(B.a.mark((function e(){var a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://medium.com/feed/@apoorvyadav1111","https://api.rss2json.com/v1/api.json",a={params:{rss_url:"https://medium.com/feed/@apoorvyadav1111"}},e.next=6,F.a.get("https://api.rss2json.com/v1/api.json",a);case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var P=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this)).state={articles:[]},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;!function(){T.apply(this,arguments)}();try{var a={params:{rss_url:"https://medium.com/feed/@apoorvyadav1111"}};F.a.get("https://api.rss2json.com/v1/api.json",a).then((function(e){return e.data.items})).then((function(a){var t=[];(a=(a=a.filter((function(e){return e.categories.length>0}))).slice(0,4)).forEach((function(e,a){t.push(r.a.createElement("div",{className:"column",key:a},r.a.createElement(L,{key:a,title:e.title,url:e.link,image:e.thumbnail,categories:e.categories})))}));for(var n=4-a.length,l=0;l<n;l++)t.push(r.a.createElement("div",{className:"column"}));e.setState({articles:t})}))}catch(t){console.error(t)}}},{key:"render",value:function(){return r.a.createElement("section",{className:"section has-background-"+d.articles.background,id:"articles"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title has-text-"+d.articles.textColor},"Latest Articles"),r.a.createElement("div",{className:"columns"},this.state.articles)))}}]),t}(n.Component);var I=function(e){return r.a.createElement("div",{className:"timeline-item is-"+d.icon.color},r.a.createElement("div",{className:"timeline-marker is-icon is-32x32"},r.a.createElement("span",{className:"icon has-text-grey-light"},r.a.createElement("i",{className:"fa fa-1x fa-university"}))),r.a.createElement("div",{className:"timeline-content has-text-"+d.education.textColor},r.a.createElement("p",{className:"heading"},e.startDate," - ",e.endDate),r.a.createElement("h1",{className:"title is-4 has-text-"+d.education.textColor},e.institution),r.a.createElement("span",null),r.a.createElement("p",{className:"subtitle is-uppercase has-text-weight-medium has-text-grey is-6"},"Grade: ",e.score),r.a.createElement("div",{className:"tags"},e.courses.map((function(e){return r.a.createElement("div",{className:"tag is-"+d.education.textColor,style:{maxWidth:"25em"}},e)})))))};var Y=function(){return r.a.createElement("div",{className:"timeline is-centered is-danger"},r.a.createElement("header",{className:"timeline-header"},r.a.createElement("span",{className:"tag is-medium is-danger"},"May 2019")),r.a.createElement("div",{className:"timeline-item is-danger"},r.a.createElement("div",{className:"timeline-marker is-danger"}),r.a.createElement("div",{className:"timeline-content"})),p.education.map((function(e){return e.degree})).map((function(e,a){var t=[];return t.push(r.a.createElement("header",{key:a,className:"timeline-header"},r.a.createElement("span",{className:"tag is-danger"},e))),t.push(p.education.filter((function(a){return a.degree===e})).map((function(e,a){return r.a.createElement(I,{key:a,startDate:new Date(e.startDate).toLocaleString("en-UK",{month:"long",year:"numeric"}),endDate:new Date(e.endDate).toLocaleString("en-UK",{month:"long",year:"numeric"}),institution:e.institution,score:e.score,courses:e.courses})}))),t})),r.a.createElement("div",{className:"timeline-item is-danger is-small"},r.a.createElement("div",{className:"timeline-marker is-danger"})))};var G=function(){return r.a.createElement("section",{className:"section has-background-"+d.education.background,id:"education"},r.a.createElement("div",{className:"container has-text-"+d.education.textColor},r.a.createElement("h1",{className:"title has-text-"+d.education.textColor},"Education"),r.a.createElement(Y,null)))},H=t(8);var J=function(){return r.a.createElement("main",null,Boolean(H.content.AboutMe)?r.a.createElement(b,null):null,Boolean(H.content.Skills)?r.a.createElement(D,null):null,Boolean(H.content.Experience)?r.a.createElement(j,null):null,Boolean(H.content.Education)?r.a.createElement(G,null):null,Boolean(H.content.Articles)?r.a.createElement(P,null):null)};var z=function(){return r.a.createElement("footer",{className:"footer has-background-black"},r.a.createElement("div",{className:"content has-text-centered has-text-white"},r.a.createElement("p",null,"Built By",r.a.createElement("a",{href:"https://github.com/apoorvyadav1111",className:"has-text-white"},r.a.createElement("strong",null," Apoorv Yadav"))),r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement("a",{href:"https://bulma.io"},r.a.createElement("img",{src:"https://bulma.io/images/made-with-bulma--dark.png",alt:"Made with Bulma",width:"128",height:"40"}))),r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-react"})),r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-google"})),r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-stack-overflow"})),r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-github-alt"})))))},K=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title=[p.basics.name,p.basics.role,[p.basics.location.State,p.basics.location.country].join(",")].join(" | ")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(J,null),r.a.createElement(z,null))}}]),t}(n.Component);s.a.render(r.a.createElement(K,null),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"header":"","content":{"AboutMe":"True","Skills":"True","Experience":"True","Education":"True","Articles":"True"},"footer":""}')}},[[25,1,2]]]);
//# sourceMappingURL=main.f1bea10e.chunk.js.map