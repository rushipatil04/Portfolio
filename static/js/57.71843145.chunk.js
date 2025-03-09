"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[57],{8057:(e,r,a)=>{a.r(r),a.d(r,{default:()=>w});var i=a(5043),o=a(5464),t=a(6300),s=a(6579),n=a(7929),d=a(579);const l=o.Ay.section`
  padding: 100px 0;
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(10, 25, 47, 0.6) 0%, rgba(10, 25, 47, 0.8) 100%);

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`,c=o.Ay.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`,m=(0,o.Ay)(t.P.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3.5rem;
  color: var(--accent-color);

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`,g=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`,p=(0,o.Ay)(t.P.form)`
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: rgba(100, 255, 218, 0.12);
    box-shadow: 0 8px 32px rgba(100, 255, 218, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,x=o.Ay.div`
  margin-bottom: 1.5rem;
`,b=o.Ay.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-size: 0.9rem;
  letter-spacing: 0.5px;
`,u=(0,o.Ay)(t.P.input)`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.1);
  }
`,h=(0,o.Ay)(t.P.textarea)`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.1);
  }
`,y=(0,o.Ay)(t.P.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,v=(0,o.Ay)(t.P.div)`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  background: ${e=>e.isError?"rgba(255, 0, 0, 0.1)":"rgba(0, 255, 0, 0.1)"};
  color: ${e=>e.isError?"#ff6b6b":"#69db7c"};
`,w=()=>{const[e,r]=(0,i.useState)({name:"",email:"",message:""}),[a,o]=(0,i.useState)(!1),[t,w]=(0,i.useState)(null),f=a=>{r({...e,[a.target.name]:a.target.value})},j={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.6,-.05,.01,.99]}}},k={focus:{scale:1.02,transition:{duration:.2}}};return(0,d.jsx)(l,{id:"contact",children:(0,d.jsxs)(c,{children:[(0,d.jsx)(m,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:j,children:"Get in Touch"}),(0,d.jsx)(g,{children:(0,d.jsxs)(p,{onSubmit:async e=>{e.preventDefault(),o(!0);try{await new Promise((e=>setTimeout(e,1e3))),w({message:"Message sent successfully! I will get back to you soon.",isError:!1}),r({name:"",email:"",message:""})}catch(a){w({message:"Failed to send message. Please try again later.",isError:!0})}finally{o(!1)}},initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:j,children:[(0,d.jsxs)(x,{children:[(0,d.jsx)(b,{htmlFor:"name",children:"Name"}),(0,d.jsx)(u,{type:"text",id:"name",name:"name",value:e.name,onChange:f,required:!0,whileFocus:"focus",variants:k})]}),(0,d.jsxs)(x,{children:[(0,d.jsx)(b,{htmlFor:"email",children:"Email"}),(0,d.jsx)(u,{type:"email",id:"email",name:"email",value:e.email,onChange:f,required:!0,whileFocus:"focus",variants:k})]}),(0,d.jsxs)(x,{children:[(0,d.jsx)(b,{htmlFor:"message",children:"Message"}),(0,d.jsx)(h,{id:"message",name:"message",value:e.message,onChange:f,required:!0,whileFocus:"focus",variants:k})]}),(0,d.jsxs)(y,{type:"submit",disabled:a,whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,d.jsx)("span",{children:"Send Message"}),(0,d.jsx)(s.g,{icon:n.isI})]}),t&&(0,d.jsx)(v,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},isError:t.isError,children:t.message})]})})]})})}}}]);
//# sourceMappingURL=57.71843145.chunk.js.map