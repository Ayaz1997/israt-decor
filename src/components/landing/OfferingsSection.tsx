
'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Button } from '../ui/button';

const offerings = [
    { title: 'False Ceiling', hint: 'modern false ceiling', src: 'https://placehold.co/400x500.png' },
    { title: 'Modular Kitchen', hint: 'sleek modular kitchen', src: 'https://placehold.co/400x500.png' },
    { title: 'Carpentry', hint: 'custom carpentry work', src: 'https://placehold.co/400x500.png' },
    { title: 'Electrical', hint: 'safe electrical wiring', src: 'https://placehold.co/400x500.png' },
    { title: 'AC Installation', hint: 'air conditioner installation', src: 'https://placehold.co/400x500.png' },
    { title: 'Wardrobe', hint: 'stylish wardrobe design', src: 'https://placehold.co/400x500.png' },
];

export default function OfferingsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section id="offerings" className="py-12 md:py-24 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">OUR SERVICES</h2>
                <p className="mt-4 text-muted-foreground">
                    Transform your space with our expert interior design services, where creativity meets functionality to bring your vision to life.
                </p>
            </div>
            <Button variant="outline" asChild>
                <Link href="#gallery">
                    View all
                </Link>
            </Button>
        </div>
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
                align: "start",
                loop: true,
            }}
        >
          <CarouselContent>
            {offerings.map((offering, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="group relative overflow-hidden rounded-2xl border-none">
                  <CardContent className="p-0">
                    <Image
                      src={offering.src}
                      alt={offering.title}
                      data-ai-hint={offering.hint}
                      width={400}
                      height={500}
                      className="aspect-[4/5] w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 bg-black/30 text-white p-2 rounded-full">
                         <ArrowUpRight className="h-5 w-5" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="font-headline text-2xl font-bold text-white">
                        {offering.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
