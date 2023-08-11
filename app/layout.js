import Header from '@/components/layouts/Header'
import './globals.css'
import { GlobalProvider } from './GlobalProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <GlobalProvider>
          <Header/>
          {children}
        </GlobalProvider>
      </body>
    </html>
  )
}
