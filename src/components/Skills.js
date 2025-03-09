import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCode, faPaperPlane, faTerminal, faFire } from '@fortawesome/free-solid-svg-icons';

const SkillsSection = styled.section`
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
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
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
`;

const SkillsGrid = styled.div`
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
`;

const SkillCategory = styled(motion.div)`
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
`;

const SkillItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  padding: 0.5rem;
`;

const SkillItem = styled(motion.div)`
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
`;

const skillsData = {
  programmingLanguages: [
    { name: 'Java', icon: faJava },
    { name: 'Python', icon: faPython },
    { name: 'C', icon: faCode },
    { name: 'JavaScript', icon: faCode },
    { name: 'HTML/CSS', icon: faCode },
    { name: 'SQL', icon: faCode }
  ],
  testingTools: [
    { name: 'Postman', icon: faPaperPlane },
    { name: 'Newman', icon: faTerminal },
    { name: 'FireFlink', icon: faFire },
    { name: 'Selenium', icon: faCode },
    { name: 'JUnit', icon: faCode },
    { name: 'TestNG', icon: faCode }
  ]
};

const Skills = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll('.skill-category').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / card.offsetWidth) * 100;
        const y = ((e.clientY - rect.top) / card.offsetHeight) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 15,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }
  };

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut"
              }
            }
          }}
        >
          Technical Skills
        </SectionTitle>
        <SkillsGrid
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCategory
              key={category}
              className="skill-category"
              variants={categoryVariants}
            >
              <h3>{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
              <SkillItems>
                {skills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={skill.icon} />
                    <span>{skill.name}</span>
                  </SkillItem>
                ))}
              </SkillItems>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
