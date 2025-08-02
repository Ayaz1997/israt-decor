import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center text-center">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Elegant interior design"
          data-ai-hint="elegant interior design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container px-4 md:px-6 text-white animate-in fade-in duration-1000">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Transforming Spaces, Inspiring Lives
          </h1>
          <p className="text-lg md:text-xl text-gray-200 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
            Experience the art of bespoke interior design with ISRAT DECOR. We create timeless, elegant spaces that reflect your unique personality.
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-600">
            <Button size="lg" asChild>
              <Link href="#contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
