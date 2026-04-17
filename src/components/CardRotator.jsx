import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const RotatorContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 400px; /* Adjust as needed */
  perspective: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const Card = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transform-style: preserve-3d;
`;

const Controls = styled.div`
  position: absolute;
  bottom: -60px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  z-index: 10;
`;

const ControlButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--accent);
    transform: scale(1.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, #cbd5e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #94a3b8;
`;

const variants = {
    enter: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.8,
        zIndex: 0,
        rotateY: direction > 0 ? 45 : -45
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
            duration: 0.5
        }
    },
    exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.8,
        rotateY: direction < 0 ? 45 : -45,
        transition: {
            duration: 0.5
        }
    })
};

const CardRotator = ({ items }) => {
    const [[page, direction], setPage] = useState([0, 0]);

    // Basic content if none provided
    const content = items || [
        { title: "Design", description: "We craft beautiful, intuitive interfaces that delight users and drive engagement." },
        { title: "Develop", description: "Our clean, efficient code ensures your application is fast, secure, and scalable." },
        { title: "Deploy", description: "Automated CI/CD pipelines mean flawless deployments and rapid iteration." }
    ];

    const index = Math.abs(page % content.length);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    // Auto-rotate
    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(interval);
    }, [page]);

    return (
        <RotatorContainer>
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <Card
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                >
                    <CardTitle>{content[index].title}</CardTitle>
                    <CardContent>{content[index].description}</CardContent>
                </Card>
            </AnimatePresence>

            <Controls>
                <ControlButton onClick={() => paginate(-1)}>
                    <FaChevronLeft />
                </ControlButton>
                <ControlButton onClick={() => paginate(1)}>
                    <FaChevronRight />
                </ControlButton>
            </Controls>
        </RotatorContainer>
    );
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

export default CardRotator;
