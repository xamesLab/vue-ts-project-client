"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[235],{1638:(e,t,r)=>{r.d(t,{Venn:()=>V});var n=r(1635),a=r(7140),i=r(6611),s=r(6377);class o extends a.S{setupDefaultRules(){super.setupDefaultRules();const e=this.rule.bind(this);e("Venn").setAll({legendLabelText:"{category}",legendValueText:"{value}",colors:s.e.new(this._root,{}),width:i.Q2,height:i.Q2}),e("Label",["venn"]).setAll({text:"{category}",populateText:!0,centerX:i.yP,centerY:i.yP})}}var h=r(5905),l=r(7742),u=r(5557),f=r(1947),c=r(7716),g=r(100),x=r(8135),p=r(8379),v=r(3460);function d(e){for(var t=new Array(e),r=0;r<e;++r)t[r]=0;return t}function m(e,t){return d(e).map((function(){return d(t)}))}function y(e,t){for(var r=0,n=0;n<e.length;++n)r+=e[n]*t[n];return r}function b(e){return Math.sqrt(y(e,e))}function w(e,t,r){for(var n=0;n<t.length;++n)e[n]=t[n]*r}function M(e,t,r,n,a){for(var i=0;i<e.length;++i)e[i]=t*r[i]+n*a[i]}function I(e,t,r){var n,a=(r=r||{}).maxIterations||200*t.length,i=r.nonZeroDelta||1.05,s=r.zeroDelta||.001,o=r.minErrorDelta||1e-6,h=r.minErrorDelta||1e-5,l=void 0!==r.rho?r.rho:1,u=void 0!==r.chi?r.chi:2,f=void 0!==r.psi?r.psi:-.5,c=void 0!==r.sigma?r.sigma:.5,g=t.length,x=new Array(g+1);x[0]=t,x[0].fx=e(t),x[0].id=0;for(var p=0;p<g;++p){var v=t.slice();v[p]=v[p]?v[p]*i:s,x[p+1]=v,x[p+1].fx=e(v),x[p+1].id=p+1}function d(e){for(var t=0;t<e.length;t++)x[g][t]=e[t];x[g].fx=e.fx}for(var m=function(e,t){return e.fx-t.fx},y=t.slice(),b=t.slice(),w=t.slice(),I=t.slice(),_=0;_<a;++_){if(x.sort(m),r.history){var D=x.map((function(e){var t=e.slice();return t.fx=e.fx,t.id=e.id,t}));D.sort((function(e,t){return e.id-t.id})),r.history.push({x:x[0].slice(),fx:x[0].fx,simplex:D})}for(n=0,p=0;p<g;++p)n=Math.max(n,Math.abs(x[0][p]-x[1][p]));if(Math.abs(x[0].fx-x[g].fx)<o&&n<h)break;for(p=0;p<g;++p){y[p]=0;for(var P=0;P<g;++P)y[p]+=x[P][p];y[p]/=g}var k=x[g];if(M(b,1+l,y,-l,k),b.fx=e(b),b.fx<x[0].fx)M(I,1+u,y,-u,k),I.fx=e(I),I.fx<b.fx?d(I):d(b);else if(b.fx>=x[g-1].fx){var z=!1;if(b.fx>k.fx?(M(w,1+f,y,-f,k),w.fx=e(w),w.fx<k.fx?d(w):z=!0):(M(w,1-f*l,y,f*l,k),w.fx=e(w),w.fx<b.fx?d(w):z=!0),z){if(c>=1)break;for(p=1;p<x.length;++p)M(x[p],1-c,x[0],c,x[p]),x[p].fx=e(x[p])}}else d(b)}return x.sort(m),{fx:x[0].fx,x:x[0]}}function _(e,t,r,n,a,i,s){var o=r.fx,h=y(r.fxprime,t),l=o,u=o,f=h,c=0;function g(u,c,g){for(var x=0;x<16;++x)if(a=(u+c)/2,M(n.x,1,r.x,a,t),l=n.fx=e(n.x,n.fxprime),f=y(n.fxprime,t),l>o+i*a*h||l>=g)c=a;else{if(Math.abs(f)<=-s*h)return a;f*(c-u)>=0&&(c=u),u=a,g=l}return 0}a=a||1,i=i||1e-6,s=s||.1;for(var x=0;x<10;++x){if(M(n.x,1,r.x,a,t),l=n.fx=e(n.x,n.fxprime),f=y(n.fxprime,t),l>o+i*a*h||x&&l>=u)return g(c,a,u);if(Math.abs(f)<=-s*h)return a;if(f>=0)return g(a,c,l);u=l,c=a,a*=2}return a}function D(e,t,r){var n,a,i,s={x:t.slice(),fx:0,fxprime:t.slice()},o={x:t.slice(),fx:0,fxprime:t.slice()},h=t.slice(),l=1;i=(r=r||{}).maxIterations||20*t.length,s.fx=e(s.x,s.fxprime),w(n=s.fxprime.slice(),s.fxprime,-1);for(var u=0;u<i;++u){if(l=_(e,n,s,o,l),r.history&&r.history.push({x:s.x.slice(),fx:s.fx,fxprime:s.fxprime.slice(),alpha:l}),l){M(h,1,o.fxprime,-1,s.fxprime);var f=y(s.fxprime,s.fxprime);M(n,Math.max(0,y(h,o.fxprime)/f),n,-1,o.fxprime),a=s,s=o,o=a}else w(n,s.fxprime,-1);if(b(s.fxprime)<=1e-5)break}return r.history&&r.history.push({x:s.x.slice(),fx:s.fx,fxprime:s.fxprime.slice(),alpha:l}),s}var P=1e-10;function k(e,t){var r,n=function(e){for(var t=[],r=0;r<e.length;++r)for(var n=r+1;n<e.length;++n)for(var a=A(e[r],e[n]),i=0;i<a.length;++i){var s=a[i];s.parentIndex=[r,n],t.push(s)}return t}(e),a=n.filter((function(t){return function(e,t){for(var r=0;r<t.length;++r)if(R(e,t[r])>t[r].radius+P)return!1;return!0}(t,e)})),i=0,s=0,o=[];if(a.length>1){var h=j(a);for(r=0;r<a.length;++r){var l=a[r];l.angle=Math.atan2(l.x-h.x,l.y-h.y)}a.sort((function(e,t){return t.angle-e.angle}));var u=a[a.length-1];for(r=0;r<a.length;++r){var f=a[r];s+=(u.x+f.x)*(f.y-u.y);for(var c={x:(f.x+u.x)/2,y:(f.y+u.y)/2},g=null,x=0;x<f.parentIndex.length;++x)if(u.parentIndex.indexOf(f.parentIndex[x])>-1){var p=e[f.parentIndex[x]],v=Math.atan2(f.x-p.x,f.y-p.y),d=Math.atan2(u.x-p.x,u.y-p.y),m=d-v;m<0&&(m+=2*Math.PI);var y=d-m/2,b=R(c,{x:p.x+p.radius*Math.sin(y),y:p.y+p.radius*Math.cos(y)});b>2*p.radius&&(b=2*p.radius),(null===g||g.width>b)&&(g={circle:p,width:b,p1:f,p2:u})}null!==g&&(o.push(g),i+=z(g.circle.radius,g.width),u=f)}}else{var w=e[0];for(r=1;r<e.length;++r)e[r].radius<w.radius&&(w=e[r]);var M=!1;for(r=0;r<e.length;++r)if(R(e[r],w)>Math.abs(w.radius-e[r].radius)){M=!0;break}M?i=s=0:(i=w.radius*w.radius*Math.PI,o.push({circle:w,p1:{x:w.x,y:w.y+w.radius},p2:{x:w.x-P,y:w.y+w.radius},width:2*w.radius}))}return s/=2,t&&(t.area=i+s,t.arcArea=i,t.polygonArea=s,t.arcs=o,t.innerPoints=a,t.intersectionPoints=n),i+s}function z(e,t){return e*e*Math.acos(1-t/e)-(e-t)*Math.sqrt(t*(2*e-t))}function R(e,t){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))}function O(e,t,r){if(r>=e+t)return 0;if(r<=Math.abs(e-t))return Math.PI*Math.min(e,t)*Math.min(e,t);var n=t-(r*r-e*e+t*t)/(2*r);return z(e,e-(r*r-t*t+e*e)/(2*r))+z(t,n)}function A(e,t){var r=R(e,t),n=e.radius,a=t.radius;if(r>=n+a||r<=Math.abs(n-a))return[];var i=(n*n-a*a+r*r)/(2*r),s=Math.sqrt(n*n-i*i),o=e.x+i*(t.x-e.x)/r,h=e.y+i*(t.y-e.y)/r,l=-(t.y-e.y)*(s/r),u=-(t.x-e.x)*(s/r);return[{x:o+l,y:h-u},{x:o-l,y:h+u}]}function j(e){for(var t={x:0,y:0},r=0;r<e.length;++r)t.x+=e[r].x,t.y+=e[r].y;return t.x/=e.length,t.y/=e.length,t}var C=1e-10;function L(e,t,r){return Math.min(e,t)*Math.min(e,t)*Math.PI<=r+C?Math.abs(e-t):function(e,t,r,n){var a=(n=n||{}).maxIterations||100,i=n.tolerance||1e-10,s=e(t),o=e(r),h=r-t;if(s*o>0)throw"Initial bisect points must have opposite signs";if(0===s)return t;if(0===o)return r;for(var l=0;l<a;++l){var u=t+(h/=2),f=e(u);if(f*s>=0&&(t=u),Math.abs(h)<i||0===f)return u}return t+h}((function(n){return O(e,t,n)-r}),0,e+t)}function E(e,t){var r=function(e,t){for(var r,n=t&&t.lossFunction?t.lossFunction:S,a={},i={},s=0;s<e.length;++s){var o=e[s];1==o.sets.length&&(r=o.sets[0],a[r]={x:1e10,y:1e10,rowid:a.length,size:o.size,radius:Math.sqrt(o.size/Math.PI)},i[r]=[])}for(e=e.filter((function(e){return 2==e.sets.length})),s=0;s<e.length;++s){var h=e[s],l=h.hasOwnProperty("weight")?h.weight:1,u=h.sets[0],f=h.sets[1];h.size+C>=Math.min(a[u].size,a[f].size)&&(l=0),i[u].push({set:f,size:h.size,weight:l}),i[f].push({set:u,size:h.size,weight:l})}var c=[];for(r in i)if(i.hasOwnProperty(r)){var g=0;for(s=0;s<i[r].length;++s)g+=i[r][s].size*i[r][s].weight;c.push({set:r,size:g})}function x(e,t){return t.size-e.size}c.sort(x);var p={};function v(e){return e.set in p}function d(e,t){a[t].x=e.x,a[t].y=e.y,p[t]=!0}for(d({x:0,y:0},c[0].set),s=1;s<c.length;++s){var m=c[s].set,y=i[m].filter(v);if(r=a[m],y.sort(x),0===y.length)throw"ERROR: missing pairwise overlap information";for(var b=[],w=0;w<y.length;++w){var M=a[y[w].set],I=L(r.radius,M.radius,y[w].size);b.push({x:M.x+I,y:M.y}),b.push({x:M.x-I,y:M.y}),b.push({y:M.y+I,x:M.x}),b.push({y:M.y-I,x:M.x});for(var _=w+1;_<y.length;++_)for(var D=a[y[_].set],P=L(r.radius,D.radius,y[_].size),k=A({x:M.x,y:M.y,radius:I},{x:D.x,y:D.y,radius:P}),z=0;z<k.length;++z)b.push(k[z])}var R=1e50,O=b[0];for(w=0;w<b.length;++w){a[m].x=b[w].x,a[m].y=b[w].y;var j=n(a,e);j<R&&(R=j,O=b[w])}d(O,m)}return a}(e,t),n=t.lossFunction||S;if(e.length>=8){var a=function(e,t){var r,n=(t=t||{}).restarts||10,a=[],i={};for(r=0;r<e.length;++r){var s=e[r];1==s.sets.length&&(i[s.sets[0]]=a.length,a.push(s))}var o=function(e,t,r){var n=m(t.length,t.length),a=m(t.length,t.length);return e.filter((function(e){return 2==e.sets.length})).map((function(e){var i=r[e.sets[0]],s=r[e.sets[1]],o=L(Math.sqrt(t[i].size/Math.PI),Math.sqrt(t[s].size/Math.PI),e.size);n[i][s]=n[s][i]=o;var h=0;e.size+1e-10>=Math.min(t[i].size,t[s].size)?h=1:e.size<=1e-10&&(h=-1),a[i][s]=a[s][i]=h})),{distances:n,constraints:a}}(e,a,i),h=o.distances,l=o.constraints,u=b(h.map(b))/h.length;h=h.map((function(e){return e.map((function(e){return e/u}))}));var f,c,g=function(e,t){return function(e,t,r,n){var a,i=0;for(a=0;a<t.length;++a)t[a]=0;for(a=0;a<r.length;++a)for(var s=e[2*a],o=e[2*a+1],h=a+1;h<r.length;++h){var l=e[2*h],u=e[2*h+1],f=r[a][h],c=n[a][h],g=(l-s)*(l-s)+(u-o)*(u-o),x=Math.sqrt(g),p=g-f*f;c>0&&x<=f||c<0&&x>=f||(i+=2*p*p,t[2*a]+=4*p*(s-l),t[2*a+1]+=4*p*(o-u),t[2*h]+=4*p*(l-s),t[2*h+1]+=4*p*(u-o))}return i}(e,t,h,l)};for(r=0;r<n;++r)c=D(g,d(2*h.length).map(Math.random),t),(!f||c.fx<f.fx)&&(f=c);var x=f.x,p={};for(r=0;r<a.length;++r){var v=a[r];p[v.sets[0]]={x:x[2*r]*u,y:x[2*r+1]*u,radius:Math.sqrt(v.size/Math.PI)}}if(t.history)for(r=0;r<t.history.length;++r)w(t.history[r].x,u);return p}(e,t);n(a,e)+1e-8<n(r,e)&&(r=a)}return r}function S(e,t){for(var r=0,n=0;n<t.length;++n){var a,i=t[n];if(1!=i.sets.length){if(2==i.sets.length){var s=e[i.sets[0]],o=e[i.sets[1]];a=O(s.radius,o.radius,R(s,o))}else a=k(i.sets.map((function(t){return e[t]})));r+=(i.hasOwnProperty("weight")?i.weight:1)*(a-i.size)*(a-i.size)}}return r}function T(e,t,r){var n;if(null===r?e.sort((function(e,t){return t.radius-e.radius})):e.sort(r),e.length>0){var a=e[0].x,i=e[0].y;for(n=0;n<e.length;++n)e[n].x-=a,e[n].y-=i}if(2==e.length&&R(e[0],e[1])<Math.abs(e[1].radius-e[0].radius)&&(e[1].x=e[0].x+e[0].radius-e[1].radius-1e-10,e[1].y=e[0].y),e.length>1){var s,o,h=Math.atan2(e[1].x,e[1].y)-t,l=Math.cos(h),u=Math.sin(h);for(n=0;n<e.length;++n)s=e[n].x,o=e[n].y,e[n].x=l*s-u*o,e[n].y=u*s+l*o}if(e.length>2){for(var f=Math.atan2(e[2].x,e[2].y)-t;f<0;)f+=2*Math.PI;for(;f>2*Math.PI;)f-=2*Math.PI;if(f>Math.PI){var c=e[1].y/(1e-10+e[1].x);for(n=0;n<e.length;++n){var g=(e[n].x+c*e[n].y)/(1+c*c);e[n].x=2*g-e[n].x,e[n].y=2*g*c-e[n].y}}}}function H(e){var t=function(t){return{max:Math.max.apply(null,e.map((function(e){return e[t]+e.radius}))),min:Math.min.apply(null,e.map((function(e){return e[t]-e.radius})))}};return{xRange:t("x"),yRange:t("y")}}function q(e,t,r){var n,a,i=t[0].radius-R(t[0],e);for(n=1;n<t.length;++n)(a=t[n].radius-R(t[n],e))<=i&&(i=a);for(n=0;n<r.length;++n)(a=R(r[n],e)-r[n].radius)<=i&&(i=a);return i}function N(e,t){var r,n=[];for(r=0;r<e.length;++r){var a=e[r];n.push({x:a.x,y:a.y}),n.push({x:a.x+a.radius/2,y:a.y}),n.push({x:a.x-a.radius/2,y:a.y}),n.push({x:a.x,y:a.y+a.radius/2}),n.push({x:a.x,y:a.y-a.radius/2})}var i=n[0],s=q(n[0],e,t);for(r=1;r<n.length;++r){var o=q(n[r],e,t);o>=s&&(i=n[r],s=o)}var h=I((function(r){return-1*q({x:r[0],y:r[1]},e,t)}),[i.x,i.y],{maxIterations:500,minErrorDelta:1e-10}).x,l={x:h[0],y:h[1]},u=!0;for(r=0;r<e.length;++r)if(R(l,e[r])>e[r].radius){u=!1;break}for(r=0;r<t.length;++r)if(R(l,t[r])<t[r].radius){u=!1;break}if(!u)if(1==e.length)l={x:e[0].x,y:e[0].y};else{var f={};k(e,f),l=0===f.arcs.length?{x:0,y:-1e3,disjoint:!0}:1==f.arcs.length?{x:f.arcs[0].circle.x,y:f.arcs[0].circle.y}:t.length?N(e,[]):j(f.arcs.map((function(e){return e.p1})))}return l}function F(e,t){for(var r={},n=function(e){var t={},r=[];for(var n in e)r.push(n),t[n]=[];for(var a=0;a<r.length;a++)for(var i=e[r[a]],s=a+1;s<r.length;++s){var o=e[r[s]],h=R(i,o);h+o.radius<=i.radius+1e-10?t[r[s]].push(r[a]):h+i.radius<=o.radius+1e-10&&t[r[a]].push(r[s])}return t}(e),a=0;a<t.length;++a){for(var i=t[a].sets,s={},o={},h=0;h<i.length;++h){s[i[h]]=!0;for(var l=n[i[h]],u=0;u<l.length;++u)o[l[u]]=!0}var f=[],c=[];for(var g in e)g in s?f.push(e[g]):g in o||c.push(e[g]);var x=N(f,c);r[i]=x,x.disjoint&&t[a].size>0&&console.log("WARNING: area "+i+" not represented on screen")}return r}r(3447);class V extends h.s{constructor(){super(...arguments),Object.defineProperty(this,"_sets",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"slicesContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(f.m.new(this._root,{}))}),Object.defineProperty(this,"labelsContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(f.m.new(this._root,{}))}),Object.defineProperty(this,"hoverGraphics",{enumerable:!0,configurable:!0,writable:!0,value:this.slicesContainer.children.push(u.A.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"_hovered",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"slices",{enumerable:!0,configurable:!0,writable:!0,value:this._makeSlices()}),Object.defineProperty(this,"labels",{enumerable:!0,configurable:!0,writable:!0,value:this._makeLabels()})}_afterNew(){this._defaultThemes.push(o.new(this._root)),this.fields.push("intersections","category","fill"),super._afterNew()}makeSlice(e){const t=this.slicesContainer.children.push(this.slices.make());return t.events.on("pointerover",(e=>{this._hovered=e.target,this._updateHover()})),t.events.on("pointerout",(()=>{this._hovered=void 0,this.hoverGraphics.hide()})),t.on("fill",(()=>{this.updateLegendMarker(e)})),t.on("stroke",(()=>{this.updateLegendMarker(e)})),t._setDataItem(e),e.set("slice",t),this.slices.push(t),t}_updateHover(){if(this._hovered){const e=this.hoverGraphics;e.set("svgPath",this._hovered.get("svgPath")),e.show(),e.toFront()}}makeLabel(e){const t=this.labelsContainer.children.push(this.labels.make());return t._setDataItem(e),e.set("label",t),this.labels.push(t),t}_makeSlices(){return new g.TS(l.Bj.new({}),(()=>u.A._new(this._root,{themeTags:x.kE(this.slices.template.get("themeTags",[]),["venn","series"])},[this.slices.template])))}_makeLabels(){return new g.TS(l.Bj.new({}),(()=>c.J._new(this._root,{themeTags:x.kE(this.labels.template.get("themeTags",[]),["venn","series"])},[this.labels.template])))}processDataItem(e){if(super.processDataItem(e),null==e.get("fill")){let t=this.get("colors");t&&e.setRaw("fill",t.next())}this.makeSlice(e),this.makeLabel(e)}_prepareChildren(){if(super._prepareChildren(),this._valuesDirty||this._sizeDirty){const e=[];p.__(this.dataItems,(t=>{const r={},n=t.get("intersections");r.sets=n||[t.get("category")],r.size=t.get("valueWorking"),r.size>0&&e.push(r);const a=t.get("label"),i=t.get("slice");let s=!0;0==t.get("value")&&(s=!1,i&&i.setAll({x:this.width()/2,y:this.height()/2})),a&&a.setPrivate("visible",s)}));const t=e.toString();if(this._sets=t,e.length>0){let t=function(e,t){(t=t||{}).maxIterations=t.maxIterations||500;var r=t.initialLayout||E,n=t.lossFunction||S;e=function(e){e=e.slice();var t,r,n,a,i=[],s={};for(t=0;t<e.length;++t){var o=e[t];1==o.sets.length?i.push(o.sets[0]):2==o.sets.length&&(s[[n=o.sets[0],a=o.sets[1]]]=!0,s[[a,n]]=!0)}for(i.sort((function(e,t){return e>t})),t=0;t<i.length;++t)for(n=i[t],r=t+1;r<i.length;++r)[n,a=i[r]]in s||e.push({sets:[n,a],size:0});return e}(e);var a,i=r(e,t),s=[],o=[];for(a in i)i.hasOwnProperty(a)&&(s.push(i[a].x),s.push(i[a].y),o.push(a));for(var h=I((function(t){for(var r={},a=0;a<o.length;++a){var s=o[a];r[s]={x:t[2*a],y:t[2*a+1],radius:i[s].radius}}return n(r,e)}),s,t),l=h.x,u=0;u<o.length;++u)a=o[u],i[a].x=l[2*u],i[a].y=l[2*u+1];return i}(e);t=function(e,t,r){null===t&&(t=Math.PI/2);var n,a,i=[];for(a in e)if(e.hasOwnProperty(a)){var s=e[a];i.push({x:s.x,y:s.y,radius:s.radius,setid:a})}var o=function(e){function t(e){return e.parent!==e&&(e.parent=t(e.parent)),e.parent}e.map((function(e){e.parent=e}));for(var r=0;r<e.length;++r)for(var n=r+1;n<e.length;++n){var a=e[r].radius+e[n].radius;R(e[r],e[n])+1e-10<a&&(i=e[n],s=e[r],o=void 0,o=t(i),h=t(s),o.parent=h)}var i,s,o,h,l,u={};for(r=0;r<e.length;++r)(l=t(e[r]).parent.setid)in u||(u[l]=[]),u[l].push(e[r]);e.map((function(e){delete e.parent}));var f=[];for(l in u)u.hasOwnProperty(l)&&f.push(u[l]);return f}(i);for(n=0;n<o.length;++n){T(o[n],t,r);var h=H(o[n]);o[n].size=(h.xRange.max-h.xRange.min)*(h.yRange.max-h.yRange.min),o[n].bounds=h}o.sort((function(e,t){return t.size-e.size}));var l=(i=o[0]).bounds,u=(l.xRange.max-l.xRange.min)/50;function f(e,t,r){if(e){var n,a,s,o=e.bounds;t?n=l.xRange.max-o.xRange.min+u:(n=l.xRange.max-o.xRange.max,(s=(o.xRange.max-o.xRange.min)/2-(l.xRange.max-l.xRange.min)/2)<0&&(n+=s)),r?a=l.yRange.max-o.yRange.min+u:(a=l.yRange.max-o.yRange.max,(s=(o.yRange.max-o.yRange.min)/2-(l.yRange.max-l.yRange.min)/2)<0&&(a+=s));for(var h=0;h<e.length;++h)e[h].x+=n,e[h].y+=a,i.push(e[h])}}for(var c=1;c<o.length;)f(o[c],!0,!1),f(o[c+1],!1,!0),f(o[c+2],!0,!0),c+=3,l=H(i);var g={};for(n=0;n<i.length;++n)g[i[n].setid]=i[n];return g}(t,null,null),t=function(e,t,r,n){var a=[],i=[];for(var s in e)e.hasOwnProperty(s)&&(i.push(s),a.push(e[s]));t-=0,r-=0;var o=H(a),h=o.xRange,l=o.yRange;if(h.max==h.min||l.max==l.min)return console.log("not scaling solution: zero size detected"),e;for(var u=t/(h.max-h.min),f=r/(l.max-l.min),c=Math.min(f,u),g=(t-(h.max-h.min)*c)/2,x=(r-(l.max-l.min)*c)/2,p={},v=0;v<a.length;++v){var d=a[v];p[i[v]]={radius:c*d.radius,x:0+g+(d.x-h.min)*c,y:0+x+(d.y-l.min)*c}}return p}(t,this.innerWidth(),this.innerHeight());const r={};for(let e in t){let n=t[e],a=n.radius;const i=this.getDataItemByCategory(e);if(i){const t=i.get("slice"),s=i.get("fill");t._setDefault("fill",s),t._setDefault("stroke",s),this.updateLegendMarker(i),t.set("svgPath","M"+n.x+","+n.y+" m -"+a+", 0 a "+a+","+a+" 0 1,1 "+2*a+",0 a "+a+","+a+" 0 1,1 -"+2*a+",0"),r[e]=n}}let n=F(r,e);p.__(this.dataItems,(e=>{let t=e.get("category"),a=n[t];const i=e.get("intersections");if(i&&(t=i.toString(),a=n[t],a)){let t=i,n=[];for(let e=0;e<t.length;e++)n.push(r[t[e]]);let a=function(e){var t={};k(e,t);var r=t.arcs;if(0===r.length)return"M 0 0";if(1==r.length){var n=r[0].circle;return function(e,t,r){var n=[];return n.push("\nM",e,t),n.push("\nm",-r,0),n.push("\na",r,r,0,1,0,2*r,0),n.push("\na",r,r,0,1,0,2*-r,0),n.join(" ")}(n.x,n.y,n.radius)}for(var a=["\nM",r[0].p2.x,r[0].p2.y],i=0;i<r.length;++i){var s=r[i],o=s.circle.radius,h=s.width>o;a.push("\nA",o,o,0,h?1:0,1,s.p1.x,s.p1.y)}return a.join(" ")}(n),s=e.get("slice");const o=e.get("fill");s._setDefault("fill",o),s._setDefault("stroke",o),s.setAll({svgPath:a})}a&&e.get("label").setAll({x:a.x,y:a.y}),this.updateLegendValue(e)}))}this._updateHover()}}getDataItemByCategory(e){return p.I6(this.dataItems,(t=>t.get("category")==e))}showDataItem(e,t){const r=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return(0,n.sH)(this,void 0,void 0,(function*(){const n=[r.showDataItem.call(this,e,t)];v.Et(t)||(t=this.get("stateAnimationDuration",0));const a=this.get("stateAnimationEasing");let i=e.get("value");const s=e.animate({key:"valueWorking",to:i,duration:t,easing:a});s&&n.push(s.waitForStop());const o=e.get("label");o&&n.push(o.show(t));const h=e.get("slice");h&&n.push(h.show(t));const l=e.get("intersections");if(l&&p.__(l,(e=>{const r=this.getDataItemByCategory(e);r&&r.isHidden()&&this.showDataItem(r,t)})),!l){const r=e.get("category");p.__(this.dataItems,(n=>{const a=n.get("intersections");if(n!=e&&a){let e=!0;p.__(a,(t=>{const r=this.getDataItemByCategory(t);r&&r.isHidden()&&(e=!1)})),e&&-1!=a.indexOf(r)&&n.isHidden()&&this.showDataItem(n,t)}}))}yield Promise.all(n)}))}hideDataItem(e,t){const r=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return(0,n.sH)(this,void 0,void 0,(function*(){const n=[r.hideDataItem.call(this,e,t)],a=this.states.create("hidden",{});v.Et(t)||(t=a.get("stateAnimationDuration",this.get("stateAnimationDuration",0)));const i=a.get("stateAnimationEasing",this.get("stateAnimationEasing")),s=e.animate({key:"valueWorking",to:0,duration:t,easing:i});s&&n.push(s.waitForStop());const o=e.get("label");o&&n.push(o.hide(t));const h=e.get("slice");h&&(n.push(h.hide(t)),h.hideTooltip()),e.get("intersections")||p.__(this.dataItems,(r=>{const n=r.get("intersections");r!=e&&n&&-1!=n.indexOf(e.get("category"))&&this.hideDataItem(r,t)})),yield Promise.all(n)}))}disposeDataItem(e){super.disposeDataItem(e);let t=e.get("label");t&&(this.labels.removeValue(t),t.dispose());let r=e.get("slice");r&&(this.slices.removeValue(r),r.dispose())}updateLegendMarker(e){const t=e.get("slice");if(t){const r=e.get("legendDataItem");if(r){const e=r.get("markerRectangle");p.__(u.o,(r=>{e.set(r,t.get(r))}))}}}hoverDataItem(e){const t=e.get("slice");t&&!t.isHidden()&&t.hover()}unhoverDataItem(e){const t=e.get("slice");t&&t.unhover()}}Object.defineProperty(V,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Venn"}),Object.defineProperty(V,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:h.s.classNames.concat([V.className])})}}]);