(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[121],{2780:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return g})),n.d(e,"f",(function(){return O}));var r=n(3),a=n(2765),o=n(8),c=n(0),i=Object(o.a)(a.b)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:e.spacing(1.5),left:e.spacing(1.5),boxShadow:e.customShadows.z8,"& span.mapboxgl-ctrl-icon":{transform:" scale(0.75)"}}}));function u(t){var e=Object.assign({},t);return Object(c.jsx)(i,Object(r.a)({},e))}var l=Object(o.a)(a.c)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:e.spacing(6),left:e.spacing(1.5),boxShadow:e.customShadows.z8}}));function s(t){var e=Object.assign({},t);return Object(c.jsx)(l,Object(r.a)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0},e))}var p=n(31),b=Object(o.a)("svg")((function(t){return{height:20,stroke:"none",cursor:"pointer",fill:t.theme.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")}}));function d(t){var e=t.onClick,n=Object(p.a)(t,["onClick"]);return Object(c.jsx)(a.f,Object(r.a)(Object(r.a)({},n),{},{children:Object(c.jsx)(b,{viewBox:"0 0 24 24",onClick:e,children:Object(c.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}var h=Object(o.a)(a.g)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",bottom:e.spacing(6),left:e.spacing(1.5),boxShadow:e.customShadows.z8,"& button+button":{borderTop:"1px solid ".concat(e.palette.divider)}}}));function f(t){var e=Object.assign({},t);return Object(c.jsx)(h,Object(r.a)({},e))}var j=Object(o.a)(a.h)((function(t){var e=t.theme,n="rtl"===e.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:e.spacing(1),boxShadow:e.customShadows.z20,borderRadius:e.shape.borderRadius,backgroundColor:e.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:e.palette.common.white,right:n&&"0",left:n&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:e.palette.grey[800]}}}));function g(t){var e=t.children,n=t.onClose,a=Object(p.a)(t,["children","onClose"]);return Object(c.jsx)(j,Object(r.a)(Object(r.a)({tipSize:8,anchor:"bottom",onClose:n,closeButton:!0,closeOnClick:!1},a),{},{children:e}))}var m=Object(o.a)("div")((function(t){var e=t.theme;return{zIndex:99,position:"absolute",left:e.spacing(1.5),bottom:e.spacing(3.5),boxShadow:e.customShadows.z8,"& .mapboxgl-ctrl":{border:"none",borderRadius:4,lineHeight:"14px",color:e.palette.common.white,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}}));function O(t){var e=t.sx,n=Object(p.a)(t,["sx"]);return Object(c.jsx)(m,{sx:e,children:Object(c.jsx)(a.i,Object(r.a)({maxWidth:100,unit:"imperial"},n))})}},2928:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return R}));var r=n(17),a=n(3),o=n(135);var c=function(t,e){return t<e?-1:t>e?1:t>=e?0:NaN};n(16);var i=function(t){return null===t?NaN:+t};function u(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;if(r=t.length){if((e=+e)<=0||r<2)return+n(t[0],0,t);if(e>=1)return+n(t[r-1],r-1,t);var r,a=(r-1)*e,o=Math.floor(a),c=+n(t[o],o,t),u=+n(t[o+1],o+1,t);return c+(u-c)*(a-o)}}var l=function(t){var e=t,n=t;function r(t,e,r,a){for(null==r&&(r=0),null==a&&(a=t.length);r<a;){var o=r+a>>>1;n(t[o],e)<0?r=o+1:a=o}return r}return 1===t.length&&(e=function(e,n){return t(e)-n},n=function(t){return function(e,n){return c(t(e),n)}}(t)),{left:r,center:function(t,n,a,o){null==a&&(a=0),null==o&&(o=t.length);var c=r(t,n,a,o-1);return c>a&&e(t[c-1],n)>-e(t[c],n)?c-1:c},right:function(t,e,r,a){for(null==r&&(r=0),null==a&&(a=t.length);r<a;){var o=r+a>>>1;n(t[o],e)>0?a=o:r=o+1}return r}}};var s=l(c),p=s.right,b=(s.left,l(i).center,p);function d(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}function h(){var t,e=[],n=[],r=[];function a(){var t=0,a=Math.max(1,n.length);for(r=new Array(a-1);++t<a;)r[t-1]=u(e,t/a);return i}function i(e){return null==e||isNaN(e=+e)?t:n[b(r,e)]}return i.invertExtent=function(t){var a=n.indexOf(t);return a<0?[NaN,NaN]:[a>0?r[a-1]:e[0],a<r.length?r[a]:e[e.length-1]]},i.domain=function(t){if(!arguments.length)return e.slice();e=[];var n,r=Object(o.a)(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;null==i||isNaN(i=+i)||e.push(i)}}catch(u){r.e(u)}finally{r.f()}return e.sort(c),a()},i.range=function(t){return arguments.length?(n=Array.from(t),a()):n.slice()},i.unknown=function(e){return arguments.length?(t=e,i):t},i.quantiles=function(){return r.slice()},i.copy=function(){return h().domain(e).range(n).unknown(t)},d.apply(i,arguments)}var f=n(2765),j=n(1),g=n(55),m=n(27),O=n(376),x=n(604),v=n(2780),y=n(31),w=n(8),k=n(3321),C=n(0),S=Object(w.a)("div")((function(t){var e=t.theme;return{zIndex:99,minWidth:200,position:"absolute",top:e.spacing(1),right:e.spacing(1),padding:e.spacing(2),backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderRadius:e.shape.borderRadius,backgroundColor:Object(m.a)(e.palette.grey[900],.72)}}));function z(t){var e=t.year,n=t.onChange,r=Object(y.a)(t,["year","onChange"]);return Object(C.jsxs)(S,{children:[Object(C.jsxs)(x.a,{variant:"body2",sx:{color:"common.white"},children:["Year: ",e]}),Object(C.jsx)(k.a,Object(a.a)({name:"year",value:e,step:1,min:1995,max:2015,onChange:n},r))]})}function N(t,e){var n=t.features,r=h().domain(n.map(e)).range(function(t,e,n){t=+t,e=+e,n=(a=arguments.length)<2?(e=t,t=0,1):a<3?1:+n;for(var r=-1,a=0|Math.max(0,Math.ceil((e-t)/n)),o=new Array(a);++r<a;)o[r]=t+r*n;return o}(9));return{type:"FeatureCollection",features:n.map((function(t){var n=e(t),o=Object(a.a)(Object(a.a)({},t.properties),{},{value:n,percentile:r(n)});return Object(a.a)(Object(a.a)({},t),{},{properties:o})}))}}function R(t){var e=Object.assign({},t),n=Object(g.a)(),o=Object(j.useState)({latitude:40,longitude:-100,zoom:3,bearing:0,pitch:0}),c=Object(r.a)(o,2),i=c[0],u=c[1],l=Object(j.useState)(2010),s=Object(r.a)(l,2),p=s[0],b=s[1],d=Object(j.useState)(null),h=Object(r.a)(d,2),y=h[0],w=h[1],k=Object(j.useState)(null),S=Object(r.a)(k,2),R=S[0],I=S[1],M={id:"data",type:"fill",paint:{"fill-color":{property:"percentile",stops:[[0,n.palette.primary.light],[1,n.palette.primary.main],[2,n.palette.info.light],[3,n.palette.info.main],[4,n.palette.warning.light],[5,n.palette.warning.main],[6,n.palette.error.light],[7,n.palette.error.light],[8,n.palette.primary.dark]]},"fill-opacity":.72}};Object(j.useEffect)((function(){fetch("https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/us-income.geojson").then((function(t){return t.json()})).then((function(t){return w(t)}))}),[]);var B=Object(j.useCallback)((function(t){var e=t.features,n=t.srcEvent,r=n.offsetX,a=n.offsetY,o=e&&e[0];I(o?{feature:o,x:r,y:a}:null)}),[]),L=Object(j.useMemo)((function(){return y&&N(y,(function(t){return t.properties.income[p]}))}),[y,p]);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(f.l,Object(a.a)(Object(a.a)(Object(a.a)({},i),{},{onViewportChange:u,interactiveLayerIds:["data"],onHover:B},e),{},{children:[Object(C.jsx)(v.f,{}),Object(C.jsx)(v.d,{}),Object(C.jsx)(v.a,{}),Object(C.jsx)(v.b,{}),Object(C.jsx)(f.j,{type:"geojson",data:L,children:Object(C.jsx)(f.d,Object(a.a)({},M))}),R&&Object(C.jsxs)(O.a,{sx:{p:1,zIndex:99,borderRadius:1,position:"absolute",pointerEvents:"none",color:"common.white",backgroundColor:Object(m.a)(n.palette.grey[900],.8)},style:{left:R.x,top:R.y},children:[Object(C.jsxs)(x.a,{component:"div",variant:"caption",children:[Object(C.jsx)("strong",{children:"State:"})," ",R.feature.properties.name]}),Object(C.jsxs)(x.a,{component:"div",variant:"caption",children:[Object(C.jsx)("strong",{children:" Median Household Income: "}),R.feature.properties.value]}),Object(C.jsxs)(x.a,{component:"div",variant:"caption",children:[Object(C.jsx)("strong",{children:"Percentile:"}),R.feature.properties.percentile/8*100]})]})]})),Object(C.jsx)(z,{year:p,onChange:function(t){return b(t.target.value)}})]})}}}]);
//# sourceMappingURL=121.e1f33bd1.chunk.js.map