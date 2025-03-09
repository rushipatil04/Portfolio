import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactSection = styled.section`
  padding: 100px 0;
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(10, 25, 47, 0.6) 0%, rgba(10, 25, 47, 0.8) 100%);

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
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
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const ContactForm = styled(motion.form)`
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
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-size: 0.9rem;
  letter-spacing: 0.5px;
`;

const Input = styled(motion.input)`
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
`;

const TextArea = styled(motion.textarea)`
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
`;

const SubmitButton = styled(motion.button)`
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
`;

const Feedback = styled(motion.div)`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  background: ${props => props.isError ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)'};
  color: ${props => props.isError ? '#ff6b6b' : '#69db7c'};
`;

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call

      setFeedback({
        message: 'Message sent successfully! I will get back to you soon.',
        isError: false
      });
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setFeedback({
        message: 'Failed to send message. Please try again later.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={formVariants}
        >
          Get in Touch
        </SectionTitle>
        <ContactContent>
          <ContactForm
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={formVariants}
          >
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                whileFocus="focus"
                variants={inputVariants}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                whileFocus="focus"
                variants={inputVariants}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                whileFocus="focus"
                variants={inputVariants}
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Send Message</span>
              <FontAwesomeIcon icon={faPaperPlane} />
            </SubmitButton>
            {feedback && (
              <Feedback
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                isError={feedback.isError}
              >
                {feedback.message}
              </Feedback>
            )}
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;
