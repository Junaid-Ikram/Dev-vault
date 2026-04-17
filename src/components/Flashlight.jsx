import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const FlashlightContainer = styled.div`
  position: relative;
  border-radius: inherit; /* Inherit border-radius from child if possible, but usually wrapper needs it */
  overflow: hidden;
  height: 100%;
  border-radius: 12px; /* Default */
  
  /* Disable effect on touch devices if desired */
  @media (hover: none) {
    /* Optional: fallback style or disable wrapper effect */
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  border-radius: inherit;
`;

const Flashlight = ({ children, className, spotlightColor = "rgba(99, 102, 241, 0.15)", borderColor = "rgba(99, 102, 241, 0.4)" }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <FlashlightContainer
            className={className}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
                    opacity: isHovered ? 1 : 0,
                    position: "absolute",
                    inset: "-1px",
                    zIndex: 1,
                    pointerEvents: "none",
                    transition: "opacity 0.3s"
                }}
            />
            {/* Border effect overlay */}
            <motion.div
                style={{
                    position: "absolute",
                    inset: 0,
                    border: "1px solid transparent",
                    borderRadius: "inherit",
                    background: useMotionTemplate`
             radial-gradient(
               400px circle at ${mouseX}px ${mouseY}px,
               ${borderColor},
               transparent 80%
             ) border-box
           `,
                    WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    pointerEvents: "none",
                    zIndex: 3,
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.3s"
                }}
            />
            <ContentWrapper>{children}</ContentWrapper>
        </FlashlightContainer>
    );
};

export default Flashlight;
