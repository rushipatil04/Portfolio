"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[443],{6443:(e,r,t)=>{t.r(r),t.d(r,{default:()=>z});var a=t(5043),i=t(5464),o=t(6300),n=t(6579),s=t(7929),l=t(892),d=t(579);const c=i.Ay.section`
  padding: 120px 0;
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(10, 25, 47, 0.6) 0%, rgba(10, 25, 47, 0.8) 100%);
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.1), transparent);
  }
`,p=i.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`,g=(0,i.Ay)(o.P.h2)`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--accent-color);
  position: relative;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
  }
`,m=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3.5rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`,b=(0,i.Ay)(o.P.article)`
  cursor: pointer;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  will-change: transform;
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.1),
    inset 0 0 30px rgba(100, 255, 218, 0.02),
    0 0 0 1px rgba(100, 255, 218, 0.08),
    0 0 15px rgba(100, 255, 218, 0.05);

  @media (max-width: 768px) {
    padding: 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(100, 255, 218, 0.08),
      transparent 40%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    border-color: rgba(100, 255, 218, 0.15);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.2),
      inset 0 0 30px rgba(100, 255, 218, 0.05);

    &::before {
      opacity: 1;
    }
  }
`,h=i.Ay.div`
  padding: 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`,x=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.8rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    opacity: 0.5;
    transition: width 0.3s ease, opacity 0.3s ease;
  }
  
  ${b}:hover &::after {
    width: 60px;
    opacity: 1;
  }
`,u=(0,i.Ay)(o.P.div)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.15), rgba(100, 255, 218, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  border: 2px solid rgba(100, 255, 218, 0.15);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(100, 255, 218, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: conic-gradient(
      from 0deg,
      transparent,
      rgba(100, 255, 218, 0.2) 120deg,
      transparent 180deg
    );
    animation: rotate 4s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.1) rotate(5deg);
    border-color: rgba(100, 255, 218, 0.3);
    
    &::before {
      opacity: 1;
    }
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,y=i.Ay.h3`
  font-size: 1.6rem;
  color: var(--text-primary);
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.5px;
  transition: color 0.3s ease;
  
  ${b}:hover & {
    color: var(--accent-color);
  }
`,v=i.Ay.p`
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.05rem;
  opacity: 0.85;
  transition: opacity 0.3s ease;
  
  ${b}:hover & {
    opacity: 1;
  }
`,f=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: auto;
`,w=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  
  span {
    font-size: 0.9rem;
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.3rem 0.8rem;
    background: rgba(100, 255, 218, 0.05);
    border-radius: 12px;
    transition: all 0.3s ease;
    border: 1px solid rgba(100, 255, 218, 0.08);

    &:hover {
      transform: translateY(-2px);
      background: rgba(100, 255, 218, 0.08);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      border-color: rgba(100, 255, 218, 0.15);
    }
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(100, 255, 218, 0.1),
        transparent
      );
      transform: translateX(-100%);
      transition: transform 0.6s ease;
    }
    
    &:hover {
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(100, 255, 218, 0.1);
      color: var(--accent-color);
      
      &::before {
        transform: translateX(100%);
      }
      
      svg {
        color: var(--accent-color);
      }
    }
    
    svg {
      transition: color 0.3s ease;
    }
  }
`,j=i.Ay.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`,k=(0,i.Ay)(o.P.a)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  background: rgba(100, 255, 218, 0.02);
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(100, 255, 218, 0.1),
      transparent 40%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(100, 255, 218, 0.2);
    background: rgba(100, 255, 218, 0.05);
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(100, 255, 218, 0.1);

    &::before {
      opacity: 1;
    }
  }
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(100, 255, 218, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(100, 255, 218, 0.1);
    color: var(--accent-color);
    transform: translateY(-2px);
    
    &::before {
      transform: translateX(100%);
    }
    
    svg {
      transform: translateX(2px);
    }
  }
  
  svg {
    transition: transform 0.3s ease;
  }
`,A=[{title:"Timesheet Management Tool",icon:s.a$,description:"Built a web-based time tracking tool to improve productivity and streamline team management. Features include automated reporting, real-time analytics, and seamless integration capabilities.",tools:[{name:"C#",icon:s.jTw},{name:".NET",icon:s.ArK},{name:"SQL",icon:s.hem},{name:"XML",icon:s.ruc}],github:"https://github.com/RushiPatil04",demo:"#"},{title:"Synchronized Desktop Calendar",icon:s.BEE,description:"Developed an intuitive desktop calendar application enabling global meeting scheduling and real-time synchronization. Includes smart notifications and timezone management.",tools:[{name:"C#",icon:s.jTw},{name:".NET",icon:s.ArK},{name:"SQL",icon:s.hem},{name:"XML",icon:s.ruc}],github:"https://github.com/RushiPatil04",demo:"#"},{title:"Thermal Analysis System",icon:s.iXj,description:"Conducted comprehensive indoor air quality analysis using Ansys CFD simulations. Validated results against experimental data to ensure accuracy and reliability.",tools:[{name:"Ansys",icon:s.br3},{name:"MATLAB",icon:s.gK3},{name:"Python",icon:s.yqK}],caseStudy:"#"}],z=()=>{const e=(e,r)=>{const t=r.getBoundingClientRect(),a=e.clientX-t.left,i=e.clientY-t.top;r.style.setProperty("--mouse-x",a/t.width*100+"%"),r.style.setProperty("--mouse-y",i/t.height*100+"%");const o=(i-t.height/2)/25,n=(t.width/2-a)/25;r.style.transform=`perspective(1000px) rotateX(${o}deg) rotateY(${n}deg)`,r.style.willChange="transform"},r=e=>{e.style.transform="perspective(1000px) rotateX(0) rotateY(0)",e.style.willChange="auto",e.style.setProperty("--mouse-x","50%"),e.style.setProperty("--mouse-y","50%")};(0,a.useEffect)((()=>{const t=document.querySelectorAll(".project-card");return t.forEach((t=>{t.addEventListener("mousemove",(r=>e(r,t))),t.addEventListener("mouseleave",(()=>r(t)))})),()=>{t.forEach((t=>{t.removeEventListener("mousemove",(r=>e(r,t))),t.removeEventListener("mouseleave",(()=>r(t)))}))}}),[]);const t={hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.2,staggerChildren:.15}}},i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.6,-.05,.01,.99]}},hover:{scale:1.02,y:-5,transition:{duration:.8,ease:"easeInOut"}},tap:{scale:.98,y:0}};return(0,d.jsx)(c,{id:"projects",children:(0,d.jsxs)(p,{children:[(0,d.jsx)(g,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:t,children:"Featured Projects"}),(0,d.jsx)(m,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:t,children:A.map((e=>(0,d.jsx)(b,{variants:i,initial:"hidden",animate:"visible",whileHover:"hover",whileTap:"tap",children:(0,d.jsxs)(h,{children:[(0,d.jsxs)(x,{children:[(0,d.jsx)(u,{whileHover:{rotate:5,scale:1.05},whileTap:{scale:.95},children:(0,d.jsx)(n.g,{icon:e.icon})}),(0,d.jsx)(y,{children:e.title})]}),(0,d.jsx)(v,{children:e.description}),(0,d.jsxs)(f,{children:[(0,d.jsx)(w,{children:e.tools.map((e=>(0,d.jsxs)("span",{children:[(0,d.jsx)(n.g,{icon:e.icon}),e.name]},e.name)))}),(0,d.jsxs)(j,{children:[e.github&&(0,d.jsxs)(k,{href:e.github,target:"_blank",rel:"noopener noreferrer",whileHover:{y:-2},whileTap:{y:0},children:[(0,d.jsx)(n.g,{icon:l.Vz1}),(0,d.jsx)("span",{children:"View Code"})]}),e.demo&&(0,d.jsxs)(k,{href:e.demo,whileHover:{y:-2},whileTap:{y:0},children:[(0,d.jsx)(n.g,{icon:s.AaJ}),(0,d.jsx)("span",{children:"Live Demo"})]}),e.caseStudy&&(0,d.jsxs)(k,{href:e.caseStudy,whileHover:{y:-2},whileTap:{y:0},children:[(0,d.jsx)(n.g,{icon:s.h8M}),(0,d.jsx)("span",{children:"Case Study"})]})]})]})]})},e.title)))})]})})}}}]);
//# sourceMappingURL=443.6ab66941.chunk.js.map