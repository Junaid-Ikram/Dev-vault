import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: var(--dark-bg);
  color: var(--text-light);
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLogo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  display: inline-block;
  letter-spacing: -0.5px;
  
  span {
    background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const FooterDescription = styled.p`
  font-size: 0.95rem;
  opacity: 0.7;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 400px;
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
  position: relative;
  color: var(--text-light);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 30px;
    height: 3px;
    background: var(--accent);
    border-radius: 2px;
  }
`;

const FooterLink = styled(Link)`
  font-size: 0.95rem;
  opacity: 0.7;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  
  &:hover {
    opacity: 1;
    color: var(--accent);
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-light);
  font-size: 1.3rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    background: var(--accent);
    color: white;
    transform: translateY(-5px) rotate(8deg);
    box-shadow: 0 10px 20px rgba(44, 165, 141, 0.3);
    border-color: transparent;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.95rem;
  opacity: 0.8;
  line-height: 1.6;
`;

const Copyright = styled.div`
  text-align: center;
  padding: 2.5rem 0;
  margin-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.9rem;
  opacity: 0.5;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Footer = () => {
  return (
    <FooterContainer className="bg-pattern">
      <FooterContent>
        <FooterColumn>
          <FooterLogo to="/">
            Devvault<span>Solutions</span>
          </FooterLogo>
          <FooterDescription>
            Innovative software solutions for businesses of all sizes. We specialize in custom software development, blockchain solutions, AI services, and more.
          </FooterDescription>
          <SocialLinks>
            <SocialIcon href="https://discord.gg/7NrwwBhfkN" target="_blank" rel="noopener noreferrer" title="Join our Discord">
              <FaDiscord />
            </SocialIcon>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Company</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Services</FooterTitle>
          <FooterLink to="/services#software">Custom Software</FooterLink>
          <FooterLink to="/services#blockchain">Blockchain Development</FooterLink>
          <FooterLink to="/services#ai">AI & Automation</FooterLink>
          <FooterLink to="/services#devops">DevOps & Infrastructure</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Get in Touch</FooterTitle>
          <ContactInfo>
            <p>Islamabad, Pakistan</p>
            <p>contact@devvaultsolutions.com</p>
            <p>+92 303 5906620</p>
          </ContactInfo>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        &copy; {new Date().getFullYear()} Devvault Solutions. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;