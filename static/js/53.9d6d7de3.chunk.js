"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[53],{9155:function(r,n,t){t.d(n,{Z:function(){return f}});var e=t(501),a="MoviesList_list__0Owr9",i="MoviesList_items__u7yPt",s="MoviesList_title__PB2c8",u="MoviesList_items__img__Y6zFP",c="MoviesList_link__8rTGX",o=t(184),f=function(r){var n=r.movies.map((function(r){var n=r.id,t=r.title,a=r.poster_path;return a=a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://upload.wikimedia.org/wikipedia/commons/4/47/GarvaGriha_in_KaryaBinayak.jpg",(0,o.jsx)("li",{className:i,children:(0,o.jsxs)(e.rU,{to:"/movies/".concat(n),className:c,children:[(0,o.jsx)("img",{src:a,alt:t,className:u,width:"200"}),(0,o.jsx)("p",{className:s,children:t})]})},n)}));return(0,o.jsx)("ul",{className:a,children:n})}},7053:function(r,n,t){t.r(n),t.d(n,{default:function(){return h}});var e=t(2982),a=t(1413),i=t(5861),s=t(885),u=t(7757),c=t.n(u),o=t(2791),f=t(4234),p=t(9155),v=t(6957),d=t(184),l=function(){var r=(0,o.useState)({movies:[],loading:!1,error:null}),n=(0,s.Z)(r,2),t=n[0],u=n[1];(0,o.useEffect)((function(){var r=function(){var r=(0,i.Z)(c().mark((function r(){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!0})})),r.prev=1,r.next=4,(0,f.Df)();case 4:n=r.sent,u((function(r){return(0,a.Z)((0,a.Z)({},r),{},{movies:(0,e.Z)(n.results)})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),u((function(n){return(0,a.Z)((0,a.Z)({},n),{},{error:r.t0})}));case 11:return r.prev=11,u((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[]);var l=t.movies,m=t.loading,h=t.error;return(0,d.jsxs)(d.Fragment,{children:[m&&(0,d.jsx)(v.Z,{}),h&&(0,d.jsx)("p",{children:"Movies not found, try again"}),(0,d.jsx)(p.Z,{movies:l})]})},m="HomePage_title__UFLA3",h=function(){return(0,d.jsxs)("main",{children:[(0,d.jsx)("h2",{className:m,children:"Trending today"}),(0,d.jsx)(l,{})]})}},4234:function(r,n,t){t.d(n,{Df:function(){return c},M1:function(){return p},Pg:function(){return f},tx:function(){return v},zi:function(){return o}});var e=t(5861),a=t(7757),i=t.n(a),s=t(4569),u=t.n(s)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"34dbf9d1a3fd74b10bf7ab9eec59866f",language:"en-US"}}),c=function(){var r=(0,e.Z)(i().mark((function r(){var n,t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u("/trending/movie/week");case 2:return n=r.sent,t=n.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(i().mark((function r(n){var t,e,a,s=arguments;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,r.next=3,u("/search/movie",{params:{query:n,page:t}});case 3:return e=r.sent,a=e.data,r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(i().mark((function r(n){var t,e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u("/movie/".concat(n));case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(i().mark((function r(n){var t,e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u("/movie/".concat(n,"/credits"));case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),v=function(){var r=(0,e.Z)(i().mark((function r(n){var t,e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u("/movie/".concat(n,"/reviews"));case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=53.9d6d7de3.chunk.js.map