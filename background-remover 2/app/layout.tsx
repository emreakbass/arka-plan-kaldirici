import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arka Plan Kaldırıcı',
  description: 'Fotoğraflarınızdan kolayca arka planı kaldırın',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}

