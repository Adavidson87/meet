(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{202:function(e,t,n){},204:function(e,t,n){},223:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),c=n.n(o),s=(n(202),n(26)),i=n.n(s),u=n(51),l=n(23),h=n(31),d=n(24),f=n(25),v=(n(204),n(120)),p=n.n(v),m=n(3),b=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1},e.handleButton=function(){e.setState((function(e){return{show:!e.show}}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=p.a.utc("".concat(t.start.dateTime)).local(!0).format("llll"),a=p.a.utc("".concat(t.end.dateTime)).local(!0).format("llll");return Object(m.jsx)("div",{className:"event",children:Object(m.jsxs)("ul",{className:"list-events",children:[Object(m.jsx)("li",{className:"eventSummary",children:Object(m.jsx)("h2",{children:t.summary})}),Object(m.jsx)("li",{className:"eventLocation",children:Object(m.jsx)("h3",{children:t.location})}),Object(m.jsxs)("li",{className:"eventDate",children:["Begins: ",n,", Ends: ",a]}),!0===this.state.show&&Object(m.jsx)("p",{className:"eventDetails",children:t.description}),!1===this.state.show&&Object(m.jsx)("button",{className:"detailsButton",onClick:function(){return e.handleButton()},children:"Show Details"}),!0===this.state.show&&Object(m.jsx)("button",{className:"detailsButton",onClick:function(){return e.handleButton()},children:"Hide Details"})]})})}}]),n}(a.Component),j=b,g=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"Alert",children:Object(m.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),w=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="blue",a.type="info",a}return n}(g),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="red",a.type="error",a}return n}(g),x=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="orange",a.type="warning",a}return n}(g),y=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(m.jsxs)("ul",{className:"EventList",children:[navigator.onLine?Object(m.jsx)(x,{text:" "}):Object(m.jsx)(x,{text:"You are offline, list of events may not be current."}),e.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(j,{event:e})},e.id)}))]})}}]),n}(a.Component),k=y,S=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for.  Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"CitySearch",children:[Object(m.jsx)(w,{text:this.state.infoText}),Object(m.jsx)("h3",{children:"Search by city"}),Object(m.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(m.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(m.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),T=S,E=n(191),N=n(121),C=n.n(N),Z=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],A=n(75),W=n.n(A),B=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},I=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://8456f66169.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e){var t=e.map((function(e){return e.location}));return Object(E.a)(new Set(t))},D=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,J(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,C.a.get("https://8456f66169.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&I(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return W.a.done(),e.abrupt("return",Z);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),W.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,D();case 11:if(!(n=e.sent)){e.next=21;break}return B(),a="https://8456f66169.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=17,C.a.get(a);case 17:return(r=e.sent).data&&(o=L(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),W.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;n<1||n>32?e.setState({errorText:"Enter a number from 1 to 32",numberOfEvents:n}):(e.setState({errorText:"",numberOfEvents:n}),e.props.updateEventCount(t.target.value))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state.numberOfEvents;return Object(m.jsxs)("div",{className:"numberOfEvents",children:[Object(m.jsx)("h3",{children:"Number of Events"}),Object(m.jsx)(O,{className:"numberOfEventsErrorAlert",text:this.state.errorText}),Object(m.jsx)("input",{type:"text",className:"EventsNumber",value:t,onChange:function(t){return e.handleInputChanged(t)}})]})}}]),n}(a.Component),R=q;n(223);var U=n(359),F=n(363),z=n(364),H=n(187),P=n(188),_=n(78),Y=n(192),G=n(18),K=n(366),V=n(182),X=n(95),Q=n(74),$=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(G.a)(n,2),o=r[0],c=r[1],s=["React","JavaScript","Node","jQuery","Angular","AngularJS"],i=["#B80000","#FF6900","#D3AA00","#008B02","#2C78F8","#9a73df"];return Object(a.useEffect)((function(){c((function(){return function(){var e=s.map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}));return e.filter((function(e){return e.value}))}()}))}),[t]),Object(m.jsx)(U.a,{height:400,children:Object(m.jsxs)(K.a,{width:400,height:400,children:[Object(m.jsx)(V.a,{data:o,cx:"50%",cy:"50%",labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){e.name;var t=e.percent;return"".concat((100*t).toFixed(0),"%")},children:o.map((function(e,t){return Object(m.jsx)(X.a,{fill:i[t%i.length]},"cell-".concat(t))}))}),Object(m.jsx)(Q.a,{verticalAlign:"bottom",height:36})]})})},ee=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],NumberOfEvents:32,currentLocation:"all",showWelcomeScreen:void 0},e.updateEvents=function(t){M().then((function(n){var a="all"===t?n.slice(0,e.state.NumberOfEvents):n.filter((function(e){return e.location===t}));e.setState({events:a.slice(0,e.state.NumberOfEvents),currentLocation:t})}))},e.updateEventCount=function(t){var n=e.state.currentLocation;e.setState({NumberOfEvents:t}),e.updateEvents(n,t)},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,J(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&M().then((function(e){o.mounted&&o.setState({events:e,locations:L(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"topOfPage",children:Object(m.jsx)("h1",{children:"Meet App "})}),Object(m.jsxs)("div",{className:"searchBoxes",children:[Object(m.jsx)(T,{label:"Search by city",locations:this.state.locations,updateEvents:this.updateEvents}),Object(m.jsx)(R,{label:"Number of Events",NumberOfEvents:R,updateEventCount:this.updateEventCount})]}),Object(m.jsxs)("div",{className:"data-vis-wrapper",children:[Object(m.jsx)($,{events:this.state.events}),Object(m.jsx)(U.a,{height:400,children:Object(m.jsxs)(F.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(m.jsx)(z.a,{}),Object(m.jsx)(H.a,{type:"category",dataKey:"city",name:"city"}),Object(m.jsx)(P.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),Object(m.jsx)(_.a,{cursor:{strokeDasharray:"3 3"}}),Object(m.jsx)(Y.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(m.jsx)("div",{className:"eventList",children:Object(m.jsx)(k,{events:this.state.events})})]})}}]),n}(a.Component),te=ee,ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,367)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};n(189).config("147f39c395bf4be683a2b8491cbd82b2").install(),c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(te,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");ne?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ae(t,e)}))}}(),re()}},[[358,1,2]]]);
//# sourceMappingURL=main.da14d003.chunk.js.map