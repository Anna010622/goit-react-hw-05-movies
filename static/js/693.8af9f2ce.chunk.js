"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[693],{4146:function(n,t,e){e.d(t,{Z:function(){return d}});var r,a,o,i=e(168),u=e(3081),c=e(1087),s=u.Z.ul(r||(r=(0,i.Z)(["\n  margin-bottom: 15px;\n"]))),g=u.Z.li(a||(a=(0,i.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),l=(0,u.Z)(c.Link)(o||(o=(0,i.Z)(["\n  display: block;\n  transition: font-size 250ms linear, color 250ms linear;\n\n  &:hover,\n  &:focus {\n    color: #22c33a;\n    font-size: 18px;\n  }\n"]))),p=e(184),f=e(1087).useLocation,d=function(n){var t=n.movies,e=f();return(0,p.jsx)(s,{children:null===t||void 0===t?void 0:t.map((function(n){return(0,p.jsx)(g,{children:(0,p.jsx)(l,{to:"/movies/".concat(n.id),state:e,children:n.title})},n.id)}))})}},9593:function(n,t,e){e.d(t,{Z:function(){return s}});var r,a=e(2784),o=e(168),i=e(8734),u=(0,e(8789).ZP)(i.Z)(r||(r=(0,o.Z)(["\n  & .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {\n    background: linear-gradient(\n      0deg,\n      rgba(34, 195, 58, 1) 0%,\n      rgba(253, 187, 45, 1) 100%\n    );\n  }\n  & .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root:hover {\n    background: linear-gradient(\n      0deg,\n      rgba(34, 195, 58, 1) 0%,\n      rgba(253, 187, 45, 1) 100%\n    );\n  }\n"]))),c=e(184);function s(n){var t=n.totalPages,e=n.onButtonClick,r=n.page;return(0,c.jsx)(a.Z,{spacing:2,children:(0,c.jsx)(u,{count:t,defaultPage:r,page:r,onChange:function(n,t){e(t)}})})}},7693:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a=e(5861),o=e(9439),i=e(4687),u=e.n(i),c=e(1243),s=function(){var n=(0,a.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=d4182ef1b885bf3cba37062e5c58a7c6&page=".concat(t));case 3:return e=n.sent,n.next=6,e.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}(),g=s,l=e(2791),p=e(4146),f=e(168),d=e(3081).Z.h1(r||(r=(0,f.Z)(["\n  margin-bottom: 15px;\n"]))),v=e(9593),h=e(1087),m=e(184),Z=function(){var n=(0,l.useState)(null),t=(0,o.Z)(n,2),e=t[0],r=t[1],i=(0,l.useState)(null),c=(0,o.Z)(i,2),s=c[0],f=c[1],Z=(0,h.useSearchParams)({page:1}),b=(0,o.Z)(Z,2),x=b[0],k=b[1];(0,l.useEffect)((function(){var n=function(){var n=(0,a.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g(x.get("page"));case 2:t=n.sent,e=t.results,f(t.total_pages),r(e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[x]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{children:"Trending today"}),(0,m.jsx)(p.Z,{movies:e}),s&&(0,m.jsx)(v.Z,{totalPages:s,onButtonClick:function(n){k({page:n})},page:Number(x.get("page"))})]})}}}]);
//# sourceMappingURL=693.8af9f2ce.chunk.js.map