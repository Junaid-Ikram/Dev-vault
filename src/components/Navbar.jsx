import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${({ $scrolled }) => $scrolled === 'true' ? '0.8rem 0' : '1.5rem 0'};
  background: ${({ $scrolled }) => $scrolled === 'true' ? 'rgba(15, 22, 36, 0.7)' : 'transparent'};
  box-shadow: ${({ $scrolled }) => $scrolled === 'true' ? '0 10px 40px rgba(0, 0, 0, 0.5)' : 'none'};
  backdrop-filter: ${({ $scrolled }) => $scrolled === 'true' ? 'blur(20px)' : 'none'};
  -webkit-backdrop-filter: ${({ $scrolled }) => $scrolled === 'true' ? 'blur(20px)' : 'none'};
  border-bottom: ${({ $scrolled }) => $scrolled === 'true' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.03)'};
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  z-index: 1001;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const LogoImage = styled.img`
  height: 65px;
  width: auto;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 0 15px rgba(44, 165, 141, 0.4));
  
  @media (max-width: 768px) {
    height: 48px;
  }
`;

const LogoText = styled.span`
  margin-left: 12px;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: var(--text-light);
  font-size: 1.5rem;
  line-height: 1;
  
  span {
    background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

/* Removed unused auth-related styled components */

const NavLink = styled(Link)`
  font-weight: 500;
  color: var(--text-light);
  position: relative;
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  opacity: 0.8;
  transition: all 0.3s ease;
  border-radius: 8px;
  
  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.05);
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gradient-primary);
    border-radius: 8px;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
    filter: blur(8px);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1rem;
    right: 1rem;
    height: 2px;
    background: var(--gradient-primary);
    transition: width 0.3s ease;
    border-radius: 2px;
    width: 0;
  }
  
  &:hover:after,
  &.active:after {
    width: calc(100% - 2rem);
  }
  
  &.active {
    opacity: 1;
    color: var(--text-light);
    
    &::before {
      opacity: 0.15;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-light);
  font-size: 1.2rem;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  
  @media (min-width: 769px) {
    display: none;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: var(--dark-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  z-index: 1000;
  padding: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.05) 1px, transparent 0);
    background-size: 40px 40px;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const MobileNavLink = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-light);
  position: relative;
  
  &.active {
    background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];
  
  
  return (
    <NavContainer $scrolled={scrolled.toString()}>
      <NavContent>
        <LogoLink to="/" onClick={() => window.scrollTo(0, 0)}>
          <LogoImage src="/logo.svg" alt="Devvault Solutions" />
          <LogoText>Devvault <span>Solutions</span></LogoText>
        </LogoLink>
        
        <NavLinks>
          {navItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
              onClick={() => window.scrollTo(0, 0)}
            >
              {item.name}
            </NavLink>
          ))}
        </NavLinks>
        
        
        
        <MobileMenuButton 
          $scrolled={scrolled.toString()} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {navItems.map((item) => (
                <MobileNavLink 
                  key={item.name}
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {item.name}
                </MobileNavLink>
              ))}
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;