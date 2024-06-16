import type { Metadata } from 'next'
import './globals.sass'
import React from 'react'
import DevHeader from './components/dev-header'

export const metadata: Metadata = {
  title: 'zeithrold.dev',
  // title: 'Create Next App',
  description: 'The place where idea blinks, welcome to zeitrold.dev homepage.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <DevHeader homepage />
        {children}
      </body>
    </html>
  )
}
