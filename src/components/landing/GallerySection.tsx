'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Habitat',
    landscapeSrc: '/content/project-1-a.png',
    portraitSrc: '/content/project-1-b.png',
    hint: 'modern habitat',
  },
  {
    id: 2,
    title: 'Modern Kitchen',
    landscapeSrc: '/content/project-2-a.png',
    portraitSrc: '/content/project-2-b.png',
    hint: 'modern heritage',
  },
  {
    id: 3,
    title: 'Luxe Furnitures',
    landscapeSrc: '/content/project-3-a.png',
    portraitSrc: '/content/project-3-b.png',
    hint: 'urban luxe',
  },
  {
    id: 4,
    title: 'Aesthetic Cafe',
    landscapeSrc: '/content/project-4-a.png',
    portraitSrc: '/content/project-4-b.png',
    hint: 'nordic essence',
  },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="gallery" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start text-left space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">PORTFOLIO PROJECTS</h2>
          <p className="max-w-2xl text-muted-foreground">
            Discover how we turn ideas into results. Explore highlights from our recent work.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-4 h-[600px]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                'relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 ease-in-out',
                activeIndex === index ? 'flex-[5]' : 'flex-[1]'
              )}
              onClick={() => setActiveIndex(index)}
            >
              <Card className="w-full h-full border-none">
                <CardContent className="p-0 w-full h-full">
                  <Image
                    src={activeIndex === index ? project.landscapeSrc : project.portraitSrc}
                    alt={project.title}
                    width={activeIndex === index ? 800 : 400}
                    height={activeIndex === index ? 600 : 500}
                    data-ai-hint={project.hint}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-500",
                      activeIndex !== index && "grayscale"
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div 
                    className={cn(
                        "absolute top-4 right-4 bg-black/30 text-white p-2 rounded-full transition-opacity duration-300",
                        activeIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    )}
                  >
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className={cn(
                        "font-headline font-bold text-white transition-all duration-500",
                        activeIndex === index ? "text-3xl" : "text-xl"
                    )}>
                      {project.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
