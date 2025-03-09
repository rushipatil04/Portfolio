import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const HeroSection = styled.section`
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
`;

const BackgroundAnimation = styled(motion.div)`
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
`;

const HeroContent = styled(motion.div)`
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
`;

const Title = styled(motion.h1)`
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
`;

const Subtitle = styled(motion.h2)`
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
`;

const ScrollArrow = styled(motion.a)`
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
`;

const Description = styled(motion.p)`
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
`;



const Hero = () => {
  const canvasRef = useRef(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 100 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5;
      }

      update() {
        if (mouse.x != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;

          if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
          } else {
            if (this.x !== this.baseX) {
              let dx = this.x - this.baseX;
              this.x -= dx/10;
            }
            if (this.y !== this.baseY) {
              let dy = this.y - this.baseY;
              this.y -= dy/10;
            }
          }
        } else {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x > canvas.width) this.x = 0;
          if (this.x < 0) this.x = canvas.width;
          if (this.y > canvas.height) this.y = 0;
          if (this.y < 0) this.y = canvas.height;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(100, 255, 218, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numParticles = window.innerWidth < 768 ? 50 : 150;
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      init();
    });
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.3,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      const offset = 80; // Account for navbar height
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };


  return (
    <HeroSection id="home" ref={ref}>
      <BackgroundAnimation>
        <canvas ref={canvasRef} />
      </BackgroundAnimation>
      <HeroContent
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <Title
          variants={itemVariants}
          className="glowing-text"
        >
          Hi, I'm <span className="highlight">Rushi Patil</span>
        </Title>
        <Subtitle 
          variants={itemVariants}
        >
          Software Test Engineer | Web Developer | Design Enthusiast
        </Subtitle>
        <Description 
          variants={itemVariants}
        >
          Passionate about building high-quality software solutions and ensuring seamless functionality.
        </Description>
      </HeroContent>
      <ScrollArrow
        href="#about"
        onClick={scrollToAbout}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 1],
          scale: [0.8, 1],
          y: [0, 8, 0],
          transition: {
            opacity: { duration: 0.4, delay: 0.2 },
            scale: { duration: 0.4, delay: 0.2 },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: [0.76, 0, 0.24, 1]
            }
          }
        }}
        whileHover={{
          y: [0, 8, 0],
          scale: 1.15,
          transition: {
            y: {
              duration: 1.2,
              repeat: Infinity,
              ease: [0.76, 0, 0.24, 1]
            },
            scale: {
              duration: 0.2,
              ease: "easeOut"
            }
          }
        }}
      >
        <FontAwesomeIcon 
          icon={faChevronDown} 
          size="lg"
        />
      </ScrollArrow>

    </HeroSection>
  );
};

export default Hero;
