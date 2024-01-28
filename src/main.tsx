import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { ThemeProvider } from './contexts/Theme'
import './i18n'

import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
