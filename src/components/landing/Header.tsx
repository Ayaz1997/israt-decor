'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#offerings', label: 'Our Offerings' },
  { href: '#gallery', label: 'Our Works' },
  { href: '#contact', label: 'Contact Us' },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center" prefetch={false}>
      <span className="font-headline text-2xl font-bold">ISRAT DECOR</span>
    </Link>
  );
}

export default function Header() {
  const [activeLink, setActiveLink] = useState('#');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks
        .filter(link => link.href.length > 1 && link.href.startsWith('#'))
        .map(link => document.querySelector(link.href));
        
      let currentSection = '#';

      sections.forEach(section => {
        if (section && window.scrollY >= (section as HTMLElement).offsetTop - 100) {
            const sectionId = `#${section.id}`;
            // Find the corresponding navLink to ensure it's a valid link
            if(navLinks.some(link => link.href === sectionId)) {
                currentSection = sectionId;
            }
        }
      });
      // A special case for the top of the page
      if (window.scrollY < 200) {
        currentSection = '#';
      }

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavMenu = ({ className }: { className?: string }) => (
    <nav className={cn(className)}>
      {navLinks.map(link => (
        <Button asChild variant="ghost" key={link.href}>
          <Link
            href={link.href}
            className={cn(
              'text-base font-semibold transition-colors',
              activeLink === link.href
                ? 'font-bold text-primary'
                : 'text-foreground/70 hover:text-foreground'
            )}
            prefetch={false}
          >
            {link.label}
          </Link>
        </Button>
      ))}
    </nav>
  );

  return (
    <>
      {/* Default Header */}
      <header className="absolute top-0 left-0 right-0 z-40 py-4 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center">
             <NavMenu className="flex items-center gap-1" />
          </div>
          <div className="hidden md:block">
            <Button asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
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
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                'text-lg font-semibold transition-colors',
                                activeLink === link.href ? 'text-primary font-bold' : 'text-foreground/80 hover:text-primary'
                            )}
                            prefetch={false}
                        >
                            {link.label}
                        </Link>
                    ))}
                  </nav>
                  <Button asChild className="mt-4">
                    <Link href="#contact">Get in touch</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      
      {/* Sticky Header */}
      <div
        className={cn(
          'fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out',
          isScrolled ? 'top-4 opacity-100' : '-top-24 opacity-0'
        )}
      >
        <NavMenu
          className="hidden md:flex items-center gap-2 bg-white/70 backdrop-blur-lg border border-white/20 rounded-[40px] px-6 py-3 shadow-lg"
        />
      </div>
    </>
  );
}
