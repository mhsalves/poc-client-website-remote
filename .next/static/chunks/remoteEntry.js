!function(){"use strict";var e,t,n,r,o,u,i,f,c,a,l,s,d,p,h,m,v,b,g,y,S,w,j={855:function(e,t,n){var r={"./hooks":function(){return n.e(704).then(function(){return function(){return n(704)}})},"./Timer":function(){return n.e(394).then(function(){return function(){return n(394)}})}},o=function(e,t){return n.R=t,t=n.o(r,e)?r[e]():Promise.resolve().then(function(){throw Error('Module "'+e+'" does not exist in container.')}),n.R=void 0,t},u=function(e,t){if(n.S){var r="default",o=n.S[r];if(o&&o!==e)throw Error("Container initialization failed as it has already been initialized with a different share scope");return n.S[r]=e,n.I(r,t)}};n.d(t,{get:function(){return o},init:function(){return u}})},759:function(){}},k={};function x(e){var t=k[e];if(void 0!==t)return t.exports;var n=k[e]={exports:{}},r=!0;try{j[e](n,n.exports,x),r=!1}finally{r&&delete k[e]}return n.exports}x.m=j,x.c=k,x.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(t,{a:t}),t},x.d=function(e,t){for(var n in t)x.o(t,n)&&!x.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},x.f={},x.e=function(e){return Promise.all(Object.keys(x.f).reduce(function(t,n){return x.f[n](e,t),t},[]))},x.u=function(e){return"static/chunks/"+e+"."+({394:"c615ec64efa743a1",521:"c7b21deca1f4a230",704:"7f4a0a44c82ce02f",893:"2c3a07b86016c7c6"})[e]+"-"+({394:"c615ec64efa743a1",521:"c7b21deca1f4a230",704:"7f4a0a44c82ce02f",893:"2c3a07b86016c7c6"})[e]+"-fed.js"},x.miniCssF=function(e){},x.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),x.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="remote-module:",x.l=function(n,r,o,u){if(e[n]){e[n].push(r);return}if(void 0!==o)for(var i,f,c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var l=c[a];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+o){i=l;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,x.nc&&i.setAttribute("nonce",x.nc),i.setAttribute("data-webpack",t+o),i.src=x.tu(n)),e[n]=[r];var s=function(t,r){i.onerror=i.onload=null,clearTimeout(d);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach(function(e){return e(r)}),t)return t(r)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),f&&document.head.appendChild(i)},x.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},x.S={},n={},r={},x.I=function(e,t){t||(t=[]);var o=r[e];if(o||(o=r[e]={}),!(t.indexOf(o)>=0)){if(t.push(o),n[e])return n[e];x.o(x.S,e)||(x.S[e]={});var u,i,f,c,a,l=x.S[e],s="remote-module",d=[];return"default"===e&&(i="18.2.0",(a=(c=l[u="react/jsx-runtime"]=l[u]||{})[i])&&(a.loaded||(!f!=!a.eager?!f:!(s>a.from)))||(c[i]={get:function(){return x.e(893).then(function(){return function(){return x(893)}})},from:s,eager:!!f})),d.length?n[e]=Promise.all(d).then(function(){return n[e]=1}):n[e]=1}},x.tt=function(){return void 0===o&&(o={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("nextjs#bundler",o))),o},x.tu=function(e){return x.tt().createScriptURL(e)},function(){x.g.importScripts&&(e=x.g.location+"");var e,t=x.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),x.p=e+"../../"}(),u=function(e){var t=function(e){return e.split(".").map(function(e){return+e==e?+e:e})},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=n[1]?t(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,t(n[2]))),n[3]&&(r.push([]),r.push.apply(r,t(n[3]))),r},i=function(e,t){e=u(e),t=u(t);for(var n=0;;){if(n>=e.length)return n<t.length&&"u"!=(typeof t[n])[0];var r=e[n],o=(typeof r)[0];if(n>=t.length)return"u"==o;var i=t[n],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&r!=i)return r<i;n++}},f=function(e){var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var r=1,o=1;o<e.length;o++)r--,n+="u"==(typeof(i=e[o]))[0]?"-":(r>0?".":"")+(r=2,i);return n}var u=[];for(o=1;o<e.length;o++){var i=e[o];u.push(0===i?"not("+c()+")":1===i?"("+c()+" || "+c()+")":2===i?u.pop()+" "+u.pop():f(i))}return c();function c(){return u.pop().replace(/^\((.+)\)$/,"$1")}},c=function(e,t){if(0 in e){t=u(t);var n=e[0],r=n<0;r&&(n=-n-1);for(var o=0,i=1,f=!0;;i++,o++){var a,l,s=i<e.length?(typeof e[i])[0]:"";if(o>=t.length||"o"==(l=(typeof(a=t[o]))[0]))return!f||("u"==s?i>n&&!r:""==s!=r);if("u"==l){if(!f||"u"!=s)return!1}else if(f){if(s==l){if(i<=n){if(a!=e[i])return!1}else{if(r?a>e[i]:a<e[i])return!1;a!=e[i]&&(f=!1)}}else if("s"!=s&&"n"!=s){if(r||i<=n)return!1;f=!1,i--}else{if(i<=n||l<s!=r)return!1;f=!1}}else"s"!=s&&"n"!=s&&(f=!1,i--)}}var d=[],p=d.pop.bind(d);for(o=1;o<e.length;o++){var h=e[o];d.push(1==h?p()|p():2==h?p()&p():h?c(h,t):!p())}return!!p()},a=function(e,t){var n=x.S[e];if(!n||!x.o(n,t))throw Error("Shared module "+t+" doesn't exist in shared scope "+e);return n},l=function(e,t){var n=e[t];return Object.keys(n).reduce(function(e,t){return!e||!n[e].loaded&&i(e,t)?t:e},0)},s=function(e,t,n,r){var o=l(e,n);return d(e[n][o])},d=function(e){return e.loaded=1,e.get()},h=(p=function(e){return function(t,n,r,o){var u=x.I(t);return u&&u.then?u.then(e.bind(e,t,x.S[t],n,r,o)):e(t,x.S[t],n,r,o)}})(function(e,t,n){return a(e,n),s(t,e,n)}),m=p(function(e,t,n,r){return t&&x.o(t,n)?s(t,e,n):r()}),v={},b={5:function(){return h("default","react")},807:function(){return m("default","react/jsx-runtime",function(){return x.e(521).then(function(){return function(){return x(893)}})})}},g={394:[5,807],704:[5],893:[5]},x.f.consumes=function(e,t){x.o(g,e)&&g[e].forEach(function(e){if(x.o(v,e))return t.push(v[e]);var n=function(t){v[e]=0,x.m[e]=function(n){delete x.c[e],n.exports=t()}},r=function(t){delete v[e],x.m[e]=function(n){throw delete x.c[e],t}};try{var o=b[e]();o.then?t.push(v[e]=o.then(n).catch(r)):n(o)}catch(e){r(e)}})},y={956:0},x.f.j=function(e,t){var n=x.o(y,e)?y[e]:void 0;if(0!==n){if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=y[e]=[t,r]});t.push(n[2]=r);var o=x.p+x.u(e),u=Error();x.l(o,function(t){if(x.o(y,e)&&(0!==(n=y[e])&&(y[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}},"chunk-"+e,e)}}},S=function(e,t){var n,r,o=t[0],u=t[1],i=t[2],f=0;if(o.some(function(e){return 0!==y[e]})){for(n in u)x.o(u,n)&&(x.m[n]=u[n]);i&&i(x)}for(e&&e(t);f<o.length;f++)r=o[f],x.o(y,r)&&y[r]&&y[r][0](),y[r]=0},(w=self["remote-modulechunkLoader"]=self["remote-modulechunkLoader"]||[]).forEach(S.bind(null,0)),w.push=S.bind(null,w.push.bind(w)),x(759);var E=x(855);window["remote-module"]=E}();