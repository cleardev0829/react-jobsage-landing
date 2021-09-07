(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[91],{2776:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(3),c=a(31),n=a(32),o=a(2643),s=a(376),l=a(604),i=a(2740),j=a(36),d=a(0);function b(e){var t=e.links,a=e.action,b=e.heading,u=e.moreLink,x=void 0===u?[]:u,O=e.sx,h=Object(c.a)(e,["links","action","heading","moreLink","sx"]);return Object(d.jsxs)(o.a,{sx:O,mb:5,spacing:2,children:[Object(d.jsxs)(o.a,{direction:"row",alignItems:"center",children:[Object(d.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(d.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(j.c,Object(r.a)({links:t},h))]}),a&&Object(d.jsx)(s.a,{sx:{flexShrink:0},children:a})]}),Object(n.isString)(x)?Object(d.jsx)(i.a,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return Object(d.jsx)(i.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2781:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return j}));var r=a(3),c=a(604),n=a(2803),o=a(2813),s=a(376),l=a(0);function i(e){var t=e.title;return Object(l.jsx)(c.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function j(e){var t=e.title,a=e.sx,c=e.children;return Object(l.jsxs)(n.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(l.jsx)(o.a,{title:t}),Object(l.jsx)(s.a,{sx:Object(r.a)({p:3,minHeight:180},a),children:c})]})}},2803:function(e,t,a){"use strict";var r=a(2),c=a(7),n=a(1),o=(a(12),a(11)),s=a(2696),l=a(8),i=a(14),j=a(2743),d=a(2637),b=a(2697);function u(e){return Object(d.a)("MuiCard",e)}Object(b.a)("MuiCard",["root"]);var x=a(0),O=Object(l.a)(j.a,{},{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),h=n.forwardRef((function(e,t){var a=Object(i.a)({props:e,name:"MuiCard"}),n=a.className,l=a.raised,j=void 0!==l&&l,d=Object(c.a)(a,["className","raised"]),b=Object(r.a)({},a,{raised:j}),h=function(e){var t=e.classes;return Object(s.a)({root:["root"]},u,t)}(b);return Object(x.jsx)(O,Object(r.a)({className:Object(o.a)(h.root,n),elevation:j?8:void 0,ref:t,styleProps:b},d))}));t.a=h},2813:function(e,t,a){"use strict";var r=a(5),c=a(7),n=a(2),o=a(1),s=(a(12),a(11)),l=a(2696),i=a(604),j=a(14),d=a(8),b=a(2637),u=a(2697);function x(e){return Object(b.a)("MuiCardHeader",e)}var O=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(0),p=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(n.a)((a={},Object(r.a)(a,"& .".concat(O.title),t.title),Object(r.a)(a,"& .".concat(O.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),m=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),v=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=o.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiCardHeader"}),r=a.action,o=a.avatar,d=a.className,b=a.component,u=void 0===b?"div":b,O=a.disableTypography,g=void 0!==O&&O,y=a.subheader,k=a.subheaderTypographyProps,C=a.title,w=a.titleTypographyProps,P=Object(c.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),M=Object(n.a)({},a,{component:u,disableTypography:g}),N=function(e){var t=e.classes;return Object(l.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,t)}(M),R=C;null==R||R.type===i.a||g||(R=Object(h.jsx)(i.a,Object(n.a)({variant:o?"body2":"h5",className:N.title,component:"span",display:"block"},w,{children:R})));var S=y;return null==S||S.type===i.a||g||(S=Object(h.jsx)(i.a,Object(n.a)({variant:o?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:S}))),Object(h.jsxs)(p,Object(n.a)({className:Object(s.a)(N.root,d),as:u,ref:t,styleProps:M},P,{children:[o&&Object(h.jsx)(m,{className:N.avatar,styleProps:M,children:o}),Object(h.jsxs)(v,{className:N.content,styleProps:M,children:[R,S]}),r&&Object(h.jsx)(f,{className:N.action,styleProps:M,children:r})]}))}));t.a=g},4269:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var r=a(8),c=a(376),n=a(2749),o=a(2643),s=a(2739),l=a(2761),i=a(2754),j=a(2652),d=a(21),b=a(379),u=a(2776),x=a(36),O=a(2781),h=a(0),p={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},m=Object(r.a)(b.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function f(){return Object(h.jsxs)(m,{title:"Components: Switches | Minimal-UI",children:[Object(h.jsx)(c.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(h.jsx)(n.a,{maxWidth:"lg",children:Object(h.jsx)(u.a,{heading:"Switches",links:[{name:"Components",href:d.d.components},{name:"Switches"}],moreLink:"https://next.material-ui.com/components/alert"})})}),Object(h.jsx)(n.a,{maxWidth:"lg",children:Object(h.jsxs)(o.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(h.jsxs)(o.a,{spacing:3,sx:{width:1},children:[Object(h.jsxs)(O.a,{title:"Basic",sx:p,children:[Object(h.jsx)(s.a,{defaultChecked:!0}),Object(h.jsx)(s.a,{}),Object(h.jsx)(s.a,{disabled:!0}),Object(h.jsx)(s.a,{disabled:!0,checked:!0}),Object(h.jsx)(s.a,{defaultChecked:!0,color:"default"})]}),Object(h.jsxs)(O.a,{title:"Sizes",sx:p,children:[Object(h.jsx)(l.a,{control:Object(h.jsx)(s.a,{size:"small"}),label:"Small"}),Object(h.jsx)(l.a,{control:Object(h.jsx)(s.a,{}),label:"Normal"})]}),Object(h.jsx)(O.a,{title:"Placement",sx:p,children:Object(h.jsx)(i.a,{component:"fieldset",children:Object(h.jsxs)(j.a,{row:!0,children:[Object(h.jsx)(l.a,{value:"top",label:"Top",labelPlacement:"top",control:Object(h.jsx)(s.a,{})}),Object(h.jsx)(l.a,{value:"start",label:"Start",labelPlacement:"start",control:Object(h.jsx)(s.a,{})}),Object(h.jsx)(l.a,{value:"bottom",label:"Bottom",labelPlacement:"bottom",control:Object(h.jsx)(s.a,{})}),Object(h.jsx)(l.a,{value:"end",label:"End",labelPlacement:"end",control:Object(h.jsx)(s.a,{})})]})})})]}),Object(h.jsx)(O.a,{title:"Adding Colors",children:Object(h.jsx)(i.a,{component:"fieldset",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(l.a,{control:Object(h.jsx)(s.a,{defaultChecked:!0,color:"default"}),label:"Default"}),Object(h.jsx)(l.a,{control:Object(h.jsx)(s.a,{defaultChecked:!0}),label:"Primary"}),Object(h.jsx)(l.a,{control:Object(h.jsx)(x.n,{defaultChecked:!0,color:"info"}),label:"Info"}),Object(h.jsx)(l.a,{control:Object(h.jsx)(x.n,{defaultChecked:!0,color:"success"}),label:"Success"}),Object(h.jsx)(l.a,{control:Object(h.jsx)(x.n,{defaultChecked:!0,color:"warning"}),label:"Warning"}),Object(h.jsx)(l.a,{control:Object(h.jsx)(x.n,{defaultChecked:!0,color:"error"}),label:"Error"}),Object(h.jsx)(l.a,{disabled:!0,control:Object(h.jsx)(x.n,{defaultChecked:!0,color:"error"}),label:"Disabled"}),Object(h.jsx)(l.a,{disabled:!0,control:Object(h.jsx)(x.n,{color:"error"}),label:"Disabled"})]})})})]})})]})}}}]);
//# sourceMappingURL=91.7137300e.chunk.js.map