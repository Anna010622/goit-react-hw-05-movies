"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[121],{4121:function(A,g,I){I.r(g),I.d(g,{default:function(){return s}});var C,n,t,e=I(5861),r=I(9439),a=I(4687),c=I.n(a),i=I(2791),d=I(7689),o=I(1243),p=function(){var A=(0,e.Z)(c().mark((function A(g){var I,C;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(g,"/credits?language=en-US&api_key=d4182ef1b885bf3cba37062e5c58a7c6"));case 3:return I=A.sent,A.next=6,I.data;case 6:return C=A.sent,A.abrupt("return",C);case 10:A.prev=10,A.t0=A.catch(0),console.error(A.t0);case 13:case"end":return A.stop()}}),A,null,[[0,10]])})));return function(g){return A.apply(this,arguments)}}(),u=p,l=I(168),m=I(8789),v=m.ZP.ul(C||(C=(0,l.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  grid-gap: 16px;\n  padding-bottom: 16px;\n"]))),x=m.ZP.li(n||(n=(0,l.Z)(["\n  border: 1px solid #22c33a;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  text-align: center;\n  padding-bottom: 5px;\n  display: flex;\n  flex-direction: column;\n"]))),b=m.ZP.img(t||(t=(0,l.Z)(["\n  margin-bottom: 5px;\n  flex-grow: 1;\n  object-fit: cover;\n"]))),V=I(184),s=function(){var A=(0,i.useState)(null),g=(0,r.Z)(A,2),I=g[0],C=g[1],n=(0,d.UO)().movieId;return(0,i.useEffect)((function(){var A=function(){var A=(0,e.Z)(c().mark((function A(){var g;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,u(n);case 2:g=A.sent,C(g.cast);case 4:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}();A()}),[n]),(0,V.jsx)(v,{children:null===I||void 0===I?void 0:I.map((function(A){return(0,V.jsxs)(x,{children:[(0,V.jsx)(b,{src:A.profile_path?"https://image.tmdb.org/t/p/w300".concat(A.profile_path):"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAEsAAAAAQAAASwAAAAB/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAPHAFaAAMbJUccAQAAAgAEAP/hDIFodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMC4xMCc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp0aWZmPSdodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyc+CiAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICA8dGlmZjpYUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpYUmVzb2x1dGlvbj4KICA8dGlmZjpZUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpZUmVzb2x1dGlvbj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nPgogIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnN0b2NrOmVmOTM1MDM3LTNiOWMtNDA2NC05MmNhLWYwOWQzMWQ1YjQ0MDwveG1wTU06RG9jdW1lbnRJRD4KICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjAzN2JjMGE3LWFjYWUtNDJiMS04NGM0LTllMGI0OGJmZTBlYzwveG1wTU06SW5zdGFuY2VJRD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/8AACwgA8ADwAQERAP/EAB0AAQACAwEBAQEAAAAAAAAAAAAHCAQFBgEDAgn/xAA/EAABAwICBQgIBAQHAAAAAAAAAQIDBAUGEQcSITFBIjZRYXF0kaEIExRCYrGywSMyUoEVM5LRJDVDRFNy0v/aAAgBAQAAPwD+qYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMG73y32GmWe4VcVJF0yOyz7E3r+xHd40/Wikc5lvo6ivVPfdlGxfHNfI5qf0hbo5y+ptdJG343ucv2Paf0hbm1yevtVLI34Huav3Ons2nyzVrmsr6Wot7l9/8AmM8tvkSFa7zQ3umSooKqKrhX3onZ5dvQZoAAAAAAAAAABGmkbS/Bht8lutWpVXJNj5F2xwr93dRBF1vFbfKt1VX1MlVO7e6Rc8upE4J1IYYAM+zXyvw/WNqrfVSUsycWLsXqVNyp2k9aOtLdNipWUFxRlJdMsmqmxk3Z0L1EigAAAAAAAAAEa6X9IjsNUaWu3yatyqG5vkbvhYvHtXh4lfHOVzlVVVVVc1Vd6ngAAP0x7ontexyse1c0c1clReksVok0hLiy3LQ1r0/ilK3a5f8AWZu1u3pJCAAAAAAAAAMO8XSGy2qqr51yhp41kd15JuKl3u71F+u1VcKl2tNO9Xr1dCJ1ImwwQAAAbPDd9nw1e6S406qj4Hoqt/U3i1e1C2dvrornQU9XA7WhnjbIxepUzMgAAAAAAAAEZ6erutDhSCiY7J1ZOiO62t2r56pX0AAAAFitBt4W44LSme7WfRTOiT/qvKT5r4EiAAAAAAAAAg/0h51W42aHPkpFI/LtVE+xEIAAAAJn9Hadcr3Dnyfwn5dfKQmcAAAAAAAAEJekRTKlZZajLkrHJHn1oqL9yHgAAAATT6O9MqRXuo91XRRp4OX7oTKAAAAAAAACOtOdlW5YOSqY3WfQypKuX6V5Lvmi/sV2AAAABZHQtZVtOCIJXt1ZKx7qhc/0rsb5Jn+53oAAAAAAAAMevoorlRT0k7deGZixvavFFTJSp+KcPT4XvtVbqhF1onch362L+VydqGpAAABu8G4ZmxbiGlt8SKjHu1pXp7kafmX7dqlrqanjpKeKCJqMiiajGNTgiJkiH1AAAAAAAAAOG0paPW4ztiT0qNbdaZFWJy7PWN4sX7dZW6op5aSeSCeN0U0bla9j0yVqpwU+YAAPtR0c9wqoqamidNPK5GsjYmauUsrozwDHgm0qs2rJc6hEWeRPd6GJ1J5qdmAAAAAAAAAAcRj/AEXUGNGLURqlHdGpk2dqbH9T049u8gPEmDrthSoWK40j42Z5NmamtG/scaQAG+wxgm74tnRlBSudFnk6oemrG3tX7IT/AIC0aW/BMPrdlXcnJk+pcm7qanBPM7EAAAAAAAAAAA+dRTxVcLop4mTROTJzJGo5F/ZTirxoZwzdnOeylfQSLxpX6qf0rmhzVR6O9I5yrDeZ2J0Pha75Kh7T+jxRNciz3id6dEcLW/NVOms2h3DNoc160bq6VPeq366f07E8jtIYY6eJscUbYo2pk1jEyRP2P2AAAAAAAAAAAeGDV3622/P2m4UsGXCSZrV81NRPpKwvTqqPvdLn8Dtb5GK7S5hNq5fxdi9kb/8AyG6XMJuX/N2J2xvT7GXBpJwxUqiMvdJn8b9X5m3pL5brhl7NX01Rn/xytd8lM4AAAAAAAAAHirkcdibSxh/DSvidU+21TdnqKXlKi9a7kIyvmnu81quZbqeC3R8HKnrH+K7PI4i54wvd4VVrLpVTIvurIqN8E2GoVVcuarmvSp4AD1qq1c0XJelDc2vGd9syp7HdaqJE9z1iub4Lmh3Fj0+XejVrLnSw18fF7Pw3/wBvIk3DGlKwYoVsUVV7JVO/29TyHKvUu5fE68AAAAAAAGpxJie34Utzqy4TpFGmxrE2uevQ1OKkAY10s3bFb5IIHut9uXYkMTuU9Pidx7NxwwAAAAB6d7gnS9dMMOjp6xzrlbk2erkd+IxPhd9l8ifrBiKgxNbmVtvnSaF2xU3OYvQ5OCmyAAAAAANXiXEVJhazz3GsdlHGnJam97uDU61Kv4rxXXYvuslbWv6o4kXkxN6E/vxNKAAAAAADfYOxjXYMuzKukcrolVEmgVeTK3oXr6FLQWC+UuI7TT3CjfrwTNzTpavFF60NgAAAAACu+mvFrr3iRbbC/Ojt66mSLsdJ7y/tu8SOQAAAAAAASdoNxa61X11nmf8A4Wu/loq7GyomzxTZ4FgAAAAADEu9clstVZVrughfL4IqlQJ531U8k0i60kjle5V4qq5qfMAAAAAAAH3oKyS311PVRLqyQSNkaqdKLmXBoqltbRwVDfyyxtkTsVMz7AAAAA53SI9WYGvapsX2V6eRVMAAAAAAAALuLa4Mcr8JWZV2qtJF9KG5AAAABzekbmLfO6vKqgAAAAAAABdxbTBXNCy9zi+lDdAAAAA5vSNzFvndXlVQAAAAAAAAu4tpgrmhZe5xfShugAAAAc3pG5i3zuryqoAAAAAAAAXcW0wVzQsvc4vpQ3QAAAAOb0jcxb53V5VUAAAAAAAALuLaYK5oWXucX0oboAAAAHN6RuYt87q8qqAAAAAAAAF3FtMFc0LL3OL6UN0AAAADm9I3MW+d1eVVAAAAAAAAC7i2mCuaFl7nF9KG6AAP/9k=",alt:A.name}),(0,V.jsx)("h3",{children:A.name}),(0,V.jsx)("p",{children:A.character})]},A.id)}))})}}}]);
//# sourceMappingURL=121.003ec0dc.chunk.js.map