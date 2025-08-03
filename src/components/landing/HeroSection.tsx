
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative w-full pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="relative bg-primary/10 rounded-3xl p-8 md:p-16 overflow-hidden flex items-center justify-center text-center" style={{minHeight: '75vh'}}>
          <Image
            src="/hero-bg.jpg"
            alt="Modern home interior"
            data-ai-hint="modern home interior"
            fill
            className="object-cover rounded-3xl"
            priority
          />
          <div className="absolute inset-0 bg-black/50 rounded-3xl" />
          <div className="relative z-10 space-y-6">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Transforming Spaces,
              <br />
              <span className="text-warm-beige">Elevating Lives</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">
                  Book a consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
