'use client';

import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}


export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-16 md:py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight">
            Are You Prepared To
            <br />
            Collaborate With Us
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Address</h3>
            <p className="text-muted-foreground">
              1234 City st, New York
              <br />
              NY 8800
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Contact</h3>
            <p className="text-muted-foreground">
              +1 (123) 001-1234
              <br />
              <Link href="mailto:hello@isratdecor.com" className="hover:text-primary">
                hello@isratdecor.com
              </Link>
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Our Social Links</h3>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <WhatsAppIcon className="h-6 w-6" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 z-0 opacity-5">
        <span className="text-7xl md:text-8xl font-black font-headline text-foreground select-none">
          ISRAT DECOR
        </span>
      </div>
    </footer>
  );
}
