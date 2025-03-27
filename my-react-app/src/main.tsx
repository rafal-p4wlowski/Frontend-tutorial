import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // importing global styles

// Render react in root div tag
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)