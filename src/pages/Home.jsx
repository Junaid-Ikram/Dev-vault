import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRobot, FaServer, FaChartLine, FaTools, FaStar, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import { FaCubes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SplitText from '../components/SplitText';
import BorderBeamButton from '../components/BorderBeamButton';
import CardRotator from '../components/CardRotator';
import TechStack from '../components/TechStack';
import Flashlight from '../components/Flashlight';
import TestimonialMarquee from '../components/TestimonialMarquee';

const HeroSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, var(--primary) 0%, var(--dark-bg) 100%);
  overflow: visible;
  padding: 110px 0 0;
  margin: 0 0 1px 0;
  left: 0;
  right: 0;
  
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

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1;
  color: var(--text-light);
  flex: 1;
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }
`;

const HeroText = styled.div`
  flex: 1;
  text-align: left;
  align-self: flex-start;
  
  @media (min-width: 992px) {
    max-width: 50%;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-align: left;
  
  span {
    color: var(--accent);
  }
  
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  line-height: 1.6;
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  svg {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const ServicesSection = styled.section`
  background-color: var(--dark-bg);
  color: var(--text-light);
  position: relative;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  display: block;
  padding: 80px 0;
`;

const ServiceGrid = styled.div`

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCardWrapper = styled(motion.div)`
  height: 100%;
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: var(--text-light);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--gradient-primary);
    z-index: -1;
  }
`;

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.8rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--text-light);
  text-align: left;
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  text-align: left;
`;

const ServiceLink = styled(Link)`
  color: var(--accent);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: var(--secondary);
  }
`;

const FeaturesSection = styled.section`
  background-color: rgba(15, 22, 36, 0.7);
  color: var(--text-light);
  position: relative;
  overflow: visible;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  display: block;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-light);
  text-align: left;
`;

const FeatureDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  text-align: left;
`;

const CTASection = styled.section`
  background: var(--gradient-primary);
  color: var(--text-light);
  text-align: center;
  padding: 5rem 0;
  position: relative;
  z-index: 1;
  min-height: 50vh;
  width: 100%;
  display: block;
`;

const TestimonialsSection = styled.section`
  background-color: var(--dark-bg);
  color: var(--text-light);
  position: relative;
  z-index: 1;
  width: 100%;
  display: block;
  padding: 80px 0;
`;

const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ReviewCount = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background: rgba(62, 146, 204, 0.3);
  color: var(--text-light);
  font-weight: 600;
`;

const RatingsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  color: var(--text-light);
  opacity: 0.9;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 1.5rem;
  color: var(--text-light);
  backdrop-filter: blur(8px);
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(62, 146, 204, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--text-light);
`;

const TestimonialAuthor = styled.div`
  font-weight: 700;
  color: var(--text-light);
`;

const TestimonialText = styled.p`
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
`;

const StarRow = styled.div`
  display: flex;
  gap: 4px;
  color: #fbbf24;
`;

const InlineCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
  color: var(--text-light);
  font-weight: 600;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
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

const CTAButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
  color: var(--text-light);
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%);
  }
`;

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50,
    });
    console.log('AOS initialized in Home component');
    console.log('Sections should be visible');

    // Debug scroll position
    const handleScroll = () => {
      console.log('Scroll position:', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions including web apps, mobile apps, and SaaS platforms to meet your specific business needs.',
      link: '/services#software'
    },
    {
      icon: <FaCubes />,
      title: 'Blockchain Development',
      description: 'Smart contracts, DeFi protocols, NFT platforms, and enterprise blockchain solutions with security as a priority.',
      link: '/services#blockchain'
    },
    {
      icon: <FaRobot />,
      title: 'AI & Automation',
      description: 'Intelligent chatbots, Discord bots, and workflow automation to streamline your business processes.',
      link: '/services#ai'
    },
    {
      icon: <FaServer />,
      title: 'DevOps & Infrastructure',
      description: 'CI/CD pipelines, containerization, cloud deployment, and infrastructure as code for optimal performance.',
      link: '/services#devops'
    },
    {
      icon: <FaChartLine />,
      title: 'Marketing & Growth',
      description: 'Web3-focused digital marketing, content creation, and community building to grow your audience.',
      link: '/services#marketing'
    },
    {
      icon: <FaTools />,
      title: 'Maintenance & Support',
      description: '24/7 technical support, monitoring, security audits, and regular updates to keep your systems running smoothly.',
      link: '/services#support'
    }
  ];

  const features = [
    {
      icon: <FaCode />,
      title: 'Clean, Efficient Code',
      description: 'We write maintainable, scalable code following best practices and industry standards.'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Modern Technologies',
      description: 'We use the latest frameworks and tools to build fast, responsive, and secure applications.'
    },
    {
      icon: <FaServer />,
      title: 'Scalable Architecture',
      description: 'Our solutions are designed to grow with your business, handling increased loads with ease.'
    },
    {
      icon: <FaRobot />,
      title: 'Automation First',
      description: 'We automate repetitive tasks to save time and reduce human error in your workflows.'
    },
    {
      icon: <FaCubes />,
      title: 'Blockchain Expertise',
      description: 'Our team has deep knowledge of blockchain technologies and decentralized applications.'
    },
    {
      icon: <FaTools />,
      title: 'Continuous Support',
      description: 'We provide ongoing maintenance and support to ensure your systems run smoothly.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialItems = [
    { name: 'tyler_jackson', text: '10/10 Highly recommended for you server needs! He was very responsive with my questions and I gave him a big list and he got everything completed with no issues! I am definitely going to be getting the weekly rate from now on! Much Love!' },
    { name: 'theonlysmithy', text: 'Truly impressed with his professionalism and code expertise in game development, exceeding all expectations. Not only did he deliver outstanding results, but his ability to go above and beyond in a timely manner while maintaining excellent communication made working with him a pleasure. Highly recommend his services!' },
    { name: 'Tyler', text: 'Working with him was a great experience. He was fast, super attentive, and really understood what I needed. Communication was smooth, and everything was delivered exactly how I wanted. Definitely will use him again in the future. Highly recommend!' },
    { name: 'maliksmith534', text: 'Working with him was a great experience. He was fast, super attentive, and really understood what I needed. Communication was smooth, and everything was delivered exactly how I wanted. Definitely will use him again in the future. Highly recommend!' }
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonialItems.length);
    }, 4000);
    return () => clearInterval(t);
  }, [testimonialItems.length]);

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SplitText delay={0.2}>Innovative Software Solutions</SplitText>
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We build cutting-edge software, blockchain applications, and AI solutions to help your business thrive in the digital age.
            </HeroSubtitle>
            <HeroButtons
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/services">
                <BorderBeamButton>Explore Services</BorderBeamButton>
              </Link>
              <Link to="/contact">
                <BorderBeamButton style={{ marginLeft: '10px', background: 'var(--gradient-primary)' }}>Get in Touch</BorderBeamButton>
              </Link>
            </HeroButtons>
          </HeroText>

          <HeroImage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M488.5,274.5Q488,349,413,377Q338,405,280.5,442Q223,479,166,421Q109,363,82.5,306.5Q56,250,82.5,193.5Q109,137,165.5,97Q222,57,281,85.5Q340,114,405.5,150.5Q471,187,479.5,243.5Q488,300,488.5,274.5Z"
                fill="rgba(62, 146, 204, 0.4)"
                animate={{
                  d: [
                    "M488.5,274.5Q488,349,413,377Q338,405,280.5,442Q223,479,166,421Q109,363,82.5,306.5Q56,250,82.5,193.5Q109,137,165.5,97Q222,57,281,85.5Q340,114,405.5,150.5Q471,187,479.5,243.5Q488,300,488.5,274.5Z",
                    "M480,270Q480,340,410,370Q330,410,280,430Q220,470,160,420Q110,360,80,300Q50,240,80,190Q110,140,160,100Q220,60,280,90Q340,120,400,150Q460,180,480,270Z",
                    "M488.5,274.5Q488,349,413,377Q338,405,280.5,442Q223,479,166,421Q109,363,82.5,306.5Q56,250,82.5,193.5Q109,137,165.5,97Q222,57,281,85.5Q340,114,405.5,150.5Q471,187,479.5,243.5Q488,300,488.5,274.5Z"
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M418.5,266Q446,282,431.5,328.5Q417,375,371,402.5Q325,430,271,442Q217,454,175.5,414.5Q134,375,107.5,330Q81,285,75,232.5Q69,180,113.5,147Q158,114,203.5,98.5Q249,83,303,83.5Q357,84,393,125.5Q429,167,409.5,208.5Q390,250,418.5,266Z"
                fill="rgba(44, 165, 141, 0.4)"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>

            <FloatingElement
              initial={{ x: -20, y: -50 }}
              animate={{ x: 20, y: -80 }}
              transition={{
                x: { duration: 3, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" },
                y: { duration: 2, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.2, rotate: 10, boxShadow: "0 0 25px rgba(99, 102, 241, 0.6)" }}
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              style={{ top: '30%', left: '20%', cursor: 'grab' }}
            >
              <FaCode />
            </FloatingElement>

            <FloatingElement
              initial={{ x: 50, y: 20 }}
              animate={{ x: 80, y: -20 }}
              transition={{
                x: { duration: 4, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" },
                y: { duration: 3, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.2, rotate: -10, boxShadow: "0 0 25px rgba(16, 185, 129, 0.6)" }}
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              style={{ top: '50%', right: '20%', cursor: 'grab' }}
            >
              <FaCubes />
            </FloatingElement>

            <FloatingElement
              initial={{ x: -10, y: 30 }}
              animate={{ x: 10, y: 60 }}
              transition={{
                x: { duration: 3.5, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" },
                y: { duration: 2.5, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.2, rotate: 15, boxShadow: "0 0 25px rgba(244, 63, 94, 0.6)" }}
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              style={{ bottom: '20%', left: '30%', cursor: 'grab' }}
            >
              <FaRobot />
            </FloatingElement>
          </HeroImage>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ color: 'var(--text-light)' }}
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            We offer a comprehensive range of services to help your business succeed in the digital world.
          </motion.p>

          <ServiceGrid>
            {services.map((service, index) => (
              <ServiceCardWrapper
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Flashlight>
                  <ServiceCard>
                    <ServiceIcon>{service.icon}</ServiceIcon>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceDescription>{service.description}</ServiceDescription>
                    <ServiceLink to={service.link}>Learn More →</ServiceLink>
                  </ServiceCard>
                </Flashlight>
              </ServiceCardWrapper>
            ))}
          </ServiceGrid>
        </div>
      </ServicesSection>

      <TechStack />


      <FeaturesSection>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ color: 'var(--text-light)' }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            We combine technical expertise with a passion for innovation to deliver exceptional results.
          </motion.p>

          <FeatureGrid>
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureItem>
            ))}
          </FeatureGrid>
        </div>
      </FeaturesSection>

      <TestimonialsSection>
        <div className="container">
          <TestimonialsHeader>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ color: 'var(--text-light)' }}
            >
              What Clients Say
            </motion.h2>
            <ReviewCount>600+ client reviews</ReviewCount>
            <RatingsBar>
              <StarRow>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </StarRow>
              <span style={{ marginLeft: '8px' }}>4.9/5 average rating</span>
            </RatingsBar>
          </TestimonialsHeader>
          <TestimonialMarquee items={testimonialItems} />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InlineCTA to="/contact">
              Hire Us Now <FaArrowRight />
            </InlineCTA>
          </div>
        </div>
      </TestimonialsSection>

      <CTASection>
        <CTAContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CTATitle>Ready to Transform Your Business?</CTATitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <CTADescription>
              Let's discuss how our custom solutions can help you achieve your goals and stay ahead of the competition.
            </CTADescription>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CTAButton to="/contact">
              Get Started Today
            </CTAButton>
          </motion.div>
        </CTAContent>
      </CTASection>
    </>
  );
};

export default Home;