"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[40],{40:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(243),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/search/movie?".concat(t,"&api_key=d4182ef1b885bf3cba37062e5c58a7c6&include_adult=false&language=en-US&page=1"));case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),o=i,l=n(791),f=n(87),p=n(689),v=n(184),h=function(){var e,t=(0,l.useState)([]),n=(0,a.Z)(t,2),u=n[0],s=n[1],i=(0,f.lr)(),h=(0,a.Z)(i,2),d=h[0],x=h[1],g=(0,p.TH)();return(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===d.get("query")){e.next=5;break}return e.next=3,o(d);case 3:t=e.sent,s(t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[d]),(0,v.jsxs)("div",{children:[(0,v.jsx)("form",{children:(0,v.jsx)("input",{type:"text",onChange:function(e){x(""!==e.target.value?{query:e.target.value}:{})},value:null!==(e=d.get("query"))&&void 0!==e?e:""})}),(0,v.jsx)("ul",{children:u.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(f.rU,{to:"".concat(e.id),state:g,children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=40.9b2f30a1.chunk.js.map