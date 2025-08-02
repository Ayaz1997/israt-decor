import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-6 border-t border-border">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="font-bold font-headline">ISRAT DECOR</span>
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
