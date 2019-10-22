!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function t(n){return r(2,n,function(r){return function(t){return n(r,t)}})}function e(n){return r(3,n,function(r){return function(t){return function(e){return n(r,t,e)}}})}function u(n){return r(4,n,function(r){return function(t){return function(e){return function(u){return n(r,t,e,u)}}}})}function i(n){return r(5,n,function(r){return function(t){return function(e){return function(u){return function(i){return n(r,t,e,u,i)}}}}})}function a(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function f(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function o(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function c(n,r,t,e,u,i){return 5===n.a?n.f(r,t,e,u,i):n(r)(t)(e)(u)(i)}function v(n,r,t){if("object"!=typeof n)return n===r?0:r>n?-1:1;if(void 0===n.$)return(t=v(n.a,r.a))?t:(t=v(n.b,r.b))?t:v(n.c,r.c);for(;n.b&&r.b&&!(t=v(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}function s(n,r){return{a:n,b:r}}function l(n){return n}function b(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}function d(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var t=g(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=g(n.a,r);return t}var h={$:0};function g(n,r){return{$:1,a:n,b:r}}var $=t(g);function m(n){for(var r=h,t=n.length;t--;)r=g(n[t],r);return r}var p=e(function(n,r,t){for(var e=Array(n),u=0;n>u;u++)e[u]=t(r+u);return e}),y=t(function(n,r){for(var t=Array(n),e=0;n>e&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,s(t,r)});function A(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var w=Math.ceil,j=Math.floor,_=Math.log,k=isNaN,N=t(function(n,r){return n+r}),C=e(function(n,r,t){for(var e=t.length;e--;){var u=t[e],i=t.charCodeAt(e);56320>i||i>57343||(u=t[--e]+u),r=a(n,l(u),r)}return r}),x=t(function(n,r){return r.split(n)}),E=e(function(n,r,t){return t.slice(n,r)}),T=t(function(n,r){return 0===r.indexOf(n)});function L(n){return{$:2,b:n}}L(function(n){return"number"!=typeof n?D("an INT",n):n>-2147483647&&2147483647>n&&(0|n)===n?Zn(n):!isFinite(n)||n%1?D("an INT",n):Zn(n)}),L(function(n){return"boolean"==typeof n?Zn(n):D("a BOOL",n)}),L(function(n){return"number"==typeof n?Zn(n):D("a FLOAT",n)}),L(function(n){return Zn(Y(n))});var F=L(function(n){return"string"==typeof n?Zn(n):n instanceof String?Zn(n+""):D("a STRING",n)}),O=t(function(n,r){return{$:6,d:n,b:r}});var q=t(function(n,r){return function(n,r){return{$:9,f:n,g:r}}(n,[r])}),B=t(function(n,r){return R(n,P(r))});function R(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?Zn(n.c):D("null",r);case 3:return M(r)?S(n.b,r,m):D("a LIST",r);case 4:return M(r)?S(n.b,r,z):D("an ARRAY",r);case 6:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return D("an OBJECT with a field named `"+t+"`",r);var e=R(n.b,r[t]);return _r(e)?e:Qn(a(Vn,t,e.a));case 7:var u=n.e;return M(r)?r.length>u?(e=R(n.b,r[u]),_r(e)?e:Qn(a(Xn,u,e.a))):D("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r):D("an ARRAY",r);case 8:if("object"!=typeof r||null===r||M(r))return D("an OBJECT",r);var i=h;for(var f in r)if(r.hasOwnProperty(f)){if(e=R(n.b,r[f]),!_r(e))return Qn(a(Vn,f,e.a));i=g(s(f,e.a),i)}return Zn(ar(i));case 9:for(var o=n.f,c=n.g,v=0;c.length>v;v++){if(e=R(c[v],r),!_r(e))return e;o=o(e.a)}return Zn(o);case 10:return e=R(n.b,r),_r(e)?R(n.h(e.a),r):e;case 11:for(var l=h,b=n.g;b.b;b=b.b){if(e=R(b.a,r),_r(e))return e;l=g(e.a,l)}return Qn(nr(ar(l)));case 1:return Qn(a(Un,n.a,Y(r)));case 0:return Zn(n.a)}}function S(n,r,t){for(var e=r.length,u=Array(e),i=0;e>i;i++){var f=R(n,r[i]);if(!_r(f))return Qn(a(Xn,i,f.a));u[i]=f.a}return Zn(t(u))}function M(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function z(n){return a(jr,n.length,function(r){return n[r]})}function D(n,r){return Qn(a(Un,"Expecting "+n,Y(r)))}function H(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return H(n.b,r.b);case 6:return n.d===r.d&&H(n.b,r.b);case 7:return n.e===r.e&&H(n.b,r.b);case 9:return n.f===r.f&&I(n.g,r.g);case 10:return n.h===r.h&&H(n.b,r.b);case 11:return I(n.g,r.g)}}function I(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;t>e;e++)if(!H(n[e],r[e]))return!1;return!0}function Y(n){return n}function P(n){return n}function G(n){return{$:0,a:n}}function J(n){return{$:2,b:n,c:null}}Y(null);var W=t(function(n,r){return{$:3,b:n,d:r}}),K=0;function Q(n){var r={$:0,e:K++,f:n,g:null,h:[]};return rn(r),r}function U(n){return J(function(r){r(G(Q(n)))})}function V(n,r){n.h.push(r),rn(n)}var X=t(function(n,r){return J(function(t){V(n,r),t(G(0))})}),Z=!1,nn=[];function rn(n){if(nn.push(n),!Z){for(Z=!0;n=nn.shift();)tn(n);Z=!1}}function tn(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,rn(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var en={};function un(n,r,t,e,u){return{b:n,c:r,d:t,e:e,f:u}}function an(n,r){var t={g:r,h:void 0},e=n.c,u=n.d,i=n.e,c=n.f;function v(n){return a(W,v,{$:5,b:function(r){var a=r.a;return 0===r.$?f(u,t,a,n):i&&c?o(e,t,a.i,a.j,n):f(e,t,i?a.i:a.j,n)}})}return t.h=Q(a(W,v,n.b))}var fn,on=t(function(n,r){return J(function(t){n.g(r),t(G(0))})}),cn=t(function(n,r){return a(X,n.h,{$:0,a:r})});function vn(n){return function(r){return{$:1,k:n,l:r}}}function sn(n){return{$:2,m:n}}function ln(n,r,t){var e={};for(var u in bn(!0,r,e,null),bn(!1,t,e,null),n)V(n[u],{$:"fx",a:e[u]||{i:h,j:h}})}function bn(n,r,t,e){switch(r.$){case 1:var u=r.k,i=function(n,t,e){function u(n){for(var r=e;r;r=r.q)n=r.p(n);return n}return a(n?en[t].e:en[t].f,u,r.l)}(n,u,e);return void(t[u]=function(n,r,t){return t=t||{i:h,j:h},n?t.i=g(r,t.i):t.j=g(r,t.j),t}(n,i,t[u]));case 2:for(var f=r.m;f.b;f=f.b)bn(n,f.a,t,e);return;case 3:return void bn(n,r.o,t,{p:r.n,q:e})}}var dn="undefined"!=typeof document?document:{};function hn(n,r){n.appendChild(r)}function gn(n){return{$:0,a:n}}var $n=t(function(n,r){return t(function(t,e){for(var u=[],i=0;e.b;e=e.b){var a=e.a;i+=a.b||0,u.push(a)}return i+=u.length,{$:1,c:r,d:jn(t),e:u,f:n,b:i}})})(void 0);t(function(n,r){return t(function(t,e){for(var u=[],i=0;e.b;e=e.b){var a=e.a;i+=a.b.b||0,u.push(a)}return i+=u.length,{$:2,c:r,d:jn(t),e:u,f:n,b:i}})})(void 0);var mn,pn=t(function(n,r){return{$:"a0",n:n,o:r}}),yn=t(function(n,r){return{$:"a1",n:n,o:r}}),An=t(function(n,r){return{$:"a2",n:n,o:r}}),wn=t(function(n,r){return{$:"a3",n:n,o:r}});function jn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,i=t.o;if("a2"!==e){var a=r[e]||(r[e]={});"a3"===e&&"class"===u?_n(a,u,i):a[u]=i}else"className"===u?_n(r,u,P(i)):r[u]=P(i)}return r}function _n(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function kn(n,r){var t=n.$;if(5===t)return kn(n.k||(n.k=n.m()),r);if(0===t)return dn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var i={j:u,p:r};return(a=kn(e,i)).elm_event_node_ref=i,a}if(3===t)return Nn(a=n.h(n.g),r,n.d),a;var a=n.f?dn.createElementNS(n.f,n.c):dn.createElement(n.c);fn&&"a"==n.c&&a.addEventListener("click",fn(a)),Nn(a,r,n.d);for(var f=n.e,o=0;f.length>o;o++)hn(a,kn(1===t?f[o]:f[o].b,r));return a}function Nn(n,r,t){for(var e in t){var u=t[e];"a1"===e?Cn(n,u):"a0"===e?Tn(n,r,u):"a3"===e?xn(n,u):"a4"===e?En(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}function Cn(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function xn(n,r){for(var t in r){var e=r[t];void 0!==e?n.setAttribute(t,e):n.removeAttribute(t)}}function En(n,r){for(var t in r){var e=r[t],u=e.f,i=e.o;void 0!==i?n.setAttributeNS(u,t,i):n.removeAttributeNS(u,t)}}function Tn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var i=t[u],a=e[u];if(i){if(a){if(a.q.$===i.$){a.q=i;continue}n.removeEventListener(u,a)}a=Ln(r,i),n.addEventListener(u,a,mn&&{passive:2>Cr(i)}),e[u]=a}else n.removeEventListener(u,a),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){mn=!0}}))}catch(n){}function Ln(n,r){function t(r){var e=t.q,u=R(e.a,r);if(_r(u)){for(var i,a=Cr(e),f=u.a,o=a?3>a?f.a:f.o:f,c=1==a?f.b:3==a&&f.R,v=(c&&r.stopPropagation(),(2==a?f.b:3==a&&f.O)&&r.preventDefault(),n);i=v.j;){if("function"==typeof i)o=i(o);else for(var s=i.length;s--;)o=i[s](o);v=v.p}v(o,c)}}return t.q=r,t}function Fn(n,r){return n.$==r.$&&H(n.a,r.a)}function On(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function qn(n,r,t,e){if(n!==r){var u=n.$,i=r.$;if(u!==i){if(1!==u||2!==i)return void On(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;t>u;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),i=1}switch(i){case 5:for(var a=n.l,f=r.l,o=a.length,c=o===f.length;c&&o--;)c=a[o]===f[o];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return qn(n.k,r.k,v,0),void(v.length>0&&On(t,1,e,v));case 4:for(var s=n.j,l=r.j,b=!1,d=n.k;4===d.$;)b=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=r.k;4===h.$;)b=!0,"object"!=typeof l?l=[l,h.j]:l.push(h.j),h=h.k;return b&&s.length!==l.length?void On(t,0,e,r):((b?function(n,r){for(var t=0;n.length>t;t++)if(n[t]!==r[t])return!1;return!0}(s,l):s===l)||On(t,2,e,l),void qn(d,h,t,e+1));case 0:return void(n.a!==r.a&&On(t,3,e,r.a));case 1:return void Bn(n,r,t,e,Sn);case 2:return void Bn(n,r,t,e,Mn);case 3:if(n.h!==r.h)return void On(t,0,e,r);var g=Rn(n.d,r.d);g&&On(t,4,e,g);var $=r.i(n.g,r.g);return void($&&On(t,5,e,$))}}}function Bn(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var i=Rn(n.d,r.d);i&&On(t,4,e,i),u(n,r,t,e)}else On(t,0,e,r)}function Rn(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var i=n[u],a=r[u];i===a&&"value"!==u&&"checked"!==u||"a0"===t&&Fn(i,a)||((e=e||{})[u]=a)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var f=Rn(n[u],r[u]||{},u);f&&((e=e||{})[u]=f)}for(var o in r)o in n||((e=e||{})[o]=r[o]);return e}function Sn(n,r,t,e){var u=n.e,i=r.e,a=u.length,f=i.length;a>f?On(t,6,e,{v:f,i:a-f}):f>a&&On(t,7,e,{v:a,e:i});for(var o=f>a?a:f,c=0;o>c;c++){var v=u[c];qn(v,i[c],t,++e),e+=v.b||0}}function Mn(n,r,t,e){for(var u=[],i={},a=[],f=n.e,o=r.e,c=f.length,v=o.length,s=0,l=0,b=e;c>s&&v>l;){var d=(N=f[s]).a,h=(C=o[l]).a,g=N.b,$=C.b,m=void 0,p=void 0;if(d!==h){var y=f[s+1],A=o[l+1];if(y){var w=y.a,j=y.b;p=h===w}if(A){var _=A.a,k=A.b;m=d===_}if(m&&p)qn(g,k,u,++b),Dn(i,u,d,$,l,a),b+=g.b||0,Hn(i,u,d,j,++b),b+=j.b||0,s+=2,l+=2;else if(m)b++,Dn(i,u,h,$,l,a),qn(g,k,u,b),b+=g.b||0,s+=1,l+=2;else if(p)Hn(i,u,d,g,++b),b+=g.b||0,qn(j,$,u,++b),b+=j.b||0,s+=2,l+=1;else{if(!y||w!==_)break;Hn(i,u,d,g,++b),Dn(i,u,h,$,l,a),b+=g.b||0,qn(j,k,u,++b),b+=j.b||0,s+=2,l+=2}}else qn(g,$,u,++b),b+=g.b||0,s++,l++}for(;c>s;){var N;Hn(i,u,(N=f[s]).a,g=N.b,++b),b+=g.b||0,s++}for(;v>l;){var C,x=x||[];Dn(i,u,(C=o[l]).a,C.b,void 0,x),l++}(u.length>0||a.length>0||x)&&On(t,8,e,{w:u,x:a,y:x})}var zn="_elmW6BL";function Dn(n,r,t,e,u,i){var a=n[t];if(!a)return i.push({r:u,A:a={c:0,z:e,r:u,s:void 0}}),void(n[t]=a);if(1===a.c){i.push({r:u,A:a}),a.c=2;var f=[];return qn(a.z,e,f,a.r),a.r=u,void(a.s.s={w:f,A:a})}Dn(n,r,t+zn,e,u,i)}function Hn(n,r,t,e,u){var i=n[t];if(i){if(0===i.c){i.c=2;var a=[];return qn(e,i.z,a,u),void On(r,9,u,{w:a,A:i})}Hn(n,r,t+zn,e,u)}else{var f=On(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:f}}}function In(n,r,t,e){return 0===t.length?n:(function n(r,t,e,u){!function r(t,e,u,i,a,f,o){for(var c=u[i],v=c.r;v===a;){var s=c.$;if(1===s)n(t,e.k,c.s,o);else if(8===s)c.t=t,c.u=o,(l=c.s.w).length>0&&r(t,e,l,0,a,f,o);else if(9===s){c.t=t,c.u=o;var l,b=c.s;b&&(b.A.s=t,(l=b.w).length>0&&r(t,e,l,0,a,f,o))}else c.t=t,c.u=o;if(!(c=u[++i])||(v=c.r)>f)return i}var d=e.$;if(4===d){for(var h=e.k;4===h.$;)h=h.k;return r(t,h,u,i,a+1,f,t.elm_event_node_ref)}for(var g=e.e,$=t.childNodes,m=0;g.length>m;m++){var p=1===d?g[m]:g[m].b,y=++a+(p.b||0);if(!(a>v||v>y||(c=u[i=r($[m],p,u,i,a,y,o)])&&(v=c.r)<=f))return i;a=y}return i}(r,t,e,0,0,t.b,u)}(n,r,t,e),Yn(n,t))}function Yn(n,r){for(var t=0;r.length>t;t++){var e=r[t],u=e.t,i=Pn(u,e);u===n&&(n=i)}return n}function Pn(n,r){switch(r.$){case 0:return function(n){var t=n.parentNode,e=kn(r.s,r.u);return e.elm_event_node_ref||(e.elm_event_node_ref=n.elm_event_node_ref),t&&e!==n&&t.replaceChild(e,n),e}(n);case 4:return Nn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return Yn(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;t.i>e;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,i=n.childNodes[e=t.v];u.length>e;e++)n.insertBefore(kn(u[e],r.u),i);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var a=t.A;return void 0!==a.r&&n.parentNode.removeChild(n),a.s=Yn(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(n){for(var t=dn.createDocumentFragment(),e=0;n.length>e;e++){var u=n[e].A;hn(t,2===u.c?u.s:kn(u.z,r.u))}return t}}(t.y,r);n=Yn(n,t.w);for(var u=t.x,i=0;u.length>i;i++){var a=u[i],f=a.A,o=2===f.c?f.s:kn(f.z,r.u);n.insertBefore(o,n.childNodes[a.r])}return e&&hn(n,e),n}(n,r);case 5:return r.s(n);default:A(10)}}var Gn=u(function(n,r,t,e){return function(n,r,t,e,u,i){var f=a(B,n,Y(r?r.flags:void 0));_r(f)||A(2);var o={},c=(f=t(f.a)).a,v=i(l,c),s=function(n,r){var t;for(var e in en){var u=en[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=an(u,r)}return t}(o,l);function l(n,r){v(c=(f=a(e,n,c)).a,r),ln(o,f.b,u(c))}return ln(o,f.b,u(c)),s?{ports:s}:{}}(r,e,n.aN,n.a_,n.aY,function(r,t){var u=n.a$,i=e.node,o=function n(r){if(3===r.nodeType)return gn(r.textContent);if(1!==r.nodeType)return gn("");for(var t=h,e=r.attributes,u=e.length;u--;){var i=e[u];t=g(a(wn,i.name,i.value),t)}var o=r.tagName.toLowerCase(),c=h,v=r.childNodes;for(u=v.length;u--;)c=g(n(v[u]),c);return f($n,o,t,c)}(i);return function(n,r){r(n);var t=0;function e(){t=1===t?0:(Wn(e),r(n),1)}return function(u,i){n=u,i?(r(n),2===t&&(t=1)):(0===t&&Wn(e),t=2)}}(t,function(n){var t=u(n),e=function(n,r){var t=[];return qn(n,r,t,0),t}(o,t);i=In(i,o,e,r),o=t})})}),Jn="undefined"!=typeof cancelAnimationFrame?cancelAnimationFrame:function(n){clearTimeout(n)},Wn="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Kn=$,Qn=function(n){return{$:1,a:n}},Un=t(function(n,r){return{$:3,a:n,b:r}}),Vn=t(function(n,r){return{$:0,a:n,b:r}}),Xn=t(function(n,r){return{$:1,a:n,b:r}}),Zn=function(n){return{$:0,a:n}},nr=function(n){return{$:2,a:n}},rr=function(n){return{$:0,a:n}},tr={$:1},er=t(function(n,r){return m(a(x,n,r))}),ur=e(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,i=a(n,t.a,r);n=u,r=i,t=e}}),ir=function(n){var r=n.charCodeAt(0);return 55296>r||r>56319?r:1024*(r-55296)+n.charCodeAt(1)-56320+65536},ar=function(n){return f(ur,Kn,h,n)},fr=function(n){var r=n.charCodeAt(0);return r?rr(55296>r||r>56319?s(l(n[0]),n.slice(1)):s(l(n[0]+n[1]),n.slice(2))):tr},or=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),cr=[],vr=w,sr=t(function(n,r){return _(r)/_(n)}),lr=vr(a(sr,2,32)),br=o(or,0,lr,cr,cr),dr=p,hr=j,gr=function(n){return n.length},$r=t(function(n,r){return v(n,r)>0?n:r}),mr=y,pr=t(function(n,r){for(;;){var t=a(mr,32,n),e=t.b,u=a(Kn,{$:0,a:t.a},r);if(!e.b)return ar(u);n=e,r=u}}),yr=t(function(n,r){for(;;){var t=vr(r/32);if(1===t)return a(mr,32,n).a;n=a(pr,n,h),r=t}}),Ar=t(function(n,r){if(r.e){var t=32*r.e,e=hr(a(sr,32,t-1)),u=n?ar(r.h):r.h,i=a(yr,u,r.e);return o(or,gr(r.g)+t,a($r,5,e*lr),i,r.g)}return o(or,gr(r.g),lr,cr,r.g)}),wr=i(function(n,r,t,e,u){for(;;){if(0>r)return a(Ar,!1,{h:e,e:t/32|0,g:u});var i={$:1,a:f(dr,32,r,n)};n=n,r-=32,t=t,e=a(Kn,i,e),u=u}}),jr=t(function(n,r){if(n>0){var t=n%32;return c(wr,r,n-t-32,n,h,f(dr,t,n-t,r))}return br}),_r=function(n){return!n.$},kr=q,Nr=function(n){return{$:0,a:n}},Cr=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},xr=function(n){return n.length},Er=E,Tr=t(function(n,r){return 1>n?r:f(Er,n,xr(r),r)}),Lr=T,Fr=G,Or=Fr(0),qr=u(function(n,r,t,e){if(e.b){var u=e.a,i=e.b;if(i.b){var c=i.a,v=i.b;if(v.b){var s=v.a,l=v.b;if(l.b){var b=l.b;return a(n,u,a(n,c,a(n,s,a(n,l.a,t>500?f(ur,n,r,ar(b)):o(qr,n,r,t+1,b)))))}return a(n,u,a(n,c,a(n,s,r)))}return a(n,u,a(n,c,r))}return a(n,u,r)}return r}),Br=e(function(n,r,t){return o(qr,n,r,0,t)}),Rr=t(function(n,r){return f(Br,t(function(r,t){return a(Kn,n(r),t)}),h,r)}),Sr=W,Mr=t(function(n,r){return a(Sr,function(r){return Fr(n(r))},r)}),zr=e(function(n,r,t){return a(Sr,function(r){return a(Sr,function(t){return Fr(a(n,r,t))},t)},r)}),Dr=function(n){return f(Br,zr(Kn),Fr(h),n)},Hr=on,Ir=t(function(n,r){var t=r;return U(a(Sr,Hr(n),t))});en.Task=un(Or,e(function(n,r){return a(Mr,function(){return 0},Dr(a(Rr,Ir(n),r)))}),e(function(){return Fr(0)}),t(function(n,r){return a(Mr,n,r)})),vn("Task");var Yr=Gn,Pr=sn(h),Gr=function(){return s({v:0,H:15e3},Pr)},Jr=function(n){return{$:0,a:n}},Wr=sn(h),Kr=function(n){return{$:1,a:n}},Qr=e(function(n,r,t){return{N:t,as:r,ay:n}}),Ur=Fr(f(Qr,h,tr,0)),Vr=J(function(n){n(G(Date.now()))}),Xr=J(function(n){var r=Wn(function(){n(G(Date.now()))});return function(){Jn(r)}}),Zr=cn,nt=U,rt=e(function(n,r,t){var e,u=t.as,i=t.N,o=s(u,r);return 1===o.a.$?o.b.b?a(Sr,function(n){return a(Sr,function(t){return Fr(f(Qr,r,rr(n),t))},Vr)},nt(a(Sr,Zr(n),Xr))):Ur:o.b.b?Fr(f(Qr,r,u,i)):a(Sr,function(){return Ur},(e=o.a.a,J(function(n){var r=e.f;2===r.$&&r.c&&r.c(),e.f=null,n(G(0))})))}),tt=function(n){return n},et=e(function(n,r,t){var e=t.ay,u=t.N,i=function(t){return a(Hr,n,(0,t.a)(t.$?r-u:tt(r)))};return a(Sr,function(n){return a(Sr,function(){return Fr(f(Qr,e,rr(n),r))},Dr(a(Rr,i,e)))},nt(a(Sr,Zr(n),Xr)))}),ut=e(function(n,r,t){return n(r(t))});en["Browser.AnimationManager"]=un(Ur,rt,et,0,t(function(n,r){return r.$?Kr(a(ut,n,r.a)):{$:0,a:a(ut,n,r.a)}}));var it,at=vn("Browser.AnimationManager"),ft=t(function(n,r){switch(n.$){case 0:return s(b(r,{v:r.v+n.a}),Pr);case 1:return s(b(r,{H:n.a}),Pr);default:return Gr()}}),ot={$:2},ct=$n("div"),vt=yn,st=t(function(n,r){return a(ct,a(Kn,a(vt,"padding","0.5rem"),n),r)}),lt=$n("button"),bt=function(n){return{$:1,a:n}},dt=function(n){return n+""},ht=$n("input"),gt=function(n){return n===1/0||n===-1/0},$t=Y,mt=t(function(n,r){return a(An,n,$t(r))}),pt=mt("max"),yt=mt("min"),At=function(n){return s(n,!0)},wt=pn,jt=t(function(n,r){return a(wt,n,{$:1,a:r})}),_t=O,kt=F,Nt=a(t(function(n,r){return f(Br,_t,r,n)}),m(["target","value"]),kt),Ct=mt("type"),xt=mt("value"),Et=t(function(n,r){return r.$?n:r.a}),Tt=t(function(n,r){return a(ht,d(m([Ct("range"),yt("0"),pt("30000"),xt(gt(r)?"30000":dt(r)),("100",a(mt,"step","100")),(t=a(ut,bt,function(n){return a(Et,0,function(n){if(0===n.length||/[\sxbo]/.test(n))return tr;var r=+n;return r==r?rr(r):tr}(n))}),a(jt,"input",a(kr,At,a(kr,t,Nt))))]),n),h);var t}),Lt=t(function(n,r){return a(wt,n,{$:0,a:r})}),Ft=$n("progress"),Ot=t(function(n,r){return a(Ft,d(m([pt("100"),xt(gt(r)?"100":dt(r))]),n),h)}),qt=function(n){return 0>n?-n:n},Bt=t(function(n,r){for(;;){if(!r.b)return!1;var t=r.b;if(n(r.a))return!0;n=n,r=t}}),Rt=C,St=t(function(n,r){return d(n&&a(Bt,function(n){return"0"!==n&&"."!==n},f(Rt,Kn,h,r))?"-":"",r)}),Mt=N,zt=function(n){var r=n.a,t=n.b;if("9"===r){var e=fr(t);return 1===e.$?"01":a(Mt,"0",zt(e.a))}var u,i=ir(r);return i>=48&&57>i?a(Mt,l(0>(u=i+1)||u>1114111?"�":u>65535?String.fromCharCode(Math.floor((u-=65536)/1024)+55296,u%1024+56320):String.fromCharCode(u)),t):"0"},Dt=k,Ht=t(function(n,r){return r.$?tr:rr(n(r.a))}),It=function(n){return a(Mt,n,"")},Yt=e(function(n,r,t){return n>0?f(Yt,n>>1,d(r,r),1&n?d(t,r):t):t}),Pt=t(function(n,r){return f(Yt,n,r,"")}),Gt=e(function(n,r,t){return d(t,a(Pt,n-xr(t),It(r)))}),Jt=function(n){for(var r=n.length,t=Array(r),e=0;r>e;){var u=n.charCodeAt(e);55296>u||u>56319?(t[r-e]=n[e],e++):(t[r-e]=n[e+1],t[r-++e]=n[e-1],e++)}return t.join("")},Wt=function(n){var r=a(er,".",n);return r.b?s(r.a,r.b.b?r.b.a:"0"):s("0","0")},Kt=t(function(n,r){var t=r.b;return s(n(r.a),t)}),Qt=e(function(n,r,t){if(gt(t)||Dt(t))return dt(t);var e=0>t,u=Wt(function(n){var r=a(er,"e",dt(qt(n)));if(r.b){if(r.b.b){var t=r.a,e=r.b.a,u=a(Et,0,function(n){for(var r=0,t=n.charCodeAt(0),e=43==t||45==t?1:0,u=e;n.length>u;++u){var i=n.charCodeAt(u);if(48>i||i>57)return tr;r=10*r+i-48}return u==e?tr:rr(45==t?-r:r)}(a(Lr,"+",e)?a(Tr,1,e):e)),i=Wt(t),o=d(i.a,i.b),c=0>u?a(Et,"0",a(Ht,function(n){return n.a+"."+n.b},a(Ht,Kt(It),fr(d(a(Pt,qt(u),"0"),o))))):f(Gt,u+1,"0",o);return d(0>n?"-":"",c)}return d(0>n?"-":"",t=r.a)}return""}(qt(t))),i=u.a,o=u.b,c=xr(i)+r,s=d(a(Pt,1-c,"0"),f(Gt,c,"0",d(i,o))),l=xr(s),b=a($r,1,c),h=a(n,e,f(Er,b,l,s)),g=f(Er,0,b,s),$=h?Jt(a(Et,"1",a(Ht,zt,fr(Jt(g))))):g,m=xr($),p="0"===$?$:r>0?0>v(r,xr(o))?f(Er,0,m-r,$)+"."+f(Er,m-r,m,$):d(i+".",f(Gt,r,"0",o)):d($,a(Pt,qt(r),"0"));return a(St,e,p)})(t(function(n,r){var t,e=fr(r);return 1!==e.$&&("5"===e.a.a?""!==e.a.b||!n:(t=ir(e.a.a))>53&&n||t>=53&&!n)})),Ut=$n("span"),Vt=gn;it={Tasks:{Timer:{Main:{init:Yr({aN:Gr,aY:function(n){return 0>v(n.v,n.H)?at(Kr(Jr)):Wr},a_:ft,a$:function(n){var r,t=n.v,e=n.H,u=100*t/e;return a(ct,m([a(vt,"display","flex"),a(vt,"flex-direction","column")]),m([a(st,m([a(vt,"display","flex"),a(vt,"align-items","center")]),m([a(Ut,m([a(vt,"margin-right","0.5rem")]),m([Vt("Elapsed time:")])),a(Ot,m([a(vt,"flex","1")]),u)])),a(st,h,m([Vt(a(Qt,1,t/1e3)+"s")])),a(st,m([a(vt,"display","flex"),a(vt,"align-items","center")]),m([a(Ut,m([a(vt,"margin-right","0.5rem")]),m([Vt("Duration:")])),a(Tt,m([a(vt,"flex","1")]),e)])),a(st,h,m([a(lt,m([a(vt,"width","100%"),(r=ot,a(Lt,"click",Nr(r)))]),m([Vt("Reset")]))]))]))}})(Nr(0))(0)}}}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?A(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,it):n.Elm=it}(this);