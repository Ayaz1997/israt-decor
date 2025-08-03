'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Phone, X } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = navLinks
        .filter(link => link.href.length > 1 && link.href.startsWith('#'))
        .map(link => document.querySelector(link.href));
        
      let currentSectionId = '#';
      for (const section of sections) {
        if (section && scrollPosition >= (section as HTMLElement).offsetTop - 100) {
            const sectionId = `#${section.id}`;
            if(navLinks.some(link => link.href === sectionId)) {
                currentSectionId = sectionId;
            }
        }
      }
      
      if (scrollPosition < 200) {
        currentSectionId = '#';
      }

      setActiveLink(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavMenu = ({ className, isInSheet = false, onItemClick }: { className?: string, isInSheet?: boolean, onItemClick?: () => void }) => (
    <nav className={cn(className)}>
      {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onItemClick}
            className={cn(
                'px-4 py-2 transition-colors whitespace-nowrap',
                isInSheet 
                  ? 'font-semibold text-2xl text-white/80 hover:text-white' 
                  : 'text-sm text-foreground/80 hover:text-foreground font-semibold',
                activeLink === link.href && !isInSheet
                  ? 'text-primary font-bold'
                  : ''
            )}
            style={isInSheet ? {} : { fontSize: '18px' }}
            prefetch={false}
          >
            {link.label}
          </Link>
      ))}
    </nav>
  );

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
      )}>
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
          <Logo />
          <div className="hidden md:flex items-center">
             <NavMenu className="flex items-center gap-1" />
          </div>
          <div className="hidden md:block">
            <Button asChild>
              <Link href="#contact">
                <Phone />
                Get in touch
              </Link>
            </Button>
          </div>
          <div className="md:hidden">
             {/* This button is part of the non-scrolled header, we can hide it to avoid duplication */}
          </div>
        </div>
      </header>
      
      {/* Scrolled Header for Desktop */}
      <div
        className={cn(
          'fixed top-0 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ease-in-out',
          isScrolled ? 'top-4 opacity-100' : '-top-full opacity-0'
        )}
      >
        <div 
          className="hidden md:flex items-center backdrop-blur-md border rounded-[40px] px-6 py-3 shadow-2xl shadow-black/20"
          style={{
            background: 'rgba(255, 255, 255, 0.16)',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            backgroundImage: 'linear-gradient(-45deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.2) 100%)',
          }}
        >
          <NavMenu className="flex items-center gap-2" />
        </div>
      </div>

       {/* Sticky Mobile Menu Trigger */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
             <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full h-14 w-14 text-white backdrop-blur-md"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                }}
              >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="bottom" 
            className="h-auto w-auto p-0 border-none bg-transparent"
          >
            <div 
              className="m-4 p-6 rounded-3xl"
              style={{
                background: 'rgba(225, 225, 225, 0.1)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              
              <NavMenu className="flex flex-col items-start text-left gap-4" isInSheet={true} onItemClick={() => setIsMobileMenuOpen(false)} />
              
              <Button asChild className="mt-8" size="lg">
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Phone />
                  Get in touch
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
