import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'

// Create a port tracking file to help with cleanup
const portFile = path.resolve('.vite-port')

// Try to clean up the port file if it exists
if (fs.existsSync(portFile)) {
  try {
    fs.unlinkSync(portFile)
    console.log('Removed stale port file')
  } catch (err) {
    console.log('Error removing port file:', err.message)
  }
}

// https://vite.dev/config/
// Helper function to find an available port
const findAvailablePort = async (startPort) => {
  const net = await import('net')
  
  return new Promise((resolve) => {
    const server = net.createServer()
    server.unref()
    server.on('error', () => {
      // Port is in use, try the next one
      resolve(findAvailablePort(startPort + 1))
    })
    
    server.listen(startPort, () => {
      const { port } = server.address()
      server.close(() => {
        // Add a small delay to ensure the port is released
        setTimeout(() => resolve(port), 100)
      })
    })
  })
}

// Get a random port between 5000-6000 to avoid conflicts
const getRandomPort = () => Math.floor(Math.random() * 1000) + 5000

export default defineConfig(async () => {
  // Try to find an available port
  const preferredPort = 5151
  let port
  
  try {
    port = await findAvailablePort(preferredPort)
    console.log(`Found available port: ${port}`)
  } catch (err) {
    console.log('Error finding port, using random port')
    port = getRandomPort()
  }
  
  return {
    plugins: [react(), {
      name: 'vite-port-manager',
      configureServer(server) {
        // Save the port when the server starts
        server.httpServer.on('listening', () => {
          const actualPort = server.httpServer.address().port
          console.log(`Server started on port ${actualPort}`)
          // Save the port to a file for reference
          fs.writeFileSync(portFile, actualPort.toString())
        })
        
        // Clean up when the server closes
        server.httpServer.on('close', () => {
          console.log('Server closed, cleaning up')
          if (fs.existsSync(portFile)) {
            fs.unlinkSync(portFile)
          }
        })
      }
    }],
    server: {
      port, // Use the available port we found
      strictPort: false, // Allow Vite to try other ports if this one is in use
      hmr: false, // Disable HMR completely to avoid WebSocket conflicts
      host: true, // Listen on all addresses
      watch: {
        usePolling: true, // Use polling for file watching (more reliable)
      },
    }
  }
})
