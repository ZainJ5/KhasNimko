import { Inter } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SocketProvider } from './context/SocketContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Khas Chips and Nimko',
  description: 'Khas Chips and Nimko specialize in making high-quality chips and Nimko that bring taste, freshness, and satisfaction to every bite.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SocketProvider>
          {children}
        </SocketProvider>
          <ToastContainer />
      </body>
    </html>
  )
}
