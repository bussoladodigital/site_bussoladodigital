import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Outfit } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

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
  title: 'Bússola do Digital | Marketing Estratégico & Performance',
  description: 'Agência de marketing focada em direcionar seu negócio para o sucesso digital. Performance, Branding, Social Media, Web Development e Business Analytics.',
  keywords: ['Marketing Digital', 'Tráfego Pago', 'Branding', 'Social Media', 'Web Development', 'Business Analytics', 'Agência de Marketing'],
  authors: [{ name: 'Bússola do Digital' }],
  openGraph: {
    title: 'Bússola do Digital | Marketing Estratégico',
    description: 'Transformamos dados em resultados. Conheça nossas soluções de Performance, Branding e Tecnologia.',
    url: 'https://bussoladodigital.vercel.app',
    siteName: 'Bússola do Digital',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: "G-XXXXXXXXXX",
  }
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
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <CustomCursor />

        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
