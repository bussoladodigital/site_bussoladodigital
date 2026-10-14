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
  description: 'Marketing estratégico, gestão de redes sociais, tráfego pago, design e desenvolvimento de sites, aplicativos e sistemas sob medida para o seu negócio.',
  keywords: ['Marketing Digital', 'Tráfego Pago', 'Branding', 'Social Media', 'Sites', 'Sistemas Sob Medida', 'Aplicativos Personalizados', 'Business Analytics', 'Agência de Marketing'],
  authors: [{ name: 'Bússola do Digital' }],
  openGraph: {
    title: 'Bússola do Digital | Marketing Estratégico',
    description: 'Marketing estratégico e tecnologia para seu negócio: redes sociais, tráfego pago, design, sites, aplicativos e sistemas sob medida.',
    url: 'https://bussoladodigital.com.br',
    siteName: 'Bússola do Digital',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

import WhatsAppButton from '@/components/WhatsAppButton';

const GA_ID = 'G-6YNVH7TT4P';

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
        <GoogleAnalytics gaId={GA_ID} />
        <CustomCursor />

        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
