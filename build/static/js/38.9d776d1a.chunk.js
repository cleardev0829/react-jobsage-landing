(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[38],{2769:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var c=a(3),r=a(31),n=a(32),s=a(2643),i=a(376),o=a(604),l=a(2740),j=a(36),d=a(0);function b(e){var t=e.links,a=e.action,b=e.heading,u=e.moreLink,O=void 0===u?[]:u,x=e.sx,h=Object(r.a)(e,["links","action","heading","moreLink","sx"]);return Object(d.jsxs)(s.a,{sx:x,mb:5,spacing:2,children:[Object(d.jsxs)(s.a,{direction:"row",alignItems:"center",children:[Object(d.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(d.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(j.c,Object(c.a)({links:t},h))]}),a&&Object(d.jsx)(i.a,{sx:{flexShrink:0},children:a})]}),Object(n.isString)(O)?Object(d.jsx)(l.a,{href:O,target:"_blank",variant:"body2",children:O}):O.map((function(e){return Object(d.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2772:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return j}));var c=a(3),r=a(604),n=a(2785),s=a(2789),i=a(376),o=a(0);function l(e){var t=e.title;return Object(o.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function j(e){var t=e.title,a=e.sx,r=e.children;return Object(o.jsxs)(n.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(o.jsx)(s.a,{title:t}),Object(o.jsx)(i.a,{sx:Object(c.a)({p:3,minHeight:180},a),children:r})]})}},2785:function(e,t,a){"use strict";var c=a(2),r=a(7),n=a(1),s=(a(12),a(11)),i=a(2696),o=a(8),l=a(14),j=a(2743),d=a(2637),b=a(2697);function u(e){return Object(d.a)("MuiCard",e)}Object(b.a)("MuiCard",["root"]);var O=a(0),x=Object(o.a)(j.a,{},{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),h=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCard"}),n=a.className,o=a.raised,j=void 0!==o&&o,d=Object(r.a)(a,["className","raised"]),b=Object(c.a)({},a,{raised:j}),h=function(e){var t=e.classes;return Object(i.a)({root:["root"]},u,t)}(b);return Object(O.jsx)(x,Object(c.a)({className:Object(s.a)(h.root,n),elevation:j?8:void 0,ref:t,styleProps:b},d))}));t.a=h},2789:function(e,t,a){"use strict";var c=a(5),r=a(7),n=a(2),s=a(1),i=(a(12),a(11)),o=a(2696),l=a(604),j=a(14),d=a(8),b=a(2637),u=a(2697);function O(e){return Object(b.a)("MuiCardHeader",e)}var x=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(0),f=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(n.a)((a={},Object(c.a)(a,"& .".concat(x.title),t.title),Object(c.a)(a,"& .".concat(x.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),p=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),m=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),v=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=s.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiCardHeader"}),c=a.action,s=a.avatar,d=a.className,b=a.component,u=void 0===b?"div":b,x=a.disableTypography,y=void 0!==x&&x,g=a.subheader,M=a.subheaderTypographyProps,L=a.title,C=a.titleTypographyProps,P=Object(r.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),k=Object(n.a)({},a,{component:u,disableTypography:y}),z=function(e){var t=e.classes;return Object(o.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},O,t)}(k),_=L;null==_||_.type===l.a||y||(_=Object(h.jsx)(l.a,Object(n.a)({variant:s?"body2":"h5",className:z.title,component:"span",display:"block"},C,{children:_})));var S=g;return null==S||S.type===l.a||y||(S=Object(h.jsx)(l.a,Object(n.a)({variant:s?"body2":"body1",className:z.subheader,color:"text.secondary",component:"span",display:"block"},M,{children:S}))),Object(h.jsxs)(f,Object(n.a)({className:Object(i.a)(z.root,d),as:u,ref:t,styleProps:k},P,{children:[s&&Object(h.jsx)(p,{className:z.avatar,styleProps:k,children:s}),Object(h.jsxs)(v,{className:z.content,styleProps:k,children:[_,S]}),c&&Object(h.jsx)(m,{className:z.action,styleProps:k,children:c})]}))}));t.a=y},3381:function(e,t,a){"use strict";var c=a(607),r=a(606);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var n=c(a(608)),s=a(0),i=(0,n.default)((0,s.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=i},4143:function(e,t,a){"use strict";var c=a(607),r=a(606);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var n=c(a(608)),s=a(0),i=(0,n.default)((0,s.jsx)("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"}),"Inbox");t.default=i},4144:function(e,t,a){"use strict";var c=a(607),r=a(606);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var n=c(a(608)),s=a(0),i=(0,n.default)((0,s.jsx)("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13 3.74 7.84 12 3l8.26 4.84L12 13z"}),"Drafts");t.default=i},4145:function(e,t,a){"use strict";var c=a(607),r=a(606);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var n=c(a(608)),s=a(0),i=(0,n.default)((0,s.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.default=i},4146:function(e,t,a){"use strict";var c=a(607),r=a(606);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var n=c(a(608)),s=a(0),i=(0,n.default)((0,s.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=i},4147:function(e,t,a){"use strict";var c=a(607),r=a(606);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var n=c(a(608)),s=a(0),i=(0,n.default)((0,s.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");t.default=i},4148:function(e,t,a){"use strict";var c=a(607),r=a(606);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var n=c(a(608)),s=a(0),i=(0,n.default)((0,s.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Image");t.default=i},4149:function(e,t,a){"use strict";var c=a(607),r=a(606);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var n=c(a(608)),s=a(0),i=(0,n.default)((0,s.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"}),"Work");t.default=i},4150:function(e,t,a){"use strict";var c=a(607),r=a(606);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var n=c(a(608)),s=a(0),i=(0,n.default)((0,s.jsx)("path",{d:"m13.127 14.56 1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73 2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z"}),"BeachAccess");t.default=i},4151:function(e,t,a){"use strict";var c=a(607),r=a(606);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var n=c(a(608)),s=a(0),i=(0,n.default)((0,s.jsx)("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"Comment");t.default=i},4152:function(e,t,a){"use strict";var c=a(607),r=a(606);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var n=c(a(608)),s=a(0),i=(0,n.default)((0,s.jsx)("path",{d:"m1 9 2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8 3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"}),"Wifi");t.default=i},4153:function(e,t,a){"use strict";var c=a(607),r=a(606);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var n=c(a(608)),s=a(0),i=(0,n.default)((0,s.jsx)("path",{d:"M17.71 7.71 12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"}),"Bluetooth");t.default=i},4189:function(e,t,a){"use strict";var c=a(7),r=a(2),n=a(1),s=(a(12),a(11)),i=a(2696),o=a(8),l=a(14),j=a(87),d=a(2637),b=a(2697);function u(e){return Object(d.a)("MuiListItemSecondaryAction",e)}Object(b.a)("MuiListItemSecondaryAction",["root","disableGutters"]);var O=a(0),x=Object(o.a)("div",{},{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(r.a)({},t.root,a.disableGutters&&t.disableGutters)}})((function(e){var t=e.styleProps;return Object(r.a)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),h=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiListItemSecondaryAction"}),o=a.className,d=Object(c.a)(a,["className"]),b=n.useContext(j.a),h=Object(r.a)({},a,{disableGutters:b.disableGutters}),f=function(e){var t=e.disableGutters,a=e.classes,c={root:["root",t&&"disableGutters"]};return Object(i.a)(c,u,a)}(h);return Object(O.jsx)(x,Object(r.a)({className:Object(s.a)(f.root,o),styleProps:h,ref:t},d))}));h.muiName="ListItemSecondaryAction";t.a=h},4244:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ce}));var c=a(19),r=a(17),n=a(3),s=a(1),i=a(4145),o=a.n(i),l=a(4149),j=a.n(l),d=a(4152),b=a.n(d),u=a(4143),O=a.n(u),x=a(4148),h=a.n(x),f=a(4144),p=a.n(f),m=a(4151),v=a.n(m),y=a(4146),g=a.n(y),M=a(3381),L=a.n(M),C=a(4147),P=a.n(C),k=a(4153),z=a.n(k),_=a(4150),S=a.n(_),w=a(8),H=a(2743),N=a(373),I=a(376),R=a(2749),T=a(2729),V=a(2737),G=a(2734),A=a(2735),B=a(2651),W=a(2733),J=a(2736),D=a(2758),E=a(2727),F=a(2718),U=a(4189),Y=a(2738),q=a(2739),K=a(21),Q=a(379),X=a(2769),Z=a(2772),$=a(0),ee=Object(w.a)(Q.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),te=Object(w.a)(H.a)((function(e){var t=e.theme;return{width:"100%",border:"solid 1px ".concat(t.palette.divider)}}));function ae(e){return Object($.jsx)(N.b,Object(n.a)({button:!0,component:"a"},e))}function ce(){var e=Object(s.useState)(!0),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(1),l=Object(r.a)(i,2),d=l[0],u=l[1],x=Object(s.useState)([0]),f=Object(r.a)(x,2),m=f[0],y=f[1],M=Object(s.useState)(["wifi"]),C=Object(r.a)(M,2),k=C[0],_=C[1],w=function(e,t){u(t)},H=function(e){return function(){var t=m.indexOf(e),a=Object(c.a)(m);-1===t?a.push(e):a.splice(t,1),y(a)}},Q=function(e){return function(){var t=k.indexOf(e),a=Object(c.a)(k);-1===t?a.push(e):a.splice(t,1),_(a)}};return Object($.jsxs)(ee,{title:"Components: Lists | Minimal-UI",children:[Object($.jsx)(I.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object($.jsx)(R.a,{maxWidth:"lg",children:Object($.jsx)(X.a,{heading:"Lists",links:[{name:"Components",href:K.d.components},{name:"Lists"}],moreLink:"https://next.material-ui.com/components/lists"})})}),Object($.jsx)(R.a,{maxWidth:"lg",children:Object($.jsxs)(T.a,{container:!0,spacing:3,children:[Object($.jsx)(T.a,{item:!0,xs:12,md:6,children:Object($.jsx)(Z.a,{title:"Simple",children:Object($.jsxs)(te,{children:[Object($.jsxs)(V.a,{component:"nav","aria-label":"main mailbox folders",children:[Object($.jsxs)(N.b,{button:!0,children:[Object($.jsx)(G.a,{children:Object($.jsx)(O.a,{})}),Object($.jsx)(A.a,{primary:"Inbox"})]}),Object($.jsxs)(N.b,{button:!0,children:[Object($.jsx)(G.a,{children:Object($.jsx)(p.a,{})}),Object($.jsx)(A.a,{primary:"Drafts"})]})]}),Object($.jsx)(B.a,{}),Object($.jsxs)(V.a,{component:"nav","aria-label":"secondary mailbox folders",children:[Object($.jsx)(N.b,{button:!0,children:Object($.jsx)(A.a,{primary:"Trash"})}),Object($.jsx)(ae,{href:"#simple-list",children:Object($.jsx)(A.a,{primary:"Spam"})})]})]})})}),Object($.jsx)(T.a,{item:!0,xs:12,md:6,children:Object($.jsx)(Z.a,{title:"Nested",children:Object($.jsx)(te,{children:Object($.jsxs)(V.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:Object($.jsx)(W.a,{component:"div",id:"nested-list-subheader",children:"Nested List Items"}),children:[Object($.jsxs)(N.b,{button:!0,children:[Object($.jsx)(G.a,{children:Object($.jsx)(o.a,{})}),Object($.jsx)(A.a,{primary:"Sent mail"})]}),Object($.jsxs)(N.b,{button:!0,children:[Object($.jsx)(G.a,{children:Object($.jsx)(p.a,{})}),Object($.jsx)(A.a,{primary:"Drafts"})]}),Object($.jsxs)(N.b,{button:!0,onClick:function(){n(!a)},children:[Object($.jsx)(G.a,{children:Object($.jsx)(O.a,{})}),Object($.jsx)(A.a,{primary:"Inbox"}),a?Object($.jsx)(g.a,{}):Object($.jsx)(L.a,{})]}),Object($.jsx)(J.a,{in:a,timeout:"auto",unmountOnExit:!0,children:Object($.jsx)(V.a,{component:"div",disablePadding:!0,children:Object($.jsxs)(N.b,{button:!0,children:[Object($.jsx)(G.a,{children:Object($.jsx)(P.a,{})}),Object($.jsx)(A.a,{primary:"Starred"})]})})})]})})})}),Object($.jsx)(T.a,{item:!0,xs:12,md:6,children:Object($.jsx)(Z.a,{title:"Folder",children:Object($.jsx)(te,{children:Object($.jsxs)(V.a,{children:[Object($.jsxs)(N.b,{children:[Object($.jsx)(D.a,{children:Object($.jsx)(E.a,{children:Object($.jsx)(h.a,{})})}),Object($.jsx)(A.a,{primary:"Photos",secondary:"Jan 9, 2014"})]}),Object($.jsxs)(N.b,{children:[Object($.jsx)(D.a,{children:Object($.jsx)(E.a,{children:Object($.jsx)(j.a,{})})}),Object($.jsx)(A.a,{primary:"Work",secondary:"Jan 7, 2014"})]}),Object($.jsxs)(N.b,{children:[Object($.jsx)(D.a,{children:Object($.jsx)(E.a,{children:Object($.jsx)(S.a,{})})}),Object($.jsx)(A.a,{primary:"Vacation",secondary:"July 20, 2014"})]})]})})})}),Object($.jsx)(T.a,{item:!0,xs:12,md:6,children:Object($.jsx)(Z.a,{title:"Selected",children:Object($.jsxs)(te,{children:[Object($.jsxs)(V.a,{component:"nav","aria-label":"main mailbox folders",children:[Object($.jsxs)(N.b,{button:!0,selected:0===d,onClick:function(e){return w(0,0)},children:[Object($.jsx)(G.a,{children:Object($.jsx)(O.a,{})}),Object($.jsx)(A.a,{primary:"Inbox"})]}),Object($.jsxs)(N.b,{button:!0,selected:1===d,onClick:function(e){return w(0,1)},children:[Object($.jsx)(G.a,{children:Object($.jsx)(p.a,{})}),Object($.jsx)(A.a,{primary:"Drafts"})]})]}),Object($.jsx)(B.a,{}),Object($.jsxs)(V.a,{component:"nav","aria-label":"secondary mailbox folder",children:[Object($.jsx)(N.b,{button:!0,selected:2===d,onClick:function(e){return w(0,2)},children:Object($.jsx)(A.a,{primary:"Trash"})}),Object($.jsx)(N.b,{button:!0,selected:3===d,onClick:function(e){return w(0,3)},children:Object($.jsx)(A.a,{primary:"Spam"})})]})]})})}),Object($.jsx)(T.a,{item:!0,xs:12,md:6,children:Object($.jsx)(Z.a,{title:"Controls",children:Object($.jsx)(te,{children:Object($.jsx)(V.a,{children:[0,1,2,3].map((function(e){var t="checkbox-list-label-".concat(e);return Object($.jsxs)(N.b,{role:void 0,dense:!0,button:!0,onClick:H(e),children:[Object($.jsx)(G.a,{children:Object($.jsx)(F.a,{edge:"start",checked:-1!==m.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})}),Object($.jsx)(A.a,{id:t,primary:"Line item ".concat(e+1)}),Object($.jsx)(U.a,{children:Object($.jsx)(Y.a,{edge:"end",children:Object($.jsx)(v.a,{})})})]},e)}))})})})}),Object($.jsx)(T.a,{item:!0,xs:12,md:6,children:Object($.jsx)(Z.a,{title:"Switch",children:Object($.jsx)(te,{children:Object($.jsxs)(V.a,{subheader:Object($.jsx)(W.a,{children:"Settings"}),children:[Object($.jsxs)(N.b,{children:[Object($.jsx)(G.a,{children:Object($.jsx)(b.a,{})}),Object($.jsx)(A.a,{id:"switch-list-label-wifi",primary:"Wi-Fi"}),Object($.jsx)(U.a,{children:Object($.jsx)(q.a,{edge:"end",onChange:Q("wifi"),checked:-1!==k.indexOf("wifi"),inputProps:{"aria-labelledby":"switch-list-label-wifi"}})})]}),Object($.jsxs)(N.b,{children:[Object($.jsx)(G.a,{children:Object($.jsx)(z.a,{})}),Object($.jsx)(A.a,{id:"switch-list-label-bluetooth",primary:"Bluetooth"}),Object($.jsx)(U.a,{children:Object($.jsx)(q.a,{edge:"end",onChange:Q("bluetooth"),checked:-1!==k.indexOf("bluetooth"),inputProps:{"aria-labelledby":"switch-list-label-bluetooth"}})})]})]})})})})]})})]})}}}]);
//# sourceMappingURL=38.9d776d1a.chunk.js.map