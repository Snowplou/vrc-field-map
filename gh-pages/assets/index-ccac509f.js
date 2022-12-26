(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function _(){}function re(e){return e()}function J(){return Object.create(null)}function D(e){e.forEach(re)}function ie(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function fe(e){return Object.keys(e).length===0}function de(e,t){e.appendChild(t)}function M(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode&&e.parentNode.removeChild(e)}function R(e){return document.createElement(e)}function me(e){return document.createTextNode(e)}function le(){return me(" ")}function T(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _e(e){return Array.from(e.childNodes)}function Q(e,t,n,s){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}let C;function P(e){C=e}function ae(){if(!C)throw new Error("Function called outside component initialization");return C}function he(e){ae().$$.on_mount.push(e)}function pe(e){ae().$$.on_destroy.push(e)}const S=[],W=[],j=[],Z=[],ye=Promise.resolve();let F=!1;function ge(){F||(F=!0,ye.then(ue))}function q(e){j.push(e)}const I=new Set;let O=0;function ue(){const e=C;do{for(;O<S.length;){const t=S[O];O++,P(t),we(t.$$)}for(P(null),S.length=0,O=0;W.length;)W.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];I.has(n)||(I.add(n),n())}j.length=0}while(S.length);for(;Z.length;)Z.pop()();F=!1,I.clear(),P(e)}function we(e){if(e.fragment!==null){e.update(),D(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const N=new Set;let ve;function U(e,t){e&&e.i&&(N.delete(e),e.i(t))}function ee(e,t,n,s){if(e&&e.o){if(N.has(e))return;N.add(e),ve.c.push(()=>{N.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function te(e){e&&e.c()}function H(e,t,n,s){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),s||q(()=>{const l=e.$$.on_mount.map(re).filter(ie);e.$$.on_destroy?e.$$.on_destroy.push(...l):D(l),e.$$.on_mount=[]}),r.forEach(q)}function V(e,t){const n=e.$$;n.fragment!==null&&(D(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function be(e,t){e.$$.dirty[0]===-1&&(S.push(e),ge(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,s,o,r,l,y=[-1]){const g=C;P(e);const i=e.$$={fragment:null,ctx:[],props:r,update:_,not_equal:o,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:J(),dirty:y,skip_bound:!1,root:t.target||g.$$.root};l&&l(i.root);let m=!1;if(i.ctx=n?n(e,t.props||{},(a,L,...A)=>{const w=A.length?A[0]:L;return i.ctx&&o(i.ctx[a],i.ctx[a]=w)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](w),m&&be(e,a)),L}):[],i.update(),m=!0,D(i.before_update),i.fragment=s?s(i.ctx):!1,t.target){if(t.hydrate){const a=_e(t.target);i.fragment&&i.fragment.l(a),a.forEach(k)}else i.fragment&&i.fragment.c();t.intro&&U(e.$$.fragment),H(e,t.target,t.anchor,t.customElement),ue()}P(g)}class G{$destroy(){V(this,1),this.$destroy=_}$on(t,n){if(!ie(n))return _;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(t){this.$$set&&!fe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function $e(e){let t;return{c(){t=R("div"),T(t,"class","svelte-ubvzns")},m(n,s){M(n,t,s)},p:_,i:_,o:_,d(n){n&&k(t)}}}class Ee extends G{constructor(t){super(),X(this,t,null,$e,K,{})}}const ke="modulepreload",Le=function(e){return"/"+e},ne={},ce=function(t,n,s){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=Le(r),r in ne)return;ne[r]=!0;const l=r.endsWith(".css"),y=l?'[rel="stylesheet"]':"";if(!!s)for(let m=o.length-1;m>=0;m--){const a=o[m];if(a.href===r&&(!l||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${y}`))return;const i=document.createElement("link");if(i.rel=l?"stylesheet":ke,l||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),l)return new Promise((m,a)=>{i.addEventListener("load",m),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},z={render:new Map,postrender:new Map,update:new Map},Y=new Map,h=Symbol("ObjectCallbacks"),x=Symbol("ObjectID");let Se=0;function Be(e){return class extends e{constructor(...t){super(...t),this[x]=Se++,Y.set(this[x],this);const n=e.prototype[h];n&&n.forEach((s,o)=>{z[o].set(this[x],r=>s.apply(this,[r]))})}}}const p=Symbol("CollisionBoxes");function De(e,t,n,s){return function(o){o.prototype[p]||(o.prototype[p]=[]),o.prototype[p].push([0,e,t,n,s])}}function Ie(e,t,n){return function(s){s.prototype[p]||(s.prototype[p]=[]),s.prototype[p].push([1,e,t,n])}}function Me(e,t,n){t-=e.x,n-=e.y;for(const s of e[p])if(s[0]==0&&s[1]<t&&s[2]<n&&s[1]+s[3]>t&&s[2]+s[4]>n||s[0]==1&&(t-s[1])**2+(n-s[2])**2<s[3]**2)return!0;return!1}let b=-1;function Fe(e){return class extends e{constructor(...t){super(...t),this[h]||(this[h]=new Map);const n=this[h].get("update");this[h].set("update",s=>{b==-1&&s.mouse_button==0&&this[p]&&Me(this,s.mouse_x,s.mouse_y)&&(b=this[x]),n&&n(s)})}}}function qe(e){return(t,n,s)=>{t[h]||(t[h]=new Map),t[h].set(e,s.value)}}function Pe(e){z.render.forEach(t=>{t(e)}),z.postrender.forEach(t=>{t(e)})}function Ce(e){if(b!=-1&&e.mouse_button==0){const t=Y.get(b);t.x=e.mouse_x,t.y=e.mouse_y,Y.set(b,t)}else e.mouse_button!=0&&(b=-1);z.update.forEach(t=>{t(e)})}const u=5,f=144;let B=!1,$=100,E=100,d=1,se=0,oe=0,v=d;function Ae(e){e.mouse_button==1&&($+=e.mouse_x-se,E+=e.mouse_y-oe,B=!0),d=e.wheel*-1,d=Math.min(Math.max(.75,d),4),v-d!=0&&($-=(f*u*d-f*u*v)*((e.mouse_x-$)/v/u/144),E-=(f*u*d-f*u*v)*((e.mouse_y-E)/v/u/144),B=!0),v=d,se=e.mouse_x,oe=e.mouse_y;const t={...e,mouse_x:(e.mouse_x-$)/d,mouse_y:(e.mouse_y-E)/d};Ce(t)}const Oe=new Promise(async e=>{e(new(await ce(()=>import("./spin-up-003899cd.js"),[])).SpinUp)});new Promise(async e=>{e(new(await ce(()=>import("./path-907313b7.js"),[])).Path)});async function je(e){e.save(),e.translate($,E),e.scale(d,d),e.fillStyle="#777777",e.fillRect(0,0,f*u,f*u),e.beginPath();for(let t=1;t<6;t++)e.moveTo(f*u*t/6,0),e.lineTo(f*u*t/6,f*u);for(let t=1;t<6;t++)e.moveTo(0,f*u*t/6),e.lineTo(f*u,f*u*t/6);e.lineWidth=1*u,e.strokeStyle="#7C7C7C",e.stroke(),(await Oe).draw_static(e),e.strokeStyle="#505050",e.lineWidth=10*u,e.beginPath(),e.rect(e.lineWidth/-2,e.lineWidth/-2,f*u+e.lineWidth,f*u+e.lineWidth),e.stroke(),e.restore()}function Ne(e,t,n){(B||n)&&(t.fillStyle="#505050",t.fillRect(0,0,t.canvas.width,t.canvas.height),je(t),B=!1),e.clearRect(0,0,e.canvas.width,e.canvas.height),e.save(),e.translate($,E),e.scale(d,d),Pe(e),e.restore()}function xe(e){let t,n,s;return{c(){t=R("canvas"),n=le(),s=R("canvas"),Q(t,"z-index","-1"),T(t,"class","svelte-1l41x4z"),Q(s,"z-index","0"),T(s,"class","svelte-1l41x4z")},m(o,r){M(o,t,r),e[2](t),M(o,n,r),M(o,s,r),e[3](s)},p:_,i:_,o:_,d(o){o&&k(t),e[2](null),o&&k(n),o&&k(s),e[3](null)}}}function Re(e,t,n){let s,o,r,l;he(()=>{const i=s.getContext("2d",{alpha:!1}),m=o.getContext("2d"),a={mouse_x:0,mouse_y:0,mouse_button:-1,wheel:1,keys:new Map};window.addEventListener("keydown",c=>{c.preventDefault(),a.keys.set(c.key,!0)}),window.addEventListener("keyup",c=>{c.preventDefault(),a.keys.set(c.key,!1)},!0),o.addEventListener("mousemove",c=>{a.mouse_x=c.offsetX,a.mouse_y=c.offsetY}),o.addEventListener("mousedown",c=>{a.mouse_button=c.button}),o.addEventListener("mouseup",c=>{a.mouse_button=-1}),o.addEventListener("wheel",c=>{a.wheel+=c.deltaY*.01,a.wheel=Math.min(Math.max(-4,a.wheel),-.75)});function L(){n(0,s.width=s.clientWidth,s),n(0,s.height=s.clientHeight,s),n(1,o.width=o.clientWidth,o),n(1,o.height=o.clientHeight,o),w(!0)}window.addEventListener("resize",L),L();function A(){Ae(a)}r=setInterval(A,20);function w(c=!1){Ne(m,i,c),c||(l=requestAnimationFrame(()=>w(!1)))}l=requestAnimationFrame(()=>w(!1))}),pe(()=>{clearTimeout(r),cancelAnimationFrame(l)});function y(i){W[i?"unshift":"push"](()=>{s=i,n(0,s)})}function g(i){W[i?"unshift":"push"](()=>{o=i,n(1,o)})}return[s,o,y,g]}class Te extends G{constructor(t){super(),X(this,t,Re,xe,K,{})}}function We(e){let t,n,s,o,r;return n=new Ee({}),o=new Te({}),{c(){t=R("main"),te(n.$$.fragment),s=le(),te(o.$$.fragment),T(t,"class","svelte-b1dld3")},m(l,y){M(l,t,y),H(n,t,null),de(t,s),H(o,t,null),r=!0},p:_,i(l){r||(U(n.$$.fragment,l),U(o.$$.fragment,l),r=!0)},o(l){ee(n.$$.fragment,l),ee(o.$$.fragment,l),r=!1},d(l){l&&k(t),V(n),V(o)}}}class ze extends G{constructor(t){super(),X(this,t,null,We,K,{})}}new ze({target:document.getElementById("app")});export{Be as a,Me as b,Ie as c,Fe as d,De as e,f,u as i,qe as o,b as s};
