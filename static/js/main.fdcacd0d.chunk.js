(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(7),i=n.n(c),r=(n(12),n(2)),o=n(3),l=n(5),u=n(4),h=(n(13),n(0)),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={show:!1},e.handleButton=function(){e.setState((function(e){return{show:!e.show}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(h.jsx)("div",{className:"event",children:Object(h.jsxs)("ul",{className:"list-events",children:[Object(h.jsx)("li",{className:"eventSummary",children:Object(h.jsx)("h2",{children:t.summary})}),Object(h.jsx)("li",{className:"eventLocation",children:Object(h.jsx)("h3",{children:t.location})}),Object(h.jsxs)("li",{className:"eventDate",children:["Begins: ",t.start.dateTime," ",t.start.timeZone,", Ends: ",t.end.dateTime," ",t.end.timeZone]}),!0===this.state.show&&Object(h.jsx)("p",{className:"eventDetails",children:t.description}),!1===this.state.show&&Object(h.jsx)("button",{className:"showDetails",onClick:function(){return e.handleButton()},children:"Show Details"}),!0===this.state.show&&Object(h.jsx)("button",{className:"hideDetails",onClick:function(){return e.handleButton()},children:"Hide Details"})]})})}}]),n}(s.Component),d=j,b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(d,{event:e})},e.id)}))})}}]),n}(s.Component),O=b,m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value,s=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:s})},e.handleItemClicked=function(t){e.setState({query:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),Object(h.jsxs)("ul",{className:"suggestions",children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{children:Object(h.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(s.Component),v=m,p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(v,{}),Object(h.jsx)(O,{})]})}}]),n}(s.Component),f=p;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.fdcacd0d.chunk.js.map