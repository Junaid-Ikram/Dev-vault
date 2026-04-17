import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiNextdotjs, SiTailwindcss, SiGraphql } from 'react-icons/si';

// Ensure react-icons/si is installed, if not, fallback to Fa icons or text
// For this environment, I'll stick to Fa where possible or safe fallbacks if I'm unsure about the package version.
// Using standard Fa icons for now to be safe, enhancing with Si if available (usually is).

const TechSection = styled.section`
  padding: 6rem 0;
  background: var(--dark-bg);
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(to right, #fff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TechItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--accent);
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
  }
`;

const IconWrapper = styled(motion.div)`
  font-size: 3rem;
  color: #94a3b8;
  
  ${TechItem}:hover & {
    color: var(--accent);
  }
`;

const TechName = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #cbd5e1;
`;

const technologies = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Git', icon: <FaGitAlt /> }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
};

const TechStack = () => {
    return (
        <TechSection>
            <SectionTitle
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Powered by Modern Tech
            </SectionTitle>

            <TechGrid as={motion.div} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
                {technologies.map((tech, index) => (
                    <TechItem key={index} variants={item} whileHover={{ y: -5 }}>
                        <IconWrapper
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                        >
                            {tech.icon}
                        </IconWrapper>
                        <TechName>{tech.name}</TechName>
                    </TechItem>
                ))}
            </TechGrid>
        </TechSection>
    );
};

export default TechStack;
