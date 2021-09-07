(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[88],{2776:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(3),n=a(31),o=a(32),i=a(2643),c=a(376),s=a(604),l=a(2740),d=a(36),u=a(0);function b(e){var t=e.links,a=e.action,b=e.heading,j=e.moreLink,p=void 0===j?[]:j,h=e.sx,v=Object(n.a)(e,["links","action","heading","moreLink","sx"]);return Object(u.jsxs)(i.a,{sx:h,mb:5,spacing:2,children:[Object(u.jsxs)(i.a,{direction:"row",alignItems:"center",children:[Object(u.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(u.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:b}),Object(u.jsx)(d.c,Object(r.a)({links:t},v))]}),a&&Object(u.jsx)(c.a,{sx:{flexShrink:0},children:a})]}),Object(o.isString)(p)?Object(u.jsx)(l.a,{href:p,target:"_blank",variant:"body2",children:p}):p.map((function(e){return Object(u.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2781:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return d}));var r=a(3),n=a(604),o=a(2803),i=a(2813),c=a(376),s=a(0);function l(e){var t=e.title;return Object(s.jsx)(n.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function d(e){var t=e.title,a=e.sx,n=e.children;return Object(s.jsxs)(o.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(i.a,{title:t}),Object(s.jsx)(c.a,{sx:Object(r.a)({p:3,minHeight:180},a),children:n})]})}},2803:function(e,t,a){"use strict";var r=a(2),n=a(7),o=a(1),i=(a(12),a(11)),c=a(2696),s=a(8),l=a(14),d=a(2743),u=a(2637),b=a(2697);function j(e){return Object(u.a)("MuiCard",e)}Object(b.a)("MuiCard",["root"]);var p=a(0),h=Object(s.a)(d.a,{},{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),v=o.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCard"}),o=a.className,s=a.raised,d=void 0!==s&&s,u=Object(n.a)(a,["className","raised"]),b=Object(r.a)({},a,{raised:d}),v=function(e){var t=e.classes;return Object(c.a)({root:["root"]},j,t)}(b);return Object(p.jsx)(h,Object(r.a)({className:Object(i.a)(v.root,o),elevation:d?8:void 0,ref:t,styleProps:b},u))}));t.a=v},2813:function(e,t,a){"use strict";var r=a(5),n=a(7),o=a(2),i=a(1),c=(a(12),a(11)),s=a(2696),l=a(604),d=a(14),u=a(8),b=a(2637),j=a(2697);function p(e){return Object(b.a)("MuiCardHeader",e)}var h=Object(j.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),v=a(0),m=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(o.a)((a={},Object(r.a)(a,"& .".concat(h.title),t.title),Object(r.a)(a,"& .".concat(h.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),O=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),x=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),r=a.action,i=a.avatar,u=a.className,b=a.component,j=void 0===b?"div":b,h=a.disableTypography,g=void 0!==h&&h,y=a.subheader,C=a.subheaderTypographyProps,k=a.title,M=a.titleTypographyProps,P=Object(n.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),w=Object(o.a)({},a,{component:j,disableTypography:g}),R=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)}(w),N=k;null==N||N.type===l.a||g||(N=Object(v.jsx)(l.a,Object(o.a)({variant:i?"body2":"h5",className:R.title,component:"span",display:"block"},M,{children:N})));var T=y;return null==T||T.type===l.a||g||(T=Object(v.jsx)(l.a,Object(o.a)({variant:i?"body2":"body1",className:R.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:T}))),Object(v.jsxs)(m,Object(o.a)({className:Object(c.a)(R.root,u),as:j,ref:t,styleProps:w},P,{children:[i&&Object(v.jsx)(O,{className:R.avatar,styleProps:w,children:i}),Object(v.jsxs)(f,{className:R.content,styleProps:w,children:[N,T]}),r&&Object(v.jsx)(x,{className:R.action,styleProps:w,children:r})]}))}));t.a=g},4264:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var r=a(17),n=a(1),o=a(8),i=a(376),c=a(2749),s=a(2643),l=a(293),d=a(2750),u=a(604),b=a(21),j=a(379),p=a(2776),h=a(2781),v=a(0),m=Object(o.a)(j.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),O={display:"flex",alignItems:"center",justifyContent:"center"};function x(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],o=t[1],j=Object(n.useState)(null),x=Object(r.a)(j,2),f=x[0],g=x[1],y=function(){g(null)};return Object(v.jsxs)(m,{title:"Components: Popover | Minimal-UI",children:[Object(v.jsx)(i.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(v.jsx)(c.a,{maxWidth:"lg",children:Object(v.jsx)(p.a,{heading:"Popover",links:[{name:"Components",href:b.d.components},{name:"Popover"}],moreLink:"https://next.material-ui.com/components/popover"})})}),Object(v.jsx)(c.a,{maxWidth:"lg",children:Object(v.jsxs)(s.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(v.jsxs)(h.a,{title:"Click",sx:O,children:[Object(v.jsx)(l.a,{variant:"contained",onClick:function(e){o(e.currentTarget)},children:"Open Popover"}),Object(v.jsx)(d.a,{open:Boolean(a),anchorEl:a,onClose:function(){o(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(v.jsxs)(i.a,{sx:{p:2,maxWidth:280},children:[Object(v.jsx)(u.a,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),Object(v.jsx)(u.a,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]}),Object(v.jsxs)(h.a,{title:"Hover",sx:O,children:[Object(v.jsx)(u.a,{"aria-owns":f?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(e){g(e.currentTarget)},onMouseLeave:y,children:"Hover with a Popover."}),Object(v.jsx)(d.a,{id:"mouse-over-popover",open:Boolean(f),anchorEl:f,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:y,disableRestoreFocus:!0,sx:{pointerEvents:"none"},children:Object(v.jsxs)(i.a,{sx:{p:2,maxWidth:280},children:[Object(v.jsx)(u.a,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),Object(v.jsx)(u.a,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]})})]})}}}]);
//# sourceMappingURL=88.e6741712.chunk.js.map