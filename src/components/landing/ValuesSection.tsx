import Image from 'next/image';

export default function ValuesSection() {
  return (
    <section id="values" className="py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter leading-tight">
              Turn You Vision
              <span 
                className="inline-block align-middle ml-2 w-28 h-12 rounded-full bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: "url('/content/values-1.png')" }}
                data-ai-hint="modern chair"
              ></span>
              <br />
              <span 
                className="inline-block align-middle mr-2 w-28 h-12 rounded-full bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: "url('/content/values-2.png')" }}
                data-ai-hint="living room"
              ></span>
              <span className="font-serif-display italic">into Reality</span>
            </h2>
            
            <div className="space-y-4">
                <h3 className="text-2xl font-bold font-headline text-primary">Your Space, Elevated by Modern Excellence.</h3>
                <p className="text-muted-foreground">
                <span className="text-primary font-semibold">Experience</span> best-in-class solutions that blend innovative design with personalized service. Our modern approach and detail-driven craftsmanship ensure every space is uniquely tailored to your lifestyle-creating interiors that inspire, impress, and endure.
                </p>
            </div>
          </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
            <video
              src="/content/interior-promo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
            </div>
        </div>
      </div>
    </section>
  );
}
