import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'ISRAT DEDECOR - Live in Heaven you created.',
  description: 'Crafting luxury interiors that turn every home into a masterpiece — tailored to your style, built for your comfort.',
  keywords: [
    'interior design',
    'bespoke interior design',
    'luxury interiors',
    'home decor',
    'ISRAT DECOR',
    'interior designer Odisha',
    'interior design Bhubaneswar',
    'modern interior design India',
    'minimalist home interiors',
    'high-end home renovation Odisha',
    'residential interior design Odisha',
    'luxury home decor India',
    'custom interior solutions',
    'interior design consultancy Odisha',
    'home makeover Bhubaneswar',
    'interior designer near me Odisha',
    'living room design Odisha',
    'bedroom interior design India',
    'eco-friendly interior design India',
    'small apartment interior design Odisha'
  ],
  icons: {
    icon: '/israt-decor-logo.png',
  },
  openGraph: {
  title: 'ISRAT DEDECOR',
  description: 'Live in Heaven you created.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ISRAT DEDECOR - Live in Heaven you created.',
      },
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ISRAT DEDECOR - Live in Heaven you created.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISRAT DEDECOR - Live in Heaven you created.',
    description: 'Crafting luxury interiors that turn every home into a masterpiece — tailored to your style, built for your comfort.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
