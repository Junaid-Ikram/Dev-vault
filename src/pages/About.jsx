import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';

const PageHeader = styled.section`
  background: linear-gradient(135deg, var(--primary) 0%, var(--dark-bg) 100%);
  color: var(--text-light);
  padding: 120px 0 80px;
  text-align: center;
  position: relative;
  overflow: visible;
  z-index: 1;
  min-height: 50vh;
  width: 100%;
  display: block;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgc2xpY2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBMNTAgNTAgTDAgMTAwIFoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48cGF0aCBkPSJNMTAwIDAgTDUwIDUwIEwxMDAgMTAwIFoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=');
    opacity: 0.1;
  }
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent);
  }
  
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 2rem auto 0;
  opacity: 0.9;
`;

const StorySection = styled.section`
  background-color: var(--dark-bg);
  color: var(--text-light);
  position: relative;
  z-index: 1;
  min-height: 500px;
  width: 100%;
  display: block;
`;

const StoryContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const StoryImage = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(10, 36, 99, 0.4) 0%, rgba(44, 165, 141, 0.4) 100%);
    z-index: 1;
  }
`;

const StoryText = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    color: var(--text-light);
    
    span {
      color: var(--accent);
    }
  }
  
  p {
    margin-bottom: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.8;
  }
`;

const ValuesSection = styled.section`
  background-color: #0a101f;
  color: var(--text-light);
  text-align: center;
  padding: 5rem 0;
  position: relative;
  z-index: 1;
  min-height: 400px;
  width: 100%;
  display: block;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: var(--shadow);
  text-align: center;
  transition: var(--transition);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-light);
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--text-light);
`;

const ValueDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
`;



const CTASection = styled.section`
  background: var(--gradient-primary);
  color: var(--text-light);
  text-align: center;
  padding: 5rem 0;
  position: relative;
  z-index: 1;
  min-height: 300px;
  width: 100%;
  display: block;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  background: white;
  color: var(--primary);
  font-weight: 700;
  padding: 1.2rem 2.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    background: var(--accent);
    color: white;
  }
`;

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <FaCode />,
      title: 'Technical Excellence',
      description: 'We strive for perfection in every line of code, ensuring robust, scalable, and maintainable solutions for our clients.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We embrace new technologies and approaches to solve complex problems with creative, future-proof solutions.'
    },
    {
      icon: <FaHandshake />,
      title: 'Partnership',
      description: 'We build lasting relationships with our clients, working together as true partners in their digital success.'
    },
    {
      icon: <FaRocket />,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that drive growth and create real business value for your brand.'
    }
  ];

  return (
    <>
      <PageHeader className="bg-pattern">
        <div className="orb orb-primary" style={{ top: '-10%', left: '10%' }}></div>
        <div className="orb orb-secondary" style={{ bottom: '10%', right: '10%' }}></div>
        <div className="container">
          <PageTitle 
            as={motion.h1}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </PageTitle>
          <PageDescription 
            as={motion.p}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Learn about our journey, our values, and the vision behind Devvault Solutions.
          </PageDescription>
        </div>
      </PageHeader>
      
      <StorySection>
        <div className="container">
          <StoryContent>
            <StoryImage 
              as={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card"
              style={{ overflow: 'hidden' }}
            >
              <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" style={{ background: 'linear-gradient(135deg, #0A2463 0%, #3E92CC 100%)' }}>
                <path d="M488.5,274.5Q488,349,413,377Q338,405,280.5,442Q223,479,166,421Q109,363,82.5,306.5Q56,250,82.5,193.5Q109,137,165.5,97Q222,57,281,85.5Q340,114,405.5,150.5Q471,187,479.5,243.5Q488,300,488.5,274.5Z" fill="rgba(44, 165, 141, 0.4)"></path>
                <path d="M418.5,266Q446,282,431.5,328.5Q417,375,371,402.5Q325,430,271,442Q217,454,175.5,414.5Q134,375,107.5,330Q81,285,75,232.5Q69,180,113.5,147Q158,114,203.5,98.5Q249,83,303,83.5Q357,84,393,125.5Q429,167,409.5,208.5Q390,250,418.5,266Z" fill="rgba(255, 255, 255, 0.2)"></path>
              </svg>
            </StoryImage>
            
            <StoryText 
              as={motion.div}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2>
                Our <span>Story</span>
              </motion.h2>
              <motion.p>
                Founded in 2020, Devvault Solutions began with a simple mission: to create innovative software solutions that help businesses thrive in the digital age. What started as a small team of passionate developers has grown into a full-service software house with expertise across multiple domains.
              </motion.p>
              <motion.p>
                Our journey has been defined by a relentless pursuit of technical excellence and a deep commitment to our clients' success. We've evolved from building simple web applications to developing complex blockchain systems, AI-powered tools, and enterprise-grade software solutions.
              </motion.p>
              <motion.p>
                Today, we work with clients ranging from startups to established enterprises, helping them leverage technology to solve real-world problems and achieve their business goals. Our diverse team brings together expertise in software development, blockchain technology, artificial intelligence, and user experience design.
              </motion.p>
            </StoryText>
          </StoryContent>
        </div>
      </StorySection>
      
      <ValuesSection className="bg-pattern">
        <div className="container">
          <motion.h2 
            className="section-title" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The principles that guide everything we do at Devvault.
          </motion.p>
          
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="glass-card"
              >
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </div>
      </ValuesSection>
      
      <CTASection>
        <div className="orb orb-primary" style={{ top: '-40%', right: '20%' }}></div>
        <CTAContent>
          <CTATitle 
            as={motion.h2}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join Our Journey
          </CTATitle>
          <CTADescription 
            as={motion.p}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Partner with Devvault Solutions to bring your ideas to life and transform your business with innovative technology.
          </CTADescription>
          <CTAButton 
            to="/contact" 
            as={motion(Link)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="btn btn-primary"
            style={{ borderRadius: '9999px', background: 'white', color: 'var(--primary)' }}
          >
            Get in Touch
          </CTAButton>
        </CTAContent>
      </CTASection>
    </>
  );
};

export default About;