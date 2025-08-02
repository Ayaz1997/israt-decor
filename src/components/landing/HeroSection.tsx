import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle2 } from 'lucide-react';

const avatars = [
  "https://placehold.co/40x40.png",
  "https://placehold.co/40x40.png",
  "https://placehold.co/40x40.png",
  "https://placehold.co/40x40.png",
  "https://placehold.co/40x40.png",
]

export default function HeroSection() {
  return (
    <section className="relative w-full pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="relative bg-primary/10 rounded-3xl p-8 md:p-16 overflow-hidden">
          <div className="absolute inset-0 z-[-1]">
            <Image
              src="https://placehold.co/1200x600.png"
              alt="Green interior design with modern furniture"
              data-ai-hint="green interior design"
              fill
              className="object-cover opacity-10"
              priority
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Transforming Spaces,
                <br />
                <span className="text-primary">Elevating Lives</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Book a consultation
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Book a consultation
                  </Link>
                </Button>
                <div className="flex -space-x-2 overflow-hidden">
                  {avatars.map((src, i) => (
                    <Avatar key={i} className="border-2 border-background">
                      <AvatarImage src={src} alt={`Avatar ${i + 1}`} data-ai-hint="person face" />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative h-64 md:h-auto md:aspect-square">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Stylish living room with green accents"
                data-ai-hint="stylish living room"
                fill
                className="object-cover rounded-2xl"
              />
               <div className="absolute -bottom-8 -right-8 bg-primary rounded-full p-4 text-primary-foreground shadow-lg">
                  <CheckCircle2 className="h-12 w-12" />
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}