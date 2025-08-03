'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Zen Habitat',
    landscapeSrc: 'https://placehold.co/800x600.png',
    portraitSrc: 'https://placehold.co/400x500.png',
    hint: 'zen habitat',
  },
  {
    title: 'Modern Heritage',
    landscapeSrc: 'https://placehold.co/800x600.png',
    portraitSrc: 'https://placehold.co/400x500.png',
    hint: 'modern heritage',
  },
  {
    title: 'Urban Luxe',
    landscapeSrc: 'https://placehold.co/800x600.png',
    portraitSrc: 'https://placehold.co/400x500.png',
    hint: 'urban luxe',
  },
  {
    title: 'Nordic Essence',
    landscapeSrc: 'https://placehold.co/800x600.png',
    portraitSrc: 'https://placehold.co/400x500.png',
    hint: 'nordic essence',
  },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];
  const inactiveProjects = projects.filter((_, index) => index !== activeIndex);

  return (
    <section id="gallery" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start text-left space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">OUR PROJECTS</h2>
          <p className="max-w-2xl text-muted-foreground">
            Each project reflects our dedication to transforming visions into stunning realities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="col-span-1">
             <Card 
                className="group relative overflow-hidden rounded-3xl cursor-pointer w-full border-none"
                onClick={() => setActiveIndex(projects.findIndex(p => p.title === activeProject.title))}
             >
                <CardContent className="p-0">
                    <Image
                        src={activeProject.landscapeSrc}
                        alt={activeProject.title}
                        width={800}
                        height={600}
                        data-ai-hint={activeProject.hint}
                        className="w-full h-auto aspect-[4/3] object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 bg-black/30 text-white p-2 rounded-full">
                        <ArrowUpRight className="h-6 w-6" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="font-headline text-2xl font-bold text-white">
                        {activeProject.title}
                      </h3>
                    </div>
                </CardContent>
            </Card>
          </div>
          
          <div className="col-span-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {inactiveProjects.map((project, index) => {
              const originalIndex = projects.findIndex(p => p.title === project.title);
              return (
                 <Card
                    key={project.title}
                    className="group relative overflow-hidden rounded-3xl cursor-pointer w-full border-none"
                    onClick={() => setActiveIndex(originalIndex)}
                  >
                    <CardContent className="p-0">
                        <Image
                            src={project.portraitSrc}
                            alt={project.title}
                            width={400}
                            height={500}
                            data-ai-hint={project.hint}
                            className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                         <div className="absolute top-4 right-4 bg-black/30 text-white p-2 rounded-full">
                            <ArrowUpRight className="h-5 w-5" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-4">
                          <h3 className="font-headline text-lg font-bold text-white">
                            {project.title}
                          </h3>
                        </div>
                    </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
