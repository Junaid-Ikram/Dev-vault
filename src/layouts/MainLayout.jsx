import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--dark-bg);
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const ScrollProgress = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-accent);
  transform-origin: 0%;
  z-index: 2000;
  box-shadow: 0 0 10px rgba(44, 165, 141, 0.5);
`;

const PersistentOrbs = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const ContentContainer = styled.main`
  flex: 1;
  background-color: var(--background);
  color: var(--text-primary);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const MainLayout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 50,
      easing: 'ease-out-cubic',
    });
    
    const handleResize = () => AOS.refresh();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <MainContainer>
      <ScrollProgress style={{ scaleX }} />
      <PersistentOrbs>
        <div className="orb orb-primary pulsing" style={{ top: '20%', left: '-10%', width: '400px', height: '400px', opacity: '0.15' }}></div>
        <div className="orb orb-secondary pulsing" style={{ bottom: '10%', right: '-5%', width: '350px', height: '350px', opacity: '0.1', animationDelay: '-2s' }}></div>
      </PersistentOrbs>
      <Navbar />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default MainLayout;