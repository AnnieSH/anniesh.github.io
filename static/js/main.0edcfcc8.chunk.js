(this.webpackJsonpgitio=this.webpackJsonpgitio||[]).push([[0],{29:function(e,t,n){e.exports=n(41)},34:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),i=n.n(r),c=(n(34),n(6)),s=n(7),l=n(11),p=n(10),m=n(26),u=n.n(m),h=n(21),d=n.n(h);function f(e){return o.a.createElement("span",{className:"menu-btn",id:e.id,onClick:e.onClick},e.label)}function b(e){return o.a.createElement("span",{className:"icon-btn",onClick:e.onClick},e.children)}var v=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{class:"menu"},o.a.createElement("span",{id:"left-menu"},o.a.createElement(f,{id:"home-btn",label:"Annie Hu",onClick:this.scrollToRef(this.props.homeRef)}),o.a.createElement(f,{id:"projects-btn",label:"Projects",onClick:this.scrollToRef(this.props.projectsRef)}),o.a.createElement(f,{id:"hobby-btn",label:"Hobbies",onClick:this.scrollToRef(this.props.hobbyRef)})),o.a.createElement("span",{id:"right-menu"},o.a.createElement(b,{id:"github-btn",onClick:this.gotoGithub},o.a.createElement(d.a,null)),o.a.createElement(b,{id:"linkedin-btn",onClick:this.gotoLinkedIn},o.a.createElement(u.a,null))))}},{key:"gotoLinkedIn",value:function(){window.open("https://www.linkedin.com/in/annie-hu-81755ba0")}},{key:"gotoGithub",value:function(){window.open("https://github.com/AnnieSH")}},{key:"scrollToRef",value:function(e){return function(){e.current.scrollIntoView({behavior:"smooth",block:"start"})}}}]),n}(o.a.Component),g=(n(40),n(53)),k=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{class:"section"},o.a.createElement(g.a,{variant:"h2",className:"section-header",ref:this.props.sectionRef},this.props.title),this.props.children)}}]),n}(o.a.Component),j=n(54),E=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).AVATAR_SRC="https://media-exp1.licdn.com/dms/image/C5603AQFZ3jZm-K6YCw/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=WUiBxcadwf8jplZ0osxc1GiFvYtdD5YpCVP6N0i6wvw",e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"home",id:"content"},o.a.createElement(k,{sectionRef:this.props.homeRef,title:"Hello World "},o.a.createElement(j.a,{className:"profile-avatar",alt:"Annie Hu",src:this.AVATAR_SRC}),"I'm Annie, a software developer specializing in both back-end and front-end development using Java, Scala, or Typescript. I've done internships in a start-up, VFX company, and a videogame company doing anywhere from QA automation and testing, small projects, and server  development. I currently work at Electronics Arts in Vancouver, where I did my final internship, as a back-end software developer."),o.a.createElement(k,{sectionRef:this.props.projectsRef,title:"Projects"},o.a.createElement("div",{className:"projects-section"},o.a.createElement(g.a,{variant:"h4"},"Run Tracker App"),o.a.createElement("img",{className:"project-photo",src:"runtracker.jpg",alt:"Run Tracker"}),"Run Tracker is an Android app written in Java that records your runs' path, length, speed, and other stats. Turns out - writing software does not encourage you to exercise.")),o.a.createElement(k,{sectionRef:this.props.hobbyRef,title:"Hobbies"},o.a.createElement("div",{className:"projects-section"},o.a.createElement(g.a,{variant:"h4"},"Photography"),o.a.createElement("img",{className:"project-photo",src:"_DSC0834-3.jpg",alt:"Yaletown-Roundhouse"}),"I shoot on a Sony A6000, taking pictures of the city, nature, and the occasional portrait."),o.a.createElement("div",{className:"project-section"},o.a.createElement(g.a,{variant:"h4"},"3D Modeling"),o.a.createElement("img",{className:"project-photo",src:"pokeball_02.png",alt:"Pokeball"}),"Blender is a great, open-source tool. I use it for the occasional fun project and hope to get into more complex designs and simulations in the future.")))}}]),n}(o.a.Component);var R=function(){var e=Object(a.createRef)(),t=Object(a.createRef)(),n=Object(a.createRef)();return o.a.createElement("div",{className:"App"},o.a.createElement(v,{homeRef:e,projectsRef:t,hobbyRef:n}),o.a.createElement(E,{homeRef:e,projectsRef:t,hobbyRef:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.0edcfcc8.chunk.js.map