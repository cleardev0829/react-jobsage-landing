(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[81],{2776:function(t,e,a){"use strict";a.d(e,"a",(function(){return j}));var r=a(3),n=a(31),i=a(32),o=a(2643),s=a(376),c=a(604),l=a(2740),d=a(36),p=a(0);function j(t){var e=t.links,a=t.action,j=t.heading,b=t.moreLink,u=void 0===b?[]:b,m=t.sx,x=Object(n.a)(t,["links","action","heading","moreLink","sx"]);return Object(p.jsxs)(o.a,{sx:m,mb:5,spacing:2,children:[Object(p.jsxs)(o.a,{direction:"row",alignItems:"center",children:[Object(p.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(p.jsx)(c.a,{variant:"h4",gutterBottom:!0,children:j}),Object(p.jsx)(d.c,Object(r.a)({links:e},x))]}),a&&Object(p.jsx)(s.a,{sx:{flexShrink:0},children:a})]}),Object(i.isString)(u)?Object(p.jsx)(l.a,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(t){return Object(p.jsx)(l.a,{noWrap:!0,href:t,variant:"body2",target:"_blank",sx:{display:"flex"},children:t},t)}))]})}},2778:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"d",(function(){return s})),a.d(e,"c",(function(){return c})),a.d(e,"e",(function(){return l})),a.d(e,"b",(function(){return d}));var r=a(32),n=a(2858),i=a.n(n);function o(t){return i()(t).format(Number.isInteger(t)?"$0,0":"$0,0.00")}function s(t){return i()(t/100).format("0.0%")}function c(t){return i()(t).format()}function l(t){return Object(r.replace)(i()(t).format("0.00a"),".00","")}function d(t){return i()(t).format("0.0 b")}},2912:function(t,e,a){"use strict";a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return u})),a.d(e,"c",(function(){return x})),a.d(e,"d",(function(){return O})),a.d(e,"e",(function(){return g})),a.d(e,"f",(function(){return v})),a.d(e,"g",(function(){return w})),a.d(e,"h",(function(){return T})),a.d(e,"j",(function(){return S})),a.d(e,"i",(function(){return B})),a.d(e,"k",(function(){return z})),a.d(e,"m",(function(){return F})),a.d(e,"l",(function(){return P}));var r=a(3),n=a(4223),i=a(2695),o=a(55),s=Object(i.a)((function(t){return Object(n.a)({"@global":{".apexcharts-tooltip,.apexcharts-xaxistooltip":{border:"0 !important",boxShadow:"".concat(t.customShadows.z24," !important"),color:"".concat(t.palette.text.primary," !important"),borderRadius:"".concat(t.shape.borderRadiusSm,"px !important"),backgroundColor:"".concat(t.palette.background.default," !important")},".apexcharts-tooltip-title":{border:"0 !important",fontWeight:t.typography.fontWeightBold,backgroundColor:"".concat(t.palette.grey[50016]," !important"),color:t.palette.text["light"===t.palette.mode?"secondary":"primary"]},".apexcharts-xaxistooltip-bottom":{"&:before":{borderBottomColor:"transparent !important"},"&:after":{borderBottomColor:"".concat(t.palette.background.paper," !important")}},".apexcharts-legend":{padding:"0 !important"},".apexcharts-legend-series":{alignItems:"center",display:"flex !important"},".apexcharts-legend-marker":{marginTop:"-2px !important",marginRight:"8px !important"},".apexcharts-legend-text":{lineHeight:"18px",textTransform:"capitalize"}}})}));function c(){s();var t=Object(o.a)(),e=Object(r.a)({show:!0,label:"Total",color:t.palette.text.secondary},t.typography.subtitle2),a=Object(r.a)({offsetY:8,color:t.palette.text.primary},t.typography.h3);return{colors:[t.palette.primary.main,t.palette.warning.main,t.palette.info.main,t.palette.error.main,t.palette.success.main],chart:{toolbar:{show:!1},zoom:{enabled:!1},foreColor:t.palette.text.disabled,fontFamily:t.typography.fontFamily},states:{hover:{filter:{type:"lighten",value:.04}},active:{filter:{type:"darken",value:.88}}},fill:{opacity:1,gradient:{type:"vertical",shadeIntensity:0,opacityFrom:.4,opacityTo:0,stops:[0,100]}},dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},grid:{strokeDashArray:3,borderColor:t.palette.divider},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1}},markers:{size:0,strokeColors:t.palette.background.paper},tooltip:{x:{show:!1}},legend:{show:!0,fontSize:13,position:"top",horizontalAlign:"right",markers:{radius:12},itemMargin:{horizontal:12},labels:{colors:t.palette.text.primary}},plotOptions:{pie:{donut:{labels:{show:!0,value:a,total:e}}},radialBar:{track:{strokeWidth:"100%",background:t.palette.grey[50016]},dataLabels:{value:a,total:e}},radar:{polygons:{strokeWidth:1,fill:{colors:["transparent"]},strokeColors:t.palette.divider,connectorColors:t.palette.divider}}}}}var l=a(32),d=a(2790),p=a.n(d),j=a(0),b=[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}];function u(){var t=Object(l.merge)(c(),{xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}});return Object(j.jsx)(p.a,{type:"area",series:b,options:t,height:320})}var m=[{data:[400,430,448,470,540,580,690,1100,1200,1380]}];function x(){var t=Object(l.merge)(c(),{stroke:{show:!1},plotOptions:{bar:{horizontal:!0,barHeight:"30%",borderRadius:4}},xaxis:{categories:["Italy","Japan","China","Canada","France","Germany","South Korea","Netherlands","United States","United Kingdom"]}});return Object(j.jsx)(p.a,{type:"bar",series:m,options:t,height:320})}var h=[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]}];function O(){var t=Object(l.merge)(c(),{stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:function(t){return"$ ".concat(t," thousands")}}},plotOptions:{bar:{columnWidth:"34%",borderRadius:4}}});return Object(j.jsx)(p.a,{type:"bar",series:h,options:t,height:320})}var f=[{name:"Cash Flow",data:[1.45,5.42,5.9,-.42,-12.6,-18.1,-18.2,-14.16,-11.1,-6.09,.34,3.88,13.07,5.8,2,7.37,8.1,13.57,15.75,17.1,19.8,-27.03,-54.4,-47.2,-43.3,-18.6,-48.6,-41.1,-39.6,-37.6,-29.4,-21.4,-2.4]}];function g(){var t=Object(o.a)(),e=Object(l.merge)(c(),{stroke:{show:!1},yaxis:{labels:{formatter:function(t){return"".concat(t.toFixed(0),"%")}}},xaxis:{type:"datetime",categories:["2011-01-01","2011-02-01","2011-03-01","2011-04-01","2011-05-01","2011-06-01","2011-07-01","2011-08-01","2011-09-01","2011-10-01","2011-11-01","2011-12-01","2012-01-01","2012-02-01","2012-03-01","2012-04-01","2012-05-01","2012-06-01","2012-07-01","2012-08-01","2012-09-01","2012-10-01","2012-11-01","2012-12-01","2013-01-01","2013-02-01","2013-03-01","2013-04-01","2013-05-01","2013-06-01","2013-07-01","2013-08-01","2013-09-01"]},plotOptions:{bar:{columnWidth:"58%",borderRadius:4,colors:{ranges:[{from:-100,to:-46,color:t.palette.warning.main},{from:-45,to:0,color:t.palette.error.main}]}}}});return Object(j.jsx)(p.a,{type:"bar",series:f,options:e,height:320})}var y=[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]}];function v(){var t=Object(l.merge)(c(),{plotOptions:{bar:{columnWidth:"14%",borderRadius:4}},stroke:{show:!1},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:function(t){return"$ ".concat(t," thousands")}}}});return Object(j.jsx)(p.a,{type:"bar",series:y,options:t,height:320})}var k=[{name:"Product A",data:[44,55,41,67,22,43]},{name:"Product B",data:[13,23,20,8,13,27]},{name:"Product C",data:[11,17,15,15,21,14]},{name:"Product D",data:[21,7,25,13,22,8]}];function w(){var t=Object(l.merge)(c(),{chart:{stacked:!0,zoom:{enabled:!0}},legend:{itemMargin:{vertical:8},position:"right",offsetY:20},plotOptions:{bar:{columnWidth:"14%",borderRadius:4}},stroke:{show:!1},xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]}});return Object(j.jsx)(p.a,{type:"bar",series:k,options:t,height:320})}var C=[44,55,13,43];function T(){var t=Object(l.merge)(c(),{labels:["Apple","Mango","Orange","Watermelon"],stroke:{show:!1},legend:{horizontalAlign:"center"},plotOptions:{pie:{donut:{size:"90%"}}}});return Object(j.jsx)(p.a,{type:"donut",series:C,options:t,width:400})}var M=[{name:"Team A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}];function S(){var t=Object(l.merge)(c(),{stroke:{width:[0,2,3]},plotOptions:{bar:{columnWidth:"18%",borderRadius:4}},fill:{type:["solid","gradient","solid"]},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],xaxis:{type:"datetime"},yaxis:{title:{text:"Points"},min:0},tooltip:{shared:!0,intersect:!1,y:{formatter:function(t){return"undefined"!==typeof t?"".concat(t.toFixed(0)," points"):t}}}});return Object(j.jsx)(p.a,{type:"line",series:M,options:t,height:320})}var A=[{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}];function B(){var t=Object(l.merge)(c(),{xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]},tooltip:{x:{show:!1},marker:{show:!1}}});return Object(j.jsx)(p.a,{type:"line",series:A,options:t,height:320})}var R=[44,55,13,43];function z(){var t=Object(l.merge)(c(),{labels:["Team A","Team B","Team C","Team D"],legend:{position:"right",offsetX:-20,offsetY:64,itemMargin:{vertical:8}},stroke:{show:!1},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},plotOptions:{pie:{donut:{labels:{show:!1}}}}});return Object(j.jsx)(p.a,{type:"pie",series:R,options:t,width:400})}var W=[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}];function F(){var t=Object(o.a)(),e=Object(l.merge)(c(),{stroke:{width:2},fill:{opacity:.48},legend:{position:"bottom",horizontalAlign:"center"},xaxis:{categories:["2011","2012","2013","2014","2015","2016"],labels:{style:{colors:[t.palette.text.secondary,t.palette.text.secondary,t.palette.text.secondary,t.palette.text.secondary,t.palette.text.secondary,t.palette.text.secondary]}}}});return Object(j.jsx)(p.a,{type:"radar",series:W,options:e,width:540})}var I=a(2778),J=[44,55];function P(){var t=Object(o.a)(),e=Object(l.merge)(c(),{labels:["Apples","Oranges"],fill:{type:"gradient",gradient:{colorStops:[[{offset:0,color:t.palette.primary.light},{offset:100,color:t.palette.primary.main}],[{offset:0,color:t.palette.warning.light},{offset:100,color:t.palette.warning.main}]]}},legend:{horizontalAlign:"center"},plotOptions:{radialBar:{hollow:{size:"68%"},dataLabels:{value:{offsetY:16},total:{formatter:function(){return Object(I.c)(2324)}}}}}});return Object(j.jsx)(p.a,{type:"radialBar",series:J,options:e,height:400})}},2984:function(t,e,a){"use strict";var r=a(2),n=a(7),i=a(1),o=(a(12),a(11)),s=a(2696),c=a(8),l=a(14),d=a(2637),p=a(2697);function j(t){return Object(d.a)("MuiCardContent",t)}Object(p.a)("MuiCardContent",["root"]);var b=a(0),u=Object(c.a)("div",{},{name:"MuiCardContent",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),m=i.forwardRef((function(t,e){var a=Object(l.a)({props:t,name:"MuiCardContent"}),i=a.className,c=a.component,d=void 0===c?"div":c,p=Object(n.a)(a,["className","component"]),m=Object(r.a)({},a,{component:d}),x=function(t){var e=t.classes;return Object(s.a)({root:["root"]},j,e)}(m);return Object(b.jsx)(u,Object(r.a)({as:d,className:Object(o.a)(x.root,i),styleProps:m,ref:e},p))}));e.a=m},4275:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return x}));var r=a(8),n=a(376),i=a(2749),o=a(2729),s=a(2803),c=a(2813),l=a(2984),d=a(21),p=a(379),j=a(2776),b=a(2912),u=a(0),m=Object(r.a)(p.a)((function(t){var e=t.theme;return{paddingTop:e.spacing(11),paddingBottom:e.spacing(15)}}));function x(){return Object(u.jsxs)(m,{title:"Components: Charts | Minimal-UI",children:[Object(u.jsx)(n.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(t){return"light"===t.palette.mode?"grey.200":"grey.800"}},children:Object(u.jsx)(i.a,{maxWidth:"lg",children:Object(u.jsx)(j.a,{heading:"Charts",links:[{name:"Components",href:d.d.components},{name:"Charts"}],moreLink:"https://apexcharts.com"})})}),Object(u.jsx)(i.a,{maxWidth:"lg",children:Object(u.jsxs)(o.a,{container:!0,spacing:3,children:[Object(u.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(c.a,{title:"Area"}),Object(u.jsx)(l.a,{dir:"ltr",children:Object(u.jsx)(b.b,{})})]})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(c.a,{title:"Line"}),Object(u.jsx)(l.a,{dir:"ltr",children:Object(u.jsx)(b.i,{})})]})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(c.a,{title:"Column Single"}),Object(u.jsx)(l.a,{dir:"ltr",children:Object(u.jsx)(b.f,{})})]})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(c.a,{title:"Column Multiple"}),Object(u.jsx)(l.a,{dir:"ltr",children:Object(u.jsx)(b.d,{})})]})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(c.a,{title:"Column Stacked"}),Object(u.jsx)(l.a,{dir:"ltr",children:Object(u.jsx)(b.g,{})})]})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(c.a,{title:"Column Negative"}),Object(u.jsx)(l.a,{dir:"ltr",children:Object(u.jsx)(b.e,{})})]})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(c.a,{title:"Bar"}),Object(u.jsx)(l.a,{dir:"ltr",children:Object(u.jsx)(b.c,{})})]})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(c.a,{title:"Mixed"}),Object(u.jsx)(l.a,{dir:"ltr",children:Object(u.jsx)(b.j,{})})]})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(c.a,{title:"Pie"}),Object(u.jsx)(l.a,{sx:{height:420,display:"flex",alignItems:"center",justifyContent:"center"},children:Object(u.jsx)(b.k,{})})]})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(c.a,{title:"Donut"}),Object(u.jsx)(l.a,{sx:{height:420,display:"flex",alignItems:"center",justifyContent:"center"},children:Object(u.jsx)(b.h,{})})]})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(c.a,{title:"Radial Bar"}),Object(u.jsx)(l.a,{sx:{height:420,display:"flex",alignItems:"center",justifyContent:"center"},children:Object(u.jsx)(b.l,{})})]})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(c.a,{title:"Radar"}),Object(u.jsx)(l.a,{sx:{height:420,display:"flex",alignItems:"center",justifyContent:"center"},children:Object(u.jsx)(b.m,{})})]})})]})})]})}}}]);
//# sourceMappingURL=81.974f73d6.chunk.js.map