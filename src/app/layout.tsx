import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Outfit } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bússola do Digital | Marketing Estratégico',
  description: 'Agência de marketing focada em direcionar seu negócio para o sucesso digital.',
  icons: {
    icon: '/favicon.ico',
  },
};

import WhatsAppButton from '@/components/WhatsAppButton';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} ${outfit.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <CustomCursor />

        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
