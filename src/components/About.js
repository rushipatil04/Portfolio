import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const AboutSection = styled.section`
  padding: 100px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--accent-color);
`;

const AboutContent = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AboutText = styled(motion.div)`
  max-width: 600px;
  
  p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.8;
  }
`;

const DownloadButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
  
  i {
    margin-left: 0.5rem;
  }
`;

const DropdownArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  
  &::after {
    content: '';
    border: solid var(--accent-color);
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <AboutSection id="about">
      <Container
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <SectionTitle
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          About Me
        </SectionTitle>
        <AboutContent>
          <AboutText
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <p>
              I am a passionate Software Test Engineer with hands-on experience in manual testing, 
              API testing, web development, and design tools. I specialize in improving software 
              functionality and ensuring a seamless user experience.
            </p>
            <DownloadButton
              href="/resume.pdf"
              rel="noopener noreferrer"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume <FontAwesomeIcon icon={faDownload} />
            </DownloadButton>
          </AboutText>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
