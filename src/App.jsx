import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import GlobalStyles from './styles/GlobalStyles.js'
import MainLayout from './layouts/MainLayout'
import { motion } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

import { useState, useEffect } from 'react'

const LoadingScreen = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    inset: 0,
    backgroundColor: '#0F1624',
    color: '#fff',
    zIndex: 9999,
    overflow: 'hidden'
  }}>
    <div className="orb orb-primary pulsing" style={{ width: '600px', height: '600px', top: '10%', left: '10%', filter: 'blur(150px)' }}></div>
    <div className="orb orb-secondary pulsing" style={{ width: '500px', height: '500px', bottom: '10%', right: '10%', filter: 'blur(130px)', animationDelay: '-1s' }}></div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        zIndex: 2,
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(30px)',
        padding: '4rem',
        borderRadius: '40px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
        marginTop: '-5vh' // Nudge it "upper" as requested
      }}
    >
      <div style={{ position: 'relative', marginBottom: '2rem' }}>
        <svg width="120" height="120" viewBox="0 0 512 512">
          <defs>
            <linearGradient id="loader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#2CA58D', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#3E92CC', stopOpacity: 1 }} />
            </linearGradient>
          </defs>


          <motion.path
            d="M120 70 V160 H100 V200 H120 V312 H100 V352 H120 V442 H300 C400 442 480 362 480 256 C480 150 400 70 300 70 H120 Z"
            fill="none"
            stroke="url(#loader-grad)"
            strokeWidth="20"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Central Hub */}
          <motion.circle
            cx="280"
            cy="256"
            r="75"
            stroke="url(#loader-grad)"
            strokeWidth="15"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          />

          <motion.circle
            cx="280"
            cy="256"
            r="30"
            fill="url(#loader-grad)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 1.5 }}
          />

          {/* Side Arms */}
          <motion.path
            d="M205 256 H120 M335 200 L390 145 M335 312 L390 367"
            stroke="url(#loader-grad)"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </svg>
      </div>
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          margin: 0,
          letterSpacing: '4px',
          fontSize: '0.9rem',
          fontWeight: '700',
          textTransform: 'uppercase',
          color: 'var(--accent)'
        }}
      >
        Devvault Solutions
      </motion.p>
    </motion.div>
  </div>
)

function App() {
  console.log('App component rendering')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set a timeout to hide the loading screen after a maximum of 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    // Clean up the timer
    return () => clearTimeout(timer)
  }, [])

  // Hide loading screen after initial render
  useEffect(() => {
    // Short timeout to allow the app to render once
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
