import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'
import { Analytics } from '@/lib/vercel';
import './globals.css'

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yong Jing',
  description: 'Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sourceCodePro.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
