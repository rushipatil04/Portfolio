import React, { Component } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ErrorContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--background-dark);
  color: var(--text-primary);
  padding: 2rem;
  text-align: center;
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  color: var(--accent-color);
  margin-bottom: 2rem;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
`;

const ErrorMessage = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
`;

const RetryButton = styled(motion.button)`
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
`;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleRetry = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ErrorIcon>⚠️</ErrorIcon>
          <ErrorTitle>Oops! Something went wrong</ErrorTitle>
          <ErrorMessage>
            We apologize for the inconvenience. Please try refreshing the page or come back later.
          </ErrorMessage>
          <RetryButton
            onClick={this.handleRetry}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </RetryButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
