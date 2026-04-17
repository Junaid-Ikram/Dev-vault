import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaServer, FaChartLine, FaTools, FaCode, FaMobileAlt, FaShoppingCart, FaDatabase, FaCubes } from 'react-icons/fa';
import { SiSolidity, SiRust, SiEthereum, SiDiscord, SiOpenai } from 'react-icons/si';
import { RiRobot2Fill, RiChatSmile3Fill, RiFlowChart } from 'react-icons/ri';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { BiCodeBlock } from 'react-icons/bi';
import { TbBrandReact, TbBrandVue, TbBrandAngular } from 'react-icons/tb';

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

const ServiceNavigation = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 900px;
  margin: 3rem auto 0;
  box-shadow: var(--shadow);
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    border-radius: 10px;
    padding: 0.5rem;
    flex-direction: column;
  }
`;

const ServiceNavItem = styled(motion(Link))`
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
  color: var(--text-light);
  cursor: pointer;
  text-decoration: none;
  
  &.active {
    background: var(--gradient-primary);
    color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  &:hover:not(.active) {
    background: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    text-align: center;
    border-radius: 5px;
  }
`;

const ServiceSection = styled.section`
  padding: 100px 0;
  position: relative;
  
  &:nth-child(even) {
    background-color: rgba(15, 22, 36, 0.7);
  }
  
  &:nth-child(odd) {
    background-color: var(--dark-bg);
  }
`;

const ServiceHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    color: var(--text-light);
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: var(--accent);
    }
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  color: var(--text-light);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    transition: 0.5s;
  }
  
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.05);

    &::after {
      left: 100%;
    }
  }
`;

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 10px;
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
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ServiceFeatures = styled.ul`
  margin-bottom: 1.5rem;
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.85);
    display: grid;
    grid-template-columns: 20px 1fr;
    align-items: start;
    column-gap: 0.5rem;
    line-height: 1.5;
    
    &::before {
      content: '✓';
      color: var(--accent);
      font-weight: 700;
      display: inline-block;
      width: 20px;
      text-align: center;
    }
  }
`;

const CTASection = styled.section`
  background: var(--gradient-primary);
  color: var(--text-light);
  text-align: center;
  padding: 5rem 0;
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
  padding: 1.2rem 2.8rem;
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

const Services = () => {
  const location = useLocation();
  const hash = location.hash;
  const [activeService, setActiveService] = useState(hash ? hash.substring(1) : 'software');
  
  const softwareRef = useRef(null);
  const blockchainRef = useRef(null);
  const aiRef = useRef(null);
  const devopsRef = useRef(null);
  const marketingRef = useRef(null);
  const supportRef = useRef(null);
  
  // Helper function for changing active service
  const changeActiveService = (sectionId) => (e) => {
    e.preventDefault();
    setActiveService(sectionId);
    window.history.pushState(null, '', `#${sectionId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  useEffect(() => {
    // Set active service based on hash when component mounts or hash changes
    if (hash) {
      const sectionId = hash.substring(1);
      setActiveService(sectionId);
    } else {
      // Default to software if no hash
      setActiveService('software');
    }
    
    // Scroll to top when active service changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hash]);

  const softwareServices = [
    {
      icon: <FaLaptopCode />,
      title: 'Fullstack Web Development',
      description: 'End-to-end web application development with modern frontend and robust backend technologies.',
      features: [
        'Responsive web applications',
        'Progressive Web Apps (PWAs)',
        'API development and integration',
        'Database design and optimization'
      ]
    },
    {
      icon: <TbBrandReact />,
      title: 'Custom Web Apps',
      description: 'Tailored web applications built with modern JavaScript frameworks to meet your specific business needs.',
      features: [
        'React applications',
        'Vue.js development',
        'Angular solutions',
        'State management with Redux/Vuex'
      ]
    },
    {
      icon: <FaShoppingCart />,
      title: 'E-commerce Platforms',
      description: 'Custom e-commerce solutions and integrations to help your business sell online effectively.',
      features: [
        'Custom Shopify development',
        'WooCommerce solutions',
        'Payment gateway integration',
        'Inventory management systems'
      ]
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      features: [
        'Native iOS & Android apps',
        'React Native development',
        'Flutter applications',
        'App Store & Play Store deployment'
      ]
    },
    {
      icon: <FaDatabase />,
      title: 'SaaS Product Development',
      description: 'End-to-end development of scalable Software-as-a-Service products with subscription models.',
      features: [
        'Multi-tenant architecture',
        'Subscription & billing systems',
        'User management & authentication',
        'Analytics & reporting dashboards'
      ]
    },
    {
      icon: <FaCode />,
      title: 'API Development & Integration',
      description: 'Custom API development and third-party service integrations to connect your systems.',
      features: [
        'RESTful API design',
        'GraphQL implementation',
        'Third-party API integration',
        'API documentation & testing'
      ]
    }
  ];

  const blockchainServices = [
    {
      icon: <SiSolidity />,
      title: 'Smart Contract Development',
      description: 'Secure, efficient, and audit-ready smart contracts for various blockchain platforms.',
      features: [
        'Solidity development',
        'Rust for Solana/Near',
        'Formal verification',
        'Gas optimization'
      ]
    },
    {
      icon: <SiEthereum />,
      title: 'DeFi Protocol Development',
      description: 'Building decentralized finance protocols and applications with security as a priority.',
      features: [
        'AMMs & DEX development',
        'Lending & borrowing platforms',
        'Yield farming & staking',
        'Governance systems'
      ]
    },
    {
      icon: <BiCodeBlock />,
      title: 'NFT Development',
      description: 'End-to-end NFT solutions from smart contracts to marketplaces and integration.',
      features: [
        'NFT smart contracts',
        'Marketplace development',
        'NFT minting platforms',
        'Metadata & storage solutions'
      ]
    },
    {
      icon: <FaCubes />,
      title: 'Web3 & dApp Development',
      description: 'Full-stack decentralized applications connecting blockchain backends with intuitive frontends.',
      features: [
        'Wallet integration',
        'Web3.js/ethers.js implementation',
        'IPFS integration',
        'Cross-chain compatibility'
      ]
    },
    {
      icon: <FaDatabase />,
      title: 'Enterprise Blockchain Solutions',
      description: 'Private and consortium blockchain solutions for enterprise use cases.',
      features: [
        'Hyperledger Fabric implementation',
        'Private/consortium chains',
        'Blockchain-as-a-Service (BaaS)',
        'Supply chain & logistics solutions'
      ]
    },
    {
      icon: <FaCode />,
      title: 'Layer 2 & Cross-Chain Solutions',
      description: 'Scaling solutions and cross-chain bridges to enhance blockchain performance and interoperability.',
      features: [
        'ZK/Optimistic rollups',
        'Sidechains implementation',
        'State channels',
        'Cross-chain bridges'
      ]
    }
  ];

  const aiServices = [
    {
      icon: <RiChatSmile3Fill />,
      title: 'AI Chatbots',
      description: 'Intelligent conversational agents for customer service, lead generation, and process automation.',
      features: [
        'Website chat integration',
        'WhatsApp & Telegram bots',
        'OpenAI/GPT integration',
        'Custom NLP solutions'
      ]
    },
    {
      icon: <SiDiscord />,
      title: 'Discord Bot Development',
      description: 'Custom Discord bots for community management, engagement, and specialized functionality.',
      features: [
        'Moderation & utility bots',
        'Gaming & tournament bots',
        'Crypto price & portfolio bots',
        'AI-powered conversation bots'
      ]
    },
    {
      icon: <SiOpenai />,
      title: 'OpenAI/GPT Integration',
      description: 'Integrating advanced AI models into your applications and workflows for enhanced capabilities.',
      features: [
        'Custom GPT implementation',
        'Content generation systems',
        'AI-powered search & recommendations',
        'Language processing solutions'
      ]
    },
    {
      icon: <RiFlowChart />,
      title: 'Workflow Automation',
      description: 'Automating business processes and workflows to increase efficiency and reduce manual tasks.',
      features: [
        'n8n workflow implementation',
        'Business process automation',
        'CRM & social media workflows',
        'DeFi monitoring systems'
      ]
    },
    {
      icon: <GiArtificialIntelligence />,
      title: 'Custom AI Solutions',
      description: 'Tailored artificial intelligence solutions for specific business problems and use cases.',
      features: [
        'Machine learning models',
        'Predictive analytics',
        'Computer vision applications',
        'Natural language processing'
      ]
    },
    {
      icon: <RiRobot2Fill />,
      title: 'AI-Powered Analytics',
      description: 'Advanced analytics and insights powered by artificial intelligence and machine learning.',
      features: [
        'Data visualization dashboards',
        'Predictive business intelligence',
        'Customer behavior analysis',
        'Anomaly detection systems'
      ]
    }
  ];

  const devopsServices = [
    {
      icon: <FaServer />,
      title: 'CI/CD Pipeline Setup',
      description: 'Automated continuous integration and deployment pipelines for efficient software delivery.',
      features: [
        'GitHub Actions configuration',
        'GitLab CI/CD setup',
        'Jenkins implementation',
        'Automated testing integration'
      ]
    },
    {
      icon: <FaCode />,
      title: 'Containerization',
      description: 'Containerizing applications for consistent deployment across different environments.',
      features: [
        'Docker containerization',
        'Kubernetes orchestration',
        'Container registry setup',
        'Microservices architecture'
      ]
    },
    {
      icon: <FaServer />,
      title: 'Cloud Deployment',
      description: 'Deploying and managing applications on major cloud platforms for scalability and reliability.',
      features: [
        'AWS deployment & management',
        'Google Cloud Platform solutions',
        'Azure implementation',
        'Multi-cloud strategies'
      ]
    },
    {
      icon: <FaCode />,
      title: 'Infrastructure as Code',
      description: 'Managing and provisioning infrastructure through code for consistency and automation.',
      features: [
        'Terraform implementation',
        'CloudFormation templates',
        'Ansible automation',
        'Infrastructure version control'
      ]
    },
    {
      icon: <FaServer />,
      title: 'Monitoring & Alerts',
      description: 'Setting up comprehensive monitoring and alert systems to ensure application health and performance.',
      features: [
        'Prometheus monitoring',
        'Grafana dashboards',
        'Log aggregation systems',
        'Alert configuration & management'
      ]
    },
    {
      icon: <FaCubes />,
      title: 'Blockchain Node Deployment',
      description: 'Setting up and maintaining blockchain nodes and infrastructure for various networks.',
      features: [
        'Full node deployment',
        'RPC endpoint configuration',
        'Node monitoring & maintenance',
        'Validator node setup'
      ]
    }
  ];

  const marketingServices = [
    {
      icon: <FaChartLine />,
      title: 'Web3-Focused Digital Marketing',
      description: 'Specialized digital marketing strategies for blockchain and Web3 projects.',
      features: [
        'Crypto marketing campaigns',
        'NFT launch strategies',
        'Community-driven marketing',
        'Token marketing'
      ]
    },
    {
      icon: <FaChartLine />,
      title: 'Influencer Outreach',
      description: 'Connecting with relevant influencers to amplify your brand message and reach.',
      features: [
        'Crypto influencer partnerships',
        'Paid promotion management',
        'Influencer relationship building',
        'Campaign performance tracking'
      ]
    },
    {
      icon: <SiDiscord />,
      title: 'Community Building',
      description: 'Building and nurturing engaged communities around your brand or project.',
      features: [
        'Discord community management',
        'Twitter growth strategies',
        'Telegram group moderation',
        'Community engagement tactics'
      ]
    },
    {
      icon: <FaChartLine />,
      title: 'Content & SEO',
      description: 'Creating valuable content and optimizing for search engines to drive organic traffic.',
      features: [
        'Web3 SEO optimization',
        'Technical blog writing',
        'Whitepaper development',
        'Case study creation'
      ]
    }
  ];

  const supportServices = [
    {
      icon: <FaTools />,
      title: '24/7 Technical Support',
      description: 'Round-the-clock technical assistance to ensure your systems run smoothly at all times.',
      features: [
        'Incident response',
        'Issue troubleshooting',
        'Performance optimization',
        'User support'
      ]
    },
    {
      icon: <FaServer />,
      title: 'Monitoring & Maintenance',
      description: 'Proactive monitoring and maintenance of your software and infrastructure.',
      features: [
        'Smart contract monitoring',
        'Server health checks',
        'Performance analytics',
        'Automated backups'
      ]
    },
    {
      icon: <FaTools />,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify and address vulnerabilities.',
      features: [
        'Code security audits',
        'Penetration testing',
        'Vulnerability assessments',
        'Security best practices implementation'
      ]
    },
    {
      icon: <FaTools />,
      title: 'Regular Updates & Fixes',
      description: 'Keeping your systems up-to-date with the latest features, improvements, and security patches.',
      features: [
        'Regular software updates',
        'Bug fixes & patches',
        'Feature enhancements',
        'Dependency management'
      ]
    }
  ];

  return (
    <>
      <PageHeader>
        <div className="container">
          <PageTitle 
            as={motion.h1}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </PageTitle>
          <PageDescription 
            as={motion.p}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive software solutions to help your business thrive in the digital age.
          </PageDescription>
          
          <ServiceNavigation 
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ServiceNavItem 
              to="#software" 
              className={activeService === 'software' ? 'active' : ''}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onClick={changeActiveService('software')}
            >
              Software Development
            </ServiceNavItem>
            <ServiceNavItem 
              to="#blockchain" 
              className={activeService === 'blockchain' ? 'active' : ''}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              onClick={changeActiveService('blockchain')}
            >
              Blockchain
            </ServiceNavItem>
            <ServiceNavItem 
              to="#ai" 
              className={activeService === 'ai' ? 'active' : ''}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              onClick={changeActiveService('ai')}
            >
              AI & Automation
            </ServiceNavItem>
            <ServiceNavItem 
              to="#devops" 
              className={activeService === 'devops' ? 'active' : ''}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              onClick={changeActiveService('devops')}
            >
              DevOps
            </ServiceNavItem>
            <ServiceNavItem 
              to="#marketing" 
              className={activeService === 'marketing' ? 'active' : ''}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={changeActiveService('marketing')}
            >
              Marketing
            </ServiceNavItem>
            <ServiceNavItem 
              to="#support" 
              className={activeService === 'support' ? 'active' : ''}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.0 }}
              whileHover={{ scale: 1.05 }}
              onClick={changeActiveService('support')}
            >
              Support
            </ServiceNavItem>
          </ServiceNavigation>
        </div>
      </PageHeader>
      
      <div className="service-content">
        {activeService === 'software' && (
          <ServiceSection id="software" ref={softwareRef}>
            <div className="container">
              <ServiceHeader>
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Custom Software Development
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Tailored software solutions designed to meet your specific business needs and challenges.
                </motion.p>
              </ServiceHeader>
              
              <ServiceGrid>
                {softwareServices.map((service, index) => (
                  <ServiceCard 
                    key={index}
                    as={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    whileHover={{ y: -10 }}
                  >
                    <ServiceIcon>{service.icon}</ServiceIcon>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceDescription>{service.description}</ServiceDescription>
                    <ServiceFeatures>
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ServiceFeatures>
                  </ServiceCard>
                ))}
              </ServiceGrid>
            </div>
          </ServiceSection>
        )}
        
        {activeService === 'blockchain' && (
          <ServiceSection id="blockchain" ref={blockchainRef}>
            <div className="container">
              <ServiceHeader>
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Blockchain Development
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Cutting-edge blockchain solutions from smart contracts to full decentralized applications.
                </motion.p>
              </ServiceHeader>
              
              <ServiceGrid>
                {blockchainServices.map((service, index) => (
                  <ServiceCard 
                    key={index}
                    as={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    whileHover={{ y: -10 }}
                  >
                    <ServiceIcon>{service.icon}</ServiceIcon>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceDescription>{service.description}</ServiceDescription>
                    <ServiceFeatures>
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ServiceFeatures>
                  </ServiceCard>
                ))}
              </ServiceGrid>
            </div>
          </ServiceSection>
        )}
      
        {activeService === 'ai' && (
          <ServiceSection id="ai" ref={aiRef}>
            <div className="container">
              <ServiceHeader>
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  AI & Automation Services
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Intelligent solutions that leverage artificial intelligence and automation to streamline your operations.
                </motion.p>
              </ServiceHeader>
              
              <ServiceGrid>
                {aiServices.map((service, index) => (
                  <ServiceCard 
                    key={index}
                    as={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    whileHover={{ y: -10 }}
                  >
                    <ServiceIcon>{service.icon}</ServiceIcon>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceDescription>{service.description}</ServiceDescription>
                    <ServiceFeatures>
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ServiceFeatures>
                  </ServiceCard>
                ))}
              </ServiceGrid>
            </div>
          </ServiceSection>
        )}
        
        {activeService === 'devops' && (
          <ServiceSection id="devops" ref={devopsRef}>
            <div className="container">
              <ServiceHeader>
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  DevOps & Infrastructure
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Streamlined development operations and robust infrastructure solutions for optimal performance.
                </motion.p>
              </ServiceHeader>
              
              <ServiceGrid>
                {devopsServices.map((service, index) => (
                  <ServiceCard 
                    key={index}
                    as={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    whileHover={{ y: -10 }}
                  >
                    <ServiceIcon>{service.icon}</ServiceIcon>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceDescription>{service.description}</ServiceDescription>
                    <ServiceFeatures>
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ServiceFeatures>
                  </ServiceCard>
                ))}
              </ServiceGrid>
            </div>
          </ServiceSection>
        )}
      
      {activeService === 'marketing' && (
        <ServiceSection id="marketing" ref={marketingRef}>
          <div className="container">
            <ServiceHeader>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Marketing & Growth
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Strategic marketing services to help your business grow and reach your target audience.
              </motion.p>
            </ServiceHeader>
            
            <ServiceGrid>
              {marketingServices.map((service, index) => (
                <ServiceCard 
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  whileHover={{ y: -10 }}
                >
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  <ServiceFeatures>
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ServiceFeatures>
                </ServiceCard>
              ))}
            </ServiceGrid>
          </div>
        </ServiceSection>
      )}
      
      {activeService === 'support' && (
        <ServiceSection id="support" ref={supportRef}>
          <div className="container">
            <ServiceHeader>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Maintenance & Support
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Comprehensive support and maintenance services to keep your systems running smoothly.
              </motion.p>
            </ServiceHeader>
            
            <ServiceGrid>
              {supportServices.map((service, index) => (
                <ServiceCard 
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  whileHover={{ y: -10 }}
                >
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  <ServiceFeatures>
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ServiceFeatures>
                </ServiceCard>
              ))}
            </ServiceGrid>
          </div>
        </ServiceSection>
      )}
      </div>
      
      <CTASection>
        <CTAContent>
          <CTATitle 
            as={motion.h2}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Get Started?
          </CTATitle>
          <CTADescription 
            as={motion.p}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact us today to discuss your project requirements and how we can help you achieve your goals.
          </CTADescription>
          <CTAButton 
            to="/contact" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
          </CTAButton>
        </CTAContent>
      </CTASection>
    </>
  );
};

export default Services;