import Link from 'next/link';
import { Sparkles } from 'lucide-react';

function Logo() {
    return (
      <Link href="/" className="flex items-center" prefetch={false}>
         <span className="font-headline text-2xl font-bold">ISRAT DECOR</span>
      </Link>
    )
}

export default function Footer() {
  return (
    <footer className="py-6 border-t border-border">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
            <Logo />
        </div>
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} ISRAT DECOR. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <Link href="#gallery" className="text-sm hover:text-primary transition-colors" prefetch={false}>
            Gallery
          </Link>
          <Link href="#contact" className="text-sm hover:text-primary transition-colors" prefetch={false}>
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
