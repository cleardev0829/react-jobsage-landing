(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[135],{3048:function(e,t,r){"use strict";function n(e,t,r){if(null!==e)for(var o,i,l,a,u,g,f,s,c=0,m=0,y=e.type,h="FeatureCollection"===y,k="Feature"===y,p=h?e.features.length:1,P=0;P<p;P++){u=(s=!!(f=h?e.features[P].geometry:k?e.geometry:e)&&"GeometryCollection"===f.type)?f.geometries.length:1;for(var b=0;b<u;b++){var w=0,M=0;if(null!==(a=s?f.geometries[b]:f)){g=a.coordinates;var v=a.type;switch(c=!r||"Polygon"!==v&&"MultiPolygon"!==v?0:1,v){case null:break;case"Point":if(!1===t(g,m,P,w,M))return!1;m++,w++;break;case"LineString":case"MultiPoint":for(o=0;o<g.length;o++){if(!1===t(g[o],m,P,w,M))return!1;m++,"MultiPoint"===v&&w++}"LineString"===v&&w++;break;case"Polygon":case"MultiLineString":for(o=0;o<g.length;o++){for(i=0;i<g[o].length-c;i++){if(!1===t(g[o][i],m,P,w,M))return!1;m++}"MultiLineString"===v&&w++,"Polygon"===v&&M++}"Polygon"===v&&w++;break;case"MultiPolygon":for(o=0;o<g.length;o++){for(M=0,i=0;i<g[o].length;i++){for(l=0;l<g[o][i].length-c;l++){if(!1===t(g[o][i][l],m,P,w,M))return!1;m++}M++}w++}break;case"GeometryCollection":for(o=0;o<a.geometries.length;o++)if(!1===n(a.geometries[o],t,r))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function o(e){var t=[1/0,1/0,-1/0,-1/0];return n(e,(function(e){t[0]>e[0]&&(t[0]=e[0]),t[1]>e[1]&&(t[1]=e[1]),t[2]<e[0]&&(t[2]=e[0]),t[3]<e[1]&&(t[3]=e[1])})),t}o.default=o;t.a=o}}]);
//# sourceMappingURL=135.361f0f84.chunk.js.map