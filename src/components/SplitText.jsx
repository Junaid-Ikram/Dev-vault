import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TextWrapper = styled.div`
  display: inline-block;
  overflow: hidden;
`;

const LetterWrapper = styled(motion.span)`
  display: inline-block;
  transform-style: preserve-3d;
  line-height: 1; /* Adjust based on font */
`;

const SplitText = ({ children, className, delay = 0 }) => {
    const text = children || "";
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: -20, // Slide down from top
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}
        >
            {words.map((word, i) => (
                <span key={i} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                    {word.split("").map((char, index) => (
                        <LetterWrapper key={index} variants={child}>
                            {char}
                        </LetterWrapper>
                    ))}
                    <span style={{ display: 'inline-block' }}>&nbsp;</span>
                </span>
            ))}
        </motion.span>
    );
};

export default SplitText;
