"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[843],{866:function(e,t,r){r.d(t,{a:function(){return u}});var n=r(243),a=r(184),u=function(){return(0,a.jsx)(n.W0,{height:100,width:100,radius:5,color:"orangered",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})}},843:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(861),a=r(439),u=r(757),s=r.n(u),i=r(791),o=r(87),c=r(912);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat("c65b1581ed69fd3b6701ed620730aaec","&query=").concat(t," "));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=r(184),p=function(e){var t=e.onSubmit,r=(0,i.useState)(""),n=(0,a.Z)(r,2),u=n[0],s=n[1];return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==u.trim()?(t(u),s("")):alert("Write search parameters")},children:[(0,f.jsx)("input",{autoComplete:"off",value:u,placeholder:"Enter the film name",type:"text",onChange:function(e){s(e.target.value.toLowerCase())}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},h=r(689),d=function(e){var t=e.movies,r=(0,h.TH)();return(0,f.jsx)("div",{children:t&&(0,f.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.title;return(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"/movies/".concat(t),state:{from:r},children:(0,f.jsx)("p",{children:n})})},t)}))})})},v=r(866),m=function(){var e=(0,o.lr)(),t=(0,a.Z)(e,2),r=t[0],u=t[1],c=(0,i.useState)(!1),h=(0,a.Z)(c,2),m=h[0],x=h[1],b=(0,i.useState)(null),g=(0,a.Z)(b,2),j=g[0],w=g[1],y=(0,i.useState)([]),k=(0,a.Z)(y,2),S=k[0],Z=k[1],C=r.get("query");(0,i.useEffect)((function(){if(C){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,l(C);case 4:t=e.sent,Z(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w("There is some problems with lisding this page. Please try to reload.");case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}else console.log("there is no query")}),[C]),console.log(j);return(0,f.jsxs)(f.Fragment,{children:[m&&(0,f.jsx)(v.a,{}),(0,f.jsx)(p,{onSubmit:function(e){u({query:e})},onChange:function(e){u(""!==e?{query:e}:{})},value:C}),(0,f.jsx)(d,{movies:S})]})}}}]);
//# sourceMappingURL=843.fdf4d1a3.chunk.js.map