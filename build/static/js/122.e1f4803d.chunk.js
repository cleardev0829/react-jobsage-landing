(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[122],{2794:function(t,e,o){"use strict";o.d(e,"a",(function(){return u})),o.d(e,"b",(function(){return b})),o.d(e,"c",(function(){return d})),o.d(e,"d",(function(){return h})),o.d(e,"e",(function(){return m})),o.d(e,"f",(function(){return O}));var a=o(3),n=o(2770),r=o(8),c=o(0),i=Object(r.a)(n.b)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:e.spacing(1.5),left:e.spacing(1.5),boxShadow:e.customShadows.z8,"& span.mapboxgl-ctrl-icon":{transform:" scale(0.75)"}}}));function u(t){var e=Object.assign({},t);return Object(c.jsx)(i,Object(a.a)({},e))}var p=Object(r.a)(n.c)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:e.spacing(6),left:e.spacing(1.5),boxShadow:e.customShadows.z8}}));function b(t){var e=Object.assign({},t);return Object(c.jsx)(p,Object(a.a)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0},e))}var l=o(31),s=Object(r.a)("svg")((function(t){return{height:20,stroke:"none",cursor:"pointer",fill:t.theme.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")}}));function d(t){var e=t.onClick,o=Object(l.a)(t,["onClick"]);return Object(c.jsx)(n.f,Object(a.a)(Object(a.a)({},o),{},{children:Object(c.jsx)(s,{viewBox:"0 0 24 24",onClick:e,children:Object(c.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}var j=Object(r.a)(n.g)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",bottom:e.spacing(6),left:e.spacing(1.5),boxShadow:e.customShadows.z8,"& button+button":{borderTop:"1px solid ".concat(e.palette.divider)}}}));function h(t){var e=Object.assign({},t);return Object(c.jsx)(j,Object(a.a)({},e))}var g=Object(r.a)(n.h)((function(t){var e=t.theme,o="rtl"===e.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:e.spacing(1),boxShadow:e.customShadows.z20,borderRadius:e.shape.borderRadius,backgroundColor:e.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:e.palette.common.white,right:o&&"0",left:o&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:e.palette.grey[800]}}}));function m(t){var e=t.children,o=t.onClose,n=Object(l.a)(t,["children","onClose"]);return Object(c.jsx)(g,Object(a.a)(Object(a.a)({tipSize:8,anchor:"bottom",onClose:o,closeButton:!0,closeOnClick:!1},n),{},{children:e}))}var x=Object(r.a)("div")((function(t){var e=t.theme;return{zIndex:99,position:"absolute",left:e.spacing(1.5),bottom:e.spacing(3.5),boxShadow:e.customShadows.z8,"& .mapboxgl-ctrl":{border:"none",borderRadius:4,lineHeight:"14px",color:e.palette.common.white,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}}));function O(t){var e=t.sx,o=Object(l.a)(t,["sx"]);return Object(c.jsx)(x,{sx:e,children:Object(c.jsx)(n.i,Object(a.a)({maxWidth:100,unit:"imperial"},o))})}},3405:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return m}));var a=o(3),n=o(17),r=o(31),c=o(1),i=o(2770),u=o(2794),p=o(8),b=o(27),l=o(2709),s=o(2761),d=o(2715),j=o(0),h=Object(p.a)("div")((function(t){var e=t.theme;return{zIndex:99,minWidth:200,position:"absolute",top:e.spacing(1),right:e.spacing(1),padding:e.spacing(2),backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderRadius:e.shape.borderRadius,backgroundColor:Object(b.a)(e.palette.grey[900],.72)}}));function g(t){var e=t.data,o=t.selectedCity,a=t.handleChange;return Object(j.jsx)(h,{children:e.map((function(t){return Object(j.jsx)(l.a,{value:o,onChange:function(e){return a(e,t)},children:Object(j.jsx)(s.a,{value:t.city,label:t.city,control:Object(j.jsx)(d.a,{size:"small"}),sx:{color:"common.white"}})},t.city)}))})}function m(t){var e=t.data,o=Object(r.a)(t,["data"]),p=Object(c.useState)(e[2].city),b=Object(n.a)(p,2),l=b[0],s=b[1],d=Object(c.useState)({latitude:37.7751,longitude:-122.4193,zoom:10,bearing:0,pitch:0}),h=Object(n.a)(d,2),m=h[0],x=h[1],O=Object(c.useCallback)((function(t,e){var o=e.longitude,a=e.latitude;s(t.target.value),x({longitude:o,latitude:a,zoom:10,transitionInterpolator:new i.a({speed:1.2}),transitionDuration:"auto"})}),[]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(i.l,Object(a.a)(Object(a.a)(Object(a.a)({},m),{},{onViewportChange:x,dragRotate:!1},o),{},{children:[Object(j.jsx)(u.f,{}),Object(j.jsx)(u.d,{}),Object(j.jsx)(u.a,{}),Object(j.jsx)(u.b,{}),Object(j.jsx)(g,{data:e,selectedCity:l,handleChange:O})]}))})}}}]);
//# sourceMappingURL=122.e1f4803d.chunk.js.map