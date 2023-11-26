import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Cathcart Exam',
  description: 'created by sikarin poonsawat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${robotoFont.variable}`}>
        {children}
      </body>
    </html>
  )
}
