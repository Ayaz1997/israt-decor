import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '#furnitures', label: 'Furnitures' },
  { href: '#designers', label: 'Designers' },
  { href: '#trends', label: 'Trends' },
  { href: '#blog', label: 'Blog' },
  { href: '#about', label: 'About Us' },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center" prefetch={false}>
       <span className="font-serif-display text-2xl italic">La</span>
       <span className="font-headline text-2xl font-bold">Decor</span>
    </Link>
  )
}

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Logo/>
        <nav className="hidden md:flex items-center gap-1 bg-gray-200/80 backdrop-blur-sm rounded-full px-4 py-2">
          {navLinks.map((link) => (
            <Button asChild variant="ghost" key={link.href}>
                <Link href={link.href} className="text-sm font-medium text-gray-700 hover:text-foreground transition-colors" prefetch={false}>
                {link.label}
                </Link>
            </Button>
          ))}
        </nav>
        <div className="hidden md:block">
            <Button variant="link" asChild>
                <Link href="/auth">Sign up / Log in</Link>
            </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-gray-200/80">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l-border">
              <div className="flex flex-col gap-6 p-6">
                <div className="mb-4">
                  <Logo />
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors" prefetch={false}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button variant="link" asChild className="mt-4">
                    <Link href="/auth">Sign up / Log in</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}