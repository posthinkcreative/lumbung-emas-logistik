
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ClientOnly } from '@/components/common/ClientOnly';
import { FloatingWhatsAppButton } from '@/components/common/FloatingWhatsAppButton';
import { Truck } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const truckIconSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='hsl(220 75% 45%)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M10 17h4'/><path d='M6 17h-2.31a1 1 0 0 1-1-1.12L3.9 9.88a1 1 0 0 1 1-1.12H19.1a1 1 0 0 1 1 1.12l-1.21 6a1 1 0 0 1-1 .88H14'/><path d='M6 17H4a2 2 0 0 0-2 2v1h10v-1a2 2 0 0 0-2-2Z'/><path d='M18 17h-2a2 2 0 0 0-2 2v1h6v-1a2 2 0 0 0-2-2Z'/><path d='M14 17V9h5.56a1 1 0 0 1 .95 1.3l-1.54 6.7Z'/></svg>`;
const truckIconDataUri = `data:image/svg+xml,${truckIconSvg.replace(/"/g, "'").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/#/g, "%23")}`;

export const metadata: Metadata = {
  title: {
    template: '%s - Lumbung Emas Logistik',
    default: 'Lumbung Emas Logistik - Jasa Logistik & Freight Forwarding',
  },
  description: 'Lumbung Emas Logistik menyediakan jasa freight forwarding dan solusi logistik terpercaya. Layanan kargo darat, laut, dan udara untuk seluruh Indonesia dan mancanegara.',
  keywords: 'logistik, freight forwarding, pengiriman, kargo, ekspedisi, Lumbung Emas Logistik, jasa pengiriman',
  icons: {
    icon: truckIconDataUri,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.React.Node;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* The metadata object above will handle the favicon injection */}
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased flex flex-col',
          inter.variable
        )}
      >
        <ClientOnly>
          <Header />
        </ClientOnly>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ClientOnly>
          <Toaster />
          <FloatingWhatsAppButton phoneNumber="6287859000800" />
        </ClientOnly>
      </body>
    </html>
  );
}
