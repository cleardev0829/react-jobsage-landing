(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[65],{2776:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(3),o=n(31),a=n(32),i=n(2643),c=n(376),l=n(604),s=n(2740),u=n(36),p=n(0);function d(e){var t=e.links,n=e.action,d=e.heading,f=e.moreLink,b=void 0===f?[]:f,y=e.sx,j=Object(o.a)(e,["links","action","heading","moreLink","sx"]);return Object(p.jsxs)(i.a,{sx:y,mb:5,spacing:2,children:[Object(p.jsxs)(i.a,{direction:"row",alignItems:"center",children:[Object(p.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(p.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:d}),Object(p.jsx)(u.c,Object(r.a)({links:t},j))]}),n&&Object(p.jsx)(c.a,{sx:{flexShrink:0},children:n})]}),Object(a.isString)(b)?Object(p.jsx)(s.a,{href:b,target:"_blank",variant:"body2",children:b}):b.map((function(e){return Object(p.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2803:function(e,t,n){"use strict";var r=n(2),o=n(7),a=n(1),i=(n(12),n(11)),c=n(2696),l=n(8),s=n(14),u=n(2743),p=n(2637),d=n(2697);function f(e){return Object(p.a)("MuiCard",e)}Object(d.a)("MuiCard",["root"]);var b=n(0),y=Object(l.a)(u.a,{},{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),j=a.forwardRef((function(e,t){var n=Object(s.a)({props:e,name:"MuiCard"}),a=n.className,l=n.raised,u=void 0!==l&&l,p=Object(o.a)(n,["className","raised"]),d=Object(r.a)({},n,{raised:u}),j=function(e){var t=e.classes;return Object(c.a)({root:["root"]},f,t)}(d);return Object(b.jsx)(y,Object(r.a)({className:Object(i.a)(j.root,a),elevation:u?8:void 0,ref:t,styleProps:d},p))}));t.a=j},3181:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M18 9h-3V5.67A2.68 2.68 0 0 0 12.33 3H5.67A2.68 2.68 0 0 0 3 5.67v6.66A2.68 2.68 0 0 0 5.67 15H9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3zm-9 3v1H5.67a.67.67 0 0 1-.67-.67V5.67A.67.67 0 0 1 5.67 5h6.66a.67.67 0 0 1 .67.67V9h-1a3 3 0 0 0-3 3z"/>',width:24,height:24}},3418:function(e,t,n){"use strict";var r=n(3419).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},3419:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=a(n(1)),o=a(n(3420));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?f(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){function t(){var e,n;s(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return y(f(n=p(this,(e=d(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=n.props,a=t.text,i=t.onCopy,c=t.children,l=t.options,s=r.default.Children.only(c),u=(0,o.default)(a,l);i&&i(a,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),n}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&u(n.prototype,a),i&&u(n,i),t}(r.default.PureComponent);t.CopyToClipboard=j,y(j,"defaultProps",{onCopy:void 0,options:void 0})},3420:function(e,t,n){"use strict";var r=n(3421),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,c,l,s,u=!1;t||(t={}),n=t.debug||!1;try{if(i=r(),c=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),i()}return u}},3421:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},4237:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var r=n(17),o=n(26),a=n(1),i=n(159),c=n(3181),l=n.n(c),s=n(3418),u=n(8),p=n(55),d=n(27),f=n(2803),b=n(2759),y=n(2738),j=n(376),h=n(604),m=n(2749),x=n(21),O=n(379),g=n(2776),v=n(0),C=["primary","secondary","info","success","warning","error"],w=["lighter","light","main","dark","darker"],k=["100","200","300","400","500","600","700","800","900"],P=Object(u.a)(O.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),D=Object(u.a)("div")((function(e){return{display:"flex",flexWrap:"wrap",margin:e.theme.spacing(1.5,-1.5,0)}}));function S(e){var t=e.hexColor,n=e.variation,r=e.onCopy,a=Object(p.a)();return Object(v.jsxs)(f.a,{sx:{position:"relative",m:1.5,width:{xs:"100%",sm:"calc((100%/2) - 24px)",md:"calc((100%/4) - 24px)",lg:"calc((100%/5) - 24px)"}},children:[Object(v.jsx)(s.CopyToClipboard,{text:t,onCopy:r,children:Object(v.jsx)(b.a,{title:"Copy",children:Object(v.jsx)(y.a,{sx:{top:8,right:8,position:"absolute",color:a.palette.getContrastText(t)},children:Object(v.jsx)(o.Icon,{icon:l.a,width:20,height:20})})})}),Object(v.jsx)(j.a,{sx:{bgcolor:t,paddingTop:"56%"}}),Object(v.jsxs)(j.a,{sx:{p:2.5},children:[Object(v.jsx)(h.a,{variant:"subtitle1",sx:{textTransform:"capitalize"},children:n}),Object(v.jsxs)(j.a,{sx:{display:"flex",alignItems:"center",mt:1.5,mb:1},children:[Object(v.jsx)(h.a,{variant:"overline",sx:{width:56,color:"text.secondary"},children:"Hex"}),Object(v.jsx)(h.a,{variant:"body2",children:t})]}),Object(v.jsxs)(j.a,{sx:{display:"flex",alignItems:"center"},children:[Object(v.jsx)(h.a,{variant:"overline",sx:{width:56,color:"text.secondary"},children:"Rgb"}),Object(v.jsx)(h.a,{variant:"body2",children:Object(d.e)(t).replace("rgb(","").replace(")","")})]})]})]})}function T(){var e=Object(p.a)(),t=Object(i.b)().enqueueSnackbar,n=Object(a.useState)(null),o=Object(r.a)(n,2)[1],c=function(e){o(e),e&&t("Copied ".concat(e),{variant:"success"})};return Object(v.jsxs)(P,{title:"Foundations: Color | Minimal-UI",children:[Object(v.jsx)(j.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(v.jsx)(m.a,{maxWidth:"lg",children:Object(v.jsx)(g.a,{heading:"Color",links:[{name:"Components",href:x.d.components},{name:"Color"}],moreLink:["https://next.material-ui.com/customization/color","https://colors.eva.design"]})})}),Object(v.jsxs)(m.a,{maxWidth:"lg",children:[C.map((function(t){return Object(v.jsxs)(j.a,{sx:{mb:5},children:[Object(v.jsx)(h.a,{variant:"h5",sx:{textTransform:"capitalize"},children:t}),Object(v.jsx)(D,{children:w.map((function(n){return Object(v.jsx)(S,{variation:n,hexColor:e.palette[t][n],onCopy:function(){return c(e.palette[t][n])}},n)}))})]},t)})),Object(v.jsx)(h.a,{variant:"h5",sx:{textTransform:"capitalize"},children:"Grey"}),Object(v.jsx)(D,{children:k.map((function(t){return Object(v.jsx)(S,{variation:t,hexColor:e.palette.grey[t],onCopy:function(){return c(e.palette.grey[t])}},t)}))})]})]})}}}]);
//# sourceMappingURL=65.72c38c4a.chunk.js.map