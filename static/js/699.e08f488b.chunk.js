"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[699],{8699:(e,i,a)=>{a.r(i),a.d(i,{default:()=>u});var t=a(5043),r=a(5464),n=a(6300),o=a(6579),s=a(892),l=a(7929),d=a(579);const c=r.Ay.section`
  padding: 120px 0;
  background: linear-gradient(180deg, rgba(10, 25, 47, 0.8) 0%, rgba(10, 25, 47, 0.6) 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;

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
`,p=r.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`,g=(0,r.Ay)(n.P.h2)`
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
    background: linear-gradient(90deg, var(--accent-color), transparent);
  }
`,m=r.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin: 0 auto;
  max-width: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`,b=(0,r.Ay)(n.P.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.1),
    inset 0 0 30px rgba(100, 255, 218, 0.02);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  position: relative;
  overflow: hidden;
  
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
  }
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.15);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.2),
      inset 0 0 30px rgba(100, 255, 218, 0.05);
      
    &::before {
      opacity: 1;
    }
  }
  
  h3 {
    color: var(--accent-color);
    margin-bottom: 2rem;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 0.8rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 2px;
      background: linear-gradient(90deg, var(--accent-color), transparent);
    }
  }
`,h=r.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  padding: 0.5rem;
`,x=(0,r.Ay)(n.P.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 50% 0%,
      rgba(100, 255, 218, 0.1),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  svg {
    font-size: 2rem;
    color: var(--accent-color);
    filter: drop-shadow(0 0 8px rgba(100, 255, 218, 0.2));
    transition: all 0.3s ease;
  }
  
  span {
    font-size: 1rem;
    color: #8892b0;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: color 0.3s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(100, 255, 218, 0.1);
    
    svg {
      color: #64ffda;
      transform: scale(1.1);
      filter: drop-shadow(0 0 12px rgba(100, 255, 218, 0.3));
    }
    
    span {
      color: #64ffda;
    }
  }
`,f={programmingLanguages:[{name:"Java",icon:s.SYk},{name:"Python",icon:s.ar7},{name:"C",icon:l.jTw},{name:"JavaScript",icon:l.jTw},{name:"HTML/CSS",icon:l.jTw},{name:"SQL",icon:l.jTw}],testingTools:[{name:"Postman",icon:l.isI},{name:"Newman",icon:l.MNM},{name:"FireFlink",icon:l.kNw},{name:"Selenium",icon:l.jTw},{name:"JUnit",icon:l.jTw},{name:"TestNG",icon:l.jTw}]},u=()=>{(0,t.useEffect)((()=>{const e=e=>{document.querySelectorAll(".skill-category").forEach((i=>{const a=i.getBoundingClientRect(),t=(e.clientX-a.left)/i.offsetWidth*100,r=(e.clientY-a.top)/i.offsetHeight*100;i.style.setProperty("--mouse-x",`${t}%`),i.style.setProperty("--mouse-y",`${r}%`)}))};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)}),[]);const e={hidden:{opacity:0,y:20,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:100,damping:12,staggerChildren:.1}}},i={hidden:{opacity:0,y:15,scale:.8},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:120,damping:10}}};return(0,d.jsx)(c,{id:"skills",children:(0,d.jsxs)(p,{children:[(0,d.jsx)(g,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:{hidden:{opacity:0,y:-20},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},children:"Technical Skills"}),(0,d.jsx)(m,{as:n.P.div,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},children:Object.entries(f).map((a=>{let[t,r]=a;return(0,d.jsxs)(b,{className:"skill-category",variants:e,children:[(0,d.jsx)("h3",{children:t.replace(/([A-Z])/g," $1").trim()}),(0,d.jsx)(h,{children:r.map(((e,a)=>(0,d.jsxs)(x,{variants:i,whileHover:{scale:1.05,transition:{type:"spring",stiffness:300}},whileTap:{scale:.95},children:[(0,d.jsx)(o.g,{icon:e.icon}),(0,d.jsx)("span",{children:e.name})]},a)))})]},t)}))})]})})}}}]);
//# sourceMappingURL=699.e08f488b.chunk.js.map