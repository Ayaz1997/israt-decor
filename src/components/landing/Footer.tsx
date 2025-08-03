'use client';

import Link from 'next/link';

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <defs>
        <radialGradient id="instagram-gradient" cx="0.3" cy="1.2" r="1.5">
          <stop offset="0" stopColor="#FEDA77" />
          <stop offset="0.1" stopColor="#F58529" />
          <stop offset="0.3" stopColor="#DD2A7B" />
          <stop offset="0.5" stopColor="#8134AF" />
          <stop offset="1" stopColor="#515BD4" />
        </radialGradient>
      </defs>
      <path
        fill="url(#instagram-gradient)"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"
      />
    </svg>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#25D366"
      {...props}
    >
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a1.5 1.5 0 0 1-1.088-.534c-.432-.432-1.62-1.49-3.06-2.926s-2.493-2.628-2.925-3.06a1.5 1.5 0 0 1-.534-1.088c0-.432 1.39-1.518 1.39-1.518s-2.09-5.01-2.46-5.38a1.35 1.35 0 0 0-1.62-.188c-.534.267-.966.6-1.233.867s-.534.6-.667.966a2.4 2.4 0 0 0 .133 1.383c.133.267.333.534.534.8.2.267.4.534.6.8.2.267.333.4.467.534.133.133 1.233 1.833 2.928 3.53a12.8 12.8 0 0 0 5.063 2.928c.4.133.8.2 1.133.2.4 0 .8-.067 1.133-.267.4-.133.733-.333.966-.6.233-.267.433-.534.6-.8.167-.267.267-.534.333-.8.1-.4.033-.867-.133-1.233-.067-.233-.2-.433-.367-.6-.167-.167-.367-.333-.6-.467a1.35 1.35 0 0 0-1.62-.188zM12 .922a11.08 11.08 0 0 0-11.078 11.078c0 2.068.567 4.067 1.633 5.833L.367 23.633l5.9-1.567A11.08 11.08 0 0 0 12 23.078a11.08 11.08 0 0 0 11.078-11.078A11.08 11.08 0 0 0 12 .922z" />
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
              <Link href="#" className="transition-transform hover:scale-110">
                <FacebookIcon className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="transition-transform hover:scale-110">
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="transition-transform hover:scale-110">
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
