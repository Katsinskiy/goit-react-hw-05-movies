"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{8076:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(5861),a=e(885),u=e(7757),s=e.n(u),c=e(2791),i=e(6871),o=e(4234),p=e(6957),f="Cast_list__GlWio",v="Cast_items__hsMzW",h="Cast_img__-isbW",m="Cast_name__6UbFm",d=e(184),l=function(){var t=(0,c.useState)([]),n=(0,a.Z)(t,2),e=n[0],u=n[1],l=(0,c.useState)(!1),_=(0,a.Z)(l,2),x=_[0],w=_[1],g=(0,c.useState)(null),b=(0,a.Z)(g,2),k=b[0],y=b[1],Z=(0,i.UO)().movieId;(0,c.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.prev=1,t.next=4,(0,o.M1)(Z);case 4:n=t.sent,u(n.cast),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),y(t.t0.message);case 11:return t.prev=11,w(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[Z]);var j=e.map((function(t){var n=t.id,e=t.name,r=t.profile_path;return r=r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://upload.wikimedia.org/wikipedia/commons/4/47/GarvaGriha_in_KaryaBinayak.jpg",(0,d.jsxs)("li",{className:v,children:[(0,d.jsx)("img",{className:h,src:r,alt:e}),(0,d.jsx)("p",{className:m,children:e})]},n)}));return(0,d.jsxs)(d.Fragment,{children:[x&&(0,d.jsx)(p.Z,{}),k&&(0,d.jsx)("p",{children:"Movies not found, try again"}),e.length>0?(0,d.jsx)("ul",{className:f,children:j}):(0,d.jsx)("p",{children:"We don't have information about cast"})]})}},4234:function(t,n,e){e.d(n,{Df:function(){return i},M1:function(){return f},Pg:function(){return p},tx:function(){return v},zi:function(){return o}});var r=e(5861),a=e(7757),u=e.n(a),s=e(4569),c=e.n(s)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"34dbf9d1a3fd74b10bf7ab9eec59866f",language:"en-US"}}),i=function(){var t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("/trending/movie/week");case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a,s=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:1,t.next=3,c("/search/movie",{params:{query:n,page:e}});case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("/movie/".concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("/movie/".concat(n,"/credits"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("/movie/".concat(n,"/reviews"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.49184300.chunk.js.map