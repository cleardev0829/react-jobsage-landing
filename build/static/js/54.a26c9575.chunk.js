(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[54],{2780:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(3),r=a(31),c=a(32),i=a(2644),o=a(376),l=a(603),s=a(2741),u=a(36),d=a(0);function b(e){var t=e.links,a=e.action,b=e.heading,j=e.moreLink,v=void 0===j?[]:j,O=e.sx,f=Object(r.a)(e,["links","action","heading","moreLink","sx"]);return Object(d.jsxs)(i.a,{sx:O,mb:5,spacing:2,children:[Object(d.jsxs)(i.a,{direction:"row",alignItems:"center",children:[Object(d.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(d.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(u.c,Object(n.a)({links:t},f))]}),a&&Object(d.jsx)(o.a,{sx:{flexShrink:0},children:a})]}),Object(c.isString)(v)?Object(d.jsx)(s.a,{href:v,target:"_blank",variant:"body2",children:v}):v.map((function(e){return Object(d.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2787:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return u}));var n=a(3),r=a(603),c=a(2812),i=a(2819),o=a(376),l=a(0);function s(e){var t=e.title;return Object(l.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function u(e){var t=e.title,a=e.sx,r=e.children;return Object(l.jsxs)(c.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(l.jsx)(i.a,{title:t}),Object(l.jsx)(o.a,{sx:Object(n.a)({p:3,minHeight:180},a),children:r})]})}},2812:function(e,t,a){"use strict";var n=a(2),r=a(7),c=a(1),i=(a(12),a(11)),o=a(2697),l=a(8),s=a(14),u=a(2744),d=a(2638),b=a(2698);function j(e){return Object(d.a)("MuiCard",e)}Object(b.a)("MuiCard",["root"]);var v=a(0),O=Object(l.a)(u.a,{},{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),f=c.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiCard"}),c=a.className,l=a.raised,u=void 0!==l&&l,d=Object(r.a)(a,["className","raised"]),b=Object(n.a)({},a,{raised:u}),f=function(e){var t=e.classes;return Object(o.a)({root:["root"]},j,t)}(b);return Object(v.jsx)(O,Object(n.a)({className:Object(i.a)(f.root,c),elevation:u?8:void 0,ref:t,styleProps:b},d))}));t.a=f},2819:function(e,t,a){"use strict";var n=a(5),r=a(7),c=a(2),i=a(1),o=(a(12),a(11)),l=a(2697),s=a(603),u=a(14),d=a(8),b=a(2638),j=a(2698);function v(e){return Object(b.a)("MuiCardHeader",e)}var O=Object(j.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=a(0),x=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(c.a)((a={},Object(n.a)(a,"& .".concat(O.title),t.title),Object(n.a)(a,"& .".concat(O.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),h=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),p=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),m=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=i.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiCardHeader"}),n=a.action,i=a.avatar,d=a.className,b=a.component,j=void 0===b?"div":b,O=a.disableTypography,g=void 0!==O&&O,y=a.subheader,C=a.subheaderTypographyProps,P=a.title,M=a.titleTypographyProps,T=Object(r.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),w=Object(c.a)({},a,{component:j,disableTypography:g}),k=function(e){var t=e.classes;return Object(l.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},v,t)}(w),I=P;null==I||I.type===s.a||g||(I=Object(f.jsx)(s.a,Object(c.a)({variant:i?"body2":"h5",className:k.title,component:"span",display:"block"},M,{children:I})));var N=y;return null==N||N.type===s.a||g||(N=Object(f.jsx)(s.a,Object(c.a)({variant:i?"body2":"body1",className:k.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:N}))),Object(f.jsxs)(x,Object(c.a)({className:Object(o.a)(k.root,d),as:j,ref:t,styleProps:w},T,{children:[i&&Object(f.jsx)(h,{className:k.avatar,styleProps:w,children:i}),Object(f.jsxs)(m,{className:k.content,styleProps:w,children:[I,N]}),n&&Object(f.jsx)(p,{className:k.action,styleProps:w,children:n})]}))}));t.a=g},3259:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return u}));var n=a(17),r=a(1),c=(a(12),a(0)),i=r.createContext(null);function o(e){var t=e.children,a=e.value,o=function(){var e=r.useState(null),t=Object(n.a)(e,2),a=t[0],c=t[1];return r.useEffect((function(){c("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),a}(),l=r.useMemo((function(){return{idPrefix:o,value:a}}),[o,a]);return Object(c.jsx)(i.Provider,{value:l,children:t})}function l(){return r.useContext(i)}function s(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(t)}function u(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(t)}},3260:function(e,t,a){"use strict";var n=a(2),r=a(7),c=a(1),i=(a(12),a(4303)),o=a(3259),l=a(0),s=c.forwardRef((function(e,t){var a=e.children,s=Object(r.a)(e,["children"]),u=Object(o.d)();if(null===u)throw new TypeError("No TabContext provided");var d=c.Children.map(a,(function(e){return c.isValidElement(e)?c.cloneElement(e,{"aria-controls":Object(o.b)(u,e.props.value),id:Object(o.c)(u,e.props.value)}):null}));return Object(l.jsx)(i.a,Object(n.a)({},s,{ref:t,value:u.value,children:d}))}));t.a=s},3279:function(e,t,a){"use strict";var n=a(606),r=a(605);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var c=n(a(607)),i=a(0),o=(0,c.default)((0,i.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.default=o},3287:function(e,t,a){"use strict";var n=a(2),r=a(7),c=a(1),i=(a(12),a(11)),o=a(8),l=a(14),s=a(2697),u=a(2638),d=a(2698);function b(e){return Object(u.a)("MuiTabPanel",e)}Object(d.a)("MuiTabPanel",["root"]);var j=a(3259),v=a(0),O=Object(o.a)("div",{},{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(3)}})),f=c.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTabPanel"}),c=a.children,o=a.className,u=a.value,d=Object(r.a)(a,["children","className","value"]),f=Object(n.a)({},a),x=function(e){var t=e.classes;return Object(s.a)({root:["root"]},b,t)}(f),h=Object(j.d)();if(null===h)throw new TypeError("No TabContext provided");var p=Object(j.b)(h,u),m=Object(j.c)(h,u);return Object(v.jsx)(O,Object(n.a)({"aria-labelledby":m,className:Object(i.a)(x.root,o),hidden:u!==h.value,id:p,ref:t,role:"tabpanel",styleProps:f},d,{children:u===h.value&&c}))}));t.a=f},4176:function(e,t,a){"use strict";var n=a(606),r=a(605);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var c=n(a(607)),i=a(0),o=(0,c.default)((0,i.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone");t.default=o},4177:function(e,t,a){"use strict";var n=a(606),r=a(605);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var c=n(a(607)),i=a(0),o=(0,c.default)((0,i.jsx)("path",{d:"M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"PersonPin");t.default=o},4275:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var n=a(17),r=a(1),c=a(4176),i=a.n(c),o=a(3279),l=a.n(o),s=a(4177),u=a.n(s),d=a(8),b=a(376),j=a(2750),v=a(2644),O=a(4337),f=a(4303),x=a(3259),h=a(3260),p=a(3287),m=a(22),g=a(379),y=a(2780),C=a(2787),P=a(0),M={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},T=[{value:"1",icon:Object(P.jsx)(i.a,{}),label:"Item One",disabled:!1},{value:"2",icon:Object(P.jsx)(l.a,{}),label:"Item Two",disabled:!1},{value:"3",icon:Object(P.jsx)(u.a,{}),label:"Item Three",disabled:!0}],w=[{value:"1",icon:Object(P.jsx)(i.a,{}),label:"Item 1"},{value:"2",icon:Object(P.jsx)(l.a,{}),label:"Item 2"},{value:"3",icon:Object(P.jsx)(u.a,{}),label:"Item 3"},{value:"4",icon:Object(P.jsx)(u.a,{}),label:"Item 4"},{value:"5",icon:Object(P.jsx)(u.a,{}),label:"Item 5"},{value:"6",icon:Object(P.jsx)(u.a,{}),label:"Item 6"},{value:"7",icon:Object(P.jsx)(u.a,{}),label:"Item 7"}],k=Object(d.a)(g.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function I(){var e=Object(r.useState)("1"),t=Object(n.a)(e,2),a=t[0],c=t[1],i=Object(r.useState)("1"),o=Object(n.a)(i,2),l=o[0],s=o[1],u=function(e,t){c(t)};return Object(P.jsxs)(k,{title:"Components: Tabs | Minimal-UI",children:[Object(P.jsx)(b.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(P.jsx)(j.a,{maxWidth:"lg",children:Object(P.jsx)(y.a,{heading:"Tabs",links:[{name:"Components",href:m.d.components},{name:"Tabs"}],moreLink:"https://next.material-ui.com/components/tabs"})})}),Object(P.jsx)(j.a,{maxWidth:"lg",children:Object(P.jsxs)(v.a,{spacing:3,children:[Object(P.jsxs)(v.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(P.jsx)(C.a,{title:"Text",sx:M,children:Object(P.jsxs)(x.a,{value:a,children:[Object(P.jsx)(h.a,{onChange:u,children:T.map((function(e,t){return Object(P.jsx)(O.a,{label:e.label,value:String(t+1)},e.value)}))}),Object(P.jsx)(b.a,{sx:{p:2,mt:2,height:80,width:"100%",borderRadius:1,bgcolor:"grey.50012"},children:T.map((function(e,t){return Object(P.jsx)(p.a,{value:String(t+1),children:e.label},e.value)}))})]})}),Object(P.jsx)(C.a,{title:"Icon",sx:M,children:Object(P.jsx)(f.a,{value:a,onChange:u,children:T.map((function(e){return Object(P.jsx)(O.a,{icon:e.icon,value:e.value},e.value)}))})})]}),Object(P.jsxs)(v.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(P.jsx)(C.a,{title:"Text & Icon",sx:M,children:Object(P.jsx)(x.a,{value:a,children:Object(P.jsx)(h.a,{onChange:u,children:T.map((function(e){return Object(P.jsx)(O.a,{icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value)}))})})}),Object(P.jsx)(C.a,{title:"Scrollable",sx:M,children:Object(P.jsx)(b.a,{sx:{flexGrow:1,width:"100%",maxWidth:320},children:Object(P.jsx)(f.a,{allowScrollButtonsMobile:!0,value:l,variant:"scrollable",scrollButtons:"auto",onChange:function(e,t){s(t)},children:w.map((function(e){return Object(P.jsx)(O.a,{label:e.label,value:e.value},e.value)}))})})})]})]})})]})}}}]);
//# sourceMappingURL=54.a26c9575.chunk.js.map