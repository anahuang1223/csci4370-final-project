import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState({
    backend: 'Connecting...',
    database: 'Connecting...',
  })

  useEffect(() => {
    fetch('/api/health')
      .then(response => {
        if (!response.ok) {
          throw new Error('Connection failed')
        }
        return response.json()
      })
      .then(data => setStatus(data))
      .catch(() => {
        setStatus({
          backend: 'Connection failed',
          database: 'Unknown',
        })
      })
  }, [])

  return (
    <main>
      <h1>DBFinalProject</h1>
      <p>AI-Powered Product Safety Monitoring</p>

      <h2>System Status</h2>
      <p>Frontend: Connected</p>
      <p>Backend: {status.backend}</p>
      <p>Database: {status.database}</p>
    </main>
  )
}

export default App