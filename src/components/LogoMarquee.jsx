import React from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  background: transparent;
  padding: 2rem 0;
  
  /* Alpha mask for fade effect at edges */
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  gap: 4rem;
  animation: ${scroll} 30s linear infinite;
  
  &:hover {
    animation-play-state: paused;
  }
`;

const LogoItem = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: color 0.3s;
  
  &:hover {
    color: var(--accent);
  }
  
  /* If using images */
  img {
    height: 40px;
    width: auto;
    opacity: 0.6;
    transition: opacity 0.3s;
    
    &:hover {
      opacity: 1;
    }
  }

  svg {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

// Placeholder logos/names if none provided
const defaultLogos = [
    "TechStart", "InnovateCorp", "FutureSystems", "CloudNine", "DataFlow", "SecureNet", "WebWizards", "AppMaster"
];

const LogoMarquee = ({ items = defaultLogos }) => {
    // Duplicate items to create infinite effect
    const marqueeItems = [...items, ...items, ...items];

    return (
        <MarqueeContainer>
            <MarqueeTrack>
                {marqueeItems.map((item, index) => (
                    <LogoItem key={index}>
                        {/* If item is string, render text, else render item (assuming component) */}
                        {typeof item === 'string' ? item : item}
                    </LogoItem>
                ))}
            </MarqueeTrack>
        </MarqueeContainer>
    );
};

export default LogoMarquee;
