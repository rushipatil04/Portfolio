import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDesktop, faDatabase, faFileCode, faCube, faChartLine, faCalculator, faFileAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';



const ProjectsSection = styled.section`
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
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
  }
`;

const ProjectsGrid = styled.div`
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
`;

const ProjectCard = styled(motion.article)`
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
`;

const ProjectContent = styled.div`
  padding: 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const ProjectHeader = styled.div`
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
  
  ${ProjectCard}:hover &::after {
    width: 60px;
    opacity: 1;
  }
`;

const ProjectIcon = styled(motion.div)`
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
`;

const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  color: var(--text-primary);
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.5px;
  transition: color 0.3s ease;
  
  ${ProjectCard}:hover & {
    color: var(--accent-color);
  }
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.05rem;
  opacity: 0.85;
  transition: opacity 0.3s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: auto;
`;

const ToolsUsed = styled.div`
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
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const ProjectLink = styled(motion.a)`
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
`;

const projectsData = [
  {
    title: 'Timesheet Management Tool',
    icon: faClock,
    description: 'Built a web-based time tracking tool to improve productivity and streamline team management. Features include automated reporting, real-time analytics, and seamless integration capabilities.',
    tools: [
      { name: 'C#', icon: faCode },
      { name: '.NET', icon: faDesktop },
      { name: 'SQL', icon: faDatabase },
      { name: 'XML', icon: faFileCode }
    ],
    github: 'https://github.com/RushiPatil04',
    demo: '#'
  },
  {
    title: 'Synchronized Desktop Calendar',
    icon: faCalendarAlt,
    description: 'Developed an intuitive desktop calendar application enabling global meeting scheduling and real-time synchronization. Includes smart notifications and timezone management.',
    tools: [
      { name: 'C#', icon: faCode },
      { name: '.NET', icon: faDesktop },
      { name: 'SQL', icon: faDatabase },
      { name: 'XML', icon: faFileCode }
    ],
    github: 'https://github.com/RushiPatil04',
    demo: '#'
  },
  {
    title: 'Thermal Analysis System',
    icon: faTemperatureHigh,
    description: 'Conducted comprehensive indoor air quality analysis using Ansys CFD simulations. Validated results against experimental data to ensure accuracy and reliability.',
    tools: [
      { name: 'Ansys', icon: faCube },
      { name: 'MATLAB', icon: faChartLine },
      { name: 'Python', icon: faCalculator }
    ],
    caseStudy: '#'
  }
];

const Projects = () => {
  const handleMouseMove = (e, element) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update CSS variables for radial gradient position
    element.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    element.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);

    // Calculate rotation based on mouse position
    const rotateX = (y - rect.height / 2) / 25;
    const rotateY = (rect.width / 2 - x) / 25;

    // Apply hardware-accelerated transform
    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    element.style.willChange = 'transform';
  };

  const handleMouseLeave = (element) => {
    element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    element.style.willChange = 'auto';
    
    // Reset gradient position
    element.style.setProperty('--mouse-x', '50%');
    element.style.setProperty('--mouse-y', '50%');
  };

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });
    
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
        card.removeEventListener('mouseleave', () => handleMouseLeave(card));
      });
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.8,
        ease: 'easeInOut'
      }
    },
    tap: {
      scale: 0.98,
      y: 0
    }
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          Featured Projects
        </SectionTitle>
        <ProjectsGrid
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              <ProjectContent>
                <ProjectHeader>
                  <ProjectIcon
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={project.icon} />
                  </ProjectIcon>
                  <ProjectTitle>{project.title}</ProjectTitle>
                </ProjectHeader>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectMeta>
                  <ToolsUsed>
                    {project.tools.map((tool) => (
                      <span key={tool.name}>
                        <FontAwesomeIcon icon={tool.icon} />
                        {tool.name}
                      </span>
                    ))}
                  </ToolsUsed>
                  <ProjectLinks>
                    {project.github && (
                      <ProjectLink
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        <span>View Code</span>
                      </ProjectLink>
                    )}
                    {project.demo && (
                      <ProjectLink
                        href={project.demo}
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        <span>Live Demo</span>
                      </ProjectLink>
                    )}
                    {project.caseStudy && (
                      <ProjectLink
                        href={project.caseStudy}
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                      >
                        <FontAwesomeIcon icon={faFileAlt} />
                        <span>Case Study</span>
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectMeta>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
