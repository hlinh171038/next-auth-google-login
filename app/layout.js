import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import Navbar from './components/navbars/Navbar'
import Modal from './components/modals/Modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ToasterContext />
          <Modal />
          <Navbar />
          {children}
        </Provider>
        </body>
    </html>
  )
}