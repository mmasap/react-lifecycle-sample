(this["webpackJsonpreact-router-6-upgrade"]=this["webpackJsonpreact-router-6-upgrade"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(9),r=c.n(n),i=c(5),s=(c(14),c(2)),j=c(6),a=c.n(j),o=c(1),l=function(){return Object(o.jsx)("header",{className:a.a.header,children:Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{className:function(e){return e.isActive?a.a.active:""},to:"/",children:"Lifecycle"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{className:function(e){return e.isActive?a.a.active:""},to:"/fetch",children:"Fetch"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{className:function(e){return e.isActive?a.a.active:""},to:"/timer",children:"Timer"})})]})})})},u=c(4),b=c(0),d=function(){var e=Object(b.useState)(0),t=Object(u.a)(e,2),c=t[0],n=t[1];return Object(b.useEffect)((function(){return console.log("componentDidMount"),function(){console.log("componentWillUnmount")}}),[]),Object(b.useEffect)((function(){0!==c&&console.log("componentDidUpdate")}),[c]),Object(o.jsxs)("section",{children:[Object(o.jsx)("p",{children:c}),Object(o.jsx)("button",{onClick:function(){return n((function(e){return++e}))},children:"countUp"})]})},h=function(){var e=Object(b.useState)(new Date),t=Object(u.a)(e,2),c=t[0],n=t[1];return Object(b.useEffect)((function(){console.log("setInterval!!!!");var e=setInterval((function(){console.log("updateTimer"),n(new Date)}),1e3);return function(){console.log("clearInterval"),clearInterval(e)}}),[]),Object(o.jsx)("section",{children:c.toString()})},O=function(){var e=Object(b.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1];return Object(b.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(o.jsx)("section",{children:Object(o.jsxs)("table",{style:{margin:"auto"},children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"name"}),Object(o.jsx)("td",{children:"mail"})]})}),Object(o.jsx)("tbody",{children:c.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.email})]},e.id)}))})]})})};var f=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)("main",{children:Object(o.jsxs)(s.c,{children:[Object(o.jsx)(s.a,{path:"/",element:Object(o.jsx)(d,{})}),Object(o.jsx)(s.a,{path:"/fetch",element:Object(o.jsx)(O,{})}),Object(o.jsx)(s.a,{path:"/timer",element:Object(o.jsx)(h,{})})]})})]})};r.a.render(Object(o.jsx)(i.a,{basename:"/react-lifecycle-sample",children:Object(o.jsx)(f,{})}),document.getElementById("root"))},6:function(e,t,c){e.exports={header:"MainHeader_header__3jG-X",active:"MainHeader_active__11wpQ"}}},[[16,1,2]]]);
//# sourceMappingURL=main.6a2dea56.chunk.js.map