(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[92],{2780:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(3),n=a(31),c=a(32),o=a(2644),s=a(376),l=a(603),i=a(2741),j=a(36),b=a(0);function d(e){var t=e.links,a=e.action,d=e.heading,u=e.moreLink,x=void 0===u?[]:u,O=e.sx,m=Object(n.a)(e,["links","action","heading","moreLink","sx"]);return Object(b.jsxs)(o.a,{sx:O,mb:5,spacing:2,children:[Object(b.jsxs)(o.a,{direction:"row",alignItems:"center",children:[Object(b.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(b.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:d}),Object(b.jsx)(j.c,Object(r.a)({links:t},m))]}),a&&Object(b.jsx)(s.a,{sx:{flexShrink:0},children:a})]}),Object(c.isString)(x)?Object(b.jsx)(i.a,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return Object(b.jsx)(i.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2787:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return j}));var r=a(3),n=a(603),c=a(2812),o=a(2819),s=a(376),l=a(0);function i(e){var t=e.title;return Object(l.jsx)(n.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function j(e){var t=e.title,a=e.sx,n=e.children;return Object(l.jsxs)(c.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(l.jsx)(o.a,{title:t}),Object(l.jsx)(s.a,{sx:Object(r.a)({p:3,minHeight:180},a),children:n})]})}},2812:function(e,t,a){"use strict";var r=a(2),n=a(7),c=a(1),o=(a(12),a(11)),s=a(2697),l=a(8),i=a(14),j=a(2744),b=a(2638),d=a(2698);function u(e){return Object(b.a)("MuiCard",e)}Object(d.a)("MuiCard",["root"]);var x=a(0),O=Object(l.a)(j.a,{},{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),m=c.forwardRef((function(e,t){var a=Object(i.a)({props:e,name:"MuiCard"}),c=a.className,l=a.raised,j=void 0!==l&&l,b=Object(n.a)(a,["className","raised"]),d=Object(r.a)({},a,{raised:j}),m=function(e){var t=e.classes;return Object(s.a)({root:["root"]},u,t)}(d);return Object(x.jsx)(O,Object(r.a)({className:Object(o.a)(m.root,c),elevation:j?8:void 0,ref:t,styleProps:d},b))}));t.a=m},2819:function(e,t,a){"use strict";var r=a(5),n=a(7),c=a(2),o=a(1),s=(a(12),a(11)),l=a(2697),i=a(603),j=a(14),b=a(8),d=a(2638),u=a(2698);function x(e){return Object(d.a)("MuiCardHeader",e)}var O=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=a(0),p=Object(b.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(c.a)((a={},Object(r.a)(a,"& .".concat(O.title),t.title),Object(r.a)(a,"& .".concat(O.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),h=Object(b.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(b.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=Object(b.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=o.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiCardHeader"}),r=a.action,o=a.avatar,b=a.className,d=a.component,u=void 0===d?"div":d,O=a.disableTypography,g=void 0!==O&&O,y=a.subheader,C=a.subheaderTypographyProps,k=a.title,w=a.titleTypographyProps,P=Object(n.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),R=Object(c.a)({},a,{component:u,disableTypography:g}),M=function(e){var t=e.classes;return Object(l.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,t)}(R),N=k;null==N||N.type===i.a||g||(N=Object(m.jsx)(i.a,Object(c.a)({variant:o?"body2":"h5",className:M.title,component:"span",display:"block"},w,{children:N})));var T=y;return null==T||T.type===i.a||g||(T=Object(m.jsx)(i.a,Object(c.a)({variant:o?"body2":"body1",className:M.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:T}))),Object(m.jsxs)(p,Object(c.a)({className:Object(s.a)(M.root,b),as:u,ref:t,styleProps:R},P,{children:[o&&Object(m.jsx)(h,{className:M.avatar,styleProps:R,children:o}),Object(m.jsxs)(f,{className:M.content,styleProps:R,children:[N,T]}),r&&Object(m.jsx)(v,{className:M.action,styleProps:R,children:r})]}))}));t.a=g},4270:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var r=a(17),n=a(1),c=a(8),o=a(376),s=a(2750),l=a(2644),i=a(2755),j=a(2710),b=a(2716),d=a(2762),u=a(22),x=a(379),O=a(2780),m=a(36),p=a(2787),h=a(0),v={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:1}},f=Object(c.a)(x.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function g(){var e=Object(n.useState)("a"),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(h.jsxs)(f,{title:"Components: Radio Buttons | Minimal-UI",children:[Object(h.jsx)(o.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(h.jsx)(s.a,{maxWidth:"lg",children:Object(h.jsx)(O.a,{heading:"Radio Buttons",links:[{name:"Components",href:u.d.components},{name:"Radio Buttons"}],moreLink:"https://next.material-ui.com/components/radio-buttons"})})}),Object(h.jsx)(s.a,{maxWidth:"lg",children:Object(h.jsxs)(l.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(h.jsxs)(l.a,{spacing:3,sx:{width:1},children:[Object(h.jsx)(p.a,{title:"Basic",sx:v,children:Object(h.jsx)(i.a,{component:"fieldset",children:Object(h.jsxs)(j.a,{row:!0,defaultValue:"nn",children:[Object(h.jsx)(b.a,{value:"nn"}),Object(h.jsx)(b.a,{value:"gg"}),Object(h.jsx)(b.a,{disabled:!0,value:"hh"})]})})}),Object(h.jsx)(p.a,{title:"Size",sx:v,children:Object(h.jsxs)(j.a,{row:!0,defaultValue:"g",children:[Object(h.jsx)(d.a,{value:"g",control:Object(h.jsx)(b.a,{}),label:"Normal"}),Object(h.jsx)(d.a,{value:"p",control:Object(h.jsx)(b.a,{size:"small"}),label:"Small"})]})}),Object(h.jsx)(p.a,{title:"Placement",sx:v,children:Object(h.jsx)(i.a,{component:"fieldset",children:Object(h.jsxs)(j.a,{row:!0,defaultValue:"top",children:[Object(h.jsx)(d.a,{value:"top",label:"Top",labelPlacement:"top",control:Object(h.jsx)(b.a,{})}),Object(h.jsx)(d.a,{value:"start",label:"Start",labelPlacement:"start",control:Object(h.jsx)(b.a,{})}),Object(h.jsx)(d.a,{value:"bottom",label:"Bottom",labelPlacement:"bottom",control:Object(h.jsx)(b.a,{})}),Object(h.jsx)(d.a,{value:"end",label:"End",control:Object(h.jsx)(b.a,{})})]})})})]}),Object(h.jsx)(p.a,{title:"Adding Colors",children:Object(h.jsx)(i.a,{component:"fieldset",children:Object(h.jsxs)(j.a,{value:a,onChange:function(e){c(e.target.value)},children:[Object(h.jsx)(d.a,{value:"a1",control:Object(h.jsx)(b.a,{color:"default"}),label:"Default"}),Object(h.jsx)(d.a,{value:"a2",control:Object(h.jsx)(b.a,{}),label:"Primary"}),Object(h.jsx)(d.a,{value:"a3",control:Object(h.jsx)(m.m,{color:"secondary"}),label:"Secondary"}),Object(h.jsx)(d.a,{value:"a4",control:Object(h.jsx)(m.m,{color:"info"}),label:"Info"}),Object(h.jsx)(d.a,{value:"a5",control:Object(h.jsx)(m.m,{color:"success"}),label:"Success"}),Object(h.jsx)(d.a,{value:"a6",control:Object(h.jsx)(m.m,{color:"warning"}),label:"Warning"}),Object(h.jsx)(d.a,{value:"a7",control:Object(h.jsx)(m.m,{color:"error"}),label:"Error"}),Object(h.jsx)(d.a,{disabled:!0,value:"a8",control:Object(h.jsx)(m.m,{color:"error"}),label:"Disabled"})]})})})]})})]})}}}]);
//# sourceMappingURL=92.5625b6a5.chunk.js.map