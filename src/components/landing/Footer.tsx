'use client';

import Link from 'next/link';

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
            <h3 className="font-semibold text-lg">Office Hours</h3>
            <p className="text-muted-foreground">
              Saturday - Sunday
              <br />
              10am - 8pm
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 z-0 opacity-5">
        <span className="text-7xl md:text-9xl font-black font-headline text-foreground select-none">
          ISRAT DECOR
        </span>
      </div>
    </footer>
  );
}
