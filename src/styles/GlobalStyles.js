import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #0A2463;
    --secondary: #3E92CC;
    --accent: #2CA58D;
    --background: #0A2463;
    --dark-bg: #0F1624;
    --text-primary: #FFFFFF;
    --text-secondary: #CCCCCC;
    --text-light: #FFFFFF;
    --gradient-primary: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    --gradient-accent: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
    --transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    --shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    --glass-bg: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(255, 255, 255, 0.08);
    --glow-accent: 0 0 20px rgba(44, 165, 141, 0.4);
  }

  ::selection {
    background: var(--accent);
    color: white;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--dark-bg);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    border: 2px solid var(--dark-bg);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--dark-bg);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.05) 1px, transparent 0);
      background-size: 40px 40px;
      pointer-events: none;
      z-index: 0;
    }
  }
  
  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
    transition: var(--transition);
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  section {
    padding: 100px 0;
    min-height: 500px;
    display: block;
    position: relative;
    
    @media (max-width: 768px) {
      padding: 60px 0;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .xl-container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-divider {
    height: 1px;
    width: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    margin: 0;
  }

  .section-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
    color: var(--text-primary);
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 80px;
    height: 4px;
    background: var(--accent);
  }

  .text-gradient {
    background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glass-card {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    transition: var(--transition);
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
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(255, 255, 255, 0.15);
      transform: translateY(-8px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
      
      &::after {
        left: 100%;
      }
    }
  }

  .bg-pattern {
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      pointer-events: none;
      z-index: -1;
    }
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    z-index: -1;
    opacity: 0.4;
    pointer-events: none;
  }

  .orb-primary {
    width: 300px;
    height: 300px;
    background: var(--primary);
  }

  .orb-secondary {
    width: 250px;
    height: 250px;
    background: var(--accent);
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 2rem;
    font-weight: 600;
    border-radius: 9999px;
    text-align: center;
    transition: var(--transition);
    letter-spacing: 0.5px;
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(44, 165, 141, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(44, 165, 141, 0.5);
    filter: brightness(1.1);
  }

  .btn-outline {
    background: transparent;
    border: 2px solid var(--accent);
    color: var(--accent);
  }

  .btn-outline:hover {
    background: var(--accent);
    color: white;
    transform: translateY(-3px);
  }

  @keyframes float {
    0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
    33% { transform: translateY(-20px) translateX(10px) rotate(2deg); }
    66% { transform: translateY(10px) translateX(-10px) rotate(-2deg); }
    100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.4; }
    50% { transform: scale(1.1); opacity: 0.6; }
    100% { transform: scale(1); opacity: 0.4; }
  }

  @keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
  }

  .floating {
    animation: float 8s ease-in-out infinite;
  }

  .pulsing {
    animation: pulse 4s ease-in-out infinite;
  }
`;

export default GlobalStyles;