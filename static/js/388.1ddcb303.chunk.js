"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[388],{7388:(t,e,i)=>{i.r(e),i.d(e,{default:()=>M});var n=i(5043),a=i(5464),o=i(6300),r=i(9565),s=i(3077),d=i(7070);function l(t,e){[...e].reverse().forEach((i=>{const n=t.getVariant(i);n&&(0,s.U)(t,n),t.variantChildren&&t.variantChildren.forEach((t=>{l(t,e)}))}))}function h(){let t=!1;const e=new Set,i={subscribe:t=>(e.add(t),()=>{e.delete(t)}),start(i,n){(0,r.V)(t,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");const a=[];return e.forEach((t=>{a.push((0,d._)(t,i,{transitionOverride:n}))})),Promise.all(a)},set:i=>((0,r.V)(t,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),e.forEach((t=>{!function(t,e){Array.isArray(e)?l(t,e):"string"===typeof e?l(t,[e]):(0,s.U)(t,e)}(t,i)}))),stop(){e.forEach((t=>{!function(t){t.values.forEach((t=>t.stop()))}(t)}))},mount:()=>(t=!0,()=>{t=!1,i.stop()})};return i}var c=i(4930),p=i(293);const f=function(){const t=(0,c.M)(h);return(0,p.E)(t.mount,[]),t};var u=i(9908);const g={some:0,all:1};function m(t){let{root:e,margin:i,amount:a,once:o=!1,initial:r=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[s,d]=(0,n.useState)(r);return(0,n.useEffect)((()=>{if(!t.current||o&&s)return;const n={root:e&&e.current||void 0,margin:i,amount:a};return function(t,e){let{root:i,margin:n,amount:a="some"}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=(0,u.KJ)(t),r=new WeakMap,s=new IntersectionObserver((t=>{t.forEach((t=>{const i=r.get(t.target);if(t.isIntersecting!==Boolean(i))if(t.isIntersecting){const i=e(t.target,t);"function"===typeof i?r.set(t.target,i):s.unobserve(t.target)}else"function"===typeof i&&(i(t),r.delete(t.target))}))}),{root:i,rootMargin:n,threshold:"number"===typeof a?a:g[a]});return o.forEach((t=>s.observe(t))),()=>s.disconnect()}(t.current,(()=>(d(!0),o?void 0:()=>d(!1))),n)}),[e,t,i,o,a]),s}var b=i(6579),x=i(7929),y=i(579);const v=a.Ay.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(45deg, rgba(10, 25, 47, 0.95) 0%, rgba(10, 25, 47, 0.98) 100%);
  perspective: 1000px;
  padding: 0 1rem 6rem;
  
  @media (max-width: 768px) {
    padding-bottom: 4rem;
  }
`,w=(0,a.Ay)(o.P.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`,E=(0,a.Ay)(o.P.div)`
  text-align: center;
  z-index: 1;
  max-width: 900px;
  width: 100%;
  padding: 0 2rem;
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    margin: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(100, 255, 218, 0.1) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
    z-index: -1;
  }
  
  &:hover::before {
    opacity: 1;
  }
`,k=(0,a.Ay)(o.P.h1)`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  color: #e6f1ff;
  text-shadow: 0 0 10px rgba(230, 241, 255, 0.3);
  font-weight: 800;
  letter-spacing: -0.5px;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.1), transparent 70%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }

  .highlight {
    color: #64ffda;
    position: relative;
    display: inline-block;
    transition: all 0.3s ease;
    
    &::before {
      content: '';
      position: absolute;
      inset: -2px -4px;
      background: rgba(100, 255, 218, 0.1);
      border-radius: 4px;
      z-index: -1;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        to right,
        transparent,
        #64ffda,
        transparent
      );
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    
    &:hover {
      text-shadow: 0 0 8px rgba(100, 255, 218, 0.3);
      transform: translateY(-1px);
      
      &::before {
        opacity: 1;
      }

      &::after {
        transform: scaleX(1);
      }
    }
  }
`,z=(0,a.Ay)(o.P.h2)`
  font-size: 1.5rem;
  color: #8892b0;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
  position: relative;
  display: inline-block;
  padding: 0 1rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 30px;
    height: 1px;
    background: linear-gradient(to right, #64ffda, transparent);
    opacity: 0.5;
    transition: width 0.3s ease;
  }

  &::before {
    right: 100%;
    background: linear-gradient(to left, #64ffda, transparent);
  }

  &::after {
    left: 100%;
    background: linear-gradient(to right, #64ffda, transparent);
  }

  &:hover::before,
  &:hover::after {
    width: 50px;
    opacity: 0.8;
  }
`,j=(0,a.Ay)(o.P.a)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #64ffda;
  text-decoration: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  
  svg {
    filter: drop-shadow(0 0 8px rgba(100, 255, 218, 0.2));
    width: 24px;
    height: 24px;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: rgba(100, 255, 218, 0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    bottom: 1.5rem;
  }
`,C=(0,a.Ay)(o.P.p)`
  font-size: 1.2rem;
  color: #8892b0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  padding: 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1.1rem;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(100, 255, 218, 0.2),
      transparent,
      rgba(100, 255, 218, 0.2)
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    &::before {
      opacity: 1;
    }
  }
`,M=()=>{const t=(0,n.useRef)(null),e=f(),i=(0,n.useRef)(null),a=m(i);(0,n.useEffect)((()=>{a&&e.start("visible")}),[a,e]),(0,n.useEffect)((()=>{const e=t.current,i=e.getContext("2d");let n,a=[],o={x:null,y:null,radius:100};const r=()=>{e.width=window.innerWidth,e.height=window.innerHeight},s=t=>{o.x=t.x,o.y=t.y},d=()=>{o.x=null,o.y=null};class l{constructor(){this.x=Math.random()*e.width,this.y=Math.random()*e.height,this.size=2*Math.random(),this.baseX=this.x,this.baseY=this.y,this.density=30*Math.random()+1,this.speedX=2*Math.random()-1,this.speedY=2*Math.random()-1,this.opacity=.5*Math.random()}update(){if(null!=o.x){let t=o.x-this.x,e=o.y-this.y,i=Math.sqrt(t*t+e*e),n=t/i,a=e/i,r=o.radius,s=(r-i)/r,d=n*s*this.density,l=a*s*this.density;if(i<o.radius)this.x-=d,this.y-=l;else{if(this.x!==this.baseX){let t=this.x-this.baseX;this.x-=t/10}if(this.y!==this.baseY){let t=this.y-this.baseY;this.y-=t/10}}}else this.x+=this.speedX,this.y+=this.speedY,this.x>e.width&&(this.x=0),this.x<0&&(this.x=e.width),this.y>e.height&&(this.y=0),this.y<0&&(this.y=e.height)}draw(){i.fillStyle=`rgba(100, 255, 218, ${this.opacity})`,i.beginPath(),i.arc(this.x,this.y,this.size,0,2*Math.PI),i.fill()}}const h=()=>{a=[];const t=window.innerWidth<768?50:150;for(let e=0;e<t;e++)a.push(new l)},c=()=>{i.clearRect(0,0,e.width,e.height),a.forEach((t=>{t.update(),t.draw()})),n=requestAnimationFrame(c)};return r(),h(),c(),window.addEventListener("resize",(()=>{r(),h()})),e.addEventListener("mousemove",s),e.addEventListener("mouseleave",d),()=>{window.removeEventListener("resize",r),e.removeEventListener("mousemove",s),e.removeEventListener("mouseleave",d),cancelAnimationFrame(n)}}),[]);const o={hidden:{y:30,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:100,damping:20,duration:.8,ease:[.6,-.05,.01,.99]}}};return(0,y.jsxs)(v,{id:"home",ref:i,children:[(0,y.jsx)(w,{children:(0,y.jsx)("canvas",{ref:t})}),(0,y.jsxs)(E,{variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:20,staggerChildren:.3,delayChildren:.2,when:"beforeChildren"}}},initial:"hidden",animate:e,children:[(0,y.jsxs)(k,{variants:o,className:"glowing-text",children:["Hi, I'm ",(0,y.jsx)("span",{className:"highlight",children:"Rushi Patil"})]}),(0,y.jsx)(z,{variants:o,children:"Software Test Engineer | Web Developer | Design Enthusiast"}),(0,y.jsx)(C,{variants:o,children:"Passionate about building high-quality software solutions and ensuring seamless functionality."})]}),(0,y.jsx)(j,{href:"#about",onClick:t=>{t.preventDefault();const e=document.querySelector("#about");if(e){const t=80,i=e.getBoundingClientRect().top+window.pageYOffset-t;window.scrollTo({top:i,behavior:"smooth"})}},initial:{opacity:0,scale:.8},animate:{opacity:[0,1],scale:[.8,1],y:[0,8,0],transition:{opacity:{duration:.4,delay:.2},scale:{duration:.4,delay:.2},y:{duration:2,repeat:1/0,ease:[.76,0,.24,1]}}},whileHover:{y:[0,8,0],scale:1.15,transition:{y:{duration:1.2,repeat:1/0,ease:[.76,0,.24,1]},scale:{duration:.2,ease:"easeOut"}}},children:(0,y.jsx)(b.g,{icon:x.Jt$,size:"lg"})})]})}}}]);
//# sourceMappingURL=388.1ddcb303.chunk.js.map