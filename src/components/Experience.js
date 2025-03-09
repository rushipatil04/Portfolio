import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  padding: 100px 0;
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(10, 25, 47, 0.8) 0%, rgba(10, 25, 47, 0.6) 100%);
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const StyledTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3.5rem;
  color: var(--accent-color);
  letter-spacing: 0.5px;
`;

const StyledExperienceGrid = styled.div`
  display: grid;
  gap: 3.5rem;
  
  @media (max-width: 768px) {
    gap: 2.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

const ExperienceCard = styled(motion.div)`
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
`;

const CompanyLogo = styled(motion.div)`
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
`;

const Position = styled.h3`
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
`;

const Company = styled.h4`
  font-size: 1.1rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  letter-spacing: 0.3px;
`;

const Duration = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  letter-spacing: 0.2px;
`;

const Description = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.8;
  letter-spacing: 0.2px;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const TechTag = styled.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
  padding: 0.4rem 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  letter-spacing: 0.2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const AnimatedTechTag = motion(TechTag);

const experienceData = [
  {
    position: "Software Test Engineer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2023 - Present",
    description: "Leading end-to-end testing initiatives for enterprise applications, implementing automated testing frameworks, and conducting comprehensive API testing using Postman and Newman.",
    technologies: ["Selenium", "Postman", "Newman", "TestNG", "Jenkins", "Git"],
    logo: "/company-logos/tech-solutions.svg",
    logoAlt: "Tech Solutions Inc. logo"
  },
  {
    position: "QA Intern",
    company: "Innovation Labs",
    duration: "Jun 2022 - Dec 2022",
    description: "Collaborated with development teams to ensure software quality, participated in code reviews, and contributed to test automation framework development.",
    technologies: ["Java", "Python", "JUnit", "Git", "JIRA"],
    logo: "/company-logos/innovation-labs.svg",
    logoAlt: "Innovation Labs logo"
  }
];

const Experience = () => {
  const handleMouseMove = (e, element) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    element.style.setProperty('--mouse-x', `${x}px`);
    element.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = (element) => {
    element.style.removeProperty('--mouse-x');
    element.style.removeProperty('--mouse-y');
  };

  const containerVariants = {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <ExperienceSection id="experience">
      <Container>
        <motion.div
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <StyledTitle>Professional Journey</StyledTitle>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <StyledExperienceGrid>
            {experienceData.map((experience, index) => (
              <ExperienceCard
                key={index}
                variants={cardVariants}
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
              >
                <CompanyLogo
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(100, 255, 218, 0.2))',
                    willChange: 'transform, filter'
                  }}
                >
                  <img src={process.env.PUBLIC_URL + experience.logo} alt={experience.logoAlt} />
                </CompanyLogo>
                <Position>{experience.position}</Position>
                <Company>{experience.company}</Company>
                <Duration>{experience.duration}</Duration>
                <Description>{experience.description}</Description>
                <TechTags>
                  {experience.technologies.map((tech, techIndex) => (
                    <AnimatedTechTag
                      key={techIndex}
                      whileHover={{
                        y: -2,
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        borderColor: 'rgba(100, 255, 218, 0.2)',
                        boxShadow: '0 4px 8px rgba(100, 255, 218, 0.1)',
                        transition: { duration: 0.3, ease: 'easeOut' }
                      }}
                    >
                      {tech}
                    </AnimatedTechTag>
                  ))}
                </TechTags>
              </ExperienceCard>
            ))}
          </StyledExperienceGrid>
        </motion.div>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
