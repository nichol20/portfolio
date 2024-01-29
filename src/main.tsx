import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { ThemeProvider } from './contexts/Theme'
import './i18n'

import './styles/global.scss'
import { ToastProvider } from './contexts/Toast'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>
)
