import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
  transform-origin: top;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
`;

const Logo = styled(motion.div)`
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
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
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
`;

const SocialLinks = styled.div`
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
`;

const SocialLink = styled(motion.a)`
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
`;

const Navbar = () => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 25, 47, 0.85)', 'rgba(10, 25, 47, 0.95)']
  );

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <Nav 
      style={{ backgroundColor }}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <NavContent>
        <Logo
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          RP
        </Logo>
        <NavLinks>
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <motion.li
              key={item}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <NavLink href={`#${item.toLowerCase()}`}>{item}</NavLink>
            </motion.li>
          ))}
        </NavLinks>
        <SocialLinks>
          <motion.div variants={itemVariants}>
            <SocialLink
              href="https://github.com/RushiPatil04"
              target="_blank"
              rel="noopener noreferrer"
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SocialLink
              href="https://www.linkedin.com/in/Rushi-Patil"
              target="_blank"
              rel="noopener noreferrer"
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SocialLink
              href="mailto:hrushi27112001@gmail.com"
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </SocialLink>
          </motion.div>
        </SocialLinks>
      </NavContent>
    </Nav>
  );
};

export default Navbar;
