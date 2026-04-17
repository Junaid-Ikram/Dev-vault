import { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
 

const PageHeader = styled.section`
  background: linear-gradient(135deg, var(--primary) 0%, var(--dark-bg) 100%);
  color: var(--text-light);
  padding: 160px 0 100px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.8;
  line-height: 1.6;
`;

const ContactSection = styled.section`
  padding: 100px 0;
  background-color: var(--dark-bg);
  color: var(--text-light);
  position: relative;
  z-index: 1;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 992px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
`;

const ContactInfo = styled.div`
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 30px;
  padding: 3.5rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  color: var(--text-light);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-accent);
  }
`;

const ContactInfoTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  font-weight: 800;
  position: relative;
  display: inline-block;
  color: var(--text-light);
  text-align: left;
  letter-spacing: -1px;
`;

const ContactInfoList = styled.ul`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

const ContactInfoItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  text-align: left;
  
  .icon-wrapper {
    width: 58px;
    height: 58px;
    border-radius: 16px;
    background: rgba(44, 165, 141, 0.1);
    border: 1px solid rgba(44, 165, 141, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    font-size: 1.6rem;
    flex-shrink: 0;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
  
  &:hover .icon-wrapper {
    transform: scale(1.1) rotate(5deg);
    background: var(--accent);
    color: white;
    box-shadow: 0 0 20px rgba(44, 165, 141, 0.4);
  }
  
  div {
    h3 {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
      color: var(--text-light);
    }
    
    p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.05rem;
      line-height: 1.6;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-light);
  font-size: 1.4rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--accent);
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(44, 165, 141, 0.2);
  }
`;

const DiscordCTA = styled.div`
  background: linear-gradient(135deg, rgba(88, 101, 242, 0.15) 0%, rgba(15, 22, 36, 0.5) 100%);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(88, 101, 242, 0.2);
  border-radius: 24px;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: var(--shadow);
  color: var(--text-light);
  height: fit-content;
`;

const DiscordIconLarge = styled.div`
  font-size: 4rem;
  color: #5865F2;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 15px rgba(88, 101, 242, 0.4));
`;

const ContactFormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 800;
  color: var(--text-light);
`;

const DiscordDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  font-size: 1.05rem;
`;

const DiscordButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: #5865F2;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 15px rgba(88, 101, 242, 0.3);
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(88, 101, 242, 0.5);
    background: #4752C4;
  }
`;

const MapSection = styled.section`
  padding: 100px 0;
  background-color: var(--dark-bg);
  z-index: 1;
`;

const MapCard = styled(motion.div)`
  height: 650px;
  width: 100%;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 40px;
  padding: 1.5rem;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 24px;
    filter: grayscale(1) invert(0.9) contrast(1.2);
    opacity: 0.85;
    transition: opacity 0.3s ease;
  }
  
  &:hover iframe {
    opacity: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 1.5rem;
    border-radius: 24px;
    box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.2);
    pointer-events: none;
  }
`;

const MapGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 60%;
  background: radial-gradient(circle, rgba(44, 165, 141, 0.15) 0%, transparent 70%);
  filter: blur(60px);
  z-index: -1;
  pointer-events: none;
`;

const MapActions = styled.div`
  position: absolute;
  bottom: 3.5rem;
  right: 3.5rem;
  z-index: 10;
`;

const DirectionsButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: white;
  color: var(--primary);
  border-radius: 12px;
  font-weight: 700;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    background: var(--accent);
    color: white;
  }
`;

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <PageHeader className="bg-pattern">
        <div className="orb orb-primary" style={{ top: '-10%', left: '10%' }}></div>
        <div className="orb orb-secondary" style={{ bottom: '10%', right: '10%' }}></div>
        <div className="container">
          <PageTitle data-aos="fade-up">Get in Touch</PageTitle>
          <PageDescription data-aos="fade-up" data-aos-delay="100">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </PageDescription>
        </div>
      </PageHeader>
      
      <ContactSection>
        <div className="container">
          <ContactContainer>
            <ContactInfo data-aos="fade-right">
              <ContactInfoTitle>Contact Information</ContactInfoTitle>
              <ContactInfoList>
                <ContactInfoItem>
                  <div className="icon-wrapper"><FaMapMarkerAlt /></div>
                  <div>
                    <h3>Our Location</h3>
                    <p>Islamabad, Pakistan</p>
                  </div>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <div className="icon-wrapper"><FaPhone /></div>
                  <div>
                    <h3>Phone Number</h3>
                    <p>+92 303 5906620</p>
                  </div>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <div className="icon-wrapper"><FaEnvelope /></div>
                  <div>
                    <h3>Email Address</h3>
                    <p>contact@devvaultsolutions.com</p>
                  </div>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <div className="icon-wrapper"><FaClock /></div>
                  <div>
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9 AM - 6 PM PST</p>
                  </div>
                </ContactInfoItem>
              </ContactInfoList>
              
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '700' }}>Follow Our Discord</h3>
              <SocialLinks>
                <SocialIcon href="https://discord.gg/7NrwwBhfkN" target="_blank" rel="noopener noreferrer">
                  <FaDiscord />
                </SocialIcon>
              </SocialLinks>
            </ContactInfo>
            
            <DiscordCTA data-aos="fade-left">
              <DiscordIconLarge><FaDiscord /></DiscordIconLarge>
              <ContactFormTitle>Join Devvault HQ</ContactFormTitle>
              <DiscordDescription>
                The fastest way to reach us and join our growing community of developers and innovators.
              </DiscordDescription>
              <DiscordButton
                href="https://discord.gg/7NrwwBhfkN"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord Server
              </DiscordButton>
            </DiscordCTA>
          </ContactContainer>
        </div>
      </ContactSection>
      
      <MapSection className="bg-pattern">
        <div className="xl-container" style={{ position: 'relative' }}>
          <MapGlow />
          <MapCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212645.31906461677!2d72.93969549999999!3d33.6844202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1659012981386!5m2!1sen!2s" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Devvault Solutions Location"
            />
            <MapActions>
              <DirectionsButton 
                href="https://www.google.com/maps/dir/?api=1&destination=Islamabad,Pakistan" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt /> Get Directions
              </DirectionsButton>
            </MapActions>
          </MapCard>
        </div>
      </MapSection>
    </>
  );
};

export default Contact;