(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[52],{2780:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(3),r=n(31),i=n(32),o=n(2644),c=n(376),s=n(603),l=n(2741),d=n(36),j=n(0);function b(e){var t=e.links,n=e.action,b=e.heading,u=e.moreLink,h=void 0===u?[]:u,x=e.sx,p=Object(r.a)(e,["links","action","heading","moreLink","sx"]);return Object(j.jsxs)(o.a,{sx:x,mb:5,spacing:2,children:[Object(j.jsxs)(o.a,{direction:"row",alignItems:"center",children:[Object(j.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(j.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:b}),Object(j.jsx)(d.c,Object(a.a)({links:t},p))]}),n&&Object(j.jsx)(c.a,{sx:{flexShrink:0},children:n})]}),Object(i.isString)(h)?Object(j.jsx)(l.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(j.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2781:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(32),r=n(2858),i=n.n(r);function o(e){return i()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function c(e){return i()(e/100).format("0.0%")}function s(e){return i()(e).format()}function l(e){return Object(a.replace)(i()(e).format("0.00a"),".00","")}function d(e){return i()(e).format("0.0 b")}},2819:function(e,t,n){"use strict";var a=n(5),r=n(7),i=n(2),o=n(1),c=(n(12),n(11)),s=n(2697),l=n(603),d=n(14),j=n(8),b=n(2638),u=n(2698);function h(e){return Object(b.a)("MuiCardHeader",e)}var x=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),p=n(0),O=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var n;return Object(i.a)((n={},Object(a.a)(n,"& .".concat(x.title),t.title),Object(a.a)(n,"& .".concat(x.subheader),t.subheader),n),t.root)}})({display:"flex",alignItems:"center",padding:16}),m=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),v=o.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiCardHeader"}),a=n.action,o=n.avatar,j=n.className,b=n.component,u=void 0===b?"div":b,x=n.disableTypography,v=void 0!==x&&x,y=n.subheader,w=n.subheaderTypographyProps,k=n.title,C=n.titleTypographyProps,I=Object(r.a)(n,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),R=Object(i.a)({},n,{component:u,disableTypography:v}),M=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(R),S=k;null==S||S.type===l.a||v||(S=Object(p.jsx)(l.a,Object(i.a)({variant:o?"body2":"h5",className:M.title,component:"span",display:"block"},C,{children:S})));var _=y;return null==_||_.type===l.a||v||(_=Object(p.jsx)(l.a,Object(i.a)({variant:o?"body2":"body1",className:M.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:_}))),Object(p.jsxs)(O,Object(i.a)({className:Object(c.a)(M.root,j),as:u,ref:t,styleProps:R},I,{children:[o&&Object(p.jsx)(m,{className:M.avatar,styleProps:R,children:o}),Object(p.jsxs)(g,{className:M.content,styleProps:R,children:[S,_]}),a&&Object(p.jsx)(f,{className:M.action,styleProps:R,children:a})]}))}));t.a=v},2876:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M18 15a3 3 0 0 0-2.1.86L8 12.34v-.67l7.9-3.53A3 3 0 1 0 15 6v.34L7.1 9.86a3 3 0 1 0 0 4.28l7.9 3.53V18a3 3 0 1 0 3-3z"/>',width:24,height:24}},2938:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(3),r=n(31),i=n(2744),o=n(603),c=n(0);function s(e){var t=e.searchQuery,n=void 0===t?"":t,s=Object(r.a)(e,["searchQuery"]);return Object(c.jsxs)(i.a,Object(a.a)(Object(a.a)({},s),{},{children:[Object(c.jsx)(o.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(c.jsxs)(o.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(c.jsxs)("strong",{children:['"',n,'"']}),". Try checking for typos or using complete words."]})]}))}},3021:function(e,t,n){"use strict";var a=n(2),r=n(7),i=n(1),o=(n(12),n(11)),c=n(2697),s=n(8),l=n(14),d=n(2638),j=n(2698);function b(e){return Object(d.a)("MuiCardContent",e)}Object(j.a)("MuiCardContent",["root"]);var u=n(0),h=Object(s.a)("div",{},{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),x=i.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiCardContent"}),i=n.className,s=n.component,d=void 0===s?"div":s,j=Object(r.a)(n,["className","component"]),x=Object(a.a)({},n,{component:d}),p=function(e){var t=e.classes;return Object(c.a)({root:["root"]},b,t)}(x);return Object(u.jsx)(h,Object(a.a)({as:d,className:Object(o.a)(p.root,i),styleProps:x,ref:t},j))}));t.a=x},3022:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4a5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0a5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21z"/>',width:24,height:24}},3255:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(31),r=n(3),i=n(1),o=n(3300),c=n(2696),s=n(26),l=n(603),d=n(0),j=Object(c.a)((function(e){var t="rtl"===e.direction,n=function(t){return{backgroundSize:"24px 24px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:Object(s.a)(e.palette.grey[900],.8),backgroundImage:'url("/static/icons/controls/'.concat(t,'.svg")')}};return{root:{backdropFilter:"blur(8px)",backgroundColor:Object(s.a)(e.palette.grey[900],.88),"& .ril__toolbar":{height:"auto !important",padding:e.spacing(2,3),backgroundColor:"transparent"},"& .ril__toolbarLeftSide":{display:"none"},"& .ril__toolbarRightSide":{height:"auto !important",padding:0,flexGrow:1,display:"flex",alignItems:"center","& li":{display:"flex",alignItems:"center"},"& li:first-child":{flexGrow:1},"& li:not(:first-child)":{width:e.spacing(5),height:e.spacing(5),justifyContent:"center",marginLeft:e.spacing(1),borderRadius:e.shape.borderRadius}},"& button:focus":{outline:"none"},"& .ril__toolbarRightSide button":{width:"100%",height:"100%","&.ril__zoomInButton":n("maximize-outline"),"&.ril__zoomOutButton":n("minimize-outline"),"&.ril__closeButton":n("close")},"& .ril__navButtons":{padding:e.spacing(3),borderRadius:e.shape.borderRadiusSm,"&.ril__navButtonPrev":Object(r.a)({left:e.spacing(2),right:"auto"},n(t?"arrow-ios-forward":"arrow-ios-back")),"&.ril__navButtonNext":Object(r.a)({right:e.spacing(2),left:"auto"},n(t?"arrow-ios-back":"arrow-ios-forward"))}}}}));function b(e){var t=e.images,n=e.photoIndex,c=e.setPhotoIndex,s=e.isOpen,b=e.onClose,u=Object(a.a)(e,["images","photoIndex","setPhotoIndex","isOpen","onClose"]),h=j();Object(i.useEffect)((function(){document.body.style.overflow=s?"hidden":"unset"}),[s]);var x=[Object(d.jsx)(l.a,{variant:"subtitle2",children:"".concat(n+1," / ").concat(t.length)})];return Object(d.jsx)(d.Fragment,{children:s&&Object(d.jsx)(o.a,Object(r.a)({mainSrc:t[n],nextSrc:t[(n+1)%t.length],prevSrc:t[(n+t.length-1)%t.length],onCloseRequest:b,onMovePrevRequest:function(){return c((n+t.length-1)%t.length)},onMoveNextRequest:function(){return c((n+1)%t.length)},toolbarButtons:x,reactModalStyle:{overlay:{zIndex:9999}},wrapperClassName:h.root},u))})}},3401:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(17),r=n(31),i=n(3),o=(n(3572),n(3599)),c=n(27),s=n(1),l=n(3573),d=n.n(l),j=n(8),b=n(26),u=n(55),h=n(2706),x=n(2739),p=n(0),O=Object(j.a)("div")({position:"relative"}),m=Object(j.a)("div")((function(e){var t=e.theme;return{bottom:40,overflow:"hidden",position:"absolute",left:t.spacing(-2),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadiusMd,"& .emoji-mart":{border:"none",backgroundColor:t.palette.background.paper},"& .emoji-mart-anchor":{color:t.palette.text.disabled,"&:hover, &:focus, &.emoji-mart-anchor-selected":{color:t.palette.text.primary}},"& .emoji-mart-bar":{borderColor:t.palette.divider},"& .emoji-mart-search input":{backgroundColor:"transparent",color:t.palette.text.primary,borderColor:t.palette.grey[50032],"&::placeholder":Object(i.a)(Object(i.a)({},t.typography.body2),{},{color:t.palette.text.disabled})},"& .emoji-mart-search-icon svg":{opacity:1,fill:t.palette.text.disabled},"& .emoji-mart-category-label span":Object(i.a)(Object(i.a)({},t.typography.subtitle2),{},{backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",color:t.palette.text.primary,backgroundColor:Object(b.a)(t.palette.background.paper,.8)}),"& .emoji-mart-title-label":{color:t.palette.text.primary},"& .emoji-mart-category .emoji-mart-emoji:hover:before":{backgroundColor:t.palette.action.selected},"& .emoji-mart-emoji":{outline:"none"},"& .emoji-mart-preview-name":{color:t.palette.text.primary},"& .emoji-mart-preview-shortname, .emoji-mart-preview-emoticon":{color:t.palette.text.secondary}}}));function f(e){var t,n=e.disabled,l=e.value,j=e.setValue,b=e.alignRight,f=void 0!==b&&b,g=Object(r.a)(e,["disabled","value","setValue","alignRight"]),v=Object(u.a)(),y=Object(s.useState)(!1),w=Object(a.a)(y,2),k=w[0],C=w[1];k&&(t=Object(p.jsx)(o.a,{color:v.palette.primary.main,title:"Pick your emoji\u2026",emoji:"point_up",onSelect:function(e){return j(l+e.native)}}));return Object(p.jsx)(h.a,{onClickAway:function(){C(!1)},children:Object(p.jsxs)(O,Object(i.a)(Object(i.a)({},g),{},{children:[Object(p.jsx)(m,{sx:Object(i.a)({},f&&{right:-2,left:"auto !important"}),children:t}),Object(p.jsx)(x.a,{disabled:n,size:"small",onClick:function(e){e.preventDefault(),C(!k)},children:Object(p.jsx)(c.Icon,{icon:d.a,width:20,height:20})})]}))})}},4058:function(e,t){t.__esModule=!0,t.default={body:'<path d="M19 19H3V7c0-.55-.45-1-1-1s-1 .45-1 1v12c0 1.1.9 2 2 2h16c.55 0 1-.45 1-1s-.45-1-1-1z" fill="currentColor"/><path d="M21 4h-7l-1.41-1.41c-.38-.38-.89-.59-1.42-.59H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3 9h-8a.5.5 0 0 1-.4-.8l1.38-1.83c.2-.27.6-.27.8 0L13 12l2.22-2.97c.2-.27.6-.27.8 0l2.38 3.17a.5.5 0 0 1-.4.8z" fill="currentColor"/>',width:24,height:24}},4059:function(e,t){t.__esModule=!0,t.default={body:'<path d="M13 16h-2c-.55 0-1-.45-1-1H3.01v4c0 1.1.9 2 2 2H19c1.1 0 2-.9 2-2v-4h-7c0 .55-.45 1-1 1zm7-9h-4c0-2.21-1.79-4-4-4S8 4.79 8 7H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 7c0-1.1.9-2 2-2s2 .9 2 2H9.99H10z" fill="currentColor"/>',width:24,height:24}},4060:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM8 12a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1z"/>',width:24,height:24}},4293:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return nt}));var a=n(17),r=n(5),i=n(27),o=n(4061),c=n(1),s=n(3022),l=n.n(s),d=n(534),j=n.n(d),b=n(4058),u=n.n(b),h=n(3311),x=n.n(h),p=n(8),O=n(2750),m=n(2812),f=n(4303),g=n(4337),v=n(376),y=n(295),w=n(398),k=n(21),C=n(54),I=n(379),R=n(2780),M=n(2730),S=n(2644),_=n(3312),z=n.n(_),F=n(3194),L=n.n(F),P=n(4059),N=n.n(P),B=n(2819),T=n(603),A=n(2741),H=n(0),W=Object(p.a)(i.Icon)((function(e){return{width:20,height:20,marginTop:1,flexShrink:0,marginRight:e.theme.spacing(2)}}));function U(e){var t=e.profile,n=t.quote,a=t.country,r=t.email,i=t.role,o=t.company,c=t.school;return Object(H.jsxs)(m.a,{children:[Object(H.jsx)(B.a,{title:"About"}),Object(H.jsxs)(S.a,{spacing:2,sx:{p:3},children:[Object(H.jsx)(T.a,{variant:"body2",children:n}),Object(H.jsxs)(S.a,{direction:"row",children:[Object(H.jsx)(W,{icon:z.a}),Object(H.jsxs)(T.a,{variant:"body2",children:["Live at \xa0",Object(H.jsx)(A.a,{component:"span",variant:"subtitle2",color:"text.primary",children:a})]})]}),Object(H.jsxs)(S.a,{direction:"row",children:[Object(H.jsx)(W,{icon:L.a}),Object(H.jsx)(T.a,{variant:"body2",children:r})]}),Object(H.jsxs)(S.a,{direction:"row",children:[Object(H.jsx)(W,{icon:N.a}),Object(H.jsxs)(T.a,{variant:"body2",children:[i," at \xa0",Object(H.jsx)(A.a,{component:"span",variant:"subtitle2",color:"text.primary",children:o})]})]}),Object(H.jsxs)(S.a,{direction:"row",children:[Object(H.jsx)(W,{icon:N.a}),Object(H.jsxs)(T.a,{variant:"body2",children:["Studied at \xa0",Object(H.jsx)(A.a,{component:"span",variant:"subtitle2",color:"text.primary",children:c})]})]})]})]})}var V=n(29),D=n(3313),G=n.n(D),q=n(2876),E=n.n(q),Q=n(2930),J=n.n(Q),$=n(4060),K=n.n($),X=n(3233),Y=n.n(X),Z=n(2739),ee=n(2762),te=n(3286),ne=n(2728),ae=n(2744),re=n(2752),ie=n(2757),oe=n(381),ce=n(2781),se=n(240),le=n(3401),de=n(36);function je(e){var t=e.post,n=Object(C.a)().user,r=Object(c.useRef)(null),o=Object(c.useRef)(null),s=Object(c.useState)(t.isLiked),d=Object(a.a)(s,2),j=d[0],b=d[1],u=Object(c.useState)(t.personLikes.length),h=Object(a.a)(u,2),x=h[0],p=h[1],O=Object(c.useState)(""),f=Object(a.a)(O,2),g=f[0],y=f[1],w=t.comments.length>0;return Object(H.jsxs)(m.a,{children:[Object(H.jsx)(B.a,{disableTypography:!0,avatar:Object(H.jsx)(se.a,{}),title:Object(H.jsx)(A.a,{to:"#",variant:"subtitle2",color:"text.primary",component:V.b,children:n.displayName}),subheader:Object(H.jsx)(T.a,{variant:"caption",sx:{display:"block",color:"text.secondary"},children:Object(oe.a)(t.createdAt)}),action:Object(H.jsx)(Z.a,{children:Object(H.jsx)(i.Icon,{icon:J.a,width:20,height:20})})}),Object(H.jsxs)(S.a,{spacing:3,sx:{p:3},children:[Object(H.jsx)(T.a,{variant:"body1",children:t.message}),Object(H.jsx)(v.a,{sx:{position:"relative",pt:"calc(100% / 16 * 9)"},children:Object(H.jsx)(v.a,{component:"img",alt:"post media",src:t.media,sx:{top:0,width:1,height:1,borderRadius:1,objectFit:"cover",position:"absolute"}})}),Object(H.jsxs)(S.a,{direction:"row",alignItems:"center",children:[Object(H.jsx)(ee.a,{control:Object(H.jsx)(de.f,{size:"small",color:"error",checked:j,icon:Object(H.jsx)(i.Icon,{icon:l.a,width:20,height:20}),checkedIcon:Object(H.jsx)(i.Icon,{icon:l.a,width:20,height:20}),onChange:j?function(){b(!1),p((function(e){return e-1}))}:function(){b(!0),p((function(e){return e+1}))}}),label:Object(ce.e)(x),sx:{minWidth:72,mr:0}}),Object(H.jsx)(te.a,{max:4,sx:{"& .MuiAvatar-root":{width:32,height:32}},children:t.personLikes.map((function(e){return Object(H.jsx)(ne.a,{alt:e.name,src:e.avatarUrl},e.name)}))}),Object(H.jsx)(v.a,{sx:{flexGrow:1}}),Object(H.jsx)(Z.a,{onClick:function(){r.current.focus()},children:Object(H.jsx)(i.Icon,{icon:K.a,width:20,height:20})}),Object(H.jsx)(Z.a,{children:Object(H.jsx)(i.Icon,{icon:E.a,width:20,height:20})})]}),w&&Object(H.jsx)(S.a,{spacing:1.5,children:t.comments.map((function(e){return Object(H.jsxs)(S.a,{direction:"row",spacing:2,children:[Object(H.jsx)(ne.a,{alt:e.author.name,src:e.author.avatarUrl}),Object(H.jsxs)(ae.a,{sx:{p:1.5,flexGrow:1,bgcolor:"background.neutral"},children:[Object(H.jsxs)(S.a,{direction:{xs:"column",sm:"row"},alignItems:{sm:"center"},justifyContent:"space-between",sx:{mb:.5},children:[Object(H.jsx)(T.a,{variant:"subtitle2",children:e.author.name}),Object(H.jsx)(T.a,{variant:"caption",sx:{color:"text.disabled"},children:Object(oe.a)(e.createdAt)})]}),Object(H.jsx)(T.a,{variant:"body2",sx:{color:"text.secondary"},children:e.message})]})]},e.id)}))}),Object(H.jsxs)(S.a,{direction:"row",alignItems:"center",children:[Object(H.jsx)(se.a,{}),Object(H.jsx)(re.a,{fullWidth:!0,size:"small",value:g,inputRef:r,placeholder:"Write a comment\u2026",onChange:function(e){y(e.target.value)},InputProps:{endAdornment:Object(H.jsxs)(ie.a,{position:"end",children:[Object(H.jsx)(Z.a,{size:"small",onClick:function(){o.current.click()},children:Object(H.jsx)(i.Icon,{icon:Y.a,width:24,height:24})}),Object(H.jsx)(le.a,{alignRight:!0,value:g,setValue:y})]})},sx:{ml:2,mr:1,"& fieldset":{borderWidth:"1px !important",borderColor:function(e){return"".concat(e.palette.grey[50032]," !important")}}}}),Object(H.jsx)(Z.a,{children:Object(H.jsx)(i.Icon,{icon:G.a,width:24,height:24})}),Object(H.jsx)("input",{type:"file",ref:o,style:{display:"none"}})]})]})]})}var be=n(3271),ue=n.n(be),he=n(293);function xe(){var e=Object(c.useRef)(null),t=function(){e.current.click()};return Object(H.jsxs)(m.a,{sx:{p:3},children:[Object(H.jsx)(re.a,{multiline:!0,fullWidth:!0,rows:4,placeholder:"Share what you are thinking here...",sx:{"& fieldset":{borderWidth:"1px !important",borderColor:function(e){return"".concat(e.palette.grey[50032]," !important")}}}}),Object(H.jsxs)(v.a,{sx:{mt:3,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(H.jsxs)(v.a,{sx:{display:"flex"},children:[Object(H.jsx)(Z.a,{size:"small",onClick:t,sx:{mr:1},children:Object(H.jsx)(i.Icon,{icon:Y.a,width:24,height:24})}),Object(H.jsx)(Z.a,{size:"small",onClick:t,children:Object(H.jsx)(i.Icon,{icon:ue.a,width:24,height:24})})]}),Object(H.jsx)(he.a,{variant:"contained",children:"Post"})]}),Object(H.jsx)("input",{ref:e,type:"file",style:{display:"none"}})]})}var pe=n(2652);function Oe(e){var t=e.profile,n=t.follower,a=t.following;return Object(H.jsx)(m.a,{sx:{py:3},children:Object(H.jsxs)(S.a,{direction:"row",divider:Object(H.jsx)(pe.a,{orientation:"vertical",flexItem:!0}),children:[Object(H.jsxs)(S.a,{width:1,textAlign:"center",children:[Object(H.jsx)(T.a,{variant:"h4",children:Object(ce.c)(n)}),Object(H.jsx)(T.a,{variant:"body2",sx:{color:"text.secondary"},children:"Follower"})]}),Object(H.jsxs)(S.a,{width:1,textAlign:"center",children:[Object(H.jsx)(T.a,{variant:"h4",children:Object(ce.c)(a)}),Object(H.jsx)(T.a,{variant:"body2",sx:{color:"text.secondary"},children:"Following"})]})]})})}var me=n(229),fe=n.n(me),ge=n(230),ve=n.n(ge),ye=n(383),we=n.n(ye),ke=n(384),Ce=n.n(ke),Ie=Object(p.a)(i.Icon)((function(e){return{width:20,height:20,marginTop:1,flexShrink:0,marginRight:e.theme.spacing(2)}}));function Re(e){var t=e.profile,n=t.facebookLink,a=t.instagramLink,r=t.linkedinLink,i=t.twitterLink,o=[{name:"Linkedin",icon:Object(H.jsx)(Ie,{icon:we.a,color:"#006097"}),href:r},{name:"Twitter",icon:Object(H.jsx)(Ie,{icon:fe.a,color:"#1C9CEA"}),href:i},{name:"Instagram",icon:Object(H.jsx)(Ie,{icon:Ce.a,color:"#D7336D"}),href:a},{name:"Facebook",icon:Object(H.jsx)(Ie,{icon:ve.a,color:"#1877F2"}),href:n}];return Object(H.jsxs)(m.a,{children:[Object(H.jsx)(B.a,{title:"Social"}),Object(H.jsx)(S.a,{spacing:2,sx:{p:3},children:o.map((function(e){return Object(H.jsxs)(S.a,{direction:"row",alignItems:"center",children:[e.icon,Object(H.jsx)(A.a,{component:"span",variant:"body2",color:"text.primary",noWrap:!0,children:e.href})]},e.name)}))})]})}function Me(e){var t=e.myProfile,n=e.posts;return Object(H.jsxs)(M.a,{container:!0,spacing:3,children:[Object(H.jsx)(M.a,{item:!0,xs:12,md:4,children:Object(H.jsxs)(S.a,{spacing:3,children:[Object(H.jsx)(Oe,{profile:t}),Object(H.jsx)(U,{profile:t}),Object(H.jsx)(Re,{profile:t})]})}),Object(H.jsx)(M.a,{item:!0,xs:12,md:8,children:Object(H.jsxs)(S.a,{spacing:3,children:[Object(H.jsx)(xe,{}),n.map((function(e){return Object(H.jsx)(je,{post:e},e.id)}))]})})]})}var Se=n(26),_e=Object(p.a)("div")((function(e){var t=e.theme;return{"&:before":{top:0,zIndex:9,width:"100%",content:"''",height:"100%",position:"absolute",backdropFilter:"blur(3px)",WebkitBackdropFilter:"blur(3px)",backgroundColor:Object(Se.a)(t.palette.primary.darker,.72)}}})),ze=Object(p.a)("div")((function(e){var t=e.theme;return Object(r.a)({left:0,right:0,zIndex:99,position:"absolute",marginTop:t.spacing(5)},t.breakpoints.up("md"),{right:"auto",display:"flex",alignItems:"center",left:t.spacing(3),bottom:t.spacing(3)})})),Fe=Object(p.a)("img")({zIndex:8,width:"100%",height:"100%",objectFit:"cover",position:"absolute"});function Le(e){var t=e.myProfile,n=Object(C.a)().user,a=t.position,r=t.cover;return Object(H.jsxs)(_e,{children:[Object(H.jsxs)(ze,{children:[Object(H.jsx)(se.a,{sx:{mx:"auto",borderWidth:2,borderStyle:"solid",borderColor:"common.white",width:{xs:80,md:128},height:{xs:80,md:128}}}),Object(H.jsxs)(v.a,{sx:{ml:{md:3},mt:{xs:1,md:0},color:"common.white",textAlign:{xs:"center",md:"left"}},children:[Object(H.jsx)(T.a,{variant:"h4",children:n.displayName}),Object(H.jsx)(T.a,{sx:{opacity:.72},children:a})]})]}),Object(H.jsx)(Fe,{alt:"profile cover",src:r})]})}var Pe=n(3),Ne=n(32),Be=n(300),Te=n.n(Be),Ae=n(2731),He=n(2760),We=n(2938),Ue=[{name:"Facebook",icon:Object(H.jsx)(i.Icon,{icon:ve.a,width:20,height:20,color:"#1877F2"})},{name:"Instagram",icon:Object(H.jsx)(i.Icon,{icon:Ce.a,width:20,height:20,color:"#D7336D"})},{name:"Linkedin",icon:Object(H.jsx)(i.Icon,{icon:we.a,width:20,height:20,color:"#006097"})},{name:"Twitter",icon:Object(H.jsx)(i.Icon,{icon:fe.a,width:20,height:20,color:"#1C9CEA"})}],Ve=Object(p.a)(Ae.a)((function(e){var t=e.theme;return{width:240,marginBottom:t.spacing(5),transition:t.transitions.create(["box-shadow","width"],{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{width:320,boxShadow:t.customShadows.z8},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));function De(e){var t=e.friend,n=t.name,a=t.role,r=t.avatarUrl;return Object(H.jsxs)(m.a,{sx:{py:5,display:"flex",position:"relative",alignItems:"center",flexDirection:"column"},children:[Object(H.jsx)(ne.a,{alt:n,src:r,sx:{width:64,height:64,mb:3}}),Object(H.jsx)(A.a,{to:"#",variant:"subtitle1",color:"text.primary",component:V.b,children:n}),Object(H.jsx)(T.a,{variant:"body2",sx:{color:"text.secondary"},children:a}),Object(H.jsx)(v.a,{sx:{display:"flex",mt:1},children:Ue.map((function(e){return Object(H.jsx)(He.a,{title:e.name,children:Object(H.jsx)(Z.a,{children:e.icon})},e.name)}))}),Object(H.jsx)(Z.a,{sx:{top:8,right:8,position:"absolute"},children:Object(H.jsx)(i.Icon,{icon:J.a,width:20,height:20})})]})}function Ge(e){var t=e.friends,n=e.findFriends,a=e.onFindFriends,r=e.sx,o=function(e,t){var n=e;return t&&(n=Object(Ne.filter)(e,(function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())}))),n}(t,n),c=0===o.length;return Object(H.jsxs)(v.a,{sx:Object(Pe.a)({mt:5},r),children:[Object(H.jsx)(T.a,{variant:"h4",sx:{mb:3},children:"Friends"}),Object(H.jsx)(Ve,{value:n,onChange:a,placeholder:"Find friends...",startAdornment:Object(H.jsx)(ie.a,{position:"start",children:Object(H.jsx)(v.a,{component:i.Icon,icon:Te.a,sx:{color:"text.disabled"}})})}),Object(H.jsx)(M.a,{container:!0,spacing:3,children:o.map((function(e){return Object(H.jsx)(M.a,{item:!0,xs:12,md:4,children:Object(H.jsx)(De,{friend:e})},e.id)}))}),c&&Object(H.jsx)(v.a,{sx:{mt:5},children:Object(H.jsx)(We.a,{searchQuery:n})})]})}var qe=n(3021),Ee=n(3255),Qe=Object(p.a)(qe.a)((function(e){var t=e.theme;return{bottom:0,width:"100%",display:"flex",alignItems:"center",position:"absolute",backdropFilter:"blur(3px)",WebkitBackdropFilter:"blur(3px)",justifyContent:"space-between",color:t.palette.common.white,backgroundColor:Object(Se.a)(t.palette.grey[900],.72),borderBottomLeftRadius:t.shape.borderRadiusMd,borderBottomRightRadius:t.shape.borderRadiusMd}})),Je=Object(p.a)("img")({top:0,width:"100%",height:"100%",objectFit:"cover",position:"absolute"});function $e(e){var t=e.image,n=e.onOpenLightbox,a=t.imageUrl,r=t.title,o=t.postAt;return Object(H.jsxs)(m.a,{sx:{pt:"100%",cursor:"pointer"},children:[Object(H.jsx)(Je,{alt:"gallery image",src:a,onClick:function(){return n(a)}}),Object(H.jsxs)(Qe,{children:[Object(H.jsxs)("div",{children:[Object(H.jsx)(T.a,{variant:"subtitle1",children:r}),Object(H.jsx)(T.a,{variant:"body2",sx:{opacity:.72},children:Object(oe.a)(o)})]}),Object(H.jsx)(Z.a,{color:"inherit",children:Object(H.jsx)(i.Icon,{icon:J.a,width:20,height:20})})]})]})}function Ke(e){var t=e.gallery,n=Object(c.useState)(!1),r=Object(a.a)(n,2),i=r[0],o=r[1],s=Object(c.useState)(null),l=Object(a.a)(s,2),d=l[0],j=l[1],b=t.map((function(e){return e.imageUrl})),u=function(e){var t=Object(Ne.findIndex)(b,(function(t){return t===e}));o(!0),j(t)};return Object(H.jsxs)(v.a,{sx:{mt:5},children:[Object(H.jsx)(T.a,{variant:"h4",sx:{mb:3},children:"Gallery"}),Object(H.jsxs)(m.a,{sx:{p:3},children:[Object(H.jsx)(M.a,{container:!0,spacing:3,children:t.map((function(e){return Object(H.jsx)(M.a,{item:!0,xs:12,sm:6,md:4,children:Object(H.jsx)($e,{image:e,onOpenLightbox:u})},e.id)}))}),Object(H.jsx)(Ee.a,{images:b,photoIndex:d,setPhotoIndex:j,isOpen:i,onClose:function(){return o(!1)}})]})]})}var Xe=n(3012),Ye=n.n(Xe);function Ze(e){var t=e.follower,n=e.onToggle,a=t.name,r=t.country,o=t.avatarUrl,c=t.isFollowed;return Object(H.jsxs)(m.a,{sx:{display:"flex",alignItems:"center",p:3},children:[Object(H.jsx)(ne.a,{alt:a,src:o,sx:{width:48,height:48}}),Object(H.jsxs)(v.a,{sx:{flexGrow:1,minWidth:0,pl:2,pr:1},children:[Object(H.jsx)(T.a,{variant:"subtitle2",noWrap:!0,children:a}),Object(H.jsxs)(v.a,{sx:{display:"flex",alignItems:"center"},children:[Object(H.jsx)(v.a,{component:i.Icon,icon:z.a,sx:{width:16,height:16,mr:.5,flexShrink:0}}),Object(H.jsx)(T.a,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:r})]})]}),Object(H.jsx)(he.a,{size:"small",onClick:n,variant:c?"text":"outlined",color:c?"primary":"inherit",startIcon:c&&Object(H.jsx)(i.Icon,{icon:Ye.a}),children:c?"Followed":"Follow"})]})}function et(e){var t=e.followers,n=e.onToggleFollow;return Object(H.jsxs)(v.a,{sx:{mt:5},children:[Object(H.jsx)(T.a,{variant:"h4",sx:{mb:3},children:"Followers"}),Object(H.jsx)(M.a,{container:!0,spacing:3,children:t.map((function(e){return Object(H.jsx)(M.a,{item:!0,xs:12,md:4,children:Object(H.jsx)(Ze,{follower:e,onToggle:function(){return n(e.id)}})},e.id)}))})]})}var tt=Object(p.a)("div")((function(e){var t,n=e.theme;return t={zIndex:9,bottom:0,width:"100%",display:"flex",position:"absolute",backgroundColor:n.palette.background.paper},Object(r.a)(t,n.breakpoints.up("sm"),{justifyContent:"center"}),Object(r.a)(t,n.breakpoints.up("md"),{justifyContent:"flex-end",paddingRight:n.spacing(3)}),t}));function nt(){var e=Object(y.c)(),t=Object(y.d)((function(e){return e.user})),n=t.myProfile,r=t.posts,s=t.followers,d=t.friends,b=t.gallery,h=Object(C.a)().user,p=Object(c.useState)("profile"),M=Object(a.a)(p,2),S=M[0],_=M[1],z=Object(c.useState)(""),F=Object(a.a)(z,2),L=F[0],P=F[1];Object(c.useEffect)((function(){e(Object(w.k)()),e(Object(w.j)()),e(Object(w.e)()),e(Object(w.f)()),e(Object(w.g)())}),[e]);if(!n)return null;var N=[{value:"profile",icon:Object(H.jsx)(i.Icon,{icon:x.a,width:20,height:20}),component:Object(H.jsx)(Me,{myProfile:n,posts:r})},{value:"followers",icon:Object(H.jsx)(i.Icon,{icon:l.a,width:20,height:20}),component:Object(H.jsx)(et,{followers:s,onToggleFollow:function(t){e(Object(w.n)(t))}})},{value:"friends",icon:Object(H.jsx)(i.Icon,{icon:j.a,width:20,height:20}),component:Object(H.jsx)(Ge,{friends:d,findFriends:L,onFindFriends:function(e){P(e.target.value)}})},{value:"gallery",icon:Object(H.jsx)(i.Icon,{icon:u.a,width:20,height:20}),component:Object(H.jsx)(Ke,{gallery:b})}];return Object(H.jsx)(I.a,{title:"User: Profile | Minimal-UI",children:Object(H.jsxs)(O.a,{children:[Object(H.jsx)(R.a,{heading:"Profile",links:[{name:"Dashboard",href:k.b.root},{name:"User",href:k.b.user.root},{name:h.displayName}]}),Object(H.jsxs)(m.a,{sx:{mb:3,height:280,position:"relative"},children:[Object(H.jsx)(Le,{myProfile:n}),Object(H.jsx)(tt,{children:Object(H.jsx)(f.a,{value:S,scrollButtons:"auto",variant:"scrollable",allowScrollButtonsMobile:!0,onChange:function(e,t){_(t)},children:N.map((function(e){return Object(H.jsx)(g.a,{disableRipple:!0,value:e.value,icon:e.icon,label:Object(o.a)(e.value)},e.value)}))})})]}),N.map((function(e){return e.value===S&&Object(H.jsx)(v.a,{children:e.component},e.value)}))]})})}}}]);
//# sourceMappingURL=52.5f91bab4.chunk.js.map