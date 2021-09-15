(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[69],{2780:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var r=a(3),n=a(31),i=a(32),s=a(2644),c=a(376),l=a(603),o=a(2741),d=a(36),u=a(0);function j(e){var t=e.links,a=e.action,j=e.heading,b=e.moreLink,x=void 0===b?[]:b,m=e.sx,O=Object(n.a)(e,["links","action","heading","moreLink","sx"]);return Object(u.jsxs)(s.a,{sx:m,mb:5,spacing:2,children:[Object(u.jsxs)(s.a,{direction:"row",alignItems:"center",children:[Object(u.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(u.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:j}),Object(u.jsx)(d.c,Object(r.a)({links:t},O))]}),a&&Object(u.jsx)(c.a,{sx:{flexShrink:0},children:a})]}),Object(i.isString)(x)?Object(u.jsx)(o.a,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return Object(u.jsx)(o.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2787:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return d}));var r=a(3),n=a(603),i=a(2812),s=a(2819),c=a(376),l=a(0);function o(e){var t=e.title;return Object(l.jsx)(n.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function d(e){var t=e.title,a=e.sx,n=e.children;return Object(l.jsxs)(i.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(l.jsx)(s.a,{title:t}),Object(l.jsx)(c.a,{sx:Object(r.a)({p:3,minHeight:180},a),children:n})]})}},2812:function(e,t,a){"use strict";var r=a(2),n=a(7),i=a(1),s=(a(12),a(11)),c=a(2697),l=a(8),o=a(14),d=a(2744),u=a(2638),j=a(2698);function b(e){return Object(u.a)("MuiCard",e)}Object(j.a)("MuiCard",["root"]);var x=a(0),m=Object(l.a)(d.a,{},{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),O=i.forwardRef((function(e,t){var a=Object(o.a)({props:e,name:"MuiCard"}),i=a.className,l=a.raised,d=void 0!==l&&l,u=Object(n.a)(a,["className","raised"]),j=Object(r.a)({},a,{raised:d}),O=function(e){var t=e.classes;return Object(c.a)({root:["root"]},b,t)}(j);return Object(x.jsx)(m,Object(r.a)({className:Object(s.a)(O.root,i),elevation:d?8:void 0,ref:t,styleProps:j},u))}));t.a=O},2819:function(e,t,a){"use strict";var r=a(5),n=a(7),i=a(2),s=a(1),c=(a(12),a(11)),l=a(2697),o=a(603),d=a(14),u=a(8),j=a(2638),b=a(2698);function x(e){return Object(j.a)("MuiCardHeader",e)}var m=Object(b.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),O=a(0),p=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(i.a)((a={},Object(r.a)(a,"& .".concat(m.title),t.title),Object(r.a)(a,"& .".concat(m.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),h=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=s.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),r=a.action,s=a.avatar,u=a.className,j=a.component,b=void 0===j?"div":j,m=a.disableTypography,g=void 0!==m&&m,y=a.subheader,k=a.subheaderTypographyProps,C=a.title,M=a.titleTypographyProps,V=Object(n.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),T=Object(i.a)({},a,{component:b,disableTypography:g}),R=function(e){var t=e.classes;return Object(l.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,t)}(T),w=C;null==w||w.type===o.a||g||(w=Object(O.jsx)(o.a,Object(i.a)({variant:s?"body2":"h5",className:R.title,component:"span",display:"block"},M,{children:w})));var L=y;return null==L||L.type===o.a||g||(L=Object(O.jsx)(o.a,Object(i.a)({variant:s?"body2":"body1",className:R.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:L}))),Object(O.jsxs)(p,Object(i.a)({className:Object(c.a)(R.root,u),as:b,ref:t,styleProps:T},V,{children:[s&&Object(O.jsx)(h,{className:R.avatar,styleProps:T,children:s}),Object(O.jsxs)(f,{className:R.content,styleProps:T,children:[w,L]}),r&&Object(O.jsx)(v,{className:R.action,styleProps:T,children:r})]}))}));t.a=g},4171:function(e,t,a){"use strict";var r=a(606),n=a(605);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(a(1));var i=r(a(607)),s=a(0),c=(0,i.default)((0,s.jsx)("path",{d:"M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"}),"VolumeDown");t.default=c},4172:function(e,t,a){"use strict";var r=a(606),n=a(605);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(a(1));var i=r(a(607)),s=a(0),c=(0,i.default)((0,s.jsx)("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}),"VolumeUp");t.default=c},4272:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return R}));var r=a(17),n=a(1),i=a(4172),s=a.n(i),c=a(4171),l=a.n(c),o=a(8),d=a(376),u=a(2750),j=a(2730),b=a(3237),x=a(603),m=a(22),O=a(379),p=a(2780),h=a(2787),v=a(0),f=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}],g=[{value:0,label:"$0"},{value:25,label:"250"},{value:50,label:"500"},{value:75,label:"750"},{value:100,label:"1000"}],y={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},k=Object(o.a)(O.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function C(e){return e>0?"$".concat(e,"0"):e}function M(e){return e>0?"$".concat(e):e}function V(e){return"$".concat(e,"\xb0C")}function T(e){return f.findIndex((function(t){return t.value===e}))+1}function R(){var e=Object(n.useState)(30),t=Object(r.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)([25,75]),o=Object(r.a)(c,2),O=o[0],R=o[1];return Object(v.jsxs)(k,{title:"Components: Slider | Minimal-UI",children:[Object(v.jsx)(d.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(v.jsx)(u.a,{maxWidth:"lg",children:Object(v.jsx)(p.a,{heading:"Slider",links:[{name:"Components",href:m.d.components},{name:"Slider"}],moreLink:"https://next.material-ui.com/components/slider"})})}),Object(v.jsx)(u.a,{maxWidth:"lg",children:Object(v.jsxs)(j.a,{container:!0,spacing:3,children:[Object(v.jsx)(j.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(h.a,{title:"Volume",sx:y,children:Object(v.jsxs)(j.a,{container:!0,spacing:2,children:[Object(v.jsx)(j.a,{item:!0,children:Object(v.jsx)(l.a,{})}),Object(v.jsx)(j.a,{item:!0,xs:!0,children:Object(v.jsx)(b.a,{value:a,onChange:function(e,t){i(t)},"aria-labelledby":"continuous-slider"})}),Object(v.jsx)(j.a,{item:!0,children:Object(v.jsx)(s.a,{})})]})})}),Object(v.jsx)(j.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(h.a,{title:"Disabled slider",sx:y,children:Object(v.jsx)(b.a,{disabled:!0,defaultValue:30})})}),Object(v.jsx)(j.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(h.a,{title:"Temperature",sx:y,children:Object(v.jsx)(b.a,{defaultValue:30,getAriaValueText:V,valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:110})})}),Object(v.jsx)(j.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(h.a,{title:"Disabled",sx:y,children:Object(v.jsx)(b.a,{marks:!0,min:10,disabled:!0,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:V})})}),Object(v.jsx)(j.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(h.a,{title:"Small steps",sx:y,children:Object(v.jsx)(b.a,{defaultValue:5e-8,getAriaValueText:V,step:1e-8,marks:!0,min:-5e-8,max:1e-7,valueLabelDisplay:"auto"})})}),Object(v.jsx)(j.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(h.a,{title:"Custom marks",sx:y,children:Object(v.jsx)(b.a,{defaultValue:20,getAriaValueText:V,step:10,valueLabelDisplay:"auto",marks:f})})}),Object(v.jsx)(j.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(h.a,{title:"Restricted values",sx:y,children:Object(v.jsx)(b.a,{defaultValue:20,valueLabelFormat:T,getAriaValueText:V,step:null,valueLabelDisplay:"auto",marks:f})})}),Object(v.jsx)(j.a,{item:!0,xs:12,md:8,children:Object(v.jsxs)(h.a,{title:"Range",sx:y,children:[Object(v.jsx)(d.a,{sx:{width:"100%"},children:Object(v.jsx)(b.a,{scale:function(e){return 10*e},step:10,marks:g,value:O,onChange:function(e,t){R(t)},valueLabelDisplay:"on",getAriaValueText:C,valueLabelFormat:M})}),Object(v.jsxs)(d.a,{sx:{p:2,width:"100%",borderRadius:1,bgcolor:"grey.50012"},children:[Object(v.jsxs)(x.a,{variant:"subtitle2",gutterBottom:!0,children:["Min: ",C(O[0])]}),Object(v.jsxs)(x.a,{variant:"subtitle2",children:["Max: ",C(O[1])]})]})]})})]})})]})}}}]);
//# sourceMappingURL=69.3568d443.chunk.js.map