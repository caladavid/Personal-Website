import Header from '@/components/Header'
import { Source_Sans_Pro } from '@next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const SourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--SourceSansPro-font'
})

export const metadata = {
  title: 'David Cala',
  description: 'David Cala a passionate problem-solver who loves building things from scratch.',
  author: 'David Cala',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={SourceSansPro.className}>
        <Header />
          <main className='overflow-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
