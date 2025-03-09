"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[563],{9563:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var r=n(5043),i=n(5464),o=n(6300),a=n(8160),s=n(4930),l=n(9565),c=n(9908),f=n(4760),d=n(8721);function g(e,t){let n;const r=()=>{const{currentTime:r}=t,i=(null===r?0:r.value)/100;n!==i&&e(i),n=i};return d.Gt.update(r,!0),()=>(0,d.WG)(r)}const u=new WeakMap;let h;function p(e){let{target:t,contentRect:n,borderBoxSize:r}=e;var i;null===(i=u.get(t))||void 0===i||i.forEach((e=>{e({target:t,contentSize:n,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(t,r)}})}))}function m(e){e.forEach(p)}function x(e,t){h||"undefined"!==typeof ResizeObserver&&(h=new ResizeObserver(m));const n=(0,c.KJ)(e);return n.forEach((e=>{let n=u.get(e);n||(n=new Set,u.set(e,n)),n.add(t),null===h||void 0===h||h.observe(e)})),()=>{n.forEach((e=>{const n=u.get(e);null===n||void 0===n||n.delete(t),(null===n||void 0===n?void 0:n.size)||null===h||void 0===h||h.unobserve(e)}))}}const v=new Set;let b;function y(e){return v.add(e),b||(b=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};v.forEach((e=>e(t)))},window.addEventListener("resize",b)),()=>{v.delete(e),!v.size&&b&&(b=void 0)}}var w=n(2349),k=n(7852);const E={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function z(e,t,n,r){const i=n[t],{length:o,position:a}=E[t],s=i.current,l=n.time;i.current=e[`scroll${a}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,w.q)(0,i.scrollLength,i.current);const c=r-l;i.velocity=c>50?0:(0,k.f)(i.current-s,c)}var L=n(4773),W=n(7029),P=n(7191);const j={start:0,center:.5,end:1};function A(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=0;if(e in j&&(e=j[e]),"string"===typeof e){const t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"===typeof e&&(r=t*e),n+r}const H=[0,0];function O(e,t,n,r){let i=Array.isArray(e)?e:H,o=0,a=0;return"number"===typeof e?i=[e,e]:"string"===typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,j[e]?e:"0"]),o=A(i[0],n,r),a=A(i[1],t),o-a}const S={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},G={x:0,y:0};function T(e,t,n){const{offset:r=S.All}=n,{target:i=e,axis:o="y"}=n,a="y"===o?"height":"width",s=i!==e?function(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){const e=r.getBoundingClientRect();r=r.parentElement;const t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else{if(!(r instanceof SVGGraphicsElement))break;{const{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,o=r.parentNode;for(;!i;)"svg"===o.tagName&&(i=o),o=r.parentNode;r=i}}return n}(i,e):G,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:function(e){return"getBBox"in e&&"svg"!==e.tagName?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}(i),c={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let f=!t[o].interpolate;const d=r.length;for(let g=0;g<d;g++){const e=O(r[g],c[a],l[a],s[o]);f||e===t[o].interpolatorOffsets[g]||(f=!0),t[o].offset[g]=e}f&&(t[o].interpolate=(0,W.G)(t[o].offset,(0,P.Z)(r),{clamp:!1}),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=(0,L.q)(0,1,t[o].interpolate(t[o].current))}function B(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return{measure:()=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=arguments.length>2?arguments[2]:void 0;if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,r.target,n),update:t=>{!function(e,t,n){z(e,"x",t,n),z(e,"y",t,n),t.time=n}(e,n,t),(r.offset||r.target)&&T(e,n,r)},notify:()=>t(n)}}const C=new WeakMap,M=new WeakMap,R=new WeakMap,Y=e=>e===document.documentElement?window:e;function X(e){let{container:t=document.documentElement,...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=R.get(t);r||(r=new Set,R.set(t,r));const i=B(t,e,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},n);if(r.add(i),!C.has(t)){const e=()=>{for(const e of r)e.measure()},n=()=>{for(const e of r)e.update(d.uv.timestamp)},i=()=>{for(const e of r)e.notify()},s=()=>{d.Gt.read(e,!1,!0),d.Gt.read(n,!1,!0),d.Gt.update(i,!1,!0)};C.set(t,s);const l=Y(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&M.set(t,(a=s,"function"===typeof(o=t)?y(o):x(o,a))),l.addEventListener("scroll",s,{passive:!0})}var o,a;const s=C.get(t);return d.Gt.read(s,!1,!0),()=>{var e;(0,d.WG)(s);const n=R.get(t);if(!n)return;if(n.delete(i),n.size)return;const r=C.get(t);C.delete(t),r&&(Y(t).removeEventListener("scroll",r),null===(e=M.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}const $=new Map;function N(){let{source:e,container:t=document.documentElement,axis:n="y"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e&&(t=e),$.has(t)||$.set(t,{});const r=$.get(t);return r[n]||(r[n]=(0,c.Jb)()?new ScrollTimeline({source:t,axis:n}):function(e){let{source:t,container:n,axis:r="y"}=e;t&&(n=t);const i={value:0},o=X((e=>{i.value=100*e[r].progress}),{container:n,axis:r});return{currentTime:i,cancel:o}}({source:t,axis:n})),r[n]}function Q(e){return e&&(e.target||e.offset)}function _(e){let{axis:t="y",...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r={axis:t,...n};return"function"===typeof e?function(e,t){return function(e){return 2===e.length}(e)||Q(t)?X((n=>{e(n[t.axis].progress,n)}),t):g(e,N(t))}(e,r):function(e,t){if(e.flatten(),Q(t))return e.pause(),X((n=>{e.time=e.duration*n[t.axis].progress}),t);{const n=N(t);return e.attachTimeline?e.attachTimeline(n,(e=>(e.pause(),g((t=>{e.time=e.duration*t}),n)))):f.l}}(e,r)}var J=n(293);function V(e,t){(0,l.$)(Boolean(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}const q=()=>({scrollX:(0,a.OQ)(0),scrollY:(0,a.OQ)(0),scrollXProgress:(0,a.OQ)(0),scrollYProgress:(0,a.OQ)(0)});var I=n(1051);function F(e,t){const n=function(e){const t=(0,s.M)((()=>(0,a.OQ)(e))),{isStatic:n}=(0,r.useContext)(I.Q);if(n){const[,n]=(0,r.useState)(e);(0,r.useEffect)((()=>t.on("change",n)),[])}return t}(t()),i=()=>n.set(t());return i(),(0,J.E)((()=>{const t=()=>d.Gt.preRender(i,!1,!0),n=e.map((e=>e.on("change",t)));return()=>{n.forEach((e=>e())),(0,d.WG)(i)}})),n}function K(e,t,n,r){if("function"===typeof e)return function(e){a.bt.current=[],e();const t=F(a.bt.current,e);return a.bt.current=void 0,t}(e);const i="function"===typeof t?t:function(){const e=!Array.isArray(arguments.length<=0?void 0:arguments[0]),t=e?0:-1,n=0+t<0||arguments.length<=0+t?void 0:arguments[0+t],r=1+t<0||arguments.length<=1+t?void 0:arguments[1+t],i=2+t<0||arguments.length<=2+t?void 0:arguments[2+t],o=3+t<0||arguments.length<=3+t?void 0:arguments[3+t],a=(0,W.G)(r,i,{mixer:(s=i[0],(e=>e&&"object"===typeof e&&e.mix)(s)?s.mix:void 0),...o});var s;return e?a(n):a}(t,n,r);return Array.isArray(e)?Z(e,i):Z([e],(e=>{let[t]=e;return i(t)}))}function Z(e,t){const n=(0,s.M)((()=>[]));return F(e,(()=>{n.length=0;const r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)}))}var D=n(6579),U=n(892),ee=n(7929),te=n(3710),ne=(n(6584),n(579));te.$W.autoAddCss=!1;const re=(0,i.Ay)(o.P.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
  transform-origin: top;
`,ie=i.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
`,oe=(0,i.Ay)(o.P.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #64ffda;
  cursor: pointer;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(100, 255, 218, 0.15), transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    transform: scale(1.5);
  }
  
  &:hover::after {
    opacity: 1;
  }
`,ae=i.Ay.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,se=(0,i.Ay)(o.P.a)`
  color: #e6f1ff;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background: linear-gradient(to right, transparent, #64ffda, transparent);
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #64ffda;
    text-shadow: 0 0 8px rgba(100, 255, 218, 0.3);
    
    &::before {
      width: 100%;
    }
  }
`,le=i.Ay.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-left: 2rem;
  padding: 0.5rem;
  background: rgba(100, 255, 218, 0.03);
  border-radius: 2rem;
  border: 1px solid rgba(100, 255, 218, 0.05);

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 0.3rem;
    gap: 1rem;
  }
`,ce=(0,i.Ay)(o.P.a)`
  color: #e6f1ff;
  font-size: 1.4rem;
  width: 3rem;
  height: 3rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(10, 25, 47, 0.7);
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(4px);
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(
      45deg,
      rgba(100, 255, 218, 0.8),
      rgba(100, 255, 218, 0.2)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: attr(aria-label);
    position: absolute;
    bottom: -2.5rem;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background: rgba(10, 25, 47, 0.9);
    color: #64ffda;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    white-space: nowrap;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(100, 255, 218, 0.2);
  }
  
  &:hover {
    color: #64ffda;
    transform: translateY(-2px);
    background: rgba(10, 25, 47, 0.9);
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.2);
    
    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  svg {
    font-size: 1.4rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    transition: all 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
    filter: drop-shadow(0 4px 8px rgba(100, 255, 218, 0.3));
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;

    svg {
      font-size: 1.2rem;
    }
  }
`,fe=()=>{const{scrollY:e}=function(){let{container:e,target:t,layoutEffect:n=!0,...i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o=(0,s.M)(q);return(n?J.E:r.useEffect)((()=>(V("target",t),V("container",e),_(((e,t)=>{let{x:n,y:r}=t;o.scrollX.set(n.current),o.scrollXProgress.set(n.progress),o.scrollY.set(r.current),o.scrollYProgress.set(r.progress)}),{...i,container:(null===e||void 0===e?void 0:e.current)||void 0,target:(null===t||void 0===t?void 0:t.current)||void 0}))),[e,t,JSON.stringify(i.offset)]),o}(),t=K(e,[0,100],["rgba(10, 25, 47, 0.85)","rgba(10, 25, 47, 0.95)"]),n={hidden:{y:-20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:100,damping:20}}};return(0,ne.jsx)(re,{style:{backgroundColor:t},variants:{hidden:{y:-100,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:100,damping:20,staggerChildren:.1,delayChildren:.2}}},initial:"hidden",animate:"visible",children:(0,ne.jsxs)(ie,{children:[(0,ne.jsx)(oe,{variants:n,whileHover:{scale:1.1},whileTap:{scale:.95},children:"RP"}),(0,ne.jsx)(ae,{children:["Home","About","Skills","Projects","Experience","Contact"].map((e=>(0,ne.jsx)(o.P.li,{variants:n,whileHover:{y:-2},whileTap:{y:0},children:(0,ne.jsx)(se,{href:`#${e.toLowerCase()}`,children:e})},e)))}),(0,ne.jsxs)(le,{children:[(0,ne.jsx)(o.P.div,{variants:n,children:(0,ne.jsx)(ce,{href:"https://github.com/RushiPatil04",target:"_blank",rel:"noopener noreferrer",as:o.P.a,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":"GitHub",children:(0,ne.jsx)(D.g,{icon:U.Vz1})})}),(0,ne.jsx)(o.P.div,{variants:n,children:(0,ne.jsx)(ce,{href:"https://www.linkedin.com/in/Rushi-Patil",target:"_blank",rel:"noopener noreferrer",as:o.P.a,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":"LinkedIn",children:(0,ne.jsx)(D.g,{icon:U.IAJ})})}),(0,ne.jsx)(o.P.div,{variants:n,children:(0,ne.jsx)(ce,{href:"mailto:hrushi27112001@gmail.com",as:o.P.a,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":"Email",children:(0,ne.jsx)(D.g,{icon:ee.y_8})})})]})]})})}}}]);
//# sourceMappingURL=563.c37e8ec7.chunk.js.map