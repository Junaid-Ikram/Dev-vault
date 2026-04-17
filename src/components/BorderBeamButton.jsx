import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ButtonWrapper = styled(motion.button)`
  position: relative;
  background: rgba(15, 23, 42, 0.6); /* specialized dark bg */
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  z-index: 10;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(99, 102, 241, 0.5);
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
  }
`;

const BeamContainer = styled.div`
  position: absolute;
  inset: -2px; /* Slight offset for the border */
  border-radius: 9999px;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ButtonWrapper}:hover & {
    opacity: 1;
  }
`;

const Beam = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%; /* Ensure it covers rotation */
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 60deg,
    #6366f1 100deg, /* The beam color */
    transparent 140deg
  );
  transform-origin: center;
  animation: ${rotate} 4s linear infinite;
  margin-top: -100%;
  margin-left: -100%;
`;

const InnerMask = styled.div`
  position: absolute;
  inset: 1px; /* The width of the visible border is determined by this inset */
  background: #0f172a; /* Match button background to mask center */
  border-radius: 9999px;
  z-index: 0;
`;

const Content = styled.span`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BorderBeamButton = ({ children, onClick, className, to, as, ...props }) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      className={className}
      as={as}
      to={to}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <BeamContainer>
        <Beam />
        <InnerMask />
      </BeamContainer>
      <Content>{children}</Content>
    </ButtonWrapper>
  );
};

export default BorderBeamButton;
