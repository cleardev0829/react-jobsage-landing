(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[93],{2769:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(3),c=a(31),s=a(32),n=a(2643),i=a(376),o=a(604),l=a(2740),j=a(36),d=a(0);function b(e){var t=e.links,a=e.action,b=e.heading,u=e.moreLink,O=void 0===u?[]:u,x=e.sx,h=Object(c.a)(e,["links","action","heading","moreLink","sx"]);return Object(d.jsxs)(n.a,{sx:x,mb:5,spacing:2,children:[Object(d.jsxs)(n.a,{direction:"row",alignItems:"center",children:[Object(d.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(d.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(j.c,Object(r.a)({links:t},h))]}),a&&Object(d.jsx)(i.a,{sx:{flexShrink:0},children:a})]}),Object(s.isString)(O)?Object(d.jsx)(l.a,{href:O,target:"_blank",variant:"body2",children:O}):O.map((function(e){return Object(d.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2785:function(e,t,a){"use strict";var r=a(2),c=a(7),s=a(1),n=(a(12),a(11)),i=a(2696),o=a(8),l=a(14),j=a(2743),d=a(2637),b=a(2697);function u(e){return Object(d.a)("MuiCard",e)}Object(b.a)("MuiCard",["root"]);var O=a(0),x=Object(o.a)(j.a,{},{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),h=s.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCard"}),s=a.className,o=a.raised,j=void 0!==o&&o,d=Object(c.a)(a,["className","raised"]),b=Object(r.a)({},a,{raised:j}),h=function(e){var t=e.classes;return Object(i.a)({root:["root"]},u,t)}(b);return Object(O.jsx)(x,Object(r.a)({className:Object(n.a)(h.root,s),elevation:j?8:void 0,ref:t,styleProps:b},d))}));t.a=h},2789:function(e,t,a){"use strict";var r=a(5),c=a(7),s=a(2),n=a(1),i=(a(12),a(11)),o=a(2696),l=a(604),j=a(14),d=a(8),b=a(2637),u=a(2697);function O(e){return Object(b.a)("MuiCardHeader",e)}var x=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(0),m=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(s.a)((a={},Object(r.a)(a,"& .".concat(x.title),t.title),Object(r.a)(a,"& .".concat(x.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),p=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=n.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiCardHeader"}),r=a.action,n=a.avatar,d=a.className,b=a.component,u=void 0===b?"div":b,x=a.disableTypography,g=void 0!==x&&x,y=a.subheader,C=a.subheaderTypographyProps,k=a.title,M=a.titleTypographyProps,N=Object(c.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),R=Object(s.a)({},a,{component:u,disableTypography:g}),T=function(e){var t=e.classes;return Object(o.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},O,t)}(R),P=k;null==P||P.type===l.a||g||(P=Object(h.jsx)(l.a,Object(s.a)({variant:n?"body2":"h5",className:T.title,component:"span",display:"block"},M,{children:P})));var w=y;return null==w||w.type===l.a||g||(w=Object(h.jsx)(l.a,Object(s.a)({variant:n?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:w}))),Object(h.jsxs)(m,Object(s.a)({className:Object(i.a)(T.root,d),as:u,ref:t,styleProps:R},N,{children:[n&&Object(h.jsx)(p,{className:T.avatar,styleProps:R,children:n}),Object(h.jsxs)(f,{className:T.content,styleProps:R,children:[P,w]}),r&&Object(h.jsx)(v,{className:T.action,styleProps:R,children:r})]}))}));t.a=g},4274:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var r=a(8),c=a(376),s=a(2749),n=a(2729),i=a(2785),o=a(2789),l=a(2909),j=a(21),d=a(2958),b=a(379),u=a(2769),O=a(0),x=Object(r.a)(b.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function h(){return Object(O.jsxs)(x,{title:"Components: Carousel | Minimal-UI",children:[Object(O.jsx)(c.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(O.jsx)(s.a,{maxWidth:"lg",children:Object(O.jsx)(u.a,{heading:"Carousel",links:[{name:"Components",href:j.d.components},{name:"Carousel"}],moreLink:"https://react-slick.neostack.com"})})}),Object(O.jsx)(s.a,{maxWidth:"lg",children:Object(O.jsxs)(n.a,{container:!0,spacing:3,children:[Object(O.jsx)(n.a,{item:!0,xs:12,md:6,children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(o.a,{title:"Carousel Basic 1"}),Object(O.jsx)(l.a,{children:Object(O.jsx)(d.b,{})})]})}),Object(O.jsx)(n.a,{item:!0,xs:12,md:6,children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(o.a,{title:"Carousel Basic 2"}),Object(O.jsx)(l.a,{children:Object(O.jsx)(d.c,{})})]})}),Object(O.jsx)(n.a,{item:!0,xs:12,md:6,children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(o.a,{title:"Carousel Basic 3"}),Object(O.jsx)(l.a,{children:Object(O.jsx)(d.d,{})})]})}),Object(O.jsx)(n.a,{item:!0,xs:12,md:6,children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(o.a,{title:"Carousel Basic 4"}),Object(O.jsx)(l.a,{children:Object(O.jsx)(d.e,{})})]})}),Object(O.jsx)(n.a,{item:!0,xs:12,children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(o.a,{title:"Carousel Thumbnail"}),Object(O.jsx)(l.a,{children:Object(O.jsx)(d.k,{})})]})}),Object(O.jsx)(n.a,{item:!0,xs:12,children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(o.a,{title:"Carousel Center Mode"}),Object(O.jsx)(l.a,{children:Object(O.jsx)(d.f,{})})]})}),Object(O.jsx)(n.a,{item:!0,xs:12,children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(o.a,{title:"Carousel Animation"}),Object(O.jsx)(l.a,{children:Object(O.jsx)(d.a,{})})]})})]})})]})}}}]);
//# sourceMappingURL=93.179d66c5.chunk.js.map