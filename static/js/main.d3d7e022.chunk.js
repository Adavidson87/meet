(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{202:function(e,t,n){},204:function(e,t,n){},223:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),c=n.n(o),s=(n(202),n(26)),i=n.n(s),l=n(51),u=n(23),h=n(31),d=n(24),f=n(25),m=(n(204),n(120)),p=n.n(m),v=n(2),b=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1},e.handleButton=function(){e.setState((function(e){return{show:!e.show}}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=p.a.utc("".concat(t.start.dateTime)).local(!0).format("llll"),a=p.a.utc("".concat(t.end.dateTime)).local(!0).format("llll");return Object(v.jsx)("div",{className:"event",children:Object(v.jsxs)("ul",{className:"list-events",children:[Object(v.jsx)("li",{className:"eventSummary",children:Object(v.jsx)("h2",{children:t.summary})}),Object(v.jsx)("li",{className:"eventLocation",children:Object(v.jsx)("h3",{children:t.location})}),Object(v.jsxs)("li",{className:"eventDate",children:["Begins: ",n,", Ends: ",a]}),!0===this.state.show&&Object(v.jsx)("p",{className:"eventDetails",children:t.description}),!1===this.state.show&&Object(v.jsx)("button",{className:"detailsButton",onClick:function(){return e.handleButton()},children:"Show Details"}),!0===this.state.show&&Object(v.jsx)("button",{className:"detailsButton",onClick:function(){return e.handleButton()},children:"Hide Details"})]})})}}]),n}(a.Component),j=b,g=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(h.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"Alert",children:Object(v.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a.type="info",a}return n}(g),w=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a.type="error",a}return n}(g),x=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="orange",a.type="warning",a}return n}(g),y=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(v.jsxs)("div",{children:[navigator.onLine?Object(v.jsx)(x,{text:" "}):Object(v.jsx)(x,{text:"You are offline, list of events may not be current."}),Object(v.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)(j,{event:e})},e.id)}))})]})}}]),n}(a.Component),k=y,S=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for.  Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:"CitySearch",children:[Object(v.jsx)(O,{text:this.state.infoText}),Object(v.jsx)("h3",{children:"Search by city"}),Object(v.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(v.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(v.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(v.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(v.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),N=S,T=n(191),E=n(121),C=n.n(E),W=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],A=n(75),Z=n.n(A),B=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},L=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://8456f66169.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(e){var t=e.map((function(e){return e.location}));return Object(T.a)(new Set(t))},D=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,_(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,C.a.get("https://8456f66169.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&L(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return Z.a.done(),e.abrupt("return",W);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),Z.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,D();case 11:if(!(n=e.sent)){e.next=21;break}return B(),a="https://8456f66169.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=17,C.a.get(a);case 17:return(r=e.sent).data&&(o=I(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),Z.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:18,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;n<1||n>33?e.setState({errorText:"Enter a number from 1 to 33",numberOfEvents:n}):(e.setState({errorText:"",numberOfEvents:n}),e.props.updateEventCount(t.target.value))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state.numberOfEvents;return Object(v.jsxs)("div",{className:"numberOfEvents",children:[Object(v.jsx)("h3",{children:"Number of Events"}),Object(v.jsx)(w,{className:"numberOfEventsErrorAlert",text:this.state.errorText}),Object(v.jsx)("input",{type:"text",className:"EventsNumber",value:t,onChange:function(t){return e.handleInputChanged(t)}})]})}}]),n}(a.Component),q=J;n(223);var R=function(e){return e.showWelcomeScreen?Object(v.jsx)("div",{className:"WelcomeScreen",children:Object(v.jsxs)("div",{className:"welcomeScreenWrapper",children:[Object(v.jsx)("h1",{children:"Welcome to the Meet app"}),Object(v.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(v.jsx)("div",{className:"button_cont",align:"center",children:Object(v.jsxs)("div",{class:"google-btn",children:[Object(v.jsx)("div",{class:"google-icon-wrapper",children:Object(v.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(v.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(v.jsx)("b",{children:"Sign in with google"})})]})}),Object(v.jsx)("a",{className:"privacy-policy-link",href:"https://adavidson87.github.io/meet/privacy-policy.html",rel:"nofollow noopener",children:"Privacy policy"}),Object(v.jsxs)("p",{children:["Background image by ",Object(v.jsx)("a",{href:"https://pixabay.com/users/pexels-2286921/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1869510",children:"Pexels"})," from ",Object(v.jsx)("a",{href:"https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1869510",children:"Pixabay"})]})]})}):null},U=n(359),F=n(363),P=n(364),z=n(187),H=n(188),G=n(78),Y=n(192),K=n(18),V=n(366),X=n(182),Q=n(95),$=n(74),ee=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(K.a)(n,2),o=r[0],c=r[1],s=["React","JavaScript","Node","jQuery","Angular","AngularJS"],i=["#B80000","#FF6900","#D3AA00","#008B02","#2C78F8","#9a73df"];return Object(a.useEffect)((function(){c((function(){return function(){var e=s.map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}));return e.filter((function(e){return e.value}))}()}))}),[t]),Object(v.jsx)(U.a,{height:400,children:Object(v.jsxs)(V.a,{width:400,height:400,children:[Object(v.jsx)(X.a,{data:o,cx:"50%",cy:"50%",labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){e.name;var t=e.percent;return"".concat((100*t).toFixed(0),"%")},children:o.map((function(e,t){return Object(v.jsx)(Q.a,{fill:i[t%i.length]},"cell-".concat(t))}))}),Object(v.jsx)($.a,{verticalAlign:"bottom",height:36})]})})},te=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],NumberOfEvents:18,currentLocation:"all",showWelcomeScreen:void 0},e.updateEvents=function(t){M().then((function(n){var a="all"===t?n.slice(0,e.state.NumberOfEvents):n.filter((function(e){return e.location===t}));e.setState({events:a.slice(0,e.state.NumberOfEvents),currentLocation:t})}))},e.updateEventCount=function(t){var n=e.state.currentLocation;e.setState({NumberOfEvents:t}),e.updateEvents(n,t)},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,_(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&M().then((function(e){o.mounted&&o.setState({events:e,locations:I(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(v.jsx)("div",{className:"App"}):Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("div",{className:"topOfPage",children:Object(v.jsx)("h1",{children:"Meet App "})}),Object(v.jsxs)("div",{className:"searchBoxes",children:[Object(v.jsx)(N,{label:"Search by city",locations:this.state.locations,updateEvents:this.updateEvents}),Object(v.jsx)(q,{label:"Number of Events",NumberOfEvents:q,updateEventCount:this.updateEventCount})]}),Object(v.jsxs)("div",{className:"data-vis-wrapper",children:[Object(v.jsx)(ee,{events:this.state.events}),Object(v.jsx)(U.a,{height:400,children:Object(v.jsxs)(F.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(v.jsx)(P.a,{}),Object(v.jsx)(z.a,{type:"category",dataKey:"city",name:"city"}),Object(v.jsx)(H.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),Object(v.jsx)(G.a,{cursor:{strokeDasharray:"3 3"}}),Object(v.jsx)(Y.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(v.jsx)("div",{className:"eventList",children:Object(v.jsx)(k,{events:this.state.events})}),Object(v.jsx)(R,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){D()}})]})}}]),n}(a.Component),ne=te,ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,367)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};n(189).config("147f39c395bf4be683a2b8491cbd82b2").install(),c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(ne,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");ae?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):re(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):re(t,e)}))}}(),oe()}},[[358,1,2]]]);
//# sourceMappingURL=main.d3d7e022.chunk.js.map