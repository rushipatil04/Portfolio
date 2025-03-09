import React, { useEffect, useState, Suspense } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

// Lazy load components
const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Experience = React.lazy(() => import('./components/Experience'));
const Contact = React.lazy(() => import('./components/Contact'));

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #2a2a72;
    --secondary-color: #009ffd;
    --background-dark: #0a192f;
    --text-primary: #e6f1ff;
    --text-secondary: #8892b0;
    --accent-color: #64ffda;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background-dark);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
  }

  .glowing-text {
    text-shadow: 0 0 10px rgba(100, 255, 218, 0.3),
                0 0 20px rgba(100, 255, 218, 0.2),
                0 0 30px rgba(100, 255, 218, 0.1);
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(100, 255, 218, 0.8);
  }
`;

const LoadingScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--background-dark);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

const LoadingIndicator = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(100, 255, 218, 0.1);
  border-top-color: var(--accent-color);
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const LoadingText = styled(motion.p)`
  color: var(--accent-color);
  font-size: 1rem;
  letter-spacing: 0.5px;
`;

const AppContainer = styled(motion.div)`
  min-height: 100vh;
  will-change: transform;
  opacity: 0;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Setup timer for loading screen
    const loadingTimer = setTimeout(() => setIsLoading(false), 1500);

    // Cleanup function
    return () => {
      clearTimeout(loadingTimer);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
