(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[61],{2776:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n(3),r=n(31),a=n(32),c=n(2643),o=n(376),s=n(604),l=n(2740),d=n(36),j=n(0);function b(e){var t=e.links,n=e.action,b=e.heading,h=e.moreLink,x=void 0===h?[]:h,O=e.sx,u=Object(r.a)(e,["links","action","heading","moreLink","sx"]);return Object(j.jsxs)(c.a,{sx:O,mb:5,spacing:2,children:[Object(j.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(j.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(j.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:b}),Object(j.jsx)(d.c,Object(i.a)({links:t},u))]}),n&&Object(j.jsx)(o.a,{sx:{flexShrink:0},children:n})]}),Object(a.isString)(x)?Object(j.jsx)(l.a,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return Object(j.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2781:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var i=n(3),r=n(604),a=n(2803),c=n(2813),o=n(376),s=n(0);function l(e){var t=e.title;return Object(s.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function d(e){var t=e.title,n=e.sx,r=e.children;return Object(s.jsxs)(a.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(c.a,{title:t}),Object(s.jsx)(o.a,{sx:Object(i.a)({p:3,minHeight:180},n),children:r})]})}},2803:function(e,t,n){"use strict";var i=n(2),r=n(7),a=n(1),c=(n(12),n(11)),o=n(2696),s=n(8),l=n(14),d=n(2743),j=n(2637),b=n(2697);function h(e){return Object(j.a)("MuiCard",e)}Object(b.a)("MuiCard",["root"]);var x=n(0),O=Object(s.a)(d.a,{},{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),u=a.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiCard"}),a=n.className,s=n.raised,d=void 0!==s&&s,j=Object(r.a)(n,["className","raised"]),b=Object(i.a)({},n,{raised:d}),u=function(e){var t=e.classes;return Object(o.a)({root:["root"]},h,t)}(b);return Object(x.jsx)(O,Object(i.a)({className:Object(c.a)(u.root,a),elevation:d?8:void 0,ref:t,styleProps:b},j))}));t.a=u},2813:function(e,t,n){"use strict";var i=n(5),r=n(7),a=n(2),c=n(1),o=(n(12),n(11)),s=n(2696),l=n(604),d=n(14),j=n(8),b=n(2637),h=n(2697);function x(e){return Object(b.a)("MuiCardHeader",e)}var O=Object(h.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),u=n(0),m=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var n;return Object(a.a)((n={},Object(i.a)(n,"& .".concat(O.title),t.title),Object(i.a)(n,"& .".concat(O.subheader),t.subheader),n),t.root)}})({display:"flex",alignItems:"center",padding:16}),p=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),v=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=c.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiCardHeader"}),i=n.action,c=n.avatar,j=n.className,b=n.component,h=void 0===b?"div":b,O=n.disableTypography,g=void 0!==O&&O,y=n.subheader,A=n.subheaderTypographyProps,C=n.title,T=n.titleTypographyProps,k=Object(r.a)(n,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),E=Object(a.a)({},n,{component:h,disableTypography:g}),w=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,t)}(E),M=C;null==M||M.type===l.a||g||(M=Object(u.jsx)(l.a,Object(a.a)({variant:c?"body2":"h5",className:w.title,component:"span",display:"block"},T,{children:M})));var P=y;return null==P||P.type===l.a||g||(P=Object(u.jsx)(l.a,Object(a.a)({variant:c?"body2":"body1",className:w.subheader,color:"text.secondary",component:"span",display:"block"},A,{children:P}))),Object(u.jsxs)(m,Object(a.a)({className:Object(o.a)(w.root,j),as:h,ref:t,styleProps:E},k,{children:[c&&Object(u.jsx)(p,{className:w.avatar,styleProps:E,children:c}),Object(u.jsxs)(v,{className:w.content,styleProps:E,children:[M,P]}),i&&Object(u.jsx)(f,{className:w.action,styleProps:E,children:i})]}))}));t.a=g},3267:function(e,t,n){"use strict";var i=n(607),r=n(606);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(n(1));var a=i(n(608)),c=n(0),o=(0,a.default)((0,c.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},3308:function(e,t,n){"use strict";var i=n(2),r=n(7),a=n(1),c=(n(12),n(374)),o=n(56),s=n(55),l=n(68),d=n(35),j=n(0),b={entering:{transform:"none"},entered:{transform:"none"}},h={enter:o.b.enteringScreen,exit:o.b.leavingScreen},x=a.forwardRef((function(e,t){var n=e.appear,o=void 0===n||n,x=e.children,O=e.easing,u=e.in,m=e.onEnter,p=e.onEntered,f=e.onEntering,v=e.onExit,g=e.onExited,y=e.onExiting,A=e.style,C=e.timeout,T=void 0===C?h:C,k=e.TransitionComponent,E=void 0===k?c.a:k,w=Object(r.a)(e,["appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),M=Object(s.a)(),P=a.useRef(null),R=Object(d.a)(x.ref,t),N=Object(d.a)(P,R),H=function(e){return function(t){if(e){var n=P.current;void 0===t?e(n):e(n,t)}}},W=H(f),S=H((function(e,t){Object(l.b)(e);var n=Object(l.a)({style:A,timeout:T,easing:O},{mode:"enter"});e.style.webkitTransition=M.transitions.create("transform",n),e.style.transition=M.transitions.create("transform",n),m&&m(e,t)})),_=H(p),B=H(y),I=H((function(e){var t=Object(l.a)({style:A,timeout:T,easing:O},{mode:"exit"});e.style.webkitTransition=M.transitions.create("transform",t),e.style.transition=M.transitions.create("transform",t),v&&v(e)})),D=H(g);return Object(j.jsx)(E,Object(i.a)({appear:o,in:u,nodeRef:P,onEnter:S,onEntered:_,onEntering:W,onExit:I,onExited:D,onExiting:B,timeout:T},w,{children:function(e,t){return a.cloneElement(x,Object(i.a)({style:Object(i.a)({transform:"scale(0)",visibility:"exited"!==e||u?void 0:"hidden"},b[e],A,x.props.style),ref:N},t))}}))}));t.a=x},4181:function(e,t,n){"use strict";var i=n(607),r=n(606);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(n(1));var a=i(n(608)),c=n(0),o=(0,a.default)((0,c.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},4273:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var i=n(3267),r=n.n(i),a=n(4181),c=n.n(a),o=n(8),s=n(376),l=n(2749),d=n(2729),j=n(2759),b=n(2738),h=n(2744),x=n(293),O=n(2698),u=n(3308),m=n(21),p=n(379),f=n(2776),v=n(36),g=n(2781),y=n(0),A="\nAliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.\nPraesent non nunc mollis, fermentum neque at, semper arcu.\nNullam eget est sed sem iaculis gravida eget vitae justo.\n",C=Object(o.a)(p.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),T={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function k(){return Object(y.jsxs)(C,{title:"Components: Tooltip | Minimal-UI",children:[Object(y.jsx)(s.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(y.jsx)(l.a,{maxWidth:"lg",children:Object(y.jsx)(f.a,{heading:"Tooltip",links:[{name:"Components",href:m.d.components},{name:"Tooltip"}],moreLink:"https://next.material-ui.com/components/tooltips"})})}),Object(y.jsx)(l.a,{maxWidth:"lg",children:Object(y.jsxs)(d.a,{container:!0,spacing:3,children:[Object(y.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(y.jsxs)(g.a,{title:"Simple",sx:T,children:[Object(y.jsx)(j.a,{title:"Delete",children:Object(y.jsx)(b.a,{children:Object(y.jsx)(c.a,{})})}),Object(y.jsx)(j.a,{title:"Add",children:Object(y.jsx)(h.a,{children:Object(y.jsx)(r.a,{})})}),Object(y.jsx)(j.a,{title:"Delete",children:Object(y.jsx)(v.k,{color:"info",children:Object(y.jsx)(c.a,{})})}),Object(y.jsx)(j.a,{title:"Add",children:Object(y.jsx)(v.i,{color:"info",children:Object(y.jsx)(r.a,{})})}),Object(y.jsx)(j.a,{title:"Add",children:Object(y.jsx)(v.d,{variant:"outlined",color:"info",children:"Button"})})]})}),Object(y.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(y.jsx)(g.a,{title:"Arrow",sx:T,children:Object(y.jsx)(j.a,{title:"Add",arrow:!0,children:Object(y.jsx)(h.a,{children:Object(y.jsx)(r.a,{})})})})}),Object(y.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(y.jsxs)(g.a,{title:"Variable Width",sx:T,children:[Object(y.jsx)(j.a,{title:A,children:Object(y.jsx)(x.a,{color:"inherit",children:"Default Width [300px]"})}),Object(y.jsx)(j.a,{title:A,sx:{maxWidth:500},children:Object(y.jsx)(x.a,{color:"inherit",children:"Custom Width [500px]"})}),Object(y.jsx)(j.a,{title:A,sx:{maxWidth:"none"},children:Object(y.jsx)(x.a,{color:"inherit",children:"No wrapping"})})]})}),Object(y.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(y.jsxs)(g.a,{title:"Transitions",sx:T,children:[Object(y.jsx)(j.a,{title:"Add",children:Object(y.jsx)(x.a,{color:"inherit",children:"Grow"})}),Object(y.jsx)(j.a,{TransitionComponent:O.a,TransitionProps:{timeout:600},title:"Add",children:Object(y.jsx)(x.a,{color:"inherit",children:"Fade"})}),Object(y.jsx)(j.a,{TransitionComponent:u.a,title:"Add",children:Object(y.jsx)(x.a,{color:"inherit",children:"Zoom"})})]})}),Object(y.jsx)(d.a,{item:!0,xs:12,children:Object(y.jsx)(g.a,{title:"Positioned",sx:T,children:Object(y.jsxs)(s.a,{sx:{maxWidth:560,margin:"auto"},children:[Object(y.jsx)(d.a,{container:!0,children:Object(y.jsxs)(d.a,{item:!0,children:[Object(y.jsx)(j.a,{title:"Add",placement:"top-start",children:Object(y.jsx)(x.a,{color:"inherit",children:"top-start"})}),Object(y.jsx)(j.a,{title:"Add",placement:"top",children:Object(y.jsx)(x.a,{color:"inherit",children:"top"})}),Object(y.jsx)(j.a,{title:"Add",placement:"top-end",children:Object(y.jsx)(x.a,{color:"inherit",children:"top-end"})})]})}),Object(y.jsxs)(d.a,{container:!0,children:[Object(y.jsxs)(d.a,{item:!0,xs:6,children:[Object(y.jsx)(j.a,{title:"Add",placement:"left-start",children:Object(y.jsx)(x.a,{color:"inherit",children:"left-start"})}),Object(y.jsx)("br",{}),Object(y.jsx)(j.a,{title:"Add",placement:"left",children:Object(y.jsx)(x.a,{color:"inherit",children:"left"})}),Object(y.jsx)("br",{}),Object(y.jsx)(j.a,{title:"Add",placement:"left-end",children:Object(y.jsx)(x.a,{color:"inherit",children:"left-end"})})]}),Object(y.jsxs)(d.a,{item:!0,container:!0,xs:6,alignItems:"flex-end",direction:"column",children:[Object(y.jsx)(d.a,{item:!0,children:Object(y.jsx)(j.a,{title:"Add",placement:"right-start",children:Object(y.jsx)(x.a,{color:"inherit",children:"right-start"})})}),Object(y.jsx)(d.a,{item:!0,children:Object(y.jsx)(j.a,{title:"Add",placement:"right",children:Object(y.jsx)(x.a,{color:"inherit",children:"right"})})}),Object(y.jsx)(d.a,{item:!0,children:Object(y.jsx)(j.a,{title:"Add",placement:"right-end",children:Object(y.jsx)(x.a,{color:"inherit",children:"right-end"})})})]})]}),Object(y.jsx)(d.a,{container:!0,children:Object(y.jsxs)(d.a,{item:!0,children:[Object(y.jsx)(j.a,{title:"Add",placement:"bottom-start",children:Object(y.jsx)(x.a,{color:"inherit",children:"bottom-start"})}),Object(y.jsx)(j.a,{title:"Add",placement:"bottom",children:Object(y.jsx)(x.a,{color:"inherit",children:"bottom"})}),Object(y.jsx)(j.a,{title:"Add",placement:"bottom-end",children:Object(y.jsx)(x.a,{color:"inherit",children:"bottom-end"})})]})})]})})})]})})]})}}}]);
//# sourceMappingURL=61.dfda4fa8.chunk.js.map