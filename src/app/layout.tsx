import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import {MantineProvider, ColorSchemeScript, Box} from '@mantine/core';
import Header from '../components/Header'
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <Header />
          <Box mih="75vh">
            {children}
          </Box>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  )
}
