import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const galleryItems = [
  { src: "https://placehold.co/600x400.png", hint: "modern living room", title: "Modern Living Room" },
  { src: "https://placehold.co/600x400.png", hint: "luxury kitchen", title: "Luxury Kitchen" },
  { src: "https://placehold.co/600x400.png", hint: "minimalist bedroom", title: "Minimalist Bedroom" },
  { src: "https://placehold.co/600x400.png", hint: "chic bathroom", title: "Chic Bathroom" },
  { src: "https://placehold.co/600x400.png", hint: "stylish dining area", title: "Stylish Dining Area" },
  { src: "https://placehold.co/600x400.png", hint: "cozy office", title: "Cozy Office Space" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Portfolio</h2>
          <p className="max-w-2xl text-muted-foreground">
            Browse through a selection of our finest work, showcasing our dedication to quality and style.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group border-0 rounded-lg">
              <CardContent className="p-0 relative">
                <Image
                  src={item.src}
                  alt={item.title}
                  data-ai-hint={item.hint}
                  width={600}
                  height={400}
                  className="w-full h-auto aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-all duration-300 flex items-end">
                  <h3 className="font-headline text-lg font-semibold text-white p-4">{item.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
