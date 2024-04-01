import { Albert_Sans } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'

const font = Albert_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Crispy Dough Bakery',
  description: 'Crispy Dough Store - The place for all your bakery purchases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}