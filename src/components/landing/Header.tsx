import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles } from 'lucide-react';

const navLinks = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline text-white">ISRAT DECOR</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors" prefetch={false}>
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l-border">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
                  <Sparkles className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold font-headline">ISRAT DECOR</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors" prefetch={false}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-4">
                  <Link href="#contact">Get a Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
