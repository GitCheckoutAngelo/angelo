import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SnackbarProvider } from './contexts/SnackbarContext.tsx'
import { SectionInViewProvider } from './contexts/SectionInViewContext.tsx'
import { SectionRefProvider } from './contexts/SectionRefContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SectionRefProvider>
      <SectionInViewProvider>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </SectionInViewProvider>
    </SectionRefProvider>
  </React.StrictMode>,
)
