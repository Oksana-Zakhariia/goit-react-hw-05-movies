"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[756],{866:function(e,r,t){t.d(r,{a:function(){return s}});var n=t(243),a=t(184),s=function(){return(0,a.jsx)(n.W0,{height:100,width:100,radius:5,color:"orangered",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})}},756:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(861),a=t(439),s=t(757),i=t.n(s),o=t(689),c=t(912);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var l=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"?api_key=").concat("c65b1581ed69fd3b6701ed620730aaec"," "));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),u=t(87),d=t(791),h=t(184),v=function(e){var r=e.movie,t=r.title,n=r.poster_path,a=r.overview,s=r.release_date,i=r.vote_average,o=r.genres;return(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n),alt:t}),(0,h.jsxs)("h2",{children:[t," ","".concat(new Date(s).getFullYear())]}),(0,h.jsxs)("p",{children:["User score ",Number.parseInt(10*i),"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsxs)("p",{children:[a," "]}),(0,h.jsx)("h3",{children:" Genres"}),(0,h.jsx)("p",{children:(null===o||void 0===o?void 0:o.length)>0?o.map((function(e){return e.name})).join(", "):"No genres"})]})},p=t(866),f=function(){var e,r,t,s,c=(0,d.useState)([]),f=(0,a.Z)(c,2),x=f[0],j=f[1],m=(0,d.useState)(!1),g=(0,a.Z)(m,2),w=g[0],b=g[1],k=(0,d.useState)(null),_=(0,a.Z)(k,2),Z=_[0],U=_[1],y=(0,o.UO)().movieId,S=(0,o.TH)(),C=null!==(e=null===(r=S.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";return(0,d.useEffect)((function(){if(""!==y){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,l(y);case 4:r=e.sent,j(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),U("There is some problems with loading this page. Please try to reload.");case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[y]),console.log(Z),(0,h.jsxs)("div",{children:[(0,h.jsx)(u.rU,{to:C,children:"Back"}),w&&(0,h.jsx)(p.a,{}),(0,h.jsx)(v,{movie:x}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"cast",state:{from:null===S||void 0===S||null===(t=S.state)||void 0===t?void 0:t.from},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"reviews",state:{from:null===S||void 0===S||null===(s=S.state)||void 0===s?void 0:s.from},children:"Reviews"})})]}),(0,h.jsx)(d.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading subpage..."}),children:(0,h.jsx)(o.j3,{})})]})]})}}}]);
//# sourceMappingURL=756.52dd72e1.chunk.js.map