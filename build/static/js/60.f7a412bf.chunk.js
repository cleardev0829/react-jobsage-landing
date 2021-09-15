(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[60],{2780:function(t,a,e){"use strict";e.d(a,"a",(function(){return u}));var r=e(3),c=e(31),n=e(32),s=e(2644),i=e(376),o=e(603),l=e(2741),j=e(36),d=e(0);function u(t){var a=t.links,e=t.action,u=t.heading,b=t.moreLink,v=void 0===b?[]:b,m=t.sx,x=Object(c.a)(t,["links","action","heading","moreLink","sx"]);return Object(d.jsxs)(s.a,{sx:m,mb:5,spacing:2,children:[Object(d.jsxs)(s.a,{direction:"row",alignItems:"center",children:[Object(d.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(d.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:u}),Object(d.jsx)(j.c,Object(r.a)({links:a},x))]}),e&&Object(d.jsx)(i.a,{sx:{flexShrink:0},children:e})]}),Object(n.isString)(v)?Object(d.jsx)(l.a,{href:v,target:"_blank",variant:"body2",children:v}):v.map((function(t){return Object(d.jsx)(l.a,{noWrap:!0,href:t,variant:"body2",target:"_blank",sx:{display:"flex"},children:t},t)}))]})}},2787:function(t,a,e){"use strict";e.d(a,"b",(function(){return l})),e.d(a,"a",(function(){return j}));var r=e(3),c=e(603),n=e(2812),s=e(2819),i=e(376),o=e(0);function l(t){var a=t.title;return Object(o.jsx)(c.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:a})}function j(t){var a=t.title,e=t.sx,c=t.children;return Object(o.jsxs)(n.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[a&&Object(o.jsx)(s.a,{title:a}),Object(o.jsx)(i.a,{sx:Object(r.a)({p:3,minHeight:180},e),children:c})]})}},2812:function(t,a,e){"use strict";var r=e(2),c=e(7),n=e(1),s=(e(12),e(11)),i=e(2697),o=e(8),l=e(14),j=e(2744),d=e(2638),u=e(2698);function b(t){return Object(d.a)("MuiCard",t)}Object(u.a)("MuiCard",["root"]);var v=e(0),m=Object(o.a)(j.a,{},{name:"MuiCard",slot:"Root",overridesResolver:function(t,a){return a.root}})((function(){return{overflow:"hidden"}})),x=n.forwardRef((function(t,a){var e=Object(l.a)({props:t,name:"MuiCard"}),n=e.className,o=e.raised,j=void 0!==o&&o,d=Object(c.a)(e,["className","raised"]),u=Object(r.a)({},e,{raised:j}),x=function(t){var a=t.classes;return Object(i.a)({root:["root"]},b,a)}(u);return Object(v.jsx)(m,Object(r.a)({className:Object(s.a)(x.root,n),elevation:j?8:void 0,ref:a,styleProps:u},d))}));a.a=x},2819:function(t,a,e){"use strict";var r=e(5),c=e(7),n=e(2),s=e(1),i=(e(12),e(11)),o=e(2697),l=e(603),j=e(14),d=e(8),u=e(2638),b=e(2698);function v(t){return Object(u.a)("MuiCardHeader",t)}var m=Object(b.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),x=e(0),p=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(t,a){var e;return Object(n.a)((e={},Object(r.a)(e,"& .".concat(m.title),a.title),Object(r.a)(e,"& .".concat(m.subheader),a.subheader),e),a.root)}})({display:"flex",alignItems:"center",padding:16}),O=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(t,a){return a.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),h=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(t,a){return a.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(t,a){return a.content}})({flex:"1 1 auto"}),g=s.forwardRef((function(t,a){var e=Object(j.a)({props:t,name:"MuiCardHeader"}),r=e.action,s=e.avatar,d=e.className,u=e.component,b=void 0===u?"div":u,m=e.disableTypography,g=void 0!==m&&m,y=e.subheader,k=e.subheaderTypographyProps,C=e.title,M=e.titleTypographyProps,H=Object(c.a)(e,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),w=Object(n.a)({},e,{component:b,disableTypography:g}),_=function(t){var a=t.classes;return Object(o.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},v,a)}(w),N=C;null==N||N.type===l.a||g||(N=Object(x.jsx)(l.a,Object(n.a)({variant:s?"body2":"h5",className:_.title,component:"span",display:"block"},M,{children:N})));var P=y;return null==P||P.type===l.a||g||(P=Object(x.jsx)(l.a,Object(n.a)({variant:s?"body2":"body1",className:_.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:P}))),Object(x.jsxs)(p,Object(n.a)({className:Object(i.a)(_.root,d),as:b,ref:a,styleProps:w},H,{children:[s&&Object(x.jsx)(O,{className:_.avatar,styleProps:w,children:s}),Object(x.jsxs)(f,{className:_.content,styleProps:w,children:[N,P]}),r&&Object(x.jsx)(h,{className:_.action,styleProps:w,children:r})]}))}));a.a=g},3286:function(t,a,e){"use strict";var r=e(5),c=e(7),n=e(2),s=e(1),i=(e(12),e(193),e(11)),o=e(2697),l=e(8),j=e(14),d=e(2728),u=e(2638),b=e(2698);function v(t){return Object(u.a)("MuiAvatarGroup",t)}var m=Object(b.a)("MuiAvatarGroup",["root","avatar"]),x=e(0),p={small:-16,medium:null},O=Object(l.a)("div",{},{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(t,a){return Object(n.a)(Object(r.a)({},"& .".concat(m.avatar),a.avatar),a.root)}})((function(t){var a,e=t.theme;return a={},Object(r.a)(a,"& .MuiAvatar-root",{border:"2px solid ".concat(e.palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),Object(r.a)(a,"display","flex"),Object(r.a)(a,"flexDirection","row-reverse"),a})),h=Object(l.a)(d.a,{},{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:function(t,a){return a.avatar}})((function(t){var a=t.theme;return{border:"2px solid ".concat(a.palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),f=s.forwardRef((function(t,a){var e=Object(j.a)({props:t,name:"MuiAvatarGroup"}),r=e.children,l=e.className,d=e.max,u=void 0===d?5:d,b=e.spacing,m=void 0===b?"medium":b,f=e.variant,g=void 0===f?"circular":f,y=Object(c.a)(e,["children","className","max","spacing","variant"]),k=u<2?2:u,C=Object(n.a)({},e,{max:u,spacing:m,variant:g}),M=function(t){var a=t.classes;return Object(o.a)({root:["root"],avatar:["avatar"]},v,a)}(C),H=s.Children.toArray(r).filter((function(t){return s.isValidElement(t)})),w=H.length>k?H.length-k+1:0,_=m&&void 0!==p[m]?p[m]:-m;return Object(x.jsxs)(O,Object(n.a)({styleProps:C,className:Object(i.a)(M.root,l),ref:a},y,{children:[w?Object(x.jsxs)(h,{styleProps:C,className:M.avatar,style:{marginLeft:_},variant:g,children:["+",w]}):null,H.slice(0,H.length-w).reverse().map((function(t){return s.cloneElement(t,{className:Object(i.a)(t.props.className,M.avatar),style:Object(n.a)({marginLeft:_},t.props.style),variant:t.props.variant||g})}))]}))}));a.a=f},4130:function(t,a,e){"use strict";var r=e(606),c=e(605);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;c(e(1));var n=r(e(607)),s=e(0),i=(0,n.default)((0,s.jsx)("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),"Folder");a.default=i},4131:function(t,a,e){"use strict";var r=e(606),c=e(605);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;c(e(1));var n=r(e(607)),s=e(0),i=(0,n.default)((0,s.jsx)("path",{d:"M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"}),"Pageview");a.default=i},4132:function(t,a,e){"use strict";var r=e(606),c=e(605);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;c(e(1));var n=r(e(607)),s=e(0),i=(0,n.default)((0,s.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Assignment");a.default=i},4248:function(t,a,e){"use strict";e.r(a),e.d(a,"default",(function(){return M}));var r=e(4130),c=e.n(r),n=e(4131),s=e.n(n),i=e(4132),o=e.n(i),l=e(8),j=e(55),d=e(376),u=e(2750),b=e(2730),v=e(2728),m=e(3286),x=e(2721),p=e(22),O=e(379),h=e(399),f=e(36),g=e(2780),y=e(2787),k=e(0),C=Object(l.a)(O.a)((function(t){var a=t.theme;return{paddingTop:a.spacing(11),paddingBottom:a.spacing(15)}}));function M(){var t=Object(j.a)();return Object(k.jsxs)(C,{title:"Components: Avatar | Minimal-UI",children:[Object(k.jsx)(d.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(t){return"light"===t.palette.mode?"grey.200":"grey.800"}},children:Object(k.jsx)(u.a,{maxWidth:"lg",children:Object(k.jsx)(g.a,{heading:"Avatar",links:[{name:"Components",href:p.d.components},{name:"Avatar"}],moreLink:"https://next.material-ui.com/components/avatars"})})}),Object(k.jsx)(u.a,{maxWidth:"lg",children:Object(k.jsxs)(b.a,{container:!0,spacing:3,children:[Object(k.jsx)(b.a,{item:!0,xs:12,md:4,children:Object(k.jsx)(y.a,{title:"Image avatars",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[1,2,3,4,5].map((function(t,a){return Object(k.jsx)(v.a,{alt:"Remy Sharp",src:"/static/mock-images/avatars/avatar_".concat(a+1,".jpg")},a)}))})}),Object(k.jsx)(b.a,{item:!0,xs:12,md:4,children:Object(k.jsxs)(y.a,{title:"Letter avatars",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[Object(k.jsx)(f.a,{children:"H"}),Object(k.jsx)(f.a,{color:"primary",children:"N"}),Object(k.jsx)(f.a,{color:"info",children:"OP"}),Object(k.jsx)(f.a,{color:"success",children:"CB"}),Object(k.jsx)(f.a,{color:"warning",children:"ZP"}),Object(k.jsx)(f.a,{color:"error",children:"OH"})]})}),Object(k.jsx)(b.a,{item:!0,xs:12,md:4,children:Object(k.jsxs)(y.a,{title:"Icon avatars",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[Object(k.jsx)(f.a,{color:"primary",children:Object(k.jsx)(c.a,{})}),Object(k.jsx)(f.a,{color:"info",children:Object(k.jsx)(s.a,{})}),Object(k.jsx)(f.a,{color:"success",children:Object(k.jsx)(o.a,{})})]})}),Object(k.jsx)(b.a,{item:!0,xs:12,md:4,children:Object(k.jsxs)(y.a,{title:"Variant",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[Object(k.jsx)(f.a,{variant:"square",color:"primary",children:Object(k.jsx)(c.a,{})}),Object(k.jsx)(f.a,{variant:"rounded",color:"info",children:Object(k.jsx)(s.a,{})})]})}),Object(k.jsx)(b.a,{item:!0,xs:12,md:4,children:Object(k.jsx)(y.a,{title:"Grouped",sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(k.jsxs)(m.a,{max:4,children:[Object(k.jsx)(f.a,{alt:"Remy Sharp",src:"/static/mock-images/avatars/avatar_4.jpg"}),Object(k.jsx)(f.a,{color:"info",children:"OP"}),Object(k.jsx)(f.a,{alt:"Cindy Baker",src:"/static/mock-images/avatars/avatar_5.jpg"}),Object(k.jsx)(f.a,{alt:"Agnes Walker",src:"/static/mock-images/avatars/avatar_6.jpg"}),Object(k.jsx)(f.a,{alt:"Trevor Henderson",src:"/static/mock-images/avatars/avatar_7.jpg"}),Object(k.jsx)(f.a,{alt:"Trevor Henderson",src:"/static/mock-images/avatars/avatar_8.jpg"}),Object(k.jsx)(f.a,{alt:"Trevor Henderson",src:"/static/mock-images/avatars/avatar_9.jpg"})]})})}),Object(k.jsx)(b.a,{item:!0,xs:12,md:4,children:Object(k.jsxs)(y.a,{title:"With badge",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[Object(k.jsx)(x.a,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:Object(k.jsx)(v.a,{alt:"Travis Howard",src:"/static/mock-images/avatars/avatar_7.jpg",sx:{width:24,height:24,border:"solid 2px ".concat(t.palette.background.paper)}}),children:Object(k.jsx)(v.a,{alt:"Travis Howard",src:"/static/mock-images/avatars/avatar_8.jpg"})}),["online","away","busy","invisible"].map((function(t,a){return Object(k.jsxs)(d.a,{sx:{position:"relative"},children:[Object(k.jsx)(v.a,{alt:"Travis Howard",src:"/static/mock-images/avatars/avatar_".concat(a+7,".jpg")}),Object(k.jsx)(h.a,{status:t,sx:{right:2,bottom:2,position:"absolute"}})]},t)}))]})}),Object(k.jsx)(b.a,{item:!0,xs:12,children:Object(k.jsx)(y.a,{title:"Sizes",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[24,32,48,56,64,80,128].map((function(t,a){return Object(k.jsx)(v.a,{alt:"Travis Howard",src:"/static/mock-images/avatars/avatar_".concat(a+4,".jpg"),sx:{width:t,height:t}},t)}))})})]})})]})}}}]);
//# sourceMappingURL=60.f7a412bf.chunk.js.map