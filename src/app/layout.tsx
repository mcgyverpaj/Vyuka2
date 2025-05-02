import type { Metadata } from 'next'
import { ReactNode } from 'react'

// Pokud NEMÁŠ soubor ./globals.css, tento řádek SMAŽ
// import './globals.css'

export const metadata: Metadata = {
  title: 'OCR App',
  description: 'OCR aplikace pro převod obrázků na text',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  )
}
