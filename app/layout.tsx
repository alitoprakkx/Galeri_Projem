import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://monkey-motors.vercel.app'),
  title: {
    default: 'Monkey Motors | Premium Galeri',
    template: '%s | Monkey Motors'
  },
  description: 'Monkey Motors çok markalı premium otomobil galeri deneyimi',
  openGraph: {
    title: 'Monkey Motors',
    description: 'Premium çok markalı otomobil galerisi',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        <main className="min-h-screen px-4 pb-16 pt-24 md:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
