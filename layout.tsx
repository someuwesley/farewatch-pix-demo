import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Farewatch PIX DEMO',
  description: 'Versão demo com dados fictícios',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header style={{background:'#fff',borderBottom:'1px solid #eee',padding:'12px 20px'}}>
          <h1>✈️ Farewatch <span style={{background:'#000',color:'#fff',padding:'2px 6px',borderRadius:4}}>PIX</span> DEMO</h1>
        </header>
        <main style={{maxWidth:960,margin:'0 auto',padding:'20px'}}>{children}</main>
      </body>
    </html>
  )
}
