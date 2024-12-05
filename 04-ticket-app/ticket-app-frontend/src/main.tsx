import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TicketApp } from './TicketApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TicketApp />
  </StrictMode>,
)
