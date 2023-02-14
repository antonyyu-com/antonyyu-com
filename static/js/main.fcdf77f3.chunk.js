(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),o=t.n(r),s=(t(13),t(1)),i=t(2),c=t(4),m=t(3),u=t(5),h=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"\ud83d\udc4b Hello! I'm ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.landingIntro),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.png",alt:"Antony Yu"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.email)))))))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.Title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.StartMonth," ",e.StartYear," - ",e.EndMonth," ",e.EndYear)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.InstitutionName),l.a.createElement("p",{className:"info"},e.Degree,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.GraduationMonth," ",e.GraduationYear)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),p=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"I am always looking for collaboration opportunities. Feel free to reach out!"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/Antonomy",target:"_blank"},l.a.createElement("img",{alt:"Github",src:"https://img.shields.io/badge/GitHub-41454A.svg?&style=for-the-badge&logo=Github&logoColor=white"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/antonyyu/",target:"_blank"},l.a.createElement("img",{alt:"LinkedIn",src:"https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"})),l.a.createElement("a",{href:"mailto:hello@antonyyu.com",target:"_blank"},l.a.createElement("img",{alt:"Email Me",src:"https://img.shields.io/badge/Email%20me-EA4335.svg?&style=for-the-badge&logo=gmail&logoColor=white"})),l.a.createElement("a",{href:"https://calendly.com/antonyyu",target:"_blank"},l.a.createElement("img",{alt:"Book Time on My Calendar",src:"https://img.shields.io/badge/Book%20Time%20with%20me-4285F4.svg?&style=for-the-badge&logo=googlecalendar&logoColor=white"})))))))}}]),a}(n.Component),g=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),b={name:"Antony",linkedinLink:"https://www.linkedin.com/in/antonyyu/",landingIntro:"I'm a Full Stack Software Engineer & Program Operations Leader. I'm always looking for opportunities to collaborate on new projects- so feel free to reach out!",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/antonyyu/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/Antonomy",className:"fa fa-github"}],aboutme:"I am a user-obsessed, technical, and operationally minded leader with 10 years of experience in tech and program operations. Having built teams globally in 16 countries, I am no stranger to working in fast-paced, hybrid, and global conditions. I'm passionate about engineering simple solutions to complex problems. During my experiences at Riot Games and Tencent, I held roles in leadership, program operations, and organizational transformation, which honed my strengths in change management, mentorship, and delivery operations leading me to my adventure at Huckleberry as VP Operations. A common thread throughout my career is my ability to enthusiastically coach and mentor my colleagues to grow their self confidence and regularly challenge convention. I extended this passion by becoming a full stack software engineer - I am looking to use my relationship building skills to create products and experiences that are at the intersection of building community and advancements in technology.",email:"hello@antonyyu.com",githubLink:"https://github.com/Antonomy",work:[{CompanyName:"Huckleberry",Title:"VP Operations",StartMonth:"Jan",StartYear:"2020",EndMonth:"Present",EndYear:"",Achievements:""},{CompanyName:"Tencent",Title:"Senior Manager, Global Esports",StartMonth:"Sept",StartYear:"2018",EndMonth:"Apr",EndYear:"2020",Achievements:"PUBG Mobile"},{CompanyName:"Riot Games",Title:"Manager, Global Esports Live Production",StartMonth:"Aug",StartYear:"2014",EndMonth:"Sept",EndYear:"2018",Achievements:"League of Legends"}],education:[{InstitutionName:"General Assembly",Degree:"Full Stack Software Engineering",GraduationMonth:"February",GraduationYear:"2022",Achievements:""},{InstitutionName:"California State University, Los Angeles (CSULA)",Degree:"Master of Business Administration (MBA)",GraduationMonth:"March",GraduationYear:"2013",Achievements:""},{InstitutionName:"University of California, San Diego (UCSD)",Degree:"Psychology | Business Management | Law Minor",GraduationMonth:"March",GraduationYear:"2010",Achievements:""}],skillsDescription:"Technical Skills",skills:[{skillname:"React"},{skillname:"HTML"},{skillname:"CSS"},{skillname:"JavaScript"},{skillname:"MongoDB"},{skillname:"Express"},{skillname:"Node"}]},f=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{resumeData:b}),l.a.createElement(d,{resumeData:b}),l.a.createElement(E,{resumeData:b}),l.a.createElement(p,{resumeData:b}),l.a.createElement(g,{resumeData:b}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.fcdf77f3.chunk.js.map