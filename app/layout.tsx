import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Antonio Alejandro Ceballos Rivera | Desarrollador Web Full Stack',
  description: 'Ingeniero en Sistemas Computacionales y desarrollador web Full Stack. Experiencia en plataformas para negocios, comercio electrónico, pedidos en línea e integración de APIs.',
  keywords: ['Portafolio', 'Desarrollador Web Full Stack', 'E-commerce', 'Comercio electrónico', 'Pedidos en línea', 'React', 'Next.js', 'Integración de APIs'],

  icons: {
      icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💼</text></svg>',
      apple: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💼</text></svg>',
    },
  }

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
      <html lang="es">
        <body className="font-sans antialiased">
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </body>
      </html>
    )
}
