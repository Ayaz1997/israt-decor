import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'ISRAT DEDECOR - Transforming Spaces, Elevating Lives',
  description: 'Bespoke interior design services to transform your space and elevate your life. Book a consultation today.',
  keywords: ['interior design', 'bespoke design', 'luxury interiors', 'home decor', 'ISRAT DECOR'],
  icons: {
    icon: '/israt-decor-logo.png',
  },
  openGraph: {
    title: 'ISRAT DEDECOR - Transforming Spaces, Elevating Lives',
    description: 'Bespoke interior design services to transform your space and elevate your life.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ISRAT DEDECOR - Transforming Spaces, Elevating Lives',
      },
    ],
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
