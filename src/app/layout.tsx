import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { organizationJsonLd, websiteJsonLd } from '@/lib/jsonld';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'The Home Place | A Sacred Space for All People',
    template: '%s | The Home Place'
  },
  description: 'The Home Place is a multi-faith worship community that welcomes people of all religions, creeds, and races into a sacred space of unity.',
  keywords: ['worship', 'community', 'multi-faith', 'inclusive', 'spiritual', 'unity', 'Brooklyn', 'interfaith'],
  authors: [{ name: 'The Home Place' }],
  metadataBase: new URL('https://thehomeplace.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'The Home Place',
    title: 'The Home Place | A Sacred Space for All People',
    description: 'A multi-faith worship community that welcomes people of all religions, creeds, and races into a sacred space of unity.',
    images: [
      {
        url: '/images/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'The Home Place - A Sacred Space for All People',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Home Place | A Sacred Space for All People',
    description: 'A multi-faith worship community that welcomes people of all religions, creeds, and races.',
    images: ['/images/og/home.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
