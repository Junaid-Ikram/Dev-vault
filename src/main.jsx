import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Add debugging
console.log('Application initializing...')

// Import App component
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
