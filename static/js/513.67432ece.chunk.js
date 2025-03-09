"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[513],{4513:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});t(5043);var i=t(5464),o=t(6300),a=t(579);const n=i.Ay.section`
  padding: 100px 0;
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(10, 25, 47, 0.8) 0%, rgba(10, 25, 47, 0.6) 100%);
`,s=i.Ay.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`,l=i.Ay.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3.5rem;
  color: var(--accent-color);
  letter-spacing: 0.5px;
`,c=i.Ay.div`
  display: grid;
  gap: 3.5rem;
  
  @media (max-width: 768px) {
    gap: 2.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 2rem;
  }
`,d=(0,i.Ay)(o.P.div)`
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  will-change: transform, opacity, box-shadow, background;
  isolation: isolate;
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    transition: opacity 0.8s ease;
    opacity: 0;
  }

  &::before {
    background: linear-gradient(
      45deg,
      transparent,
      rgba(100, 255, 218, 0.08),
      transparent
    );
  }

  &::after {
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      rgba(100, 255, 218, 0.06),
      transparent 40%
    );
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.12);
    box-shadow: 0 8px 32px rgba(100, 255, 218, 0.1);

    &::before,
    &::after {
      opacity: 1;
    }
  }
`,p=(0,i.Ay)(o.P.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.15), rgba(100, 255, 218, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: 2px solid rgba(100, 255, 218, 0.2);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, filter, border-color;
  filter: drop-shadow(0 0 12px rgba(100, 255, 218, 0.15));
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  &::before {
    background: linear-gradient(
      45deg,
      transparent,
      rgba(100, 255, 218, 0.1),
      transparent
    );
    opacity: 0;
  }

  &::after {
    background: radial-gradient(
      circle at center,
      rgba(100, 255, 218, 0.1) 0%,
      transparent 70%
    );
    opacity: 0;
  }

  img {
    width: 85%;
    height: 85%;
    object-fit: contain;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    filter: brightness(0.95) contrast(1.1);
  }

  &:hover {
    transform: rotate(5deg) translateY(-2px);
    border-color: rgba(100, 255, 218, 0.4);
    filter: drop-shadow(0 0 20px rgba(100, 255, 218, 0.2));
    background: linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(100, 255, 218, 0.08));

    &::before,
    &::after {
      opacity: 1;
    }

    img {
      transform: scale(1.1);
      filter: brightness(1.1) contrast(1.2);
    }
  }
`,g=i.Ay.h3`
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
`,b=i.Ay.h4`
  font-size: 1.1rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  letter-spacing: 0.3px;
`,m=i.Ay.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  letter-spacing: 0.2px;
`,x=i.Ay.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.8;
  letter-spacing: 0.2px;
`,h=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`,u=i.Ay.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
  padding: 0.4rem 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  letter-spacing: 0.2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`,v=(0,o.P)(u),y=[{position:"Software Test Engineer",company:"Tech Solutions Inc.",duration:"Jan 2023 - Present",description:"Leading end-to-end testing initiatives for enterprise applications, implementing automated testing frameworks, and conducting comprehensive API testing using Postman and Newman.",technologies:["Selenium","Postman","Newman","TestNG","Jenkins","Git"],logo:"/company-logos/tech-solutions.svg",logoAlt:"Tech Solutions Inc. logo"},{position:"QA Intern",company:"Innovation Labs",duration:"Jun 2022 - Dec 2022",description:"Collaborated with development teams to ensure software quality, participated in code reviews, and contributed to test automation framework development.",technologies:["Java","Python","JUnit","Git","JIRA"],logo:"/company-logos/innovation-labs.svg",logoAlt:"Innovation Labs logo"}],f=()=>{const e={initial:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3,duration:.8,ease:[.6,-.05,.01,.99]}}},r={initial:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.6,-.05,.01,.99]}}};return(0,a.jsx)(n,{id:"experience",children:(0,a.jsxs)(s,{children:[(0,a.jsx)(o.P.div,{initial:"initial",whileInView:"visible",viewport:{once:!0,margin:"-100px"},variants:e,children:(0,a.jsx)(l,{children:"Professional Journey"})}),(0,a.jsx)(o.P.div,{initial:"initial",whileInView:"visible",viewport:{once:!0,margin:"-100px"},variants:e,children:(0,a.jsx)(c,{children:y.map(((e,t)=>(0,a.jsxs)(d,{variants:r,onMouseMove:e=>((e,r)=>{const t=r.getBoundingClientRect(),i=e.clientX-t.left,o=e.clientY-t.top;r.style.setProperty("--mouse-x",`${i}px`),r.style.setProperty("--mouse-y",`${o}px`)})(e,e.currentTarget),onMouseLeave:e=>{return(r=e.currentTarget).style.removeProperty("--mouse-x"),void r.style.removeProperty("--mouse-y");var r},initial:"initial",whileInView:"visible",viewport:{once:!0,margin:"-50px"},whileHover:{y:-5,transition:{duration:.3,ease:"easeOut"}},children:[(0,a.jsx)(p,{whileHover:{rotate:5,scale:1.05},whileTap:{scale:.95},style:{filter:"drop-shadow(0 0 10px rgba(100, 255, 218, 0.2))",willChange:"transform, filter"},children:(0,a.jsx)("img",{src:"/%7Brepository-name%7D"+e.logo,alt:e.logoAlt})}),(0,a.jsx)(g,{children:e.position}),(0,a.jsx)(b,{children:e.company}),(0,a.jsx)(m,{children:e.duration}),(0,a.jsx)(x,{children:e.description}),(0,a.jsx)(h,{children:e.technologies.map(((e,r)=>(0,a.jsx)(v,{whileHover:{y:-2,backgroundColor:"rgba(100, 255, 218, 0.1)",borderColor:"rgba(100, 255, 218, 0.2)",boxShadow:"0 4px 8px rgba(100, 255, 218, 0.1)",transition:{duration:.3,ease:"easeOut"}},children:e},r)))})]},t)))})})]})})}}}]);
//# sourceMappingURL=513.67432ece.chunk.js.map