import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

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
  gap: 2rem;
  animation: ${scroll} 60s linear infinite; /* Slower speed for reading */
  
  &:hover {
    animation-play-state: paused;
  }
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  width: 350px;
  flex-shrink: 0;
  backdrop-filter: blur(10px);
  color: var(--text-light);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--accent);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  font-size: 1.2rem;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  color: #fbbf24;
  margin-left: auto;
`;

const Quote = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
`;

const TestimonialMarquee = ({ items }) => {
    // Duplicate items for infinite loop
    const marqueeItems = [...items, ...items, ...items];

    return (
        <MarqueeContainer>
            <MarqueeTrack>
                {marqueeItems.map((item, index) => (
                    <TestimonialCard key={`${item.name}-${index}`}>
                        <UserInfo>
                            <Avatar>{item.name.charAt(0).toUpperCase()}</Avatar>
                            <Name>{item.name}</Name>
                            <Stars>
                                {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
                            </Stars>
                        </UserInfo>
                        <div style={{ position: 'relative' }}>
                            <FaQuoteLeft style={{ position: 'absolute', top: -5, left: -5, opacity: 0.2, fontSize: '1.5rem' }} />
                            <Quote style={{ paddingLeft: '1.5rem' }}>{item.text}</Quote>
                        </div>
                    </TestimonialCard>
                ))}
            </MarqueeTrack>
        </MarqueeContainer>
    );
};

export default TestimonialMarquee;
